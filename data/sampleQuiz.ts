export const sampleQuiz = {
  quizName: 'Sample quiz name',
  id: 'asdasdassa',
  category: 'Countries',
  label: 'facts',
  created: '1691407093761',
  description: 'See how well do you know world countries',
  questions: [
    {
      questionName: 'What is the capital of Taiwan?',
      id: '123134',
      answerType: 'radio',
      answers: [
        {
          id: 'radio1',
          type: 'radio',
          label: 'Taipei',
          value: 'Taipei',
          isAnswer: true,
        },
        {
          id: 'radio2',
          type: 'radio',
          label: 'Tokyo',
          value: 'Tokyo',
          isAnswer: false,
        },
        {
          id: 'radio3',
          type: 'radio',
          label: 'Beijing',
          value: 'Beijing',
          isAnswer: false,
        },
        {
          id: 'radio4',
          type: 'radio',
          label: 'Seoul',
          value: 'Seoul',
          isAnswer: false,
        },
      ],
      answer: 1,
    },
    {
      questionName: 'What is the capital of The Philippines?',
      answerType: 'radio',
      id: '112341',
      answers: [
        {
          id: '1',
          type: 'radio',
          label: 'Cebu',
          value: 'Cebu',
          isAnswer: false,
        },
        {
          id: '2',
          type: 'radio',
          label: 'Manila',
          value: 'Manila',
          isAnswer: true,
        },
        {
          id: '3',
          type: 'radio',
          label: 'Makati',
          value: 'Makati',
          isAnswer: false,
        },
        {
          id: '4',
          type: 'radio',
          label: 'Quezon City',
          value: 'Quezon City',
          isAnswer: false,
        },
      ],
      answer: 2,
    },
  ],
}
