// TOEIC Level 470 - リスニングデータ
import type { ListeningItem } from './types';

export const listening470: ListeningItem[] = [
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
  {
    id: 104,
    level: '470',
    type: 'conversation',
    title: 'Restaurant Order',
    situation: 'レストランでの注文',
    sentences: [
      { speaker: 'A', text: 'Are you ready to order?', translation: 'ご注文はお決まりですか？' },
      { speaker: 'B', text: 'Yes, I\'d like the chicken salad, please.', translation: 'はい、チキンサラダをお願いします。' },
      { speaker: 'A', text: 'Would you like anything to drink?', translation: 'お飲み物はいかがですか？' },
      { speaker: 'B', text: 'Just water for now, thank you.', translation: '今は水だけで大丈夫です、ありがとう。' },
    ],
    questions: [
      {
        question: 'What does the customer order?',
        questionJa: '客は何を注文しましたか？',
        options: ['Chicken salad', 'Beef steak', 'Fish and chips', 'Pasta'],
        correctAnswer: 0
      },
      {
        question: 'What will the customer drink?',
        questionJa: '客は何を飲みますか？',
        options: ['Soda', 'Juice', 'Water', 'Coffee'],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 105,
    level: '470',
    type: 'conversation',
    title: 'Meeting Time',
    situation: '会議時間の確認',
    sentences: [
      { speaker: 'A', text: 'When does the meeting start?', translation: '会議は何時からですか？' },
      { speaker: 'B', text: 'It starts at 2 PM.', translation: '午後2時に始まります。' },
      { speaker: 'A', text: 'Oh, I thought it was at 3 PM.', translation: 'あれ、3時だと思っていました。' },
      { speaker: 'B', text: 'No, it was changed this morning.', translation: 'いいえ、今朝変更になりました。' },
    ],
    questions: [
      {
        question: 'When does the meeting start?',
        questionJa: '会議は何時に始まりますか？',
        options: ['1 PM', '2 PM', '3 PM', '4 PM'],
        correctAnswer: 1
      },
      {
        question: 'When was the time changed?',
        questionJa: '時間はいつ変更されましたか？',
        options: ['Yesterday', 'Last week', 'This morning', 'An hour ago'],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 106,
    level: '470',
    type: 'conversation',
    title: 'Lost Item',
    situation: '探し物',
    sentences: [
      { speaker: 'A', text: 'Have you seen my blue pen?', translation: '私の青いペンを見ませんでしたか？' },
      { speaker: 'B', text: 'No, I haven\'t. Where did you leave it?', translation: 'いいえ、見ていません。どこに置きましたか？' },
      { speaker: 'A', text: 'I think I left it on the desk.', translation: '机の上に置いたと思うのですが。' },
      { speaker: 'B', text: 'Maybe check the drawer.', translation: '引き出しを確認してみてはどうですか。' },
    ],
    questions: [
      {
        question: 'What is the speaker looking for?',
        questionJa: '話者は何を探していますか？',
        options: ['A notebook', 'A blue pen', 'A red pen', 'A bag'],
        correctAnswer: 1
      },
      {
        question: 'Where might it be?',
        questionJa: 'それはどこにあるかもしれませんか？',
        options: ['In the bag', 'Under the desk', 'In the drawer', 'On the shelf'],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 153,
    level: '470',
    type: 'talk',
    title: 'Tour Guide',
    situation: 'ツアーガイドの案内',
    sentences: [
      { text: 'Welcome everyone. We are now arriving at the historic castle.', translation: '皆さんようこそ。私たちは今、歴史的なお城に到着しました。' },
      { text: 'Please stay with the group.', translation: 'グループから離れないでください。' },
      { text: 'The tour will take about one hour.', translation: 'ツアーは約1時間かかります。' },
      { text: 'You can take photos, but no flash please.', translation: '写真は撮れますが、フラッシュは禁止です。' },
    ],
    questions: [
      {
        question: 'Where are they arriving?',
        questionJa: '彼らはどこに到着しましたか？',
        options: ['A museum', 'A park', 'A castle', 'A hotel'],
        correctAnswer: 2
      },
      {
        question: 'How long is the tour?',
        questionJa: 'ツアーはどのくらいかかりますか？',
        options: ['30 minutes', 'One hour', 'Two hours', 'Three hours'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 154,
    level: '470',
    type: 'talk',
    title: 'Product Promotion',
    situation: '商品紹介',
    sentences: [
      { text: 'Try our new energy drink.', translation: '私たちの新しいエナジードリンクをお試しください。' },
      { text: 'It gives you energy for the whole day.', translation: '一日中エネルギーを与えてくれます。' },
      { text: 'It is made with natural ingredients.', translation: '天然成分で作られています。' },
      { text: 'Buy one now and get one free.', translation: '今なら1つ買うともう1つ無料です。' },
    ],
    questions: [
      {
        question: 'What is being promoted?',
        questionJa: '何が宣伝されていますか？',
        options: ['Coffee', 'Tea', 'Energy drink', 'Juice'],
        correctAnswer: 2
      },
      {
        question: 'What is the special offer?',
        questionJa: '特別なオファーは何ですか？',
        options: ['Half price', 'Buy one get one free', 'Free delivery', '20% off'],
        correctAnswer: 1
      }
    ]
  },
];
