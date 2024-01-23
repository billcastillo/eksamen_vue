<template lang="">
  <div :id="questionData.id" :class="errorMessage ? 'has-error' : ''">
    <h3 class="mb-4 text-xl font-quicksand-bold">
      {{ questionData.questionName }}
    </h3>

    <!-- Answers List -->
    <Answer
      :answer-list="questionData.answers"
      :question-id="questionData.id"
      :error-message="questionData.errorMessage"
    />

    <small id="text-error" class="p-error">{{ hasError.errorMessage }}</small>
  </div>
</template>

<script>
export default {
  props: {
    questionData: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
    hasError: {
      type: Object,
      required: false,
      default() {
        return {
          errorMessage: '',
          errorType: '',
        }
      },
    },
  },
  setup() {
    // const questionData = {
    //   title: 'title',
    //   answerList: [],
    // }
    // return { questionData }
  },
}
</script>
