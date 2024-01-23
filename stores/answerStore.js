import { defineStore } from 'pinia'

export const useAnswerStore = defineStore('answerStore', {
  state: () => ({
    answers: {},
  }),
  getters: {
    allAnswers() {
      return this.answers
    },
    answer(key) {
      if (!key) {
        return null
      }

      return this.answers[key]
    },
  },
  actions: {
    defineProp(questionId = '') {
      this.answers[questionId] = null
    },
    setAnswer(questionId, answer = '') {
      if (!questionId) {
        return
      }

      this.answers[questionId] = answer
      console.log('this.asnwer:', this.answers)
    },
  },
})
