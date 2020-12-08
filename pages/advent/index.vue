<template>
  <div class="container flex flex-col">
    <h1 class="text-xl pb-6">Countdown to Christmas</h1>
    <div class="grid grid-cols-5 gap-4">
      <AdventCard
        v-for="index in shuffledDates"
        :key="index"
        :date="index"
        :message="index % 2 === 0 ? 'Ho ho ho' : 'Happy Day'"
        :surprise-url="index % 2 === 0 ? 'cat2.gif' : 'cat.gif'"
      />
    </div>
  </div>
</template>

<script>
import AdventCard from '~/components/AdventCard'
export default {
  components: {
    AdventCard,
  },
  data() {
    return {
      surpriseUrls: [
        'cat.gif',
        'christmas_tree.png',
        'cat2.gif',
        'pinkTree.png',
      ],
    }
  },
  computed: {
    shuffledDates() {
      const dates = [...Array(25).keys()]
      // Fisher Yates Shuffle
      for (let i = dates.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const k = dates[i]
        dates[i] = dates[j]
        dates[j] = k
      }
      return dates
    },
  },
}
</script>
