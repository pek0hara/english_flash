export interface Word {
  id: number;
  term: string;
  level: '600' | '730' | '860';
  meaning: string;
  example: string;
  exampleMeaning: string;
  pronunciation: string;
  partOfSpeech: string;
}

export const vocabList: Word[] = [
  // --- Level 600 ---
  {
    id: 1,
    term: "appointment",
    level: "600",
    meaning: "約束、予約",
    example: "I have an appointment with Mr. Smith at 2 PM.",
    exampleMeaning: "午後2時にスミス氏と約束があります。",
    pronunciation: "/əˈpɔɪntmənt/",
    partOfSpeech: "名詞"
  },
  {
    id: 2,
    term: "contract",
    level: "600",
    meaning: "契約、契約書",
    example: "Please sign the contract by the end of the day.",
    exampleMeaning: "今日中に契約書に署名してください。",
    pronunciation: "/ˈkɑːntrækt/",
    partOfSpeech: "名詞"
  },
  {
    id: 3,
    term: "budget",
    level: "600",
    meaning: "予算",
    example: "We need to stay within the budget.",
    exampleMeaning: "予算内に収める必要があります。",
    pronunciation: "/ˈbʌdʒɪt/",
    partOfSpeech: "名詞"
  },
  {
    id: 4,
    term: "confirm",
    level: "600",
    meaning: "確認する",
    example: "Could you confirm your attendance?",
    exampleMeaning: "出席を確認していただけますか？",
    pronunciation: "/kənˈfɜːrm/",
    partOfSpeech: "動詞"
  },
  {
    id: 5,
    term: "delay",
    level: "600",
    meaning: "遅延、遅らせる",
    example: "The flight was delayed due to bad weather.",
    exampleMeaning: "悪天候のためフライトが遅れました。",
    pronunciation: "/dɪˈleɪ/",
    partOfSpeech: "動詞/名詞"
  },

  // --- Level 730 ---
  {
    id: 11,
    term: "inventory",
    level: "730",
    meaning: "在庫、棚卸し",
    example: "The store is closed for inventory.",
    exampleMeaning: "その店は棚卸しのため閉店しています。",
    pronunciation: "/ˈɪnvəntɔːri/",
    partOfSpeech: "名詞"
  },
  {
    id: 12,
    term: "distribute",
    level: "730",
    meaning: "配布する、分配する",
    example: "The brochures will be distributed at the conference.",
    exampleMeaning: "パンフレットは会議で配布されます。",
    pronunciation: "/dɪˈstrɪbjuːt/",
    partOfSpeech: "動詞"
  },
  {
    id: 13,
    term: "notify",
    level: "730",
    meaning: "通知する",
    example: "Please notify us of any changes to your address.",
    exampleMeaning: "住所に変更があればお知らせください。",
    pronunciation: "/ˈnoʊtɪfaɪ/",
    partOfSpeech: "動詞"
  },
  {
    id: 14,
    term: "proposal",
    level: "730",
    meaning: "提案、企画案",
    example: "The committee rejected the proposal.",
    exampleMeaning: "委員会はその提案を却下しました。",
    pronunciation: "/prəˈpoʊzl/",
    partOfSpeech: "名詞"
  },
  {
    id: 15,
    term: "refund",
    level: "730",
    meaning: "払い戻し、返金",
    example: "You can request a full refund within 30 days.",
    exampleMeaning: "30日以内であれば全額返金を請求できます。",
    pronunciation: "/ˈriːfʌnd/",
    partOfSpeech: "名詞"
  },

  // --- Level 860 ---
  {
    id: 21,
    term: "remuneration",
    level: "860",
    meaning: "報酬、給与",
    example: "He received a generous remuneration for his services.",
    exampleMeaning: "彼はその業務に対して多額の報酬を受け取りました。",
    pronunciation: "/rɪˌmjuːnəˈreɪʃn/",
    partOfSpeech: "名詞"
  },
  {
    id: 22,
    term: "tentative",
    level: "860",
    meaning: "仮の、暫定的な",
    example: "We have a tentative agreement.",
    exampleMeaning: "私たちは暫定的な合意に達しました。",
    pronunciation: "/ˈtentətɪv/",
    partOfSpeech: "形容詞"
  },
  {
    id: 23,
    term: "imply",
    level: "860",
    meaning: "ほのめかす、暗に意味する",
    example: "Are you implying that I am wrong?",
    exampleMeaning: "私が間違っていると言いたいのですか？",
    pronunciation: "/ɪmˈplaɪ/",
    partOfSpeech: "動詞"
  },
  {
    id: 24,
    term: "consecutive",
    level: "860",
    meaning: "連続した",
    example: "It rained for three consecutive days.",
    exampleMeaning: "3日連続で雨が降りました。",
    pronunciation: "/kənˈsekjətɪv/",
    partOfSpeech: "形容詞"
  },
  {
    id: 25,
    term: "discrepancy",
    level: "860",
    meaning: "不一致、食い違い",
    example: "There is a discrepancy between the two reports.",
    exampleMeaning: "2つの報告書の間に食い違いがあります。",
    pronunciation: "/dɪˈskrepənsi/",
    partOfSpeech: "名詞"
  }
];
