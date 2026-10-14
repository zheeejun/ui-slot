export type FairnessItem = {
  readonly titleKey: string;
  readonly titleFallback: string;
  readonly item1Key: string;
  readonly item1Fallback: string;
  readonly item2Key?: string;
  readonly item2Fallback?: string;
};

export const fairnessItems: FairnessItem[] = [
  {
    titleKey: 'fairness_info_16',
    titleFallback: 'Bet History',
    item1Key: 'fairness_info_17',
    item1Fallback: 'Open the bet that you want to verify from history.',
  },
  {
    titleKey: 'fairness_info_18',
    titleFallback: 'Confirm Seeds',
    item1Key: 'fairness_info_19',
    item1Fallback: 'Server Seed, Client Seed and Nonce can be copied.',
  },
  {
    titleKey: 'fairness_info_20',
    titleFallback: 'Verify Bet',
    item1Key: 'fairness_info_21',
    item1Fallback:
      'Scroll down and click on "Verify Bet", all the details will automatically input and evaluate whether the bet complies with Fairness.',
  },

  {
    titleKey: 'fairness_info_22',
    titleFallback: 'Result',
    item1Key: 'fairness_info_23',
    item1Fallback:
      'You will see the bet info you need for a verification (game name, client and Server seed, and nonce) and how your bet looks like and what the outcome is.',
  },
  {
    titleKey: 'fairness_info_24',
    titleFallback: 'Change Server Seed',
    item1Key: 'fairness_info_25',
    item1Fallback:
      'Simply click on "Change" and you will be given a new random server seed.',
  },
];
