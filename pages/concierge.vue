<template>
  <div class="mx-4 md:mx-10">
    <h1>Concierge</h1>
    <h2>
      Simply answer a few questions, roll dice, and be whisked off to a page
      that fits your interests!
    </h2>
    <form @submit.prevent="handleSubmit">
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
          <label for="yesToCats">Only Cats</label>
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
          <label for="yesToChristmas">Only Christmas Music</label>
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
          <label for="computers">Computer Programming</label>
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
          <label for="yesToGroupGames">Only With a Group of People</label>
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
        <button type="button" class="mb-2" @click="rollDice">Roll Dice</button>
        <div class="flex justify-center items-center space-x-6">
          <div
            class="w-12 h-12 border bg-white rounded flex flex-wrap items-center justify-center"
            @click="rollDice"
          >
            <div
              v-for="n in diceRoll1"
              :key="n"
              class="w-2 h-2 bg-black rounded-full m-1"
            ></div>
          </div>
          <div
            class="w-12 h-12 border bg-white rounded flex flex-wrap items-center justify-center"
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
          class="bg-black rounded py-1 px-2 m-2 hover:bg-gray-900"
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
      diceRoll1: 4,
      diceRoll2: 4,
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
      }
      const diceTotal = this.diceRoll1 + this.diceRoll2
      const pageTypeMap = {
        2: 'likesAnimals',
        3: 'likesAnimals',
        4: 'stemSubject',
        5: 'stemSubject',
        6: 'likesMusic',
        7: 'likesMusic',
        8: 'likesGames',
        9: 'likesGames',
        10: 'sense',
        11: 'sense',
        12: 'sense',
      }
      let pageType = pageTypeMap[diceTotal]
      console.log(diceTotal)
      console.log(pageType)
      if (pageType === 'likesAnimals') {
        console.log('in likesAnimals')
        if (this.likesAnimals === '2') {
          console.log('in likesAnimals = 2')
          location.replace('/image-match-game')
        } else if (this.likesAnimals === '1') {
          console.log('in likesAnimals = 1')
          location.replace('/quotes/cats')
        } else {
          console.log('in likesAnimals = 0')
          pageType = 'sense'
        }
      }
      if (pageType === 'likesMusic') {
        console.log('in likesMusic')
        if (this.likesMusic === '2') {
          console.log('in likesMusic = 2')
          location.replace('/songs')
        } else if (this.likesMusic === '1') {
          console.log('in likesMusic = 1')
          location.replace('/songs/christmas')
          console.log('still in likesMusic = 1')
        } else {
          console.log('in likesMusic = 0')
          pageType = 'sense'
        }
      }
      if (pageType === 'likesGames') {
        console.log('in likesGames')
        if (this.likesGames === '2') {
          location.replace('/arts/madlibs')
        } else if (this.likesGames === '1') {
          location.replace('/thimble/start')
        } else {
          pageType = 'sense'
        }
      }
      if (pageType === 'stemSubject') {
        console.log('in stemSubject')
        if (this.stemSubject === '2') {
          location.replace('/stem/case-styles')
        } else if (this.stemSubject === '1') {
          location.replace('/stem/elements')
        } else {
          location.replace('/stem/binary')
        }
      }
      if (this.sense === '2') {
        location.replace('/sound-machine')
      } else if (this.sense === '1') {
        location.replace('/arts/drag-and-drop')
      } else if (this.sense === '0') {
        location.replace('/arts/color-picker')
      } else {
        location.replace('/stem/cistercian-monk-numerals')
      }
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
