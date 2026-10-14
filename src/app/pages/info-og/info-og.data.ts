export type InfoOgFeatureItem = {
  readonly descriptionKey: string;
  readonly descriptionFallback: string;
};

export type InfoOgGuideItem = {
  readonly imageType: string;
  readonly titleKey: string;
  readonly titleFallback: string;
  readonly item1Key: string;
  readonly item1Fallback: string;
  readonly item2Key?: string;
  readonly item2Fallback?: string;
};

export const featureItems: InfoOgFeatureItem[] = [
  {
    descriptionKey: 'info_feature_0',
    descriptionFallback:
      'Each difficulty level features a different maximum number of stages, multiplier progression, and maximum payout multiplier. Easy, Normal, Hard, and Expert have a maximum of 28, 24, 20, and 16 stages respectively, with maximum payout multipliers of 23.24x, 2,487.69x, 20,000.00x, and 181,060.88x respectively.',
  },
  {
    descriptionKey: 'info_feature_1',
    descriptionFallback:
      'Place your bet and tap Bet to start the game. Tap Go to move the Chicken forward. Each successful move increases the current multiplier. After each successful move, you may choose to Cash Out and collect the current payout or continue playing for a chance to win a higher multiplier. If the Chicken is defeated before Cash Out, the game ends without a payout. Reach the finish line to win the highest multiplier available for the selected difficulty.',
  },
  {
    descriptionKey: 'info_feature_2',
    descriptionFallback:
      'During the game, the Chicken may randomly perform a Dash, allowing it to move forward 2 or 3 spaces randomly in a single action. A Dash increases the current multiplier, and never results in defeat.',
  },
   {
    descriptionKey: 'info_feature_3',
    descriptionFallback:
      'Landing on or passing a Wheel Symbol space collects the Wheel Symbol to Wheel above the Chicken. When collecting the Wheel Symbols, the Wheel may upgrade randomly. The collection progress will reset if the game is not played for 72 hours.',
  },
  {
    descriptionKey: 'info_feature_4',
    descriptionFallback:
      'Collecting the Wheel Symbols may randomly trigger the Wheel Bonus. Multiple Wheel Bonuses can be triggered during a single game. Wheel Bonus prizes are awarded immediately and are retained even if the Chicken is defeated later in the game.',
  },
];

export const guideItems: InfoOgGuideItem[] = [
  /* Common */
  {
    imageType: 'modeTab',
    titleKey: 'og_guide_0',
    titleFallback: 'Mode Switch',
    item1Key: 'og_guide_1',
    item1Fallback: 'Tap to switch automatic or manual betting mode.',
  },
  {
    imageType: 'betAmount',
    titleKey: 'og_guide_2',
    titleFallback: 'Bet Amount',
    item1Key: 'og_guide_3',
    item1Fallback: 'Tap to increase or decrease the bet amount.',
  },

  {
    imageType: 'difficulty',
    titleKey: 'og_guide_4',
    titleFallback: 'Difficulty',
    item1Key: 'og_guide_5',
    item1Fallback: 'Set the number of automatic bets, the default is unlimited.',
  },
  {
    imageType: 'totalProfit',
    titleKey: 'og_guide_6',
    titleFallback: 'Total Profit',
    item1Key: 'og_guide_7',
    item1Fallback: 'Set the number of automatic bets, the default is unlimited.',
  },

  /* Auto Spin */

  {
    imageType: 'autoCashOut',
    titleKey: 'og_guide_8',
    titleFallback: 'Auto Cash Out',
    item1Key: 'og_guide_9',
    item1Fallback: 'Automatically cash out when the target is reached.',
  },
  {
    imageType: 'numberOfBets',
    titleKey: 'og_guide_10',
    titleFallback: 'Number of Bets',
    item1Key: 'og_guide_11',
    item1Fallback: 'Set the number of automatic bets, the default is unlimited.',
  },
  {
    imageType: 'onWin',
    titleKey: 'og_guide_12',
    titleFallback: 'On Win',
    item1Key: 'og_guide_13',
    item1Fallback: 'Reset: When the game wins, reset the bet amount back to the original setting.',
    item2Key: 'og_guide_14',
    item2Fallback: 'Increase by(%): When the game wins points, increase the bet amount by the set percentage.',
  },
  {
    imageType: 'onLoss',
    titleKey: 'og_guide_15',
    titleFallback: 'On Loss',
    item1Key: 'og_guide_16',
    item1Fallback: 'Reset: When the game loses points, reset the bet amount back to the original setting.',
    item2Key: 'og_guide_17',
    item2Fallback: 'Increase by(%): When the game loses points, the bet amount increased by the set percentage.',
  },
  {
    imageType: 'stopProfit',
    titleKey: 'og_guide_18',
    titleFallback: 'Stop on Profit',
    item1Key: 'og_guide_19',
    item1Fallback: 'Stop automatic betting when the game progresses and the profit reaches the set target.',
  },
  {
    imageType: 'stopLoss',
    titleKey: 'og_guide_20',
    titleFallback: 'Stop on Loss',
    item1Key: 'og_guide_21',
    item1Fallback: 'Stop automatic betting when the game progresses and the loss reaches the set limit.',
  },


  {
    imageType: '',
    titleKey: 'og_guide_22',
    titleFallback: 'Note',
    item1Key: 'og_guide_23',
    item1Fallback: 'If the network connection fails or the game is abnormal, all bonuses will be invalid. When the network is disconnected, the game results will be automatically settled.',
  },

];
