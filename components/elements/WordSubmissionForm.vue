<template>
  <section class="mx-auto">
    <h3 class="text-lg font-bold text-center mb-1 md:text-xl">
      Send me your favorite element word!
    </h3>
    <form
      class="flex flex-col justify-center space-y-2 md:space-x-2 md:flex-row md:space-y-0"
      @submit.prevent="submitForm"
    >
      <input
        v-model="submission.name"
        type="text"
        class="text-black px-1 rounded"
        placeholder="your name"
        required
      />
      <input
        v-model="submission.word"
        type="text"
        class="text-black px-1 rounded"
        placeholder="your word"
        required
      />
      <button
        type="submit"
        class="w-full rounded p-1 mx-auto bg-black text-xs text-white text-center hover:bg-gray-700 md:text-base md:w-auto"
        style="max-width: 120px"
      >
        Send
      </button>
    </form>
    <p v-if="message" class="text-center text-xs pt-1">{{ message }}</p>
  </section>
</template>

<script>
export default {
  name: 'WordSubmissionForm',
  data() {
    return {
      submission: {
        name: '',
        word: '',
      },
      endpoint: process.env.mailUrl,
      message: '',
    }
  },
  methods: {
    async submitForm() {
      try {
        const response = await this.$axios.post(this.endpoint, this.submission)
        this.message = response.data.ok
          ? 'Thanks for your word!'
          : 'There was a problem sending your word. Please try again later.'
      } catch {
        this.message =
          'There was a problem sending your word. Please try again later.'
      }
    },
  },
}
</script>
