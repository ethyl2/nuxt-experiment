<template>
  <div>
    <div class="container flex flex-col space-y-2">
      <h2 class="text-xl">DAY {{ day.number.toUpperCase() }}</h2>
      <h3 class="text-lg">I'm thankful for</h3>
      <p class="text-base">{{ day.item }}</p>
      <h3 class="text-lg">because</h3>
      <p class="text-base">{{ day.reason }}.</p>
      <img
        v-if="day.image_url"
        :src="`/${day.image_url}`"
        :alt="`gratitude day ${day.number} reason`"
        class="w-1/4 pt-4"
      />
      <hr />
      <small>#GiveThanks</small>
    </div>
    <nuxt-link to="/gratitude" class="flex items-center justify-center"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#4fb99f"
        width="14px"
        height="14px"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" /></svg
      >Back
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDay: this.$route.params.day,
      entries: [
        {
          number: 'one',
          item: 'boxed mac-n-cheese',
          reason:
            'it allows people in my family to quickly make dinner for all of us',
        },
        {
          number: 'two',
          item: 'online games, such as jackbox games',
          reason:
            'it creates fun, memorable times with friends and family near and far',
        },
      ],
    }
  },
  computed: {
    day() {
      // return this.entries.find((entry) => entry.number === this.currentDay)
      return this.$store.state.days.all.find(
        (day) => day.number === this.currentDay
      )
    },
  },
  head() {
    return {
      title: `Day of Gratitude 🍂 ${this.day.number}`,
      meta: [
        {
          name: 'twitter:title',
          content: `Day of Gratitude ${this.day.number}`,
        },
        {
          name: 'twitter:description ',
          content: "Heather Nuffer's gratitude journal",
        },
        {
          name: 'twitter:image',
          content: `https://nuxt-experiments.herokuapp.com/${this.day.image_url}`,
        },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
}
</script>
