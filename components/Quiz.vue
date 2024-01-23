<template>
  <div>
    <div class="mb-8">
      <h1 class="text-2xl">{{ quizData.quizName }}</h1>
      <h2 class="text-lg">{{ quizData.description }}</h2>
    </div>

    <form @submit.prevent="submitQuiz">
      <!-- Questions List -->
      <div
        v-for="question in quizData.questions"
        :key="question.id"
        class="mb-8"
      >
        <Question :question-data="question" :has-error="{}" />
      </div>

      <Button type="submit" label="Submit" />
      <span class="my-2 block text-tomato-9 text-md">{{ errorMessage }}</span>
    </form>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useAnswerStore } from '@/stores/answerStore'

export default {
  props: {
    quizData: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  setup(props) {
    const answerData = useAnswerStore()
    const errorMessage = ref('')
    console.log('🚀 ~ answerData:', answerData)
    console.log('🚀 ~ setup ~ props:', props)

    const resetErrorMessage = () => {
      errorMessage.value = ''
    }

    const initializeAnswerStore = () => {
      const questionKeys = props.quizData.questions.map(
        (question) => question.id
      )
      console.log('🚀 ~ initializeAnswerStore ~ questionKeys:', questionKeys)

      questionKeys.forEach((key: String) => {
        answerData.defineProp(key)
      })

      console.log('🚀 ~ questionKeys.forEach ~ answerData:', answerData)
    }

    const validateQuiz = () => {
      const allAnswers = answerData.allAnswers
      console.log('🚀 ~ validateQuiz ~ allAnswers:', allAnswers)

      for (const prop in allAnswers) {
        if (!allAnswers[prop]) {
          errorMessage.value = 'Please answer all questions'
          return true
        }
      }

      return false
    }

    const submitQuiz = async (e) => {
      console.log('🚀 ~ submitQuiz ~ e:', e)
      const quizFormData = new FormData(e.target)
      console.log('🚀 ~ submitQuiz ~ values:', quizFormData)

      resetErrorMessage()
      const hasError = validateQuiz()

      if (hasError) {
        // focus on first question with error
        console.log('has error')
        return
      }

      const formObject = {}
      for (const [key, value] of quizFormData) {
        console.log('🚀 ~ submitQuiz ~ value:', value)
        console.log('🚀 ~ submitQuiz ~ key:', key)
        formObject[key] = value
      }
      console.log('🚀 ~ submitQuiz ~ formObject:', formObject)

      const { data } = await useFetch('/api/submitQuiz', {
        method: 'post',
        body: { formData: JSON.stringify(formObject) },
        onResponse({ request, response, options }) {
          console.log('🚀 ~ onResponse ~ response:', response._data)
          // Process the response data
          // localStorage.setItem('token', response._data.token)
        },
        onResponseError({ request, response, options }) {
          console.log('🚀 ~ onResponseError ~ onResponseError:')
          // Handle the response errors
        },
      })
      console.log('🚀 ~ submitQuiz ~ data:', data)
      console.log('🚀 ~ submitQuiz ~ data.error:', data)
    }

    initializeAnswerStore()

    return { errorMessage, submitQuiz }
  },
}
</script>
