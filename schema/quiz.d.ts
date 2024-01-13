// https://app.quicktype.io/

export interface QuizSchema {
  quizName: string
  id: string
  category: string
  label: string
  created: string
  description: string
  questions: Question[]
}

export interface QuestionSchema {
  questionName: string
  id: string
  answerType: string
  answers: Answer[]
  answer: number
}

export interface AnswerSchema {
  id: string
  type: string
  label: string
  value: string
  isAnswer: boolean
}
