<template>
  <div>
    <RadioButton
      id="sampleId"
      name="questionId"
      :value="yeah"
      v-model="terms3"
    />
    <label for="id">I agree 3 </label>

    <Form :validation-schema="schema" @submit.prevent="onSubmit">
      <Field
        as="RadioButton"
        name="terms"
        type="radio"
        :value="true"
        id="terms"
      />
      <label for="terms" class="ml-2 text-lg">Tea</label>
      <ErrorMessage name="terms" />

      <Field
        v-slot="{ field }"
        name="terms2"
        type="radio"
        :value="true"
        :unchecked-value="false"
      >
        <RadioButton type="radio" name="terms2" v-bind="field" :value="true" />
        <label>I agree </label>
      </Field>
      <Button type="submit" label="Submit" />
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'

const terms3 = 'yeah'

const schema = {
  terms: (value) => {
    if (value) {
      return true
    }

    return 'You must choose a drink'
  },
}

function onSubmit(values) {
  console.log(JSON.stringify(values, null, 2))
}
</script>
<style lang=""></style>
