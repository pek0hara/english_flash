// TOEIC Part 3 (会話問題) & Part 4 (説明文問題) リスニングデータ

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

export const listeningList: ListeningItem[] = [
  // ========== Level 470 ==========
  // Part 3 - 会話問題
  {
    id: 101,
    level: '470',
    type: 'conversation',
    title: 'Office Greeting',
    situation: 'オフィスでの朝の挨拶',
    sentences: [
      { speaker: 'A', text: 'Good morning, Sarah.', translation: 'おはよう、サラ。' },
      { speaker: 'B', text: 'Good morning, Tom. How are you today?', translation: 'おはよう、トム。今日の調子はどう？' },
      { speaker: 'A', text: 'I\'m fine, thank you. Did you have a nice weekend?', translation: '元気だよ、ありがとう。週末は良かった？' },
      { speaker: 'B', text: 'Yes, I did. I went to the park with my family.', translation: 'うん、家族と公園に行ったの。' },
    ],
    questions: [
      {
        question: 'Where did Sarah go during the weekend?',
        questionJa: 'サラは週末にどこに行きましたか？',
        options: ['To the office', 'To the park', 'To the beach', 'To the mall'],
        correctAnswer: 1
      },
      {
        question: 'Who did Sarah go with?',
        questionJa: 'サラは誰と一緒に行きましたか？',
        options: ['Her friends', 'Her coworkers', 'Her family', 'Alone'],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 102,
    level: '470',
    type: 'conversation',
    title: 'Asking for Directions',
    situation: '会社内で場所を聞く',
    sentences: [
      { speaker: 'A', text: 'Excuse me, where is the meeting room?', translation: 'すみません、会議室はどこですか？' },
      { speaker: 'B', text: 'It\'s on the second floor.', translation: '2階にありますよ。' },
      { speaker: 'A', text: 'Thank you. Is there an elevator?', translation: 'ありがとう。エレベーターはありますか？' },
      { speaker: 'B', text: 'Yes, it\'s right over there.', translation: 'はい、あそこにあります。' },
    ],
    questions: [
      {
        question: 'Where is the meeting room?',
        questionJa: '会議室はどこにありますか？',
        options: ['On the first floor', 'On the second floor', 'On the third floor', 'In the basement'],
        correctAnswer: 1
      },
      {
        question: 'Is there an elevator?',
        questionJa: 'エレベーターはありますか？',
        options: ['Yes', 'No', 'Not mentioned', 'Under construction'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 103,
    level: '470',
    type: 'conversation',
    title: 'Phone Call',
    situation: '電話での予約確認',
    sentences: [
      { speaker: 'A', text: 'Hello, this is ABC Hotel. How may I help you?', translation: 'もしもし、ABCホテルです。ご用件は何でしょうか？' },
      { speaker: 'B', text: 'I\'d like to make a reservation for next Friday.', translation: '来週の金曜日に予約したいのですが。' },
      { speaker: 'A', text: 'Certainly. For how many people?', translation: 'かしこまりました。何名様ですか？' },
      { speaker: 'B', text: 'For two people, please.', translation: '2名でお願いします。' },
    ],
    questions: [
      {
        question: 'When does the caller want to make a reservation?',
        questionJa: '電話をかけた人はいつ予約したいですか？',
        options: ['Today', 'Tomorrow', 'Next Friday', 'Next Monday'],
        correctAnswer: 2
      },
      {
        question: 'How many people is the reservation for?',
        questionJa: '予約は何名分ですか？',
        options: ['One person', 'Two people', 'Three people', 'Four people'],
        correctAnswer: 1
      }
    ]
  },
  // Part 4 - 説明文問題
  {
    id: 151,
    level: '470',
    type: 'talk',
    title: 'Store Announcement',
    situation: '店内アナウンス',
    sentences: [
      { text: 'Attention, shoppers.', translation: 'お買い物中のお客様にお知らせします。' },
      { text: 'Our store will close in thirty minutes.', translation: '当店は30分後に閉店いたします。' },
      { text: 'Please bring your items to the checkout counter.', translation: '商品をレジカウンターまでお持ちください。' },
      { text: 'Thank you for shopping with us today.', translation: '本日はご来店いただきありがとうございます。' },
    ],
    questions: [
      {
        question: 'When will the store close?',
        questionJa: '店はいつ閉まりますか？',
        options: ['In ten minutes', 'In thirty minutes', 'In one hour', 'At midnight'],
        correctAnswer: 1
      },
      {
        question: 'What should shoppers do?',
        questionJa: '買い物客は何をすべきですか？',
        options: ['Leave the store', 'Go to the checkout counter', 'Continue shopping', 'Wait for staff'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 152,
    level: '470',
    type: 'talk',
    title: 'Weather Report',
    situation: '天気予報',
    sentences: [
      { text: 'Good morning. Here is today\'s weather forecast.', translation: 'おはようございます。本日の天気予報です。' },
      { text: 'It will be sunny this morning.', translation: '午前中は晴れるでしょう。' },
      { text: 'However, rain is expected in the afternoon.', translation: 'しかし、午後は雨が予想されます。' },
      { text: 'Don\'t forget to bring an umbrella.', translation: '傘を忘れずにお持ちください。' },
    ],
    questions: [
      {
        question: 'What will the weather be like this morning?',
        questionJa: '今朝の天気はどうなりますか？',
        options: ['Rainy', 'Sunny', 'Cloudy', 'Snowy'],
        correctAnswer: 1
      },
      {
        question: 'What should people bring?',
        questionJa: '何を持って行くべきですか？',
        options: ['Sunglasses', 'An umbrella', 'A jacket', 'Sunscreen'],
        correctAnswer: 1
      }
    ]
  },

  // ========== Level 600 ==========
  // Part 3 - 会話問題
  {
    id: 201,
    level: '600',
    type: 'conversation',
    title: 'Scheduling a Meeting',
    situation: '会議のスケジュール調整',
    sentences: [
      { speaker: 'A', text: 'I need to schedule a meeting with the marketing team.', translation: 'マーケティングチームとの会議を設定する必要があります。' },
      { speaker: 'B', text: 'How about Thursday afternoon?', translation: '木曜日の午後はどうですか？' },
      { speaker: 'A', text: 'That works for me. Can you send out the invitations?', translation: 'それで大丈夫です。招待状を送ってもらえますか？' },
      { speaker: 'B', text: 'Sure. I\'ll include the agenda in the email.', translation: 'もちろん。メールに議題も入れておきます。' },
      { speaker: 'A', text: 'Great. Please book the conference room on the third floor.', translation: '素晴らしい。3階の会議室を予約してください。' },
    ],
    questions: [
      {
        question: 'When is the meeting scheduled?',
        questionJa: '会議はいつ予定されていますか？',
        options: ['Monday morning', 'Thursday afternoon', 'Friday morning', 'Wednesday afternoon'],
        correctAnswer: 1
      },
      {
        question: 'Where will the meeting be held?',
        questionJa: '会議はどこで行われますか？',
        options: ['First floor', 'Second floor', 'Third floor', 'Fourth floor'],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 202,
    level: '600',
    type: 'conversation',
    title: 'Project Discussion',
    situation: 'プロジェクトの進捗確認',
    sentences: [
      { speaker: 'A', text: 'How is the new project coming along?', translation: '新しいプロジェクトの進み具合はどうですか？' },
      { speaker: 'B', text: 'We\'re making good progress, but we\'re behind schedule.', translation: '順調に進んでいますが、スケジュールより遅れています。' },
      { speaker: 'A', text: 'What\'s causing the delay?', translation: '何が遅れの原因ですか？' },
      { speaker: 'B', text: 'We had some technical issues with the software.', translation: 'ソフトウェアに技術的な問題がありました。' },
      { speaker: 'A', text: 'Let me know if you need additional resources.', translation: '追加のリソースが必要なら教えてください。' },
    ],
    questions: [
      {
        question: 'What is the status of the project?',
        questionJa: 'プロジェクトの状況はどうですか？',
        options: ['On schedule', 'Behind schedule', 'Ahead of schedule', 'Cancelled'],
        correctAnswer: 1
      },
      {
        question: 'What caused the delay?',
        questionJa: '遅延の原因は何ですか？',
        options: ['Budget problems', 'Staff shortage', 'Technical issues', 'Weather conditions'],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 203,
    level: '600',
    type: 'conversation',
    title: 'Customer Service Call',
    situation: 'カスタマーサービスへの問い合わせ',
    sentences: [
      { speaker: 'A', text: 'Thank you for calling customer service. How can I assist you?', translation: 'カスタマーサービスにお電話いただきありがとうございます。どのようなご用件でしょうか？' },
      { speaker: 'B', text: 'I ordered a laptop last week, but it hasn\'t arrived yet.', translation: '先週ノートパソコンを注文したのですが、まだ届いていません。' },
      { speaker: 'A', text: 'I apologize for the inconvenience. May I have your order number?', translation: 'ご不便をおかけして申し訳ありません。注文番号をお伺いできますか？' },
      { speaker: 'B', text: 'It\'s 5-4-3-2-1.', translation: '5-4-3-2-1です。' },
      { speaker: 'A', text: 'I see that your package is scheduled for delivery tomorrow.', translation: 'お荷物は明日配達予定となっております。' },
    ],
    questions: [
      {
        question: 'What did the customer order?',
        questionJa: '顧客は何を注文しましたか？',
        options: ['A phone', 'A laptop', 'A tablet', 'A monitor'],
        correctAnswer: 1
      },
      {
        question: 'When will the package be delivered?',
        questionJa: '荷物はいつ届きますか？',
        options: ['Today', 'Tomorrow', 'Next week', 'In two days'],
        correctAnswer: 1
      }
    ]
  },
  // Part 4 - 説明文問題
  {
    id: 251,
    level: '600',
    type: 'talk',
    title: 'Company Meeting Announcement',
    situation: '社内会議のお知らせ',
    sentences: [
      { text: 'This is a reminder about tomorrow\'s quarterly meeting.', translation: '明日の四半期会議についてのお知らせです。' },
      { text: 'The meeting will be held in the main conference room at 10 AM.', translation: '会議は午前10時にメイン会議室で行われます。' },
      { text: 'All department managers are required to attend.', translation: '全ての部門マネージャーは出席が必要です。' },
      { text: 'Please review the sales report before the meeting.', translation: '会議前に売上報告書を確認してください。' },
      { text: 'If you have any questions, contact the HR department.', translation: 'ご質問があれば人事部にお問い合わせください。' },
    ],
    questions: [
      {
        question: 'What time is the meeting?',
        questionJa: '会議は何時ですか？',
        options: ['9 AM', '10 AM', '11 AM', '2 PM'],
        correctAnswer: 1
      },
      {
        question: 'Who should attend the meeting?',
        questionJa: '誰が会議に出席すべきですか？',
        options: ['All employees', 'Department managers', 'New hires', 'Sales team only'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 252,
    level: '600',
    type: 'talk',
    title: 'Voicemail Message',
    situation: '留守番電話のメッセージ',
    sentences: [
      { text: 'Hello, this is Jennifer from Global Tech Solutions.', translation: 'もしもし、グローバルテックソリューションズのジェニファーです。' },
      { text: 'I\'m calling regarding your job application.', translation: 'あなたの求人応募についてお電話しています。' },
      { text: 'We were impressed with your resume and would like to schedule an interview.', translation: '履歴書に感銘を受け、面接の日程を調整したいと思います。' },
      { text: 'Please call me back at 555-0123.', translation: '555-0123まで折り返しお電話ください。' },
      { text: 'I\'m available Monday through Friday, 9 AM to 5 PM.', translation: '月曜から金曜の午前9時から午後5時まで対応可能です。' },
    ],
    questions: [
      {
        question: 'Why is Jennifer calling?',
        questionJa: 'ジェニファーはなぜ電話していますか？',
        options: ['To offer a job', 'To schedule an interview', 'To reject the application', 'To ask for references'],
        correctAnswer: 1
      },
      {
        question: 'When is Jennifer available?',
        questionJa: 'ジェニファーはいつ対応可能ですか？',
        options: ['Weekends only', 'Monday to Friday, 9-5', 'Every day', 'Tuesday and Thursday'],
        correctAnswer: 1
      }
    ]
  },

  // ========== Level 730 ==========
  // Part 3 - 会話問題
  {
    id: 301,
    level: '730',
    type: 'conversation',
    title: 'Budget Discussion',
    situation: '予算に関する議論',
    sentences: [
      { speaker: 'A', text: 'I\'ve reviewed the budget proposal for the next fiscal year.', translation: '来年度の予算案を確認しました。' },
      { speaker: 'B', text: 'Do you think we can get approval from the board?', translation: '取締役会から承認を得られると思いますか？' },
      { speaker: 'A', text: 'It depends. We need to justify the increase in marketing expenses.', translation: '場合によります。マーケティング費用の増加を正当化する必要があります。' },
      { speaker: 'B', text: 'I\'ve prepared a detailed analysis showing the expected return on investment.', translation: '期待される投資収益率を示す詳細な分析を準備しました。' },
      { speaker: 'A', text: 'That should help. Let\'s also emphasize our market expansion strategy.', translation: 'それは役立つでしょう。市場拡大戦略も強調しましょう。' },
      { speaker: 'B', text: 'Good idea. I\'ll update the presentation accordingly.', translation: '良いアイデアですね。それに合わせてプレゼンテーションを更新します。' },
    ],
    questions: [
      {
        question: 'What needs to be justified?',
        questionJa: '何を正当化する必要がありますか？',
        options: ['Staff reduction', 'Marketing expense increase', 'Office relocation', 'Salary cuts'],
        correctAnswer: 1
      },
      {
        question: 'What will the speaker update?',
        questionJa: '話者は何を更新しますか？',
        options: ['The budget', 'The presentation', 'The schedule', 'The contract'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 302,
    level: '730',
    type: 'conversation',
    title: 'Product Launch Planning',
    situation: '新製品発売の計画',
    sentences: [
      { speaker: 'A', text: 'The product launch is scheduled for next month.', translation: '製品発売は来月に予定されています。' },
      { speaker: 'B', text: 'Are we on track with the manufacturing timeline?', translation: '製造スケジュールは順調ですか？' },
      { speaker: 'A', text: 'We\'re slightly behind due to supply chain issues.', translation: 'サプライチェーンの問題で少し遅れています。' },
      { speaker: 'B', text: 'Have you considered alternative suppliers?', translation: '代替の仕入先は検討しましたか？' },
      { speaker: 'A', text: 'Yes, we\'ve already reached out to three potential vendors.', translation: 'はい、すでに3社の潜在的なベンダーに連絡しました。' },
      { speaker: 'B', text: 'Excellent. Keep me posted on the negotiations.', translation: '素晴らしい。交渉の進捗を報告してください。' },
    ],
    questions: [
      {
        question: 'What is causing the delay?',
        questionJa: '遅延の原因は何ですか？',
        options: ['Budget issues', 'Staff shortage', 'Supply chain issues', 'Technical problems'],
        correctAnswer: 2
      },
      {
        question: 'How many potential vendors have been contacted?',
        questionJa: '何社の潜在的なベンダーに連絡しましたか？',
        options: ['One', 'Two', 'Three', 'Four'],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 303,
    level: '730',
    type: 'conversation',
    title: 'Client Negotiation',
    situation: 'クライアントとの交渉',
    sentences: [
      { speaker: 'A', text: 'The client is requesting a 15 percent discount on the contract.', translation: 'クライアントは契約の15%割引を要求しています。' },
      { speaker: 'B', text: 'That\'s a significant reduction. What\'s their reasoning?', translation: 'それは大きな削減ですね。彼らの理由は何ですか？' },
      { speaker: 'A', text: 'They claim they received a lower quote from our competitor.', translation: '競合他社からより低い見積もりを受けたと主張しています。' },
      { speaker: 'B', text: 'We could offer extended payment terms instead of a discount.', translation: '割引の代わりに支払い期間の延長を提案できます。' },
      { speaker: 'A', text: 'That might work. I\'ll propose a 60-day payment period.', translation: 'それはうまくいくかもしれません。60日の支払い期間を提案します。' },
    ],
    questions: [
      {
        question: 'What discount is the client requesting?',
        questionJa: 'クライアントは何%の割引を要求していますか？',
        options: ['10 percent', '15 percent', '20 percent', '25 percent'],
        correctAnswer: 1
      },
      {
        question: 'What alternative will be proposed?',
        questionJa: '代わりに何を提案しますか？',
        options: ['A smaller discount', 'Extended payment terms', 'Free shipping', 'Additional services'],
        correctAnswer: 1
      }
    ]
  },
  // Part 4 - 説明文問題
  {
    id: 351,
    level: '730',
    type: 'talk',
    title: 'Industry Conference Keynote',
    situation: '業界カンファレンスの基調講演',
    sentences: [
      { text: 'Thank you for joining us at this year\'s Technology Innovation Summit.', translation: '今年のテクノロジーイノベーションサミットにご参加いただきありがとうございます。' },
      { text: 'Over the past decade, we\'ve witnessed remarkable advances in artificial intelligence.', translation: 'この10年間で、人工知能において目覚ましい進歩を目の当たりにしてきました。' },
      { text: 'These developments have transformed how businesses operate globally.', translation: 'これらの発展は、世界中の企業の運営方法を変革しました。' },
      { text: 'Today, I\'ll discuss the implications of these changes for your industry.', translation: '本日は、これらの変化があなたの業界に与える影響について議論します。' },
      { text: 'By the end of this session, you\'ll have actionable strategies to implement.', translation: 'このセッションの終わりには、実行可能な戦略をお持ち帰りいただけます。' },
    ],
    questions: [
      {
        question: 'What is the main topic of discussion?',
        questionJa: '主な議論のトピックは何ですか？',
        options: ['Marketing strategies', 'Artificial intelligence advances', 'Financial planning', 'Human resources'],
        correctAnswer: 1
      },
      {
        question: 'What will attendees receive by the end?',
        questionJa: '参加者はセッションの終わりに何を得られますか？',
        options: ['Certificates', 'Actionable strategies', 'Free products', 'Job offers'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 352,
    level: '730',
    type: 'talk',
    title: 'Corporate Training Introduction',
    situation: '企業研修の導入',
    sentences: [
      { text: 'Welcome to the leadership development program.', translation: 'リーダーシップ開発プログラムへようこそ。' },
      { text: 'This intensive workshop is designed for senior managers and executives.', translation: 'この集中ワークショップは上級管理職と役員向けに設計されています。' },
      { text: 'We\'ll focus on strategic decision-making and change management.', translation: '戦略的意思決定と変革管理に焦点を当てます。' },
      { text: 'Throughout the week, you\'ll participate in case studies and simulations.', translation: '週を通じて、ケーススタディとシミュレーションに参加していただきます。' },
      { text: 'Our goal is to enhance your ability to lead in complex business environments.', translation: '複雑なビジネス環境でリードする能力を高めることが目標です。' },
      { text: 'Please feel free to ask questions at any time during the sessions.', translation: 'セッション中いつでも遠慮なくご質問ください。' },
    ],
    questions: [
      {
        question: 'Who is this workshop designed for?',
        questionJa: 'このワークショップは誰向けですか？',
        options: ['New employees', 'Senior managers and executives', 'Interns', 'Sales staff'],
        correctAnswer: 1
      },
      {
        question: 'What will participants do during the week?',
        questionJa: '参加者は週を通じて何をしますか？',
        options: ['Take exams', 'Case studies and simulations', 'Watch videos', 'Read textbooks'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 353,
    level: '730',
    type: 'talk',
    title: 'Airport Announcement',
    situation: '空港でのアナウンス',
    sentences: [
      { text: 'Attention passengers on Flight 472 to London.', translation: 'ロンドン行き472便のお客様にお知らせいたします。' },
      { text: 'Due to severe weather conditions, your departure has been delayed.', translation: '悪天候のため、出発が遅延しております。' },
      { text: 'The new estimated departure time is 3:45 PM.', translation: '新しい出発予定時刻は午後3時45分です。' },
      { text: 'We apologize for any inconvenience this may cause.', translation: 'ご不便をおかけして申し訳ございません。' },
      { text: 'Complimentary refreshments will be provided at Gate 24.', translation: '無料の軽食を24番ゲートでご用意しております。' },
      { text: 'Please stay in the terminal and listen for further announcements.', translation: 'ターミナル内でお待ちいただき、追加のアナウンスをお聞きください。' },
    ],
    questions: [
      {
        question: 'Why is the flight delayed?',
        questionJa: 'フライトが遅延している理由は？',
        options: ['Mechanical problems', 'Severe weather', 'Staff shortage', 'Security check'],
        correctAnswer: 1
      },
      {
        question: 'Where will refreshments be provided?',
        questionJa: '軽食はどこで提供されますか？',
        options: ['Gate 20', 'Gate 22', 'Gate 24', 'Gate 26'],
        correctAnswer: 2
      }
    ]
  },
];
