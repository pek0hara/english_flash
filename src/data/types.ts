// TOEIC Part 3 (会話問題) & Part 4 (説明文問題) 型定義

export type ListeningLevel = '470' | '600' | '730';
export type ListeningType = 'conversation' | 'talk';

export interface ListeningSentence {
  speaker?: string; // Part3の場合は話者（A, B, Cなど）
  text: string;
  translation: string;
}

export interface ListeningQuestion {
  question: string; // 問題文（英語）
  questionJa: string; // 問題文（日本語）
  options: string[]; // 選択肢（A, B, C, D）
  correctAnswer: number; // 正解のインデックス（0-3）
}

export interface ListeningItem {
  id: number;
  level: ListeningLevel;
  type: ListeningType;
  title: string;
  situation: string; // 場面説明（日本語）
  sentences: ListeningSentence[];
  questions: ListeningQuestion[]; // 問題（通常3問）
}
