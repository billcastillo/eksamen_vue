<template>
  <div>
    <div class="mb-6">
      <h1 class="text-2xl">{{ quizData.quizName }}</h1>
      <h2 class="text-lg">{{ quizData.description }}</h2>
    </div>

    <form @submit.prevent="submitQuiz">
      <!-- Questions List -->
      <div
        class="mb-8"
        v-for="question in quizData.questions"
        :key="question.id"
      >
        <Question :question-data="question" />
      </div>

      <Button type="submit" label="Submit" />
    </form>
  </div>
</template>

<script lang="ts">
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
    const quizFormData = new FormData()
    const submitQuiz = function (e: Object) {
      console.log('form submitted', e)
    }

    return { submitQuiz }
  },
}
</script>
