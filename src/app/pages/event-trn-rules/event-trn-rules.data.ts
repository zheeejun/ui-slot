import { RuleSection } from './event-trn-rules.interface';

// Quick 字串
export const defaultQuickSections: RuleSection[] = [
  {
    titleKey: 'Quick_Rules_Title1',
    title: 'Tournament Entry Rules',
    items: [
      { key: 'Quick_Rules_Content1', text: 'Players must register before the tournament starts' },
      { key: 'Quick_Rules_Content2', text: 'Minimum bet requirements apply for each level' },
      { key: 'Quick_Rules_Content3', text: 'Only verified accounts can participate' },
      { key: 'Quick_Rules_Content4', text: 'One entry per player per tournament' },
    ],
  },
  {
    titleKey: 'Quick_Rules_Title2',
    title: 'Gameplay Rules',
    items: [
      { key: 'Quick_Rules_Content5', text: 'Follow standard game rules and regulations' },
      { key: 'Quick_Rules_Content6', text: 'No third-party software or bots allowed' },
      { key: 'Quick_Rules_Content7', text: 'Disconnections may result in automatic play' },
      { key: 'Quick_Rules_Content8', text: 'Fair play policies strictly enforced' },
    ],
  },
  {
    titleKey: 'Quick_Rules_Title3',
    title: 'Prize Distribution',
    items: [
      { key: 'Quick_Rules_Content9', text: 'Prizes awarded automatically upon completion' },
      { key: 'Quick_Rules_Content10', text: 'Winners announced immediately after tournament' },
      { key: 'Quick_Rules_Content11', text: 'Cash prizes credited to player accounts' },
      { key: 'Quick_Rules_Content12', text: 'Bonus tickets have expiration dates' },
    ],
  },
];

// Event 字串
export const defaultEventSections: RuleSection[] = [
  {
    titleKey: 'Event_Rules_Title1',
    title: 'Event Tournament Rules',
    items: [
      { key: 'Event_Rules_Content1', text: 'Special registration requirements for events' },
      { key: 'Event_Rules_Content2', text: 'Higher entry fees for premium tournaments' },
      { key: 'Event_Rules_Content3', text: 'Extended tournament duration' },
      { key: 'Event_Rules_Content4', text: 'Exclusive rewards and prizes' },
    ],
  },
  {
    titleKey: 'Event_Rules_Title2',
    title: 'Competition Guidelines',
    items: [
      { key: 'Event_Rules_Content5', text: 'Professional conduct required' },
      { key: 'Event_Rules_Content6', text: 'Advanced game mechanics apply' },
      { key: 'Event_Rules_Content7', text: 'Real-time leaderboard tracking' },
      { key: 'Event_Rules_Content8', text: 'Elimination rounds may apply' },
    ],
  },
  {
    titleKey: 'Event_Rules_Title3',
    title: 'Rewards Structure',
    items: [
      { key: 'Event_Rules_Content9', text: 'Tiered prize distribution system' },
      { key: 'Event_Rules_Content10', text: 'Special event bonuses available' },
      { key: 'Event_Rules_Content11', text: 'VIP rewards for top performers' },
      { key: 'Event_Rules_Content12', text: 'Seasonal tournament privileges' },
    ],
  },
];
