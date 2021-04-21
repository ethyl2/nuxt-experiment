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
  <div class="flex flex-col mx-4 md:mx-10">
    <h1 class="text-lg md:text-4xl">Make a Playlist</h1>
    <p v-if="!searchResults" class="text-base md:text-xl">
      This page is for demonstration/development purposes only. If the search is
      not working, you may need to request access to the CORS Anywhere demo by
      clicking the button found
      <a href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank"
        >here</a
      >.
    </p>
    <form
      class="bg-teal-500 rounded py-4 px-2 w-full md:w-1/2"
      @submit.prevent="handleSubmit"
    >
      <div
        class="flex flex-col md:flex-row justify-around items-center space-y-2"
      >
        <label>Search iTunes:</label>
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

    <div class="flex flex-col md:flex-row md:space-x-2">
      <div class="md:w-1/2 mt-4 md:mt-10">
        <div v-if="searchResults">
          <table class="table-auto w-full text-center">
            <caption class="text-base font-bold md:text-lg">
              Search Results
            </caption>
            <thead>
              <tr>
                <th class="px-4 py-2">Album</th>
                <th class="px-4 py-2">Track Name</th>
                <th class="px-4 py-2">Artist</th>
                <th class="px-4 py-2">{{ allowAudio ? 'Play/Add' : 'Add' }}</th>
              </tr>
            </thead>
            <tbody class="bg-black rounded">
              <tr v-for="result in searchResults" :key="result.trackId">
                <td class="border bg-black">
                  <a
                    v-if="result.collectionViewUrl"
                    :href="result.collectionViewUrl"
                    target="_blank"
                  >
                    <div
                      v-if="result.artworkUrl60"
                      class="w-10 h-10 md:w-20 md:h-20 bg-cover bg-center"
                      :style="{
                        backgroundImage: `url(${result.artworkUrl60}) `,
                      }"
                    ></div>
                  </a>
                  <div
                    v-else-if="result.artworkUrl60"
                    class="w-10 h-10 md:w-20 md:h-20 bg-cover bg-center"
                    :style="{ backgroundImage: `url(${result.artworkUrl60}) ` }"
                  ></div>
                </td>
                <td class="px-2 py-1 border">
                  <a
                    v-if="result.trackViewUrl"
                    :href="result.trackViewUrl"
                    target="_blank"
                    class="text-xs md:text-sm"
                  >
                    {{ result.trackCensoredName }}
                  </a>
                  <h2 v-else class="text-xs md:text-sm">
                    {{ result.trackCensoredName }}
                  </h2>
                </td>
                <td class="px-2 py-1 border">
                  <a
                    v-if="result.artistViewUrl"
                    :href="result.artistViewUrl"
                    target="_blank"
                    class="text-xs text-yellow-400 hover:text-yellow-600"
                    >{{ result.artistName }}</a
                  >
                  <p v-else class="text-xs">{{ result.artistName }}</p>
                </td>
                <td class="px-2 py-1 border">
                  <button
                    v-if="allowAudio"
                    type="button"
                    class="rounded bg-yellow-500 hover:bg-white m-1"
                    @click="play(result.previewUrl)"
                  >
                    🎵
                  </button>
                  <button
                    type="button"
                    class="rounded bg-teal-500 hover:bg-white m-1"
                    @click="addToPlaylist(result)"
                  >
                    ➕
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else-if="searchIsPending">
          <h2>Searching for songs...</h2>
        </div>
        <div v-else>
          <h2>No results yet</h2>
        </div>
      </div>

      <div class="md:w-1/2 mt-4 md:mt-10">
        <div v-if="playlist.length > 0">
          <table class="table-auto w-full text-center">
            <caption class="text-base font-bold md:text-lg">
              Playlist
            </caption>
            <thead>
              <tr>
                <th class="px-4 py-2">Album</th>
                <th class="px-4 py-2">Track Name</th>
                <th class="px-4 py-2">Artist</th>
                <th class="px-4 py-2">Upvote</th>
              </tr>
            </thead>
            <tbody class="bg-black rounded">
              <tr v-for="result in orderedPlaylist" :key="result.trackId">
                <td class="border bg-black">
                  <a
                    v-if="result.collectionViewUrl"
                    :href="result.collectionViewUrl"
                    target="_blank"
                  >
                    <div
                      v-if="result.artworkUrl60"
                      class="w-10 h-10 md:w-20 md:h-20 bg-cover bg-center"
                      :style="{
                        backgroundImage: `url(${result.artworkUrl60}) `,
                      }"
                    ></div>
                  </a>
                  <div
                    v-else-if="result.artworkUrl60"
                    class="w-10 h-10 md:w-20 md:h-20 bg-cover bg-center"
                    :style="{ backgroundImage: `url(${result.artworkUrl60}) ` }"
                  ></div>
                </td>
                <td class="px-2 py-1 border">
                  <a
                    v-if="result.trackViewUrl"
                    :href="result.trackViewUrl"
                    target="_blank"
                    class="text-xs md:text-sm"
                  >
                    {{ result.trackCensoredName }}
                  </a>
                  <h2 v-else class="text-xs md:text-sm">
                    {{ result.trackCensoredName }}
                  </h2>
                </td>
                <td class="px-2 py-1 border">
                  <a
                    v-if="result.artistViewUrl"
                    :href="result.artistViewUrl"
                    target="_blank"
                    class="text-xs text-yellow-400 hover:text-yellow-600"
                    >{{ result.artistName }}</a
                  >
                  <p v-else class="text-xs">{{ result.artistName }}</p>
                </td>
                <td class="px-2 py-1 border">
                  <button
                    type="button"
                    class="rounded bg-teal-500 hover:bg-white m-1"
                    @click="upvoteSong(result)"
                  >
                    👍 ({{ result.votes }})
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
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
      playlist: [],
    }
  },
  computed: {
    orderedPlaylist() {
      return [...this.playlist].sort((a, b) => (a.votes < b.votes ? 1 : -1))
    },
  },
  methods: {
    async handleSubmit() {
      this.searchIsPending = true
      try {
        const response = await fetch(
          `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search/?term=${this.searchTerm}&entity=song&limit=12`
        )
        const data = await response.json()
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
    addToPlaylist(result) {
      const newEntry = {
        trackId: result.trackId ?? '',
        collectionViewUrl: result.collectionViewUrl ?? '',
        artworkUrl60: result.artworkUrl60 ?? '',
        trackViewUrl: result.trackViewUrl ?? '',
        trackCensoredName: result.trackCensoredName ?? '',
        artistViewUrl: result.artistViewUrl ?? '',
        artistName: result.artistName ?? '',
        previewUrl: result.previewUrl ?? '',
        votes: 1,
      }
      this.playlist.push(newEntry)
    },
    upvoteSong(result) {
      result.votes += 1
    },
  },
}
</script>
