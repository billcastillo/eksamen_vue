import type { QuizSchema, QuestionSchema, AnswerSchema } from '~/schema/quiz'

export const getQuestionAnswer = (
  quizData: QuizSchema,
  questionId: string,
  answerId: string
) => {
  const questionData = quizData.questions.find(
    (question: QuestionSchema) => question.id === questionId
  )
  const answerData = questionData.answers.find(
    (answer: AnswerSchema) => answer.id === answerId
  )
  return answerData
}
