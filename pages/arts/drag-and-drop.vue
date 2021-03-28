<template>
  <div class="m-2 md:m-10">
    <header class="mb-2">
      <h1 class="text-lg text-center text-bold md:text-3xl">
        Words We Love Vs. Words We Hate
      </h1>
      <p class="hidden text-center text-base p-2 md:text-xl md:block">
        Sort these words by dragging them to the columns that feel best to you.
      </p>
      <p class="text-center text-sm md:hidden">
        <nuxt-link :to="{ path: '/arts/drag-and-drop', hash: '#move' }"
          >Move</nuxt-link
        >
        these words into the columns that feel best to you, and
        <nuxt-link :to="{ path: '/arts/drag-and-drop', hash: '#add' }"
          >add</nuxt-link
        >
        more words, too.
      </p>
    </header>

    <main class="flex w-full">
      <div
        class="drop-zone rounded bg-red-500 pb-2 m-1 w-1/4 overflow-x-auto md:m-2"
        @drop="onDrop($event, 1)"
        @dragover.prevent
        @dragenter.prevent
      >
        <p class="p-2 text-sm text-bold md:text-lg">Words I hate:</p>
        <div
          v-for="item in listOne"
          :key="item.id"
          class="drag-el text-xs p-1 mb-1 ml-1 bg-black rounded w-auto inline-block md:text-base md:p-2 md:m-2"
          draggable
          @dragstart="startDrag($event, item)"
        >
          {{ item.title }}
        </div>
      </div>

      <div
        class="drop-zone rounded bg-orange-500 pb-2 m-1 w-1/4 overflow-x-auto md:m-2"
        @drop="onDrop($event, 2)"
        @dragover.prevent
        @dragenter.prevent
      >
        <p class="p-2 text-sm text-bold md:text-lg">
          Words I'm indifferent to:
        </p>
        <div
          v-for="item in listTwo"
          :key="item.id"
          class="drag-el text-xs p-1 mb-1 ml-1 bg-black rounded w-auto inline-block md:text-base md:p-2 md:m-2"
          draggable
          @dragstart="startDrag($event, item)"
        >
          {{ item.title }}
        </div>
      </div>

      <div
        class="drop-zone rounded bg-teal-500 pb-2 m-1 w-1/4 overflow-x-auto md:m-2"
        @drop="onDrop($event, 3)"
        @dragover.prevent
        @dragenter.prevent
      >
        <p class="p-2 text-sm text-bold md:text-lg">Words I like:</p>
        <div
          v-for="item in listThree"
          :key="item.id"
          class="drag-el text-xs p-1 mb-1 ml-1 bg-black rounded w-auto inline-block md:text-base md:p-2 md:m-2"
          draggable
          @dragstart="startDrag($event, item)"
        >
          {{ item.title }}
        </div>
      </div>

      <div
        id="love-words"
        class="drop-zone rounded bg-green-500 pb-2 m-1 w-1/4 overflow-x-auto md:m-2"
        @drop="onDrop($event, 4)"
        @dragover.prevent
        @dragenter.prevent
      >
        <p class="p-2 text-sm text-bold md:text-lg">Words I love:</p>
        <div
          v-for="item in listFour"
          :key="item.id"
          class="drag-el text-xs p-1 mb-1 ml-1 bg-black rounded w-auto inline-block md:text-base md:p-2 md:m-2"
          draggable
          @dragstart="startDrag($event, item)"
        >
          {{ item.title }}
        </div>
      </div>
    </main>

    <!-- Shuffle Section -->
    <section>
      <div class="flex justify-center align-center m-2">
        <button
          type="button"
          class="border rounded text-xs p-1 mx-auto hover:bg-gray-700 md:text-base"
          @click="shuffleWords"
        >
          Shuffle Words
        </button>
      </div>
    </section>

    <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center">
      <!-- Move Words Section -->
      <section>
        <h2 id="move" class="text-base text-center mt-3 mb-2 md:text-2xl">
          Move Word
        </h2>
        <form
          class="flex flex-col justify-center items-center space-y-2 mx-auto w-5/6 md:flex-row md:space-x-2 md:space-y-0"
          @submit.prevent="moveWord"
        >
          <div class="flex justify-center items-center space-x-2">
            <select
              v-model="wordToMove"
              class="text-black p-1 rounded text-xs md:text-base md:p-2"
              required
            >
              <option value="-" selected disabled class="text-xs md:text-base">
                Pick a word:
              </option>
              <option
                v-for="item in sortedItems"
                :key="item.id"
                :value="item.id"
                class="text-xs md:text-base"
              >
                {{ item.title }}
              </option>
            </select>

            <select
              v-model="listToMoveTo"
              class="text-black p-1 rounded text-xs md:text-base md:p-2"
              required
            >
              <option value="-" selected disabled class="text-xs md:text-base">
                Choose a list:
              </option>
              <option value="1" class="text-xs md:text-base">Hate list</option>
              <option value="2" class="text-xs md:text-base">
                Indifferent list
              </option>
              <option value="3" class="text-xs md:text-base">Like list</option>
              <option value="4" class="text-xs md:text-base">Love list</option>
              <option value="random" class="text-xs md:text-base">
                Random
              </option>
            </select>
            <button
              type="submit"
              class="border rounded p-1 mx-1 text-xs md:text-base hover:bg-gray-700"
            >
              Move
            </button>
          </div>
        </form>
      </section>

      <!-- Delete Words Section -->
      <section>
        <h2 id="move" class="text-base text-center mt-3 mb-2 md:text-2xl">
          Delete Word
        </h2>
        <form
          class="flex justify-center items-center mx-auto w-5/6 md:flex-row space-x-2"
          @submit.prevent="deleteWord"
        >
          <select
            v-model="wordToDelete"
            class="text-black p-1 rounded text-xs md:text-base md:p-2"
            required
          >
            <option value="-" selected disabled class="text-xs md:text-base">
              Pick a word:
            </option>
            <option
              v-for="item in sortedItems"
              :key="item.id"
              :value="item.id"
              class="text-xs md:text-base"
            >
              {{ item.title }}
            </option>
          </select>

          <button
            type="submit"
            class="border rounded text-xs p-1 mx-1 hover:bg-gray-700 md:text-base"
          >
            Delete
          </button>
        </form>
      </section>

      <!-- Add Words Section -->
      <section>
        <h2 id="add" class="text-base text-center mt-3 mb-2 md:text-2xl">
          Add More Words
        </h2>
        <form
          class="flex justify-center items-center mx-auto w-5/6 space-x-2"
          @submit.prevent="addWord"
        >
          <input
            v-model="newWord"
            type="text"
            class="text-black p-1 rounded text-xs md:text-base md:p-2"
            placeholder="your word"
            required
          />

          <select
            v-model="listForNewWord"
            class="text-black p-1 rounded text-xs md:text-base md:p-2"
            required
          >
            <option
              value="-"
              selected
              disabled
              hidden
              class="text-xs md:text-base"
            >
              Choose a list:
            </option>
            <option value="1" class="text-xs md:text-base">Hate list</option>
            <option value="2" class="text-xs md:text-base">
              Indifferent list
            </option>
            <option value="3" class="text-xs md:text-base">Like list</option>
            <option value="4" class="text-xs md:text-base">Love list</option>
            <option value="random" class="text-xs md:text-base">Random</option>
          </select>
          <button
            type="submit"
            class="border rounded mx-1 p-1 text-xs hover:bg-gray-700 md:text-base"
          >
            Add
          </button>
        </form>
      </section>
    </div>

    <!-- Definition Lookup Section -->
    <section>
      <h2 id="move" class="text-base text-center mt-3 mb-2 md:text-2xl">
        Get Definition of Word
      </h2>
      <form
        class="flex justify-center items-center mx-auto w-5/6 md:flex-row space-x-2"
        @submit.prevent="getDefinition"
      >
        <select
          v-model="wordToLookUp"
          class="text-black p-1 rounded text-xs md:text-base md:p-2"
          required
        >
          <option value="-" selected disabled class="text-xs md:text-base">
            Pick a word:
          </option>
          <option
            v-for="item in sortedItems"
            :key="item.id"
            :value="item.title"
            class="text-xs md:text-base"
          >
            {{ item.title }}
          </option>
        </select>

        <button
          type="submit"
          class="border rounded text-xs p-1 mx-1 hover:bg-gray-700 md:text-base"
        >
          Look Up
        </button>
      </form>
      <div v-if="lookUpIsPending" class="flex justify-center items-center py-2">
        <loading-spinner />
      </div>
      <div
        v-if="definitions.length && !lookUpIsPending"
        class="text-center pt-2"
      >
        <div
          class="flex justify-center items-center mx-auto text-center space-x-1"
        >
          <button v-if="audioUrl.length" type="button" @click="playAudio">
            🗨️
          </button>
          <h3 class="text-sm md:text-lg">{{ definitionTitle }}</h3>
        </div>
        <ul>
          <li
            v-for="(definition, index) in definitions"
            :key="`definition-${index}`"
            class="text-xs md:text-base"
          >
            🟠 {{ definition }}
          </li>
        </ul>
      </div>
      <p v-if="errorMessage" class="text-center m-1">{{ errorMessage }}</p>
    </section>
    <nuxt-link to="#love-words">
      <img
        src="/say-love-dark.png"
        class="w-40 rounded mx-auto my-8"
        alt="speech bubble saying love"
      />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'DragAndDrop',
  components: {
    LoadingSpinner: () => import('~/components/LoadingSpinner'),
  },
  data() {
    return {
      newWord: '',
      listForNewWord: '-',
      wordToMove: '-',
      listToMoveTo: '-',
      wordToDelete: '-',
      wordToLookUp: '-',
      definitionTitle: '',
      definitions: [],
      lookUpIsPending: false,
      errorMessage: '',
      audioUrl: '',
      audio: null,
      items: [
        {
          id: 0,
          title: 'Chunky',
          list: 1,
        },
        {
          id: 1,
          title: 'Pustule',
          list: 2,
        },
        {
          id: 2,
          title: 'Moist',
          list: 3,
        },
        {
          id: 3,
          title: 'Fester',
          list: 4,
        },
        {
          id: 4,
          title: 'Clog',
          list: 1,
        },
        {
          id: 16,
          title: 'Curd',
          list: 2,
        },
        {
          id: 5,
          title: 'Secrete',
          list: 3,
        },
        {
          id: 6,
          title: 'Mucus',
          list: 4,
        },
        {
          id: 7,
          title: 'Phlegm',
          list: 1,
        },
        {
          id: 8,
          title: 'Ointment',
          list: 2,
        },
        {
          id: 9,
          title: 'Flaccid',
          list: 3,
        },
        {
          id: 10,
          title: 'Fresh',
          list: 4,
        },
        {
          id: 11,
          title: 'Relief',
          list: 1,
        },
        {
          id: 12,
          title: 'Comfortable',
          list: 2,
        },
        {
          id: 18,
          title: 'Serendipity',
          list: 3,
        },
        {
          id: 19,
          title: 'Mellifluous',
          list: 4,
        },
        {
          id: 20,
          title: 'Discombobulated',
          list: 1,
        },
        {
          id: 23,
          title: 'Twinkle',
          list: 4,
        },
        {
          id: 25,
          title: 'Ineffable',
          list: 2,
        },
        {
          id: 26,
          title: 'Nefarious',
          list: 3,
        },
        {
          id: 31,
          title: 'Ethereal',
          list: 3,
        },
        {
          id: 28,
          title: 'Sonorous',
          list: 4,
        },
        {
          id: 33,
          title: 'Epiphany',
          list: 2,
        },
        {
          id: 34,
          title: 'Supine',
          list: 3,
        },
        {
          id: 35,
          title: 'Unicorn',
          list: 4,
        },
      ],
    }
  },
  computed: {
    listOne() {
      return this.items.filter((item) => item.list === 1)
    },
    listTwo() {
      return this.items.filter((item) => item.list === 2)
    },
    listThree() {
      return this.items.filter((item) => item.list === 3)
    },
    listFour() {
      return this.items.filter((item) => item.list === 4)
    },
    sortedItems() {
      return [...this.items].sort((a, b) => (a.title > b.title ? 1 : -1))
    },
  },
  methods: {
    startDrag: (evt, item) => {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('itemID', item.id)
    },
    onDrop(evt, list) {
      const itemID = evt.dataTransfer.getData('itemID')
      const itemDropped = this.items.find(
        (item) => parseInt(item.id) === parseInt(itemID)
      )
      itemDropped.list = list
    },
    addWord() {
      const newItem = {}
      newItem.id = this.items.length
      newItem.list =
        this.listForNewWord === 'random'
          ? Math.floor(Math.random() * 4) + 1
          : parseInt(this.listForNewWord)
      newItem.title =
        this.newWord.charAt(0).toUpperCase() + this.newWord.substring(1)
      this.items.push(newItem)
      this.newWord = ''
      this.listForNewWord = ''
    },
    shuffleWords() {
      this.items.forEach(
        (word) => (word.list = Math.floor(Math.random() * 4) + 1)
      )
    },
    moveWord() {
      const itemToMove = this.items.find(
        (item) => parseInt(item.id) === parseInt(this.wordToMove)
      )
      itemToMove.list = parseInt(this.listToMoveTo)
      this.wordToMove = ''
      this.listToMoveTo = ''
    },
    deleteWord() {
      this.items = this.items.filter(
        (item) => parseInt(item.id) !== parseInt(this.wordToDelete)
      )
      this.wordToDelete = ''
    },
    async getDefinition() {
      this.audioUrl = ''
      this.lookUpIsPending = true
      try {
        const response = await fetch(
          `https://dictionaryapi.com/api/v3/references/sd3/json/${this.wordToLookUp}?key=${process.env.dictionaryApiKey}`
        )
        const data = await response.json()

        // Get pronunciation audio
        const pronunciation = data[0]?.hwi?.prs
        let sound = {}
        let audioSlug = ''
        if (pronunciation.length) {
          sound = pronunciation[0].sound ? pronunciation[0].sound : {}
          audioSlug = sound.audio ? sound.audio : ''
        }
        if (audioSlug.length) {
          this.audioUrl = `https://media.merriam-webster.com/audio/prons/en/us/mp3/${this.wordToLookUp
            .charAt(0)
            .toLowerCase()}/${audioSlug}.mp3`
        }

        this.definitions = data[0].shortdef ? data[0].shortdef : []
        if (!this.definitions.length) {
          this.errorMessage = 'Sorry, no definition found'
          this.wordToLookUp = ''
          this.definitionTitle = ''
        } else {
          this.errorMessage = ''
          this.definitionTitle = this.wordToLookUp
        }
        this.lookUpIsPending = false
      } catch (error) {
        this.errorMessage = 'Sorry, no definition found'
        this.wordToLookUp = ''
        this.lookUpIsPending = false
        this.definitions = []
        this.definitionTitle = ''
      }
    },
    playAudio() {
      if (this.audio) {
        this.audio.pause()
        this.audio.currentTime = 0
      }
      this.audio = new Audio(this.audioUrl)
      this.audio.play()
    },
  },
  head() {
    return {
      title: '💬 Exploring Words and Feelings',
      meta: [
        {
          name: 'description',
          content: 'Explore words and the feelings you associate with them',
        },
        {
          name: 'twitter:title',
          content: 'Exploring Words and Feelings | Nuxt Experiments',
        },
        {
          name: 'twitter:description ',
          content: 'Explore words and the feelings you associate with them',
        },
        { name: 'twitter:image', content: '/say-love.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
}
</script>
