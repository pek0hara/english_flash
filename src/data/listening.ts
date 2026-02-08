// TOEIC Part 3 (会話問題) & Part 4 (説明文問題) リスニングデータ

export type { ListeningLevel, ListeningType, ListeningSentence, ListeningQuestion, ListeningItem } from './types';

import type { ListeningItem } from './types';
import { listening470 } from './listening470';
import { listening600 } from './listening600';
import { listening730 } from './listening730';

export { listening470 } from './listening470';
export { listening600 } from './listening600';
export { listening730 } from './listening730';

export const listeningList: ListeningItem[] = [
  ...listening470,
  ...listening600,
  ...listening730,
];
