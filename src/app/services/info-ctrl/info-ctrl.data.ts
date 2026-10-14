export interface InfoEntryInterface {
  category: 'title' | 'subtitle' | 'image' | 'content' | 'buyFeature';
  position: 'left' | 'center' | 'right';
  content: string;
}

export const featureEntriesData: InfoEntryInterface[] = [
  {
    category: 'title',
    position: 'left',
    content: 'Cascading Reels',
  },
  {
    category: 'content',
    position: 'left',
    content:
      'Winning combinations will be removed, and new symbols fall from above to fill the reels that can possibly make consecutive wins. The cascade process will continue till no more wins are achieved.',
  },
  {
    category: 'content',
    position: 'left',
    content:
      'Players have a chance to win consecutive prizes by cascading reels.',
  },
  {
    category: 'title',
    position: 'center',
    content: 'Wild',
  },
  {
    category: 'image',
    position: 'center',
    content: 'bf1.png',
  },
  {
    category: 'content',
    position: 'left',
    content: 'Wild substitute all symbols except Clay Pot and Pinata Board.',
  },
  {
    category: 'title',
    position: 'center',
    content: 'Clay Pot',
  },
  {
    category: 'image',
    position: 'center',
    content: 'info_feature_p1.png',
  },
  {
    category: 'content',
    position: 'left',
    content:
      'Clay Pot appears with a random prize of 0.2 to 5 times the total bet, then the Clay Pot opens to reveal 0 to 3 Bat symbols randomly.',
  },
  {
    category: 'title',
    position: 'center',
    content: 'Pinata Board',
  },
  {
    category: 'image',
    position: 'center',
    content: 'info_feature_p2.png',
  },
  {
    category: 'content',
    position: 'left',
    content:
      'If Pinata Board and Clay Pot appear at the same time, each Pinata Board collect the prize on all the Clay Pots, then player wins prize from all the Pinata Board.',
  },
  {
    category: 'content',
    position: 'left',
    content:
      'If Pinata Board and Bat symbols appear at the same time, Pinata Board collect all the Bat symbols. Each Pinata Board collect at most 6 Bat symbols.',
  },
  {
    category: 'content',
    position: 'left',
    content:
      'The first three Bat symbols collected by a Pinata Board are blue, and the fourth to sixth Bat symbol collected turn into red Bat symbols.',
  },
  {
    category: 'content',
    position: 'left',
    content:
      'When there are multiple Pinata Boards and Bat symbols, each Pinata Board will collect at most 3 Bat symbols by order first, then Pinata Board collect remaining Bat symbols by order if there are still uncollected Bat symbols.',
  },
  {
    category: 'content',
    position: 'left',
    content: 'Order of collecting Bat symbols with multiple Pinata Boards.',
  },
  {
    category: 'image',
    position: 'center',
    content: 'info_feature_p3.jpg',
  },
  {
    category: 'title',
    position: 'center',
    content: 'Bonus Game',
  },
  {
    category: 'image',
    position: 'center',
    content: 'info_feature_p4.png',
  },
  {
    category: 'content',
    position: 'left',
    content:
      'The first order Pinata Board collects 1 / 2 / 3 / 4 / 5 / 6 Bat symbols triggers 5 / 6 / 7 / 8 / 9 / 10 Bonus Game respectively.',
  },
  {
    category: 'content',
    position: 'left',
    content:
      'When all Pinata Boards collect 6 Bat symbols, but there are still uncollected Bat symbol, each remaining Bat symbol will randomly convert into 1 or 2 Bonus Game spins.',
  },
  {
    category: 'content',
    position: 'left',
    content:
      'When Bonus Game is triggered, all Pinata Boards on the reels are brought into the Bonus Game. Clay Pot, Yellow Candy, Purple Candy, Green Candy, Red Candy or nothing may appears on the reels in Bonus Game.',
  },
  {
    category: 'content',
    position: 'left',
    content:
      'The number and color of Bat symbols collected by the first order Pinata Board determine the number of rows and color of the Star Pinatas above the reels.',
  },
  {
    category: 'content',
    position: 'left',
    content:
      '1 / 2 / 3 or more Bat symbols collected by the first order Pinata Board activate 1 / 2 / 3 rows of the Star Pinata respectively.',
  },
  {
    category: 'content',
    position: 'left',
    content:
      'A blue Bat symbol activate a row of Star Pinatas that contains yellow or blue Star Pinatas randomly. A red Bat symbol activate a row of Star Pinatas that contains yellow, blue or red Star Pinatas randomly',
  },
  {
    category: 'content',
    position: 'left',
    content:
      'Clay Pots stay on the reels in the Bonus Game untill be removed by Yellow Candy.',
  },
  {
    category: 'content',
    position: 'left',
    content:
      'Each blue Bat symbol collected by Pinata Board in Bonus Game opens a yellow or blue Star Pinatas randomly. Each red Bat symbol collected by Pinata Board in Bonus Game opens a yellow or red Star Pinatas randomly.',
  },
  {
    category: 'content',
    position: 'left',
    content:
      'When a Pinata Board collects 3 red Bat symbols, all Star Pinatas are opened.',
  },
  {
    category: 'content',
    position: 'left',
    content:
      'The player wins 1 to 5 Bonus Game spins randomly when opening a yellow Star Pinata.',
  },
  {
    category: 'content',
    position: 'left',
    content:
      'The player wins a random prize of 0.8 to 25 times the total bet when opening a blue Star Pinata.',
  },
  {
    category: 'content',
    position: 'left',
    content:
      'The prize of a random Clay Pot is multiplied by 2 to 10 times randomly when opening a red Star Pinata.',
  },
  {
    category: 'content',
    position: 'left',
    content:
      'When all Pinata Boards collect 6 Bat symbols, but there are still uncollected Bat symbol, one remaining Bat symbol will convert into a new Pinata Board at random position. Then the new Pinata Board continue to collect the remaining Bat symbols.',
  },
  {
    category: 'image',
    position: 'center',
    content: 'info_feature_p5.png',
  },
  {
    category: 'content',
    position: 'left',
    content:
      'Yellow Candy remove all Clay Pots and convert into a Clay Pot with the prize that is the sum of all removed Clay Pots.',
  },
  {
    category: 'image',
    position: 'center',
    content: 'info_feature_p6.png',
  },
  {
    category: 'content',
    position: 'left',
    content:
      'Purple Candy makes all Clay Pot prize multiply by 1.2 and convert into a Clay Pot with a random prize of 0.2 to 5 times the total bet.',
  },
  {
    category: 'image',
    position: 'center',
    content: 'info_feature_p7.png',
  },
  {
    category: 'content',
    position: 'left',
    content:
      'Green Candy convert into a Clay Pot with the prize that is the highest prize among the top, bottom, left, right adjacent Clay Pots.',
  },
  {
    category: 'image',
    position: 'center',
    content: 'info_feature_p8.png',
  },
  {
    category: 'content',
    position: 'left',
    content:
      'Red Candy convert into a Clay Pot with the prize that is the sum of all other Clay Pots.',
  },
  {
    category: 'content',
    position: 'left',
    content:
      'When multiple different Candies appear at the same time, the Candies activate by the order of Green, Purple, Red and Yellow. When multiple same Candies appear at the same time, the Candies activate by the order of top to bottom, then left to right.',
  },
  {
    category: 'content',
    position: 'left',
    content:
      'When all position appear Pinata Boards and Clay Pots, Pinata Boards convert into random Candies and then activate. The Pinata Boards convert by the order of top to bottom, then left to right.',
  },
  {
    category: 'content',
    position: 'left',
    content:
      'Bonus Game ends when all position appear Clay Pots or there is no remaining Bonus Game spin.',
  },
  {
    category: 'content',
    position: 'left',
    content:
      ' When Bonus Game ends, the Pinata Boards convert into random Candies and then activate. The Pinata Boards convert by the order of top to bottom, then left to right. After all Candies activate, the player wins prize of all Clay Pots.',
  },
  {
    category: 'content',
    position: 'left',
    content:
      'Bonus Game is played at the same bet level as the spin that triggered the Bonus Game feature.',
  },
  {
    category: 'content',
    position: 'left',
    content:
      'Bonus Game wins is awarded to the play after the round completes.',
  },
];

