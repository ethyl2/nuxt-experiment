<template>
  <form
    class="flex flex-col items-center justify-center bg-black p-6 rounded border-4 border-teal-500 m-2"
    @submit.prevent="sendWord"
  >
    <label for="name1" class="mb-4 text-2xl">Give me a {{ wordType }}:</label>
    <input
      :value="modelName"
      type="text"
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
