// TOEIC Level 600 - リスニングデータ
import type { ListeningItem } from './types';

export const listening600: ListeningItem[] = [
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
  {
    id: 204,
    level: '600',
    type: 'conversation',
    title: 'Shipping Delay',
    situation: '配送遅延',
    sentences: [
      { speaker: 'A', text: 'We have a problem with the shipment to Tokyo.', translation: '東京への配送に問題があります。' },
      { speaker: 'B', text: 'What is the issue?', translation: '何が問題なのですか？' },
      { speaker: 'A', text: 'The truck broke down and delivery will be delayed by two days.', translation: 'トラックが故障して、配送が2日遅れます。' },
      { speaker: 'B', text: 'We should call the client immediately and apologize.', translation: 'すぐに顧客に電話して謝罪すべきです。' },
    ],
    questions: [
      {
        question: 'What happened to the shipment?',
        questionJa: '配送に何が起こりましたか？',
        options: ['It was lost', 'It was delayed', 'It was returned', 'It was cancelled'],
        correctAnswer: 1
      },
      {
        question: 'What will they do next?',
        questionJa: '彼らは次に何をしますか？',
        options: ['Send a new shipment', 'Call the client', 'Repair the truck', 'Refund the money'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 205,
    level: '600',
    type: 'conversation',
    title: 'Office Renovation',
    situation: 'オフィスの改装',
    sentences: [
      { speaker: 'A', text: 'The office renovation starts next Monday.', translation: 'オフィスの改装が来週の月曜日に始まります。' },
      { speaker: 'B', text: 'Will we be able to work here during the construction?', translation: '工事中もここで働けますか？' },
      { speaker: 'A', text: 'Yes, but it might be noisy. You can work from home if you prefer.', translation: 'はい、でもうるさいかもしれません。希望するなら在宅勤務も可能です。' },
      { speaker: 'B', text: 'That sounds like a good idea. I\'ll work remotely next week.', translation: 'それは良い考えですね。来週はリモートで働きます。' },
    ],
    questions: [
      {
        question: 'When does the renovation start?',
        questionJa: '改装はいつ始まりますか？',
        options: ['Today', 'Tomorrow', 'Next Monday', 'Next month'],
        correctAnswer: 2
      },
      {
        question: 'What does the speaker decide to do?',
        questionJa: '話者は何をすることに決めましたか？',
        options: ['Take a vacation', 'Work from home', 'Work at the office', 'Quit the job'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 206,
    level: '600',
    type: 'conversation',
    title: 'Hiring New Staff',
    situation: '新規採用',
    sentences: [
      { speaker: 'A', text: 'We need to hire a new sales manager.', translation: '新しいセールスマネージャーを雇う必要があります。' },
      { speaker: 'B', text: 'I agree. The team is growing fast.', translation: '賛成です。チームは急速に成長しています。' },
      { speaker: 'A', text: 'Have you posted the job advertisement yet?', translation: '求人広告はもう出しましたか？' },
      { speaker: 'B', text: 'Yes, I posted it on our website and LinkedIn yesterday.', translation: 'はい、昨日ウェブサイトとLinkedInに掲載しました。' },
    ],
    questions: [
      {
        question: 'What position are they hiring for?',
        questionJa: 'どの職種を募集していますか？',
        options: ['Marketing director', 'Sales manager', 'HR specialist', 'IT support'],
        correctAnswer: 1
      },
      {
        question: 'Where was the job posted?',
        questionJa: '仕事はどこに掲載されましたか？',
        options: ['Newspaper', 'Radio', 'Website and LinkedIn', 'TV'],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 253,
    level: '600',
    type: 'talk',
    title: 'Product Feedback',
    situation: '製品へのフィードバック',
    sentences: [
      { text: 'Thank you for your feedback on our new software.', translation: '新しいソフトウェアへのフィードバックありがとうございます。' },
      { text: 'We have received many comments about the user interface.', translation: 'ユーザーインターフェースについて多くのコメントをいただきました。' },
      { text: 'Users find it difficult to navigate.', translation: 'ユーザーは操作が難しいと感じています。' },
      { text: 'Based on this, we will release an update next month to improve usability.', translation: 'これに基づき、使いやすさを向上させるためのアップデートを来月リリースします。' },
    ],
    questions: [
      {
        question: 'What did customers comment on?',
        questionJa: '顧客は何についてコメントしましたか？',
        options: ['Price', 'Customer service', 'User interface', 'Features'],
        correctAnswer: 2
      },
      {
        question: 'When will the update be released?',
        questionJa: 'アップデートはいつリリースされますか？',
        options: ['Next week', 'Next month', 'Next year', 'Tomorrow'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 254,
    level: '600',
    type: 'talk',
    title: 'Event Planning Update',
    situation: 'イベント計画の更新',
    sentences: [
      { text: 'I\'d like to update you on the preparations for the annual charity gala.', translation: '毎年のチャリティガラの準備状況をお知らせします。' },
      { text: 'We have sold over 200 tickets so far.', translation: 'これまでに200枚以上のチケットが売れました。' },
      { text: 'The catering company has been finalized.', translation: 'ケータリング会社は決定しました。' },
      { text: 'However, we are still looking for a few more volunteers to help with registration.', translation: 'しかし、受付を手伝ってくれるボランティアをあと数名探しています。' },
    ],
    questions: [
      {
        question: 'How many tickets have been sold?',
        questionJa: '何枚のチケットが売れましたか？',
        options: ['Over 100', 'Over 200', 'Over 300', 'Over 400'],
        correctAnswer: 1
      },
      {
        question: 'What is still needed?',
        questionJa: 'まだ何が必要ですか？',
        options: ['Food', 'Music', 'Venue', 'Volunteers'],
        correctAnswer: 3
      }
    ]
  },
];
