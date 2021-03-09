<template>
  <div class="container flex flex-col min-h-screen">
    <h1 class="text-3xl mb-4">Let's Play Thimble</h1>
    <div
      class="flex flex-col w-full justify-center items-center md:flex-row md:items-start md:space-x-10"
    >
      <div v-if="!itemWasGuessed && !playerGuessedDuplicate">
        <form
          class="flex flex-col space-y-2 mx-4 md:mx-0"
          @submit.prevent="submitGuess"
        >
          <legend class="text-lg text-teal-400 mb-2">
            <span class="font-bold">{{ guessers[currentPlayerIndex] }}</span
            >,<br />enter an item that fits in the category
            <span class="font-bold text-orange-500">{{ category }}</span
            >.<br />Don't pick anything that has already been guessed.
          </legend>
          <input
            v-model="currentGuess"
            type="text"
            class="text-black rounded p-2"
            required
          />
          <button
            type="submit"
            class="px-2 py-1 bg-black rounded mb-2 hover:bg-gray-900"
          >
            Submit Guess
          </button>
        </form>
        <div v-if="guesses.length" class="my-4">
          <h2 class="text-lg">Guesses So Far:</h2>
          <ul>
            <li v-for="guess in guesses" :key="guess">{{ guess }}</li>
          </ul>
        </div>
      </div>

      <div v-if="itemWasGuessed">
        <h2>{{ guessers[currentPlayerIndex] }} guessed correctly!</h2>
        <h3>
          Congratulations!? (That depends on whether
          {{ guessers[currentPlayerIndex] }} enjoys getting wet!)
        </h3>
        <p>{{ playerIt }}, get {{ guessers[currentPlayerIndex] }} wet!</p>
        <img src="/wet.gif" class="w-1/5 mx-auto py-2" alt="rain cloud" />
        <!-- <nuxt-link
          to="/thimble/start"
          class="px-2 py-1 bg-black rounded font-bold text-xl hover:bg-gray-900"
          >Play Again</nuxt-link
        > -->
        <button
          type="button"
          class="px-2 py-1 bg-black rounded font-bold text-xl hover:bg-gray-900"
          @click="setupForNextGame"
        >
          Play Again
        </button>
      </div>

      <div v-if="playerGuessedDuplicate">
        <h2>Oh no! Someone else already guessed {{ currentGuess }}!</h2>
        <p>{{ playerIt }}, get {{ guessers[currentPlayerIndex] }} wet!</p>
        <img src="/wet.gif" class="w-1/5 mx-auto py-2" alt="rain cloud" />
        <button
          type="button"
          class="px-2 py-1 bg-black rounded font-bold text-xl hover:bg-gray-900"
          @click="setupForNextGame"
        >
          Play Again
        </button>
      </div>
      <!-- TABLE SECTION -->
      <div class="flex flex-col items-center justify-center">
        <table v-if="players && players.length" class="table-auto">
          <caption class="text-lg text-teal-400">
            Players:
          </caption>
          <tr>
            <th class="px-4 py-2">#</th>
            <th class="px-4 py-2">Name</th>
            <th class="px-4 py-2">Role</th>
          </tr>
          <tr v-for="(player, index) in players" :key="`${player}-${index}`">
            <td class="border px-4 py-2">{{ index + 1 }}</td>
            <td class="border px-4 py-2">{{ player }}</td>
            <td
              class="border px-4 py-2"
              :class="{ 'text-orange-400': role(player) === 'Current Guesser' }"
            >
              {{ role(player) }}
            </td>
          </tr>
        </table>
        <p v-if="category" class="border p-2 mt-4 text-teal-400 text-xl">
          Category: {{ category }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayThimble',
  data() {
    return {
      players: [],
      currentPlayerIndex: 1,
      currentGuess: '',
      guesses: [],
      correctItem: '',
      category: '',
      itemWasGuessed: false,
      playerGuessedDuplicate: false,
      playerIt: '',
    }
  },
  computed: {
    guessers() {
      return this.players.filter((player) => player !== this.playerIt)
    },
  },
  mounted() {
    if (process.browser) {
      this.players = localStorage.getItem('players')
        ? localStorage.getItem('players').split(',')
        : []
      this.category = localStorage.getItem('category')
        ? localStorage.getItem('category')
        : ''
      this.correctItem = localStorage.getItem('item')
        ? localStorage.getItem('item')
        : ''
      this.playerIt = localStorage.getItem('playerIt')
        ? localStorage.getItem('playerIt')
        : ''
    }
    window.onNuxtReady(() => {
      if (!this.players.length) {
        window.$nuxt.$router.push('/thimble/start')
      }
    })
  },
  methods: {
    submitGuess() {
      if (
        this.currentGuess.trim().toLowerCase() ===
        this.correctItem.toLowerCase()
      ) {
        this.itemWasGuessed = true
      } else if (this.guesses.includes(this.currentGuess)) {
        this.playerGuessedDuplicate = true
      } else {
        this.currentPlayerIndex =
          (this.currentPlayerIndex + 1) % this.guessers.length
        this.guesses.push(this.currentGuess)
        this.currentGuess = ''
      }
    },
    setupForNextGame() {
      if (process.browser) {
        localStorage.setItem('playerIt', this.guessers[this.currentPlayerIndex])
      }
      window.$nuxt.$router.push('/thimble/start')
    },
    role(player) {
      if (player === this.playerIt) {
        return 'It'
      } else if (player === this.guessers[this.currentPlayerIndex]) {
        return 'Current Guesser'
      } else {
        return 'Guesser'
      }
    },
  },
}
</script>
