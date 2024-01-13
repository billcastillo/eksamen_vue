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
          @change="onAnswerChange"
          :inputProps="required"
        />
        <label :for="answer.id" class="ml-2 text-lg">{{ answer.label }}</label>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

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
    const answerID = props.answerList.find((answer) => answer.isAnswer)
    const selectedAnswer = ref(answerID.id)
    const onAnswerChange = (e) => {
      console.log('🚀 ~ onAnswerChange', e)
    }

    return { selectedAnswer, onAnswerChange }
  },
}
</script>
