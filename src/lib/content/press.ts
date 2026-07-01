export type PressItem = {
  date: string;
  publication: string;
  title: string;
  url?: string;
  type: "mention" | "award" | "interview" | "speaking";
};

export const PRESS: PressItem[] = [];
