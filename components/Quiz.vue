<template>
  <div>
    <div class="mb-6">
      <h1 class="text-2xl">{{ quizData.quizName }}</h1>
      <h2 class="text-lg">{{ quizData.description }}</h2>
    </div>

    <form @submit="submitQuiz">
      <!-- Questions List -->
      <div
        v-for="question in quizData.questions"
        :key="question.id"
        class="mb-8"
      >
        <Question :question-data="question" />
      </div>

      <Button type="submit" label="Submit" />
    </form>
  </div>
</template>

<script lang="ts">
import { useToast } from 'primevue/usetoast'
import { useField, useForm } from 'vee-validate'

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
    // const quizFormData = new FormData()
    const { handleSubmit, resetForm } = useForm()
    const toast = useToast()

    const submitQuiz = handleSubmit((values) => {
      console.log('🚀 ~ submitQuiz ~ values:', values)
      if (values.value && values.value.length > 0) {
        toast.add({
          severity: 'info',
          summary: 'Form Submitted',
          detail: values.value,
          life: 3000,
        })
        resetForm()
      }
    })

    return { submitQuiz }
  },
}
</script>
