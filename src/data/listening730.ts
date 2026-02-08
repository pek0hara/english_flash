// TOEIC Level 730 - リスニングデータ
import type { ListeningItem } from './types';

export const listening730: ListeningItem[] = [
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
