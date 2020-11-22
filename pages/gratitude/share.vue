<template>
  <div class="container space-x-6">
    <div>
      <h2 class="text-xl">Share Your Gratitude</h2>
      <h3>What are you grateful for today?</h3>
    </div>
    <form
      action="https://formspree.io/mlejobow"
      method="POST"
      class="flex flex-col space-y-3 border border-teal-300 p-4 rounded"
    >
      <div>
        <label for="name">Name:</label>
        <input
          id="name"
          v-model="submission.name"
          type="text"
          placeholder="your name"
          name="name"
          class="text-black rounded p-1"
          required
        />
      </div>

      <div>
        <label for="email">Email:</label>
        <input
          id="email"
          v-model="submission.email"
          type="email"
          name="email"
          placeholder="your email address"
          class="text-black rounded p-1"
          required
        />
      </div>

      <div class="flex flex-col space-y-1">
        <label for="message">What You Are Thankful For and Why:</label>
        <textarea
          id="message"
          v-model="submission.message"
          name="message"
          placeholder="gratitude item and reason"
          class="text-black rounded p-1 text-center"
          required
        />
      </div>

      <button
        type="submit"
        class="bg-orange-500 text-black w-1/4 mx-auto max-w-xs rounded py-1 px-2 hover:text-white hover:bg-orange-600"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submission: {
        name: '',
        email: '',
        message: '',
      },
    }
  },
}
</script>
