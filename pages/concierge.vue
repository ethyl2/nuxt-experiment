<template>
  <div class="mx-4 md:mx-40">
    <h1 class="text-3xl my-2 text-center">Concierge</h1>
    <img src="/magic-carpet.png" alt="magic carpet" class="w-40 mx-auto my-2" />
    <h2 class="text-lg text-center mb-2">
      Simply answer a few questions, roll dice, and be whisked off to a page
      that fits your interests!
    </h2>
    <form class="max-w-sm mx-auto" @submit.prevent="handleSubmit">
      <fieldset class="flex flex-col p-2 rounded border m-4">
        <legend class="font-medium">Do you like animals?</legend>
        <div>
          <input
            id="yesToAnimals"
            v-model="likesAnimals"
            type="radio"
            value="2"
            required
          />
          <label for="yesToAnimals">Yes</label>
        </div>
        <div>
          <input
            id="yesToCats"
            v-model="likesAnimals"
            type="radio"
            value="1"
            required
          />
          <label for="yesToCats">Only cats</label>
        </div>
        <div>
          <input
            id="noToAnimals"
            v-model="likesAnimals"
            type="radio"
            value="0"
            required
          />
          <label for="noToAnimals">No</label>
        </div>
      </fieldset>
      <fieldset class="flex flex-col p-2 rounded border m-4">
        <legend class="font-medium">Do you like music?</legend>
        <div>
          <input
            id="yesToMusic"
            v-model="likesMusic"
            type="radio"
            value="2"
            required
          />
          <label for="yesToMusic">Yes</label>
        </div>
        <div>
          <input
            id="yesToChristmas"
            v-model="likesMusic"
            type="radio"
            value="1"
            required
          />
          <label for="yesToChristmas">Only Christmas music</label>
        </div>
        <div>
          <input
            id="noToMusic"
            v-model="likesMusic"
            type="radio"
            value="0"
            required
          />
          <label for="noToMusic">No</label>
        </div>
      </fieldset>
      <fieldset class="flex flex-col p-2 rounded border m-4">
        <legend class="font-medium">What is your favorite STEM subject?</legend>
        <div>
          <input
            id="computers"
            v-model="stemSubject"
            type="radio"
            value="2"
            required
          />
          <label for="computers">Computer programming</label>
        </div>
        <div>
          <input
            id="chemistry"
            v-model="stemSubject"
            type="radio"
            value="1"
            required
          />
          <label for="chemistry">Chemistry</label>
        </div>
        <div>
          <input
            id="math"
            v-model="stemSubject"
            type="radio"
            value="0"
            required
          />
          <label for="math">Math</label>
        </div>
      </fieldset>
      <fieldset class="flex flex-col p-2 rounded border m-4">
        <legend class="font-medium">Which do you prefer?</legend>
        <div>
          <input id="sounds" v-model="sense" type="radio" value="2" required />
          <label for="sounds">Sounds</label>
        </div>
        <div>
          <input id="words" v-model="sense" type="radio" value="1" required />
          <label for="words">Words</label>
        </div>
        <div>
          <input id="colors" v-model="sense" type="radio" value="0" required />
          <label for="colors">Colors</label>
        </div>
        <div>
          <input
            id="numbers"
            v-model="sense"
            type="radio"
            value="-1"
            required
          />
          <label for="numbers">Numbers</label>
        </div>
      </fieldset>
      <fieldset class="flex flex-col p-2 rounded border m-4">
        <legend class="font-medium">Do you like to play games?</legend>
        <div>
          <input
            id="yesToGames"
            v-model="likesGames"
            type="radio"
            value="2"
            required
          />
          <label for="yesToGames">Yes</label>
        </div>
        <div>
          <input
            id="yesToGroupGames"
            v-model="likesGames"
            type="radio"
            value="1"
            required
          />
          <label for="yesToGroupGames">Only with a group of people</label>
        </div>
        <div>
          <input
            id="noToGames"
            v-model="likesGames"
            type="radio"
            value="0"
            required
          />
          <label for="noToGames">No</label>
        </div>
      </fieldset>

      <div class="flex flex-col justify-center items-center">
        <button
          type="button"
          class="text-2xl mb-2 hover:text-purple-400"
          @click="rollDice"
        >
          Roll Dice
        </button>
        <div class="flex justify-center items-center space-x-6 group">
          <div
            class="w-12 h-12 border bg-white rounded flex flex-wrap items-center justify-center group-hover:bg-purple-400 group-hover:border-purple-400 hover:bg-purple-400 hover:border-purple-400"
            @click="rollDice"
          >
            <div
              v-for="n in diceRoll1"
              :key="n"
              class="w-2 h-2 bg-black rounded-full m-1"
            ></div>
          </div>
          <div
            class="w-12 h-12 border bg-white rounded flex flex-wrap items-center justify-center group-hover:bg-purple-400 group-hover:border-purple-400 hover:bg-purple-400 hover:border-purple-400"
            @click="rollDice"
          >
            <div
              v-for="n in diceRoll2"
              :key="n"
              class="w-2 h-2 bg-black rounded-full m-1"
            ></div>
          </div>
        </div>
        <button
          type="submit"
          class="bg-black rounded py-2 px-4 m-4 text-2xl font-bold hover:bg-gray-900"
        >
          Let's Go!
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Concierge',
  data() {
    return {
      likesAnimals: null,
      likesMusic: null,
      stemSubject: null,
      sense: null,
      likesGames: null,
      diceRoll1: null,
      diceRoll2: null,
    }
  },
  mounted() {
    if (process.browser) {
      this.likesAnimals = localStorage.getItem('likesAnimals')
        ? localStorage.getItem('likesAnimals')
        : null
      this.likesMusic = localStorage.getItem('likesMusic')
        ? localStorage.getItem('likesMusic')
        : null
      this.likesGames = localStorage.getItem('likesGames')
        ? localStorage.getItem('likesGames')
        : null
      this.sense = localStorage.getItem('sense')
        ? localStorage.getItem('sense')
        : null
      this.stemSubject = localStorage.getItem('stemSubject')
        ? localStorage.getItem('stemSubject')
        : null
      this.diceRoll1 = localStorage.getItem('diceRoll1')
        ? parseInt(localStorage.getItem('diceRoll1'))
        : 4
      this.diceRoll2 = localStorage.getItem('diceRoll2')
        ? parseInt(localStorage.getItem('diceRoll2'))
        : 4
    }
  },
  methods: {
    handleSubmit() {
      if (process.browser) {
        localStorage.setItem('likesAnimals', this.likesAnimals)
        localStorage.setItem('likesMusic', this.likesMusic)
        localStorage.setItem('likesGames', this.likesGames)
        localStorage.setItem('sense', this.sense)
        localStorage.setItem('stemSubject', this.stemSubject)
        localStorage.setItem('diceRoll1', this.diceRoll1)
        localStorage.setItem('diceRoll2', this.diceRoll2)
      }
      const diceTotal = this.diceRoll1 + this.diceRoll2
      const pageTypeMap = {
        2: 'likesAnimals',
        3: 'likesAnimals',
        4: 'likesAnimals',
        5: 'stemSubject',
        6: 'stemSubject',
        7: 'likesMusic',
        8: 'likesGames',
        9: 'likesGames',
        10: 'sense',
        11: 'sense',
        12: 'sense',
      }
      let newPath = '/stem/cistercian-monk-numerals'
      let foundNewPath = false
      let pageType = pageTypeMap[diceTotal]

      if (pageType === 'likesAnimals') {
        if (this.likesAnimals === '2') {
          foundNewPath = true
          newPath = '/image-match-game'
        } else if (this.likesAnimals === '1') {
          newPath = '/quotes/cats'
          foundNewPath = true
        } else {
          pageType = 'sense'
        }
      }
      if (pageType === 'likesMusic') {
        if (this.likesMusic === '2') {
          newPath = '/songs'
          foundNewPath = true
        } else if (this.likesMusic === '1') {
          newPath = '/songs/christmas'
          foundNewPath = true
        } else {
          pageType = 'sense'
        }
      }
      if (pageType === 'likesGames') {
        if (this.likesGames === '2') {
          newPath = '/arts/madlibs'
          foundNewPath = true
        } else if (this.likesGames === '1') {
          newPath = '/thimble/start'
          foundNewPath = true
        } else {
          pageType = 'sense'
        }
      }
      if (pageType === 'stemSubject') {
        if (this.stemSubject === '2') {
          newPath = '/stem/case-styles'
          foundNewPath = true
        } else if (this.stemSubject === '1') {
          newPath = '/stem/elements'
          foundNewPath = true
        } else if (this.stemSubject === '0') {
          newPath = '/stem/binary'
          foundNewPath = true
        }
      }
      if (!foundNewPath) {
        if (this.sense === '2') {
          newPath = '/sound-machine'
        } else if (this.sense === '1') {
          newPath = '/arts/drag-and-drop'
        } else if (this.sense === '0') {
          newPath = '/arts/color-picker'
        }
      }
      this.$router.push({ path: newPath })
    },
    rollDice() {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          this.diceRoll1 = Math.floor(Math.random() * 6) + 1
          this.diceRoll2 = Math.floor(Math.random() * 6) + 1
        }, 250 * i)
      }
    },
  },
}
</script>
