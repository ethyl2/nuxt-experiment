<style scoped>
.has-tooltip:hover .tooltip-content {
  visibility: visible;
}
</style>

<template>
  <div
    class="container flex flex-col min-h-screen text-center items-center justify-center"
  >
    <h1 class="text-3xl mb-4 w-full">Let's Play Thimble</h1>
    <div
      class="flex flex-col w-full justify-center items-center md:flex-row md:items-start"
    >
      <!-- STEP 1: ADDING PLAYERS -->
      <form
        v-if="isAddingPlayers"
        class="flex flex-col space-y-2 w-7/8 md:w-1/2"
        @submit.prevent="addPlayer"
      >
        <legend class="text-lg text-teal-400 mb-2">
          First, enter all the players. <br />At least 2 are required to play.
        </legend>
        <input
          v-model="addedPlayer"
          type="text"
          class="text-black rounded p-2"
          required
        />
        <button
          type="submit"
          class="px-2 py-1 bg-black rounded mb-2 hover:bg-gray-900"
        >
          ➕ Add Player
        </button>
        <button
          v-if="players && players.length > 1"
          type="button"
          class="px-2 py-1 bg-black rounded hover:bg-gray-900"
          @click="finishAddingPlayers"
        >
          ✔️ Finished Adding Players
        </button>
      </form>

      <!-- STEP 2 : PICKING A CATEGORY -->
      <div v-if="isPickingCategory" class="w-7/8 md:w-1/2">
        <form
          class="flex flex-col space-y-2 mx-4 md:mx-0"
          @submit.prevent="setCategory"
        >
          <legend class="text-lg text-teal-400 mb-2">
            <span class="font-bold">{{ playerIt }}</span
            >, you're it! You get to start.<br />Pick a category -- either one
            of the suggestions,<br />
            or whatever you'd like!
          </legend>
          <input
            v-model="category"
            type="text"
            class="text-black rounded p-2"
            list="category-suggestions"
            required
          />
          <datalist id="category-suggestions">
            <option
              v-for="categorySuggestion in categorySuggestions"
              :key="categorySuggestion"
              :value="categorySuggestion"
            >
              {{ categorySuggestion }}
            </option>
          </datalist>

          <button
            type="submit"
            class="px-2 py-1 bg-black rounded mb-2 hover:bg-gray-900"
          >
            Submit Category
          </button>
        </form>
      </div>

      <!-- STEP 3 : PICKING ITEM -->
      <form
        v-if="isPickingItem"
        class="flex flex-col space-y-2 mx-4 w-7/8 md:mx-0 md:w-1/2"
        @submit.prevent="setItem"
      >
        <legend class="text-lg text-teal-400 mb-2">
          <span class="font-bold">{{ playerIt }}</span
          >, tell everyone else to close their eyes, or leave the room.<br />Pick
          an item that fits in your category.
        </legend>
        <input
          v-model="correctItem"
          type="text"
          class="text-black rounded p-2"
          required
        />
        <button
          type="submit"
          class="px-2 py-1 bg-black rounded mb-2 hover:bg-gray-900"
        >
          Submit Item
        </button>
      </form>

      <!-- STEP 4 : LAST INSTRUCTIONS -->
      <div v-if="isReadyToStart" class="text-lg w-7/8 md:w-1/2">
        <p>
          Okay, {{ playerIt }}, tell everyone to open their eyes and come back
          to the room.
        </p>
        <p>
          Find a thimble or other similar small object, like a bottle cap, and
          fill it with water.
        </p>
        <img src="/thimble.png" class="w-1/5 mx-auto py-2" alt="thimble" />
        <p>
          It might be handy to have a cup of water nearby for refilling the
          thimble if needed.
        </p>
        <p>
          When prompted for their turn, the other players will guess your item.
        </p>
        <p class="mb-4">
          If they guess correctly, or guess something that's already been said,
          throw the thimble's water on them!
        </p>
        <nuxt-link
          to="/thimble/play"
          class="px-2 py-1 bg-black rounded font-bold text-xl hover:bg-gray-900"
          >Time to Start</nuxt-link
        >
      </div>

      <!-- TABLE SECTION -->
      <div class="flex flex-col items-center justify-center w-full md:w-1/2">
        <table v-if="players && players.length" class="table-auto">
          <caption class="text-lg text-teal-400">
            Players:
          </caption>
          <tr>
            <th class="px-4 py-2">#</th>
            <th class="px-4 py-2">Name</th>
            <th v-if="isAddingPlayers" class="px-4 py-2">Actions</th>
          </tr>
          <tr v-for="(player, index) in players" :key="`${player}-${index}`">
            <td class="border px-4 py-2">{{ index + 1 }}</td>
            <td class="border px-4 py-2">{{ player }}</td>
            <td v-if="isAddingPlayers" class="border px-4 py-2 relative">
              <span
                class="has-tooltip inline-block cursor-pointer hover:bg-gray-800"
                @click="clearPlayer(player)"
                >🗑️<span
                  class="tooltip-content invisible bg-black absolute left-0 bottom-0 p-1 rounded z-10 opacity-75 text-xs"
                  >Delete</span
                ></span
              >
              <span
                class="has-tooltip inline-block cursor-pointer hover:bg-gray-800"
                @click="startEditPlayer(player, index)"
                >✏️<span
                  class="tooltip-content invisible bg-black absolute right-0 bottom-0 p-1 rounded z-10 opacity-75 text-xs"
                  >Edit</span
                ></span
              >
            </td>
          </tr>
        </table>
        <form v-if="isEditing" @submit.prevent="finishEditPlayer">
          <input v-model="editedPlayer" type="text" class="text-black pl-2" />
          <button type="submit">Save changes</button>
        </form>
        <p v-if="category" class="border p-2 mt-4 text-teal-400 text-xl">
          Category: {{ category }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThimbleStart',
  data() {
    return {
      players: [],
      addedPlayer: '',
      category: '',
      currentGuess: '',
      correctItem: '',
      isAddingPlayers: true,
      isEditing: false,
      playerToEditIndex: '',
      editedPlayer: '',
      playerIt: '',
      isPickingCategory: false,
      isPickingItem: false,
      isReadyToStart: false,
    }
  },
  computed: {
    categorySuggestions() {
      return this.$store.state.categories.categories
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
    }
  },
  methods: {
    addPlayer() {
      this.players.push(this.addedPlayer)
      this.addedPlayer = ''
      if (process.browser) {
        localStorage.setItem('players', this.players)
      }
    },
    finishAddingPlayers() {
      this.isAddingPlayers = false
      this.addedPlayer = ''
      this.playerIt = this.players[0]
      if (process.browser) {
        localStorage.setItem('playerIt', this.playerIt)
      }
      this.isPickingCategory = true
    },
    clearPlayer(playerToDelete) {
      this.players = this.players.filter((player) => player !== playerToDelete)
      if (process.browser) {
        localStorage.setItem('players', this.players)
      }
    },
    startEditPlayer(player, index) {
      this.isEditing = true
      this.playerToEditIndex = index
      this.editedPlayer = player
    },
    finishEditPlayer() {
      this.players[this.playerToEditIndex] = this.editedPlayer
      this.isEditing = false
      this.editedPlayer = ''
      this.playerToEditIndex = ''
      if (process.browser) {
        localStorage.setItem('players', this.players)
      }
    },
    setCategory() {
      if (process.browser) {
        localStorage.setItem('category', this.category)
      }
      this.isPickingCategory = false
      this.isPickingItem = true
    },
    setItem() {
      this.isPickingItem = false
      this.isReadyToStart = true
      if (process.browser) {
        localStorage.setItem('item', this.correctItem)
      }
    },
  },
}
</script>
