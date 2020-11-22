<template>
  <div class="container flex flex-col justify-center items-center">
    <h1 class="text-xl pb-6">Days of Gratitude</h1>
    <nav class="grid grid-cols-2 gap-4 mb-6 mx-auto">
      <nuxt-link
        v-for="day in days"
        :key="day"
        :to="{ name: 'gratitude-day', params: { day: day.number } }"
        class="text-base px-4 py-2 border border-white rounded"
        >{{ day.number }}</nuxt-link
      >
    </nav>
    <a
      href="https://www.churchofjesuschrist.org/inspiration/the-story-behind-my-global-prayer-of-gratitude?lang=eng"
      target="_blank"
    >
      <img
        src="/gratitude.jpg"
        alt="ways to give thanks"
        class="max-w-xs my-6"
      />
    </a>
    <small>#GiveThanks</small>
  </div>
</template>

<script>
export default {
  data() {
    return {
      originalDays: ['one', 'two'],
    }
  },
  computed: {
    days() {
      return this.$store.state.days.all
    },
  },
  head() {
    return {
      title: 'Days of Gratitude 🍂',
      meta: [
        {
          name: 'twitter:title',
          content: 'Days of Gratitude',
        },
        {
          name: 'twitter:description ',
          content: "Heather Nuffer's gratitude journal",
        },
        { name: 'twitter:image', content: '../static/tree2.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
}
</script>
