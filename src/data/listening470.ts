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
];
