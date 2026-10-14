/**
 * 擺放trn-ctrl相關的Pure Functions, 不包含trn-ctrl的狀態改變(this.xxx)
 * 符合functional programming的概念, 輸入參數, 回傳新物件
 */
import { calc } from "../user-profile/user-profile.function";
import { LANGUAGE_MAP } from "../user-profile/language.type";
import { safeParse } from "../../library/Protobuf/proto-base";
export function formatTrnLogin(item, lang, account = '') {
    const startTime = item.start_time;
    const endTime = item.end_time;
    const exchangeRate = (item?.exchange_rate || 1);
    const feeRatio = item.extra_fee_ratio / 100;
    const betMultiplier = 1 + feeRatio;
    // item.type全轉小寫
    const isQuick = item.type.toLowerCase() === 'quick_match';
    const names = safeParse(item.name);
    const descriptions = safeParse(item.description);
    const tiers = [];
    item?.tiers?.forEach((tier) => {
        const names = safeParse(tier.tier_name);
        const fixedPrizes = [];
        tier.fixed_prizes?.forEach((fp) => {
            fixedPrizes.push({
                rank: fp.rank,
                rankFrom: fp.rank_from,
                rankTo: fp.rank_to,
                amount: calc.s2c(fp.amount * exchangeRate),
            });
        });
        const poolDistribution = [];
        tier.pool_distribution?.forEach((pd) => {
            poolDistribution.push({
                rank: pd.rank,
                rankFrom: pd.rank_from,
                rankTo: pd.rank_to,
                ratio: pd.basis_points / 10000, // basis_points轉換成比例
            });
        });
        const maxStakeAmount = tier.max_stake_amount !== undefined ? calc.s2c(tier.max_stake_amount) : null;
        const minPlayerBalance = calc.s2c(tier.min_player_balance || 0);
        const minStakeAmount = tier.min_stake_amount !== undefined ? calc.s2c(tier.min_stake_amount) : null;
        tiers.push({
            id: tier.tier_id,
            name: names[LANGUAGE_MAP[lang ?? 'en']] || 'Tier',
            order: tier.tier_order,
            totalPrize: fixedPrizes.reduce((sum, fp) => sum + fp.amount, 0),
            fixedPrizes: fixedPrizes,
            poolDistribution: poolDistribution,
            maxStakeAmount: maxStakeAmount,
            minPlayerBalance: minPlayerBalance,
            minStakeAmount: minStakeAmount,
        });
    });
    // tiers依order排序
    tiers.sort((a, b) => a.order - b.order);
    const title = names[LANGUAGE_MAP[lang ?? 'en']] || 'Tournament';
    // 從item.player_status裡面算出raceData
    const playerStatus = item.player_status;
    const raceData = playerStatus ? {
        id: item.tournament_id,
        rank: playerStatus.room_rankings?.find((r) => r.account_id === account)?.rank ?? null,
        playersList: createApRowListByRankings(playerStatus.room_rankings || [], account, exchangeRate),
        currentPool: calc.s2c(playerStatus.total_pool_amount) * exchangeRate,
    } : {
        id: item.tournament_id,
        rank: null,
        playersList: [],
        currentPool: 0,
    };
    return {
        id: item.tournament_id,
        matchDuration: item.duration_seconds,
        startTime: startTime,
        name: title,
        status: item.status,
        type: isQuick ? 'quick' : 'event',
        endTime: endTime,
        exchangeRate: exchangeRate,
        tiers: tiers,
        feeRatio: feeRatio,
        betMultiplier: betMultiplier,
        maxPlayers: item.max_players,
        description: descriptions[LANGUAGE_MAP[lang ?? 'en']] || 'Default description',
        bannerImage: 'assets/images/tournament/quick-race/banner_default.png',
        raceData: raceData,
    };
}
/** 在maxStakeAmount的minStakeAmount區間內產生新的betList */
export function createTrnBetList(betList, maxStakeAmount, minStakeAmount) {
    const newBetList = [];
    betList.forEach((bet) => {
        if ((maxStakeAmount === null || bet <= maxStakeAmount) &&
            (minStakeAmount === null || bet >= minStakeAmount)) {
            newBetList.push(bet);
        }
    });
    return newBetList;
}
export function createApRowListByPlayerList(player, account) {
    const list = [];
    player.forEach((p) => {
        const isYou = p.account_id === account;
        const item = {
            id: p.account_id,
            name: isYou ? 'You' : `${p.nickname.charAt(0)}**`,
            rank: null,
            score: 0,
            win: 0,
            highlighted: isYou
        };
        list.push(item);
    });
    return list;
}
export function createApRowListByRankings(rankings, account, exchangeRate) {
    const list = [];
    rankings?.forEach((r) => {
        const isYou = r.account_id === account;
        const item = {
            id: r.account_id,
            name: isYou ? 'You' : `${r.nickname?.charAt(0)}**`,
            rank: r.rank ? Math.floor(r.rank) : null,
            score: Number(r.score || r.final_score || "0"),
            win: calc.s2c((r.prize_preview || r.prize_amount || r.prize || 0) * exchangeRate),
            highlighted: isYou
        };
        list.push(item);
    });
    // 依排名排序 rank是null放在最後
    list.sort((a, b) => {
        if (a.rank === null)
            return 1;
        if (b.rank === null)
            return -1;
        return (a.rank - b.rank);
    });
    return list;
}
export function updateApRowListByRankings(playerList, rankings, exchangeRate) {
    const list = [];
    playerList.forEach((player) => {
        const isYou = player.highlighted;
        // 顯示 You 或是 玩家開頭第一個字母+** ex: (a**)
        const data = rankings.find(r => r.account_id === player.id);
        const rank = data ? data.rank : playerList.length;
        const score = data ? Number(data.score || data.final_score || "0") : 0;
        const win = calc.s2c(data ? (data.prize_preview || data.prize_amount || 0) * exchangeRate : 0);
        const item = {
            id: player.id,
            name: player.name,
            rank: rank ? Math.floor(rank) : null,
            score: score,
            win: win,
            highlighted: isYou // For "You" player highlighting
        };
        list.push(item);
    });
    // 依排名排序 rank是null放在最後
    list.sort((a, b) => {
        if (a.rank === null)
            return 1;
        if (b.rank === null)
            return -1;
        return (a.rank - b.rank);
    });
    return list;
}
/** 創造出來的物件記得要補充type (quick or event) */
export function createPrizeNotification(data, account, exchangeRate) {
    const ranking = data.contextual_rankings || data.rankings || [];
    const playerData = ranking.find(ranking => ranking.account_id === account);
    const rank = playerData?.rank || 0;
    const prize = calc.s2c((playerData?.prize_amount || playerData?.prize_preview || 0) * exchangeRate);
    const rankList = createApRowListByRankings(ranking, account, exchangeRate);
    const prizeNotification = {
        notificationId: data.notification_id,
        rank: rank ? Math.floor(rank) : null,
        prize: prize,
        playersList: rankList
    };
    return prizeNotification;
}
/**
 * 生成動態變化的玩家排行榜數據
 * 每次調用會產生新的分數變化，並重新排序
 * @param highlightedPlayerId 可選的玩家ID，用於標記為高亮顯示
 * @returns 排序後的玩家列表
 */
