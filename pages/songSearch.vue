<style>
.toggle__dot {
  top: -0.25rem;
  left: -0.25rem;
  transition: all 0.3s ease-in-out;
}

input:checked ~ .toggle__dot {
  transform: translateX(100%);
  background-color: green;
}
</style>

<template>
  <div class="container flex flex-col space-y-2">
    <h1 class="text-4xl">Search the iTunes API</h1>
    <form
      class="bg-teal-500 rounded py-4 px-2 w-full md:w-1/2"
      @submit.prevent="handleSubmit"
    >
      <div
        class="flex flex-col md:flex-row justify-around items-center space-y-2"
      >
        <label>Search term:</label>
        <input
          v-model="searchTerm"
          type="text"
          class="text-black rounded text-base p-1 w-full md:w-3/5"
        />
        <button type="submit" class="bg-black rounded p-1 hover:bg-gray-700">
          🔍
        </button>
      </div>
      <p v-if="errorMessage">{{ errorMessage }}</p>

      <div class="flex items-center justify-center w-full mt-3">
        <!-- Toggle Button -->
        <label for="toogleA" class="flex items-center cursor-pointer">
          <!-- toggle -->
          <div class="relative">
            <!-- input -->
            <input
              id="toogleA"
              v-model="allowAudio"
              type="checkbox"
              class="hidden"
              @change="toggleAudioPermission"
            />
            <!-- line -->
            <div
              class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
            ></div>
            <!-- dot -->
            <div
              class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
            ></div>
          </div>
          <!-- label -->
          <div class="ml-3 text-white">Allow Audio</div>
        </label>
      </div>
    </form>

    <div
      v-if="searchResults"
      class="flex flex-wrap w-full justify-evenly items-stretch"
    >
      <div
        v-for="result in searchResults"
        :key="result.trackId"
        class="flex flex-col justify-center items-center w-2/5 md:w-1/4 bg-black p-1 md:p-2 m-1 rounded"
      >
        <div class="flex flex-col justify-between items-center">
          <a
            v-if="result.trackViewUrl"
            :href="result.trackViewUrl"
            target="_blank"
            class="text-xs md:text-base"
          >
            {{ result.trackCensoredName }}
          </a>
          <h2 v-else class="text-xs md:text-base">
            {{ result.trackCensoredName }}
          </h2>
          <a
            v-if="result.artistViewUrl"
            :href="result.artistViewUrl"
            target="_blank"
            class="text-xs text-yellow-400 hover:text-yellow-600"
            >by {{ result.artistName }}</a
          >
          <p v-else class="text-xs">by {{ result.artistName }}</p>
          <button
            type="button"
            :class="[allowAudio ? 'visible' : 'invisible']"
            class="rounded bg-yellow-500 hover:bg-white m-1"
            @click="play(result.previewUrl)"
          >
            🎵
          </button>
          <img
            v-if="result.artworkUrl60"
            :src="result.artworkUrl60"
            :alt="result.trackCensoredName"
            class="mx-auto mt-1"
          />
        </div>
      </div>
    </div>
    <div v-else-if="searchIsPending">
      <h2>Searching for songs...</h2>
    </div>
    <div v-else>
      <h2>No results yet</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SongSearch',
  data() {
    return {
      searchTerm: '',
      searchResults: null,
      searchIsPending: false,
      errorMessage: '',
      audio: null,
      allowAudio: false,
    }
  },
  methods: {
    async handleSubmit() {
      this.searchIsPending = true
      try {
        const response = await fetch(
          `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search/?term=${this.searchTerm}&entity=song&limit=12`
        )
        const data = await response.json()
        // console.log(data)
        this.searchResults = data.results
        this.searchIsPending = false
      } catch (error) {
        this.errorMessage = error.message
        this.searchIsPending = false
      }
    },
    play(previewUrl) {
      if (this.audio) {
        this.audio.pause()
        this.audio.currentTime = 0
      }
      if (this.allowAudio) {
        this.audio = new Audio(previewUrl)
        this.audio.play()
      }
    },
    toggleAudioPermission() {
      if (!this.allowAudio && this.audio) {
        this.audio.pause()
        this.audio.currentTime = 0
      } else if (this.allowAudio && this.audio) {
        this.audio.play()
      }
    },
  },
}
</script>
