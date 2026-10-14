export interface RuleItemText {
  key?: string;
  text: string;
}

export interface RuleItemGroup {
  textKey?: string;
  text: string;
  items: string[];
}

export type RuleItem = RuleItemText | RuleItemGroup;

export interface RuleSection {
  titleKey?: string;
  title: string;
  items: RuleItem[];
}