export function generatePlayerList() {
    // 基礎玩家數據（保持ID和名字不變）
    const basePlayers = [
        { id: "You", title: "a**", baseScore: 50000, baseBonus: 100000 },
        { id: "b8l0n4o6q3r9", title: "b**", baseScore: 40000, baseBonus: 50000 },
        { id: "c9m1o5p7r4s0", title: "c**", baseScore: 1000000, baseBonus: 1000 },
        { id: "d0n2p6q8s5t1", title: "d**", baseScore: 20000, baseBonus: 1000 },
        { id: "e1o3q7r9t6u2", title: "e**", baseScore: 10000, baseBonus: 1000 },
        { id: "f2p4r8s0u7v3", title: "f**", baseScore: 10000, baseBonus: 1000 },
        { id: "g3q5s9t1v8w4", title: "g**", baseScore: 30000, baseBonus: 1000 },
        { id: "h4r6t0u2w9x5", title: "h**", baseScore: 20000, baseBonus: 1000 },
        { id: "i5s7u1v3x0y6", title: "i**", baseScore: 10000, baseBonus: 1000 },
        { id: "j6t8v2w4y1z7", title: "j**", baseScore: 80000, baseBonus: 1000 },
        { id: "k7u9w3x5z2a8", title: "k**", baseScore: 15000, baseBonus: 1500 },
        { id: "l8v0x4y6a3b9", title: "l**", baseScore: 25000, baseBonus: 2500 },
        { id: "m9w1y5z7b4c0", title: "m**", baseScore: 35000, baseBonus: 3500 },
        { id: "n0x2z6a8c5d1", title: "n**", baseScore: 45000, baseBonus: 4500 },
    ];
    // 為每個玩家生成隨機分數變化（-20% 到 +50%）
    const playersWithScores = basePlayers.map(player => ({
        id: player.id,
        name: player.id,
        rank: 0,
        score: Math.floor(player.baseScore * (0.8 + Math.random() * 0.7)),
        win: Math.floor(player.baseBonus * (0.8 + Math.random() * 0.5)),
        highlighted: player.id === "You",
        disabled: false
    }));
    // 按分數降序排序
    playersWithScores.sort((a, b) => b.score - a.score);
    // 更新排名
    playersWithScores.forEach((player, index) => {
        player.rank = index + 1;
    });
    return playersWithScores;
}
//# sourceMappingURL=trn-ctrl.function.js.map