<template>
  <div class="container flex flex-col space-y-2">
    <h2 class="text-xl">DAY {{ day.number.toUpperCase() }}</h2>
    <h3 class="text-lg">I'm thankful for</h3>
    <p class="text-base">{{ day.item }}</p>
    <h3 class="text-lg">because</h3>
    <p class="text-base">{{ day.reason }}.</p>
    <hr />
    <small>#GiveThanks</small>
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
      return this.entries.find((entry) => entry.number === this.currentDay)
    },
  },
}
</script>
