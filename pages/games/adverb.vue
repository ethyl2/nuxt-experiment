<template>
  <div class="flex flex-col min-h-screen">
    <div class="container flex flex-col">
      <!-- Instructions -->
      <h1 class="text-xl font-bold md:text-3xl mb-4">How to Play Adverb</h1>
      <h2 class="text-lg md:text-2xl mb-4">
        <em>Adverb</em> is a group game that is definitely one of my favorites.
        Here's how you can play with your friends:
      </h2>
      <ol
        class="list-decimal list-inside text-left space-y-2 border border-yellow-400 rounded p-4 mb-4 bg-black mx-2 md:mx-auto"
      >
        <li>Sit in a circle so that everyone can see each other.</li>
        <li>Choose someone to be <em>it</em>.</li>
        <li>
          After explaining the rules, have <em>it</em> leave the room and go
          somewhere where they can't hear the group.
        </li>
        <li>
          When <em>it</em> is gone, choose an adverb -- a word that ends in -ly
          and describes an action, such as <em>mysteriously</em>.
        </li>
        <li>Have <em>it</em> come back into the room.</li>
        <li>
          <em>It</em> will now tell a person or people in the group to do an
          action, such as 'Phineas, go shake hands with Ferb.'
        </li>
        <li>
          The people chosen to do the action then do it in the manner of the
          adverb. In our example, they would shake hands mysteriously.
        </li>
        <li>
          After they finish, <em>it</em> gets a chance to guess the adverb.
        </li>
        <li>
          If <em>it</em> is correct, the person chosen to do the action will be
          <em>it</em> for the next round.
        </li>
        <li>
          Otherwise, <em>it</em> picks a new person or people to do another
          thing in the manner of the adverb.
        </li>
      </ol>
    </div>
    <!-- Adverb Suggestions -->
    <h3 class="text-xl mb-2 font-bold px-4 text-center md:text-2xl">
      Adverb Suggestions
    </h3>
    <div
      class="flex items-center justify-center flex-wrap px-4 sm:justify-between"
    >
      <adverb-card
        v-for="(adverb, index) in adverbsToDisplay"
        :key="adverb.word"
        :card="adverb"
        :index="index"
      />
    </div>
    <!-- Buttons -->
    <div
      class="flex flex-col items-center justify-center px-2 md:flex-row md:space-x-4 md:px-0"
    >
      <div class="flex items-stretch justify-center space-x-4 w-full md:w-auto">
        <button
          v-if="showMoreButton"
          class="bg-black font-bold py-2 px-3 rounded w-1/2 hover:text-black hover:bg-white my-1 md:my-2 text-base md:text-lg md:w-auto"
          @click="showAdverbs()"
        >
          ➕ More Adverbs
        </button>
        <button
          v-if="adverbsToDisplay"
          class="bg-black font-bold py-2 px-3 rounded w-1/2 hover:text-black hover:bg-white my-1 md:my-2 text-base md:text-lg md:w-auto"
          @click="showLess()"
        >
          ➖ Less Adverbs
        </button>
      </div>
      <div class="flex items-stretch justify-center space-x-4 w-full md:w-auto">
        <button
          class="bg-black text-yellow-400 font-bold py-2 px-3 w-1/2 rounded hover:text-black hover:bg-white my-1 md:my-2 text-base md:text-lg md:w-auto"
          @click="getSuggestion()"
        >
          🎁 Get Suggestion
        </button>
        <button
          class="bg-black font-bold py-2 px-3 w-1/2 rounded hover:text-black hover:bg-white my-1 md:my-2 text-base md:text-lg md:w-auto"
          @click="alphabetize()"
        >
          🔤 Alphabetize
        </button>
      </div>
    </div>
    <!-- Adverb Suggestion -->
    <div class="flex items-center justify-center w-full mx-auto">
      <div
        v-if="suggestedAdverb"
        class="bg-black mt-4 rounded p-4 flex flex-col items-center justify-center border border-yellow-400"
      >
        <p class="text-white text-center">How about...</p>
        <adverb-card :card="suggestedAdverb" />
      </div>
    </div>
    <!-- Action Suggestions -->
    <div class="mt-6 mx-2 md:mx-12">
      <h3 class="text-xl mb-2 font-bold px-4 text-center md:text-2xl">
        Action Suggestions
      </h3>
      <p class="italic text-lg mb-2">
        Definitely use props around you, if you want. Some of things can be done
        irl, others might be pantomimed or acted out.
      </p>
      <ul>
        <li>Call a parent.</li>
        <li>Sing a lullabye.</li>
        <li>Draw a picture.</li>
        <li>Grab something to eat from the fridge.</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdverbGame',
  components: {
    AdverbCard: () => import('~/components/games/AdverbCard'),
  },
  data() {
    return {
      adverbsToDisplay: [],
      countToDisplay: 0,
      numberToIncrement: 0,
      showMoreButton: true,
      colors: [
        '#faf089',
        '#68d391',
        '#4fd1c5',
        '#63b3ed',
        '#7f9cf5',
        'white',
        '#f6ad55',
        '#30D5C8',
        '#F28C28',
        '#FFC000',
        '#7a49a5',
      ],
      suggestedAdverb: null,
    }
  },
  computed: {
    adverbs() {
      const adverbsFromStoreCopy = JSON.parse(
        JSON.stringify(this.$store.state.adverbs.adverbs)
      )
      adverbsFromStoreCopy.sort(() => 0.5 - Math.random())
      return adverbsFromStoreCopy
    },
  },
  mounted() {
    const countOfCardsInRow = Math.floor(window.innerWidth / 160) - 1
    this.countToDisplay = countOfCardsInRow
    this.numberToIncrement = countOfCardsInRow

    const adverbsToUse = this.adverbs.slice(0, countOfCardsInRow)
    this.adverbsToDisplay = adverbsToUse.map((adverb) => {
      return {
        word: typeof adverb === 'object' ? adverb.word : adverb,
        flipped: false,
        definition: adverb.definition,
        image:
          typeof adverb === 'object' && adverb.image
            ? adverb.image
            : '/adverbs/mysteriously.jpg',
        color: this.getColor(),
      }
    })
  },
  methods: {
    showAdverbs() {
      if (this.countToDisplay + this.numberToIncrement <= this.adverbs.length) {
        this.countToDisplay += this.numberToIncrement
        const adverbsToUse = this.adverbs.slice(0, this.countToDisplay)
        this.adverbsToDisplay = adverbsToUse.map((adverb) => {
          return {
            word: typeof adverb === 'object' ? adverb.word : adverb,
            flipped: false,
            definition: adverb.definition,
            image:
              typeof adverb === 'object' && adverb.image
                ? adverb.image
                : '/adverbs/mysteriously.jpg',
            color: this.getColor(),
          }
        })
      } else {
        this.showMoreButton = false
      }
    },
    showLess() {
      if (this.countToDisplay >= this.numberToIncrement) {
        this.countToDisplay -= this.numberToIncrement
        this.adverbsToDisplay = this.adverbsToDisplay.slice(
          0,
          -Math.abs(this.numberToIncrement)
        )
      }
    },
    alphabetize() {
      this.adverbsToDisplay.sort((a, b) => (a.word > b.word ? 1 : -1))
    },
    getColor() {
      const colorIndex = Math.floor(Math.random() * this.colors.length)
      return this.colors[colorIndex]
    },
    getSuggestion() {
      ;[0, 500, 1000].forEach((timeInterval) => {
        setTimeout(() => {
          const adverbIndex = Math.floor(Math.random() * this.adverbs.length)
          this.suggestedAdverb = {
            word:
              typeof this.adverbs[adverbIndex] === 'object'
                ? this.adverbs[adverbIndex].word
                : this.adverbs[adverbIndex],
            flipped: false,
            definition: this.adverbs[adverbIndex].definition,
            image:
              typeof this.adverbs[adverbIndex] === 'object' &&
              this.adverbs[adverbIndex].image
                ? this.adverbs[adverbIndex].image
                : '/adverbs/mysteriously.jpg',
            color: this.getColor(),
          }
        }, timeInterval)
      })
    },
  },
}
</script>
