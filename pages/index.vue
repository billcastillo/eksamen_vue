<script>
// import { ref } from 'vue'
// import { sampleQuiz } from '@/data/sampleQuiz'
import { useQuizStore } from '@/stores/quizStore'

export default {
  setup() {
    const quizData = useQuizStore()
    return { quizData }
  },
}
</script>

<template>
  <div class="container mx-auto px-4">
    <h1 class="mb-8 text-4xl"><strong>Heading One</strong></h1>
    <!-- <span class="pi pi-search"></span> -->

    <Quiz :quiz-data="quizData.quiz" />
  </div>
</template>
