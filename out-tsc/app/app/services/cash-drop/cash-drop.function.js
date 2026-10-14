export function formatCashDropData(data) {
    const pageData = {
        prizes: data.prizeList.prize_list.map((prize, index) => ({
            index: index,
            prize: prize.prize_amount,
            left: prize.prize_left
        })),
        latestWinners: data.latestWinner.winner_list.map((winner, index) => ({
            index: index,
            player: winner.player_id,
            prize: winner.prize_amount
        })),
        biggestWinners: data.biggestWinner.winner_list.map((winner, index) => ({
            index: index,
            player: winner.player_id,
            prize: winner.prize_amount
        })),
        mostWinners: data.mostWinner.winner_list.map((winner, index) => ({
            index: index,
            player: winner.player_id,
            prize: winner.prize_amount
        })),
        youWins: data.youWin.winner_list.map((winner, index) => ({
            index: index,
            player: winner.player_id,
            prize: winner.prize_amount
        })),
        ruleData: data.ruleData?.rule_data ?? null,
    };
    return pageData;
}
//# sourceMappingURL=cash-drop.function.js.map