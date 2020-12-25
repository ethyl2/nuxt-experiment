<template>
  <div class="container flex flex-col space-y-2">
    <h1 class="text-4xl">Search the itunes API</h1>
    <form class="bg-pink-800 rounded py-4 px-2" @submit.prevent="handleSubmit">
      <label>Search term:</label>
      <input
        v-model="searchTerm"
        type="text"
        class="text-black rounded text-base p-1"
      />
      <button type="submit" class="bg-black rounded p-1">🔍</button>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </form>
    <div
      v-if="searchResults"
      class="flex flex-wrap w-full justify-evenly items-stretch"
    >
      <div
        v-for="result in searchResults"
        :key="result.trackId"
        class="w-1/4 bg-black p-2 m-1 rounded"
      >
        <a
          v-if="result.trackViewUrl"
          :href="result.trackViewUrl"
          target="_blank"
        >
          <div>
            <h2>
              {{ result.trackCensoredName }}
            </h2>
            <p>by {{ result.artistName }}</p>
            <img
              v-if="result.artworkUrl60"
              :src="result.artworkUrl60"
              :alt="result.trackCensoredName"
              class="mx-auto"
            />
          </div>
        </a>
        <div v-else>
          <h2>
            {{ result.trackCensoredName }}
          </h2>
          <p>by {{ result.artistName }}</p>
          <img
            v-if="result.artworkUrl60"
            :src="result.artworkUrl60"
            :alt="result.trackCensoredName"
          />
        </div>
      </div>
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
      errorMessage: '',
    }
  },
  methods: {
    async handleSubmit() {
      try {
        console.log(
          `https://itunes.apple.com/search/?term=${this.searchTerm}&limit=12`
        )
        const response = await fetch(
          `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search/?term=${this.searchTerm}&entity=song&limit=10`
        )
        const data = await response.json()
        console.log(data)
        this.searchResults = data.results
      } catch (error) {
        this.errorMessage = error
      }
    },
  },
}
</script>
