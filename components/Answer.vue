<template>
  <div class="card flex">
    <div class="flex flex-col gap-3">
      <div
        v-for="answer in answerList"
        :key="answer.id"
        class="flex items-center"
      >
        <RadioButton
          v-model="answerID"
          :input-id="answer.id"
          :name="questionId"
          :value="answer.value"
          @change="onAnswerChange"
        />
        <label :for="answer.id" class="ml-2 text-lg">{{ answer.label }}</label>
      </div>
    </div>

    <small id="text-error" class="p-error">{{
      errorMessage || '&nbsp;'
    }}</small>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useField } from 'vee-validate'

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
    // const selectedAnswer = ref(answerID.id)
    const onAnswerChange = (e) => {
      console.log('🚀 ~ onAnswerChange', e)
    }

    function validateField(value) {
      console.log('🚀 ~ validateField ~ value:', value)
      if (!value) {
        return 'Value  is required.'
      }

      return true
    }

    const { checked, errorMessage, errors } = useField(
      () => answerID,
      undefined,
      {
        type: 'checkbox',
        checkedValue: true,
      }
    )

    return { checked, answerID, onAnswerChange, errorMessage }
  },
}
</script>
