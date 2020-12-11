<template>
  <div class="container flex flex-col mx-auto">
    <h1 class="text-3xl pb-6">Countdown to Christmas</h1>
    <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
      <AdventCard
        v-for="index in shuffledDates"
        :key="index"
        :date="index"
        :message="getRandomMessage()"
        :surprise-url="surpriseUrls[index]"
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
      messages: [
        'Ho Ho Ho',
        'Happy Day',
        'Greetings',
        'Be Merry',
        'Warm Wishes',
        'Blessings',
        'Hugs',
        'Merry',
        'Sparkle',
        'Shine',
        'Hooray!',
        'Happiness',
        'Stay warm!',
        'Glad Tidings',
        'Celebrate',
        'You are loved',
        'Wonder',
        'Smile!',
        'Good Tidings',
        'Let it Snow',
        'Be Jolly',
        'Believe',
        'Sugar & Spice',
      ],
      surpriseUrls: [
        'cat.gif',
        'donut.gif',
        'sweaterDog.png',
        'santaPenguin.png',
        'love.gif',
        'christmas_tree.png',
        'cat2.gif',
        'pinkTree.png',
        'snowflake.png',
        'cupcake.gif',
        'gingerbreadHouse.png',
        'santaFox.png',
        'catSnowman.png',
        'heart.gif',
        'candycaneCocoa2.png',
        'santaAvocado.gif',
        'reindeer.png',
        'gingerbreadPeople.png',
        'catWithLights.png',
        'candles.png',
        'santaPizza.gif',
        'angel.png',
        'santaDog.gif',
        'holyFamily.png',
        'stars.gif',
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
  methods: {
    getRandomMessage() {
      return this.messages[Math.floor(Math.random() * this.messages.length)]
    },
  },
}
</script>
