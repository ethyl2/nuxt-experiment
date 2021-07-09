/* eslint-disable vue/no-v-html */
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<template>
  <div class="flex flex-col min-h-screen">
    <div class="container flex flex-col items-center justify-start">
      <!-- Instructions -->
      <h1 class="text-xl font-bold md:text-3xl mb-4">How to Play Adverb</h1>
      <h2 class="text-lg md:text-2xl text-orange-500">
        <em>Adverb</em> is a group game that is definitely one of my favorites.
      </h2>
      <h2 class="text-lg md:text-2xl mb-4 text-orange-500">
        Here's how you can play with your friends:
      </h2>
      <div class="flex items-stretch justify-center space-x-4 mb-2 md:hidden">
        <button
          class="bg-black text-yellow-400 font-bold py-2 px-3 rounded w-1/2 hover:text-black hover:bg-white my-1 text-base flex items-center justify-center"
          @click="backStep()"
        >
          <span>⬅️</span><span>Previous Step</span>
        </button>
        <button
          class="bg-black font-bold py-2 px-3 rounded w-1/2 hover:text-black hover:bg-white my-1 text-base"
          @click="advanceStep()"
        >
          Next Step ➡️
        </button>
      </div>
      <div
        class="border border-yellow-400 bg-black rounded md:space-x-4 p-2 mb-4 w-2/3 mx-auto flex items-center justify-around overflow-y-auto md:p-4"
        style="height: 200px"
      >
        <button
          class="hidden md:flex flex-shrink-0 flex-col items-center justify-center border text-yellow-400 bg-black font-bold py-2 px-1 rounded my-2 text-lg hover:text-black hover:bg-white"
          @click="backStep()"
        >
          <span>⬅️</span>
          <span>Previous Step</span>
        </button>
        <div class="flex-shrink text-base md:text-lg pt-6 md:pt-2">
          <span>{{ currentStepIndex + 1 }}.</span>
          <span v-html="steps[currentStepIndex]"></span>
        </div>
        <button
          class="hidden md:flex flex-shrink-0 flex-col items-center justify-center border text-yellow-400 bg-black font-bold py-2 px-1 rounded my-2 text-lg hover:text-black hover:bg-white"
          @click="advanceStep()"
        >
          <span>➡️</span>
          <span>Next Step</span>
        </button>
      </div>
      <div class="flex items-stretch justify-center space-x-4 mx-4">
        <button
          class="bg-black text-white font-bold py-2 px-3 w-1/2 rounded mx-auto hover:text-black hover:bg-white text-base md:text-lg md:w-auto"
          @click="toggleShowAllSteps()"
        >
          👀 {{ showAllSteps ? 'Hide' : 'Show' }} All Steps
        </button>
        <button
          class="bg-black text-yellow-400 font-bold py-2 px-3 w-1/2 rounded mx-auto hover:text-black hover:bg-white text-base md:text-lg md:w-auto"
        >
          <a href="/adverb_game_instructions.pdf" download=""
            >🖨️ Download Instructions Printable</a
          >
        </button>
      </div>
      <transition name="fade">
        <ol
          v-if="showAllSteps"
          class="list-decimal list-inside text-left space-y-2 border border-yellow-400 rounded p-4 mb-4 bg-black mx-2 mt-6 lg:mx-auto"
        >
          <li v-for="step in steps" :key="step" v-html="step"></li>
        </ol>
      </transition>
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
      class="flex flex-col items-center justify-center px-2 mt-2 md:flex-row md:space-x-4 lg:px-0"
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
          🎁 Get Adverb Suggestion
        </button>
        <button
          class="bg-black font-bold py-2 px-3 w-1/2 rounded hover:text-black hover:bg-white my-1 md:my-2 text-base md:text-lg md:w-auto"
          @click="alphabetize()"
        >
          🔤 Alphabetize
        </button>
      </div>
      <div class="flex items-center justify-center">
        <button
          class="bg-black text-yellow-400 font-bold py-2 px-3 w-1/2 rounded mx-auto hover:text-black hover:bg-white text-base md:text-lg md:w-auto"
        >
          <a href="/adverb_suggestions.pdf" download=""
            >🖨️ Download Adverbs Printable</a
          >
        </button>
      </div>
    </div>
    <!-- Adverb Suggestion -->
    <div class="flex items-center justify-center w-full mx-auto mb-6">
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
      <p class="italic text-lg mb-2 text-center">
        Definitely use props around you, if you want. Some of things can be done
        irl, others might be pantomimed or acted out.
      </p>
      <ul
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
      >
        <li
          v-for="action in actionsToDisplay"
          :key="action"
          class="bg-black px-2 py-1 font-bold m-1 rounded"
          :style="{ color: `${getColor()}`, border: `1px solid ${getColor()}` }"
        >
          {{ action }}
        </li>
      </ul>
      <!-- Buttons -->
      <div
        class="flex flex-col items-center justify-center space-y-2 mt-6 md:space-y-0 md:flex-row md:space-x-2"
      >
        <div class="flex items-stretch justify-center space-x-2">
          <button
            v-if="actionsToDisplay.length + 6 < actions.length"
            class="bg-black font-bold py-2 px-3 rounded w-1/2 hover:text-black hover:bg-white text-base md:text-lg md:w-auto"
            @click="showActions()"
          >
            ➕ More Actions
          </button>
          <button
            v-if="actionsToDisplay.length"
            class="bg-black font-bold py-2 px-3 rounded w-1/2 hover:text-black hover:bg-white text-base md:text-lg md:w-auto"
            @click="showLessActions()"
          >
            ➖ Less Actions
          </button>
        </div>
        <div class="flex items-stretch justify-center space-x-2">
          <button
            class="bg-black text-yellow-400 font-bold py-2 px-3 w-1/2 rounded mx-auto hover:text-black hover:bg-white text-base md:text-lg md:w-auto"
            @click="getActionSuggestion()"
          >
            🎁 Get Action Suggestion
          </button>
          <button
            class="bg-black text-yellow-400 font-bold py-2 px-3 w-1/2 rounded mx-auto hover:text-black hover:bg-white text-base md:text-lg md:w-auto"
          >
            <a href="/action_suggestions.pdf" download=""
              >🖨️ Download Actions Printable</a
            >
          </button>
        </div>
      </div>
      <!-- Action Suggestion -->
      <div class="flex items-center justify-center w-full mx-auto mt-6">
        <div
          v-if="suggestedAction"
          class="bg-black mt-4 rounded p-4 flex flex-col items-center justify-center border border-yellow-400"
        >
          <p class="text-white text-center">How about...</p>
          <p class="text-2xl font-bold text-orange-400">
            {{ suggestedAction }}
          </p>
        </div>
      </div>
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
      showAllSteps: false,
      adverbsToDisplay: [],
      countToDisplay: 0,
      numberToIncrement: 0,
      showMoreButton: true,
      suggestedAdverb: null,
      countActionsToDisplay: 6,
      actionsToDisplay: [],
      suggestedAction: null,
      currentStepIndex: 0,
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
    actions() {
      const actionsFromStoreCopy = JSON.parse(
        JSON.stringify(this.$store.state.adverbs.actions)
      )
      actionsFromStoreCopy.sort(() => 0.5 - Math.random())
      return actionsFromStoreCopy
    },
    adverbsAlphabetical() {
      const adverbsFromStoreCopy = JSON.parse(
        JSON.stringify(this.$store.state.adverbs.adverbs)
      )
      adverbsFromStoreCopy.sort((a, b) => (a.word > b.word ? 1 : -1))
      return adverbsFromStoreCopy
    },
    steps() {
      return this.$store.state.adverbs.steps
    },
    colors() {
      return this.$store.state.adverbs.colors
    },
  },
  mounted() {
    let countOfCardsInRow = Math.floor(window.innerWidth / 160) - 1
    if (countOfCardsInRow > 4) {
      countOfCardsInRow--
    }
    this.numberToIncrement = countOfCardsInRow
    this.countToDisplay = countOfCardsInRow

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
    this.actionsToDisplay = this.actions.slice(0, this.countActionsToDisplay)
  },
  methods: {
    toggleShowAllSteps() {
      this.showAllSteps = !this.showAllSteps
    },
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
    showActions() {
      if (this.countActionsToDisplay + 6 <= this.actions.length) {
        this.countActionsToDisplay += 6
        this.actionsToDisplay = this.actions.slice(
          0,
          this.countActionsToDisplay
        )
      }
    },
    showLessActions() {
      if (this.countActionsToDisplay >= 6) {
        this.countActionsToDisplay -= 6
        this.actionsToDisplay = this.actionsToDisplay.slice(0, -6)
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
    getActionSuggestion() {
      const actionIndex = Math.floor(Math.random() * this.actions.length)
      this.suggestedAction = this.actions[actionIndex]
    },
    backStep() {
      this.currentStepIndex--
      if (this.currentStepIndex < 0) {
        this.currentStepIndex = this.steps.length - 1
      }
    },
    advanceStep() {
      this.currentStepIndex = (this.currentStepIndex + 1) % this.steps.length
    },
  },
}
</script>
