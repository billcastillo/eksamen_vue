<template lang="">
  <div :id="questionData.id">
    <h3 class="mb-4 text-xl font-quicksand-bold">
      {{ questionData.questionName }}
    </h3>

    <!-- Answers List -->
    <Answer
      :answer-list="questionData.answers"
      :question-id="questionData.id"
    />
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