export const paytableEntriesData: InfoEntryInterface[] = [
  {
    category: 'image',
    position: 'center',
    content: 'info_feature_p5.png',
  },
  {
    category: 'content',
    position: 'left',
    content:
      '● All winning combinations will be paid from the leftmost to the right.',
  },
  {
    category: 'content',
    position: 'left',
    content:
      '● Only the highest winning combination will be paid per line. Multiple line wins are added together.',
  },
  {
    category: 'content',
    position: 'left',
    content:
      '● The winning combination is paid accordingly to the payout of the paytable. Payouts are displayed based on total bet.',
  },
  {
    category: 'content',
    position: 'left',
    content: '● All values are expressed as actual wins in currency.',
  },
  {
    category: 'content',
    position: 'left',
    content: '● Win amount = line bet * payout.',
  },
  {
    category: 'content',
    position: 'left',
    content:
      '● The game is played with fixed 25 pay lines. Line bet = total bet / 25.',
  },
  {
    category: 'title',
    position: 'center',
    content: 'PAY LINE',
  },
  {
    category: 'image',
    position: 'center',
    content: 'info_feature_p5.png',
  },
  {
    category: 'content',
    position: 'left',
    content:
      '● Three or more identical symbols appear in succession from the leftmost to the right.',
  },
];
