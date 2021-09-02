<template>
  <div class="container flex flex-col items-center justify-center">
    <h1 class="pb-6 text-xl">Days of Gratitude</h1>
    <nav
      class="grid grid-cols-3 gap-4 p-4 mx-auto mb-6 bg-gray-400 bg-opacity-25 rounded"
    >
      <nuxt-link
        v-for="day in days"
        :key="day.number"
        :to="{ name: 'gratitude-day', params: { day: day.number } }"
        class="px-4 py-2 text-base border-2 border-white rounded-full"
        >{{ day.number }}</nuxt-link
      >
    </nav>
    <nuxt-link to="/gratitude/share">Share Your Gratitude</nuxt-link>
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
        {
          name: 'twitter:image',
          content: 'https://nuxt-experiments.herokuapp.com/tree2.png',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
}
</script>
