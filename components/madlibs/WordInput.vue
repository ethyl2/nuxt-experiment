<template>
  <form
    class="flex flex-col items-center justify-center bg-black p-6 rounded border-4 border-teal-500 m-2"
    @submit.prevent="sendWord"
  >
    <label for="name1" class="mb-4 text-2xl">Give me a {{ wordType }}:</label>
    <input
      :value="modelName"
      :type="inputType"
      name="name1"
      class="text-black p-2 w-full rounded text-2xl mb-5"
      required
      @input="updateValue($event.target.value)"
    />
    <button
      type="submit"
      class="px-6 py-4 bg-orange-400 rounded hover:bg-orange-500"
    >
      Add
    </button>
    <div class="w-full h-4 bg-white rounded mt-4">
      <div
        class="h-full bg-teal-400 rounded"
        :style="{ width: currentWidth }"
      ></div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'WordInput',
  props: {
    modelName: {
      type: String,
      default: '',
    },
    wordType: {
      type: String,
      default: 'word',
    },
    currentStep: {
      type: Number,
      default: 1,
    },
    totalSteps: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    currentWidth() {
      return `${(this.currentStep / this.totalSteps) * 100}%`
    },
    inputType() {
      if (this.wordType !== 'number') {
        return 'text'
      }
      return 'number'
    },
  },
  methods: {
    sendWord() {
      this.$emit('handle-submit')
    },
    updateValue(value) {
      this.$emit('input', value)
    },
  },
}
</script>
