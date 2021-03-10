<style scoped>
.has-tooltip:hover .tooltip-content {
  visibility: visible;
}
</style>

<template>
  <div
    class="container flex flex-col min-h-screen text-center items-center justify-center px-2"
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
        <select
          v-model="addedEmoji"
          class="text-black w-full mx-auto text-center rounded py-2 md:w-1/3"
          name="select-emoji"
          required
        >
          <option disabled selected class="text-black text-sm" value="-">
            Select Avatar:
          </option>
          <option
            v-for="emoji in emojiOptions"
            :key="emoji"
            :value="emoji"
            class="text-black text-center text-3xl"
          >
            {{ emoji }}
          </option>
        </select>
        <input
          v-model="addedPlayer"
          type="text"
          class="text-black rounded p-2"
          placeholder="Enter player's name"
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

      <!-- STEP 1.5: PICKING PLAYER IT -->
      <div v-if="isPickingPlayerIt">
        <form
          class="flex flex-col space-y-2 mx-4 md:mx-0"
          @submit.prevent="setPlayerIt"
        >
          <label for="player-it">Pick the player that's going to be It.</label>
          <select
            v-model="playerIt"
            class="text-black rounded p-2"
            name="player-it"
          >
            <option disabled selected class="text-black" value="-">
              Select Player:
            </option>
            <option
              v-for="player in players"
              :key="player"
              :value="player"
              class="text-black"
            >
              {{ player }}
            </option>
          </select>
          <button
            type="submit"
            class="px-2 py-1 bg-black rounded mb-2 hover:bg-gray-900"
          >
            Submit Player
          </button>
        </form>
      </div>

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
      <div v-if="isReadyToStart" class="text-base w-7/8 md:w-1/2 md:text-lg">
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
        <p class="mb-4">Click the button when you're ready 👇</p>
        <nuxt-link
          to="/thimble/play"
          class="px-3 py-2 bg-black rounded font-bold text-xl hover:bg-gray-900"
          >Time to Start</nuxt-link
        >
      </div>

      <!-- TABLE SECTION -->
      <div
        class="flex flex-col items-center justify-center w-full mt-4 md:w-1/2 md:mt-0"
      >
        <table v-if="players && players.length" class="table-auto">
          <caption class="text-lg text-teal-400">
            Players:
          </caption>
          <tr>
            <th class="px-4 py-2">#</th>
            <th class="px-4 py-2">Name</th>
            <th v-if="!isAddingPlayers" class="px-4 py-2">Role</th>
            <th v-if="isAddingPlayers" class="px-4 py-2">Actions</th>
          </tr>
          <tr v-for="(player, index) in players" :key="`${player}-${index}`">
            <td class="border px-4 py-2">{{ index + 1 }}</td>
            <td class="border text-left px-4 py-2">{{ player }}</td>
            <td v-if="!isAddingPlayers" class="border px-4 py-2">
              {{ player === playerIt ? 'It' : 'Guesser' }}
            </td>
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
        <form
          v-if="isEditing"
          class="flex flex-col space-y-2 mt-2"
          @submit.prevent="finishEditPlayer"
        >
          <select
            v-model="editedEmoji"
            class="text-black mx-auto text-center rounded py-2"
            name="edit-emoji"
          >
            <option disabled selected class="text-black text-sm" value="-">
              Select Avatar:
            </option>
            <option
              v-for="emoji in emojiOptions"
              :key="emoji"
              :value="emoji"
              class="text-black text-center text-3xl"
            >
              {{ emoji }}
            </option>
          </select>
          <input
            v-model="editedPlayer"
            type="text"
            class="text-black rounded pl-2 py-1 mr-2"
            required
          />
          <button
            type="submit"
            class="px-2 py-1 bg-black rounded mb-2 hover:bg-gray-900"
          >
            Save changes
          </button>
        </form>
        <p v-if="category" class="border p-2 mt-4 text-teal-400 text-xl">
          Category: {{ category }}
        </p>
        <img
          v-if="!players || players.length === 0"
          src="/thimble.png"
          alt="thimble"
          class="w-1/2"
        />
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
      editedEmoji: '',
      playerIt: '',
      isPickingPlayerIt: false,
      isPickingCategory: false,
      isPickingItem: false,
      isReadyToStart: false,
      addedEmoji: '-',
    }
  },
  computed: {
    categorySuggestions() {
      return this.$store.state.categories.categories
    },
    emojiOptions() {
      return this.$store.state.categories.emojis
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
      this.playerIt = localStorage.getItem('playerIt')
        ? localStorage.getItem('playerIt')
        : ''
    }
  },
  methods: {
    addPlayer() {
      if (this.addedEmoji === '-') {
        this.addedEmoji = '😊'
      }
      this.players.push(`${this.addedEmoji} ${this.addedPlayer.trim()}`)
      this.addedPlayer = ''
      if (process.browser) {
        localStorage.setItem('players', this.players)
      }
    },
    finishAddingPlayers() {
      this.isAddingPlayers = false
      this.addedPlayer = ''
      this.isPickingPlayerIt = true
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
      const separatedPlayer = player.split(' ')
      this.editedPlayer = separatedPlayer[1]
      this.editedEmoji = separatedPlayer[0]
    },
    finishEditPlayer() {
      this.players[this.playerToEditIndex] = `${
        this.editedEmoji
      } ${this.editedPlayer.trim()}`
      this.isEditing = false
      this.editedPlayer = ''
      this.editedEmoji = ''
      this.playerToEditIndex = ''
      if (process.browser) {
        localStorage.setItem('players', this.players)
      }
    },
    setCategory() {
      if (process.browser) {
        localStorage.setItem('category', this.category.trim())
      }
      this.isPickingCategory = false
      this.isPickingItem = true
    },
    setItem() {
      this.isPickingItem = false
      this.isReadyToStart = true
      if (process.browser) {
        localStorage.setItem('item', this.correctItem.trim())
      }
    },
    setPlayerIt() {
      if (process.browser) {
        localStorage.setItem('playerIt', this.playerIt)
      }
      this.isPickingPlayerIt = false
      this.isPickingCategory = true
    },
  },
}
</script>
