<template>
  <div class="m-2 md:m-10">
    <h1 class="text-lg text-center text-bold md:text-3xl">
      Words We Love Vs. Words We Hate
    </h1>
    <p class="hidden text-center text-base p-2 md:text-xl md:block">
      Sort these words by dragging them to the columns that feel best to you.
    </p>
    <p class="text-center md:hidden">
      <nuxt-link :to="{ path: '/arts/drag-and-drop', hash: '#add' }"
        >Add</nuxt-link
      >
      to these word lists.
    </p>
    <div class="flex min-h-screen w-full">
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
    </div>

    <div class="flex justify-center align-center">
      <button
        type="button"
        class="border rounded p-1 mx-auto hover:bg-gray-700"
        @click="shuffleWords"
      >
        Shuffle Words
      </button>
    </div>

    <!-- Add Words Section -->
    <h2 id="add" class="text-lg text-center m-2 md:text-2xl">Add More Words</h2>
    <form
      class="flex flex-col justify-center items-center space-y-2 mx-auto w-5/6 md:flex-row md:space-x-2 md:space-y-0"
      @submit.prevent="addWord"
    >
      <input
        v-model="newWord"
        type="text"
        class="text-black p-2 rounded"
        placeholder="your word"
        required
      />
      <div>
        <select
          v-model="listForNewWord"
          class="text-black p-2 rounded"
          required
        >
          <option value="-" selected disabled hidden>Choose a list:</option>
          <option value="1">Hate list</option>
          <option value="2">Indifferent list</option>
          <option value="3">Like list</option>
          <option value="4">Love list</option>
          <option value="random">Random</option>
        </select>
        <button type="submit" class="border rounded p-1 mx-1 hover:bg-gray-700">
          Add
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'DragAndDrop',
  data() {
    return {
      newWord: '',
      listForNewWord: '-',
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
          title: 'Clogged',
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
          id: 13,
          title: 'Defenestration',
          list: 3,
        },
        {
          id: 14,
          title: 'Flibbertigibbet',
          list: 4,
        },
        {
          id: 15,
          title: 'Kerfuffle',
          list: 1,
        },
        {
          id: 17,
          title: 'Persnickety',
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
          id: 21,
          title: 'Palimpsest',
          list: 2,
        },
        {
          id: 22,
          title: 'Sesquipedalian',
          list: 3,
        },
        {
          id: 23,
          title: 'Twinkle',
          list: 4,
        },
        {
          id: 24,
          title: 'Aquiver',
          list: 1,
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
          id: 27,
          title: 'Somnambulist',
          list: 4,
        },
        {
          id: 29,
          title: 'Limerence',
          list: 1,
        },
        {
          id: 30,
          title: 'Bombinate',
          list: 2,
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
          id: 32,
          title: 'Petrichor',
          list: 1,
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
      newItem.title = this.newWord
      this.items.push(newItem)
      this.newWord = ''
      this.listForNewWord = ''
    },
    shuffleWords() {
      this.items.forEach(
        (word) => (word.list = Math.floor(Math.random() * 4) + 1)
      )
    },
  },
}
</script>
