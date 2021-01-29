<template>
  <div
    class="m-10 flex flex-col items-center space-y-4 min-h-screen text-center"
  >
    <img v-if="imageUrl" :src="imageUrl" :alt="quote.text" />
    <div class="w-5/6 mx-auto pb-12 md:w-1/2">
      <h2 class="text-xl">{{ quote.text }}</h2>
      <p v-if="quote.author" class="md:self-end">- {{ quote.author }}</p>
    </div>
    <!-- Song Section -->
    <div class="border-t w-full py-6">
      <h2 class="text-2xl font-bold mb-4">Tunes with Cats</h2>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div
          v-for="(song, songIndex) in featuredSongs"
          :key="`song-${songIndex}`"
          class="bg-gray-700 bg-opacity-50 p-1 rounded"
        >
          <song-card
            :title="song.title"
            :img-url="song.imgUrl"
            :track-url="song.trackUrl"
            :audio-url="song.audioUrl"
            :img-alt="song.imgAlt"
          />
        </div>
      </div>
      <button type="button" class="mt-2" @click.prevent="toggleSeeAllSongs">
        {{ seeAllSongs ? 'See Less' : 'See All' }}
      </button>
    </div>
    <!-- Cat Clicker Section -->
    <div class="mt-6 border-t w-full">
      <cat-clicker />
    </div>

    <!-- Cat Sounds Section -->
    <div class="mt-6 border-t w-full">
      <cat-sounds />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cats',
  components: {
    CatClicker: () => import('~/components/cats/CatClicker'),
    CatSounds: () => import('~/components/cats/CatSounds'),
  },
  data() {
    return {
      index: null,
      quote: null,
      featuredSongs: [],
      seeAllSongs: false,
    }
  },
  computed: {
    quotes() {
      return this.$store.state.cats.quotes
    },
    songs() {
      return this.$store.state.cats.songs
    },
    imageUrl() {
      return this.quote.text.length < 60
        ? `https://cataas.com/cat/cute/says/${this.quote.text}`
        : 'https://cataas.com/cat'
    },
  },
  created() {
    this.index = Math.floor(Math.random() * this.quotes.length)
    this.quote = this.quotes[this.index]
    this.fetchThreeRandomSongs()
  },
  methods: {
    toggleSeeAllSongs() {
      this.seeAllSongs = !this.seeAllSongs
      if (this.seeAllSongs) {
        this.featuredSongs = this.songs
      } else {
        this.fetchThreeRandomSongs()
      }
    },
    fetchThreeRandomSongs() {
      this.featuredSongs = []
      const songIndices = []
      while (songIndices.length < 3) {
        const songIndex = Math.floor(Math.random() * this.songs.length)
        if (!songIndices.includes(songIndex)) songIndices.push(songIndex)
      }
      songIndices.forEach((songIndex) => {
        this.featuredSongs.push(this.songs[songIndex])
      })
    },
  },
}
</script>
