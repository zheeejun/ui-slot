import { CashDropMsgFullResponse } from "../cash-drop/cash-drop-info-msg.interface";
import { calc } from "../player-wallet/player-wallet.function";
import { ICashDropPage } from "./cash-drop.interface";
/** 
export function formatCashDropData(data: CashDropMsgFullResponse): ICashDropPage {
  const pageData: ICashDropPage = {
    prizes: data.prizeList.prize_list.map((prize, index) => ({
      index: index,
      prize: calc.s2c(prize.prize_amount),
      left: prize.prize_left
    })),
    latestWinners: data.latestWinner.winner_list.map((winner, index) => ({
      index: index,
      player: winner.player_id,
      prize: calc.s2c(winner.prize_amount)
    })),
    biggestWinners: data.biggestWinner.winner_list.map((winner, index) => ({
      index: index,
      player: winner.player_id,
      prize: calc.s2c(winner.prize_amount)
    })),
    mostWinners: data.mostWinner.winner_list.map((winner, index) => ({
      index: index,
      player: winner.player_id,
      prize: calc.s2c(winner.prize_amount)
    })),
    youWins: data.youWin.winner_list.map((winner, index) => ({
      index: index,
      player: winner.player_id,
      prize: calc.s2c(winner.prize_amount)
    })),
    ruleData: data.ruleData?.rule_data ?? null,
  };

  return pageData;
}*/