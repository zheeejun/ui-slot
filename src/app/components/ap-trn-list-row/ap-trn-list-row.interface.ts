export interface ApRowListItem {
  id: string;
  /** 名字 */
  name: string;
  /** 排名, 只能是大於0的整數 */
  rank: number | null;
  /** 分數 */
  score: number | null;
  /** 獎金 */
  win:  number | null;
  disabled?: boolean;
  highlighted?: boolean; // For "You" player highlighting
}


export const defaultPlayersList: ApRowListItem[]  = [
  { "id": "a7k9m3n5p2q8",
    "name": "\u00A0",
    "rank": null,
    "score": null,
    "win": null,
    "highlighted": false
  },
  {
    "id": "b8l0n4o6q3r9",
    "name": "\u00A0",
    "rank": null,
    "score": null,
    "win": null,
    "highlighted": false
  },
  {
    "id": "c9m1o5p7r4s0",
    "name": "\u00A0",
    "rank": null,
    "score": null,
    "win": null,
    "highlighted": false
  },
  {
    "id": "d0n2p6q8s5t1",
    "name": "\u00A0",
    "rank": null,
    "score": null,
    "win": null,
    "highlighted": false
  },
  {
    "id": "e1o3q7r9t6u2",
    "name": "\u00A0",
    "rank": null,
    "score": null,
    "win": null,
    "highlighted": false
  }
]