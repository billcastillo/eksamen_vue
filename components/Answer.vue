<template>
  <div class="card flex">
    <div class="flex flex-col gap-3">
      <div
        v-for="answer in answerList"
        :key="answer.id"
        class="flex items-center"
      >
        <RadioButton
          v-model="selectedAnswer"
          :input-id="answer.id"
          :name="questionId"
          :value="answer.value"
        />
        <label :for="answer.id" class="ml-2 text-lg">{{ answer.label }}</label>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useAnswerStore } from '@/stores/answerStore'

export default {
  props: {
    answerList: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
    questionId: {
      type: String,
      required: true,
      default() {
        return ''
      },
    },
  },
  setup(props) {
    const answerData = useAnswerStore()
    const answerObj = props.answerList.find((answer) => answer.isAnswer)
    console.log('🚀 ~ setup ~ answerID:', answerObj)
    const selectedAnswer = ref(answerObj.id)
    console.log('🚀 ~ setup ~ selectedAnswer:', selectedAnswer)

    watch(selectedAnswer, (newVal) => {
      // console.log("🚀 ~ watch ~ new:", new)
      console.log('🚀 ~ watch ~ old:', newVal)
      answerData.setAnswer(props.questionId, selectedAnswer.value)
    })

    // const onAnswerChange = (e) => {
    //   console.log('🚀 ~ onAnswerChange ~ e:', e)
    //   console.log('selectedAnswer:', selectedAnswer)
    //   useAnswerStore.setAnswer()
    // }

    function validateField(value) {
      console.log('🚀 ~ validateField ~ value:', value)
      if (!value) {
        return 'Value  is required.'
      }

      return true
    }

    return { answerObj, selectedAnswer }
  },
}
</script>
