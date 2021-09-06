<template>
  <div
    class="flex flex-col items-center min-h-screen m-10 space-y-4 text-center"
  >
    <img
      v-if="imageUrl"
      :src="imageUrl"
      :alt="quote.text"
      class="max-w-xs md:max-w-2xl"
    />
    <div class="w-5/6 pb-12 mx-auto md:w-1/2">
      <h2 class="text-xl">{{ quote.text }}</h2>
      <p v-if="quote.author" class="md:self-end">- {{ quote.author }}</p>
    </div>
    <!-- Song Section -->
    <div class="w-full py-6 border-t">
      <h2 class="mb-4 text-2xl font-bold">Tunes with Cats</h2>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div
          v-for="(song, songIndex) in featuredSongs"
          :key="`song-${songIndex}`"
          class="p-1 bg-gray-700 bg-opacity-50 rounded"
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
        {{ seeAllSongs ? 'See Less' : 'See All Songs' }}
      </button>
    </div>
    <!-- Christmas Section -->
    <h3 class="w-full pt-2 text-xl font-bold text-center border-t">
      Catmas Carols
    </h3>
    <div class="flex flex-wrap space-x-4">
      <nuxt-link to="/songs/christmas/jingle-cat-toy" class="block mt-2">
        <img
          src="/cat2.gif"
          alt="cat with Christmas hat"
          class="w-16 mx-auto"
        />Jingle Cat Toys</nuxt-link
      >
      <nuxt-link to="/songs/christmas/meowry" class="block mt-2">
        <img src="/cat.gif" alt="cat in ornament" class="w-16 mx-auto" />Have a
        Meowry Christmas</nuxt-link
      >
      <nuxt-link to="/songs/christmas/jingle-cat" class="block mt-2">
        <img
          src="/catWithLights.png"
          alt="cat tangled in Christmas lights"
          class="w-16 mx-auto"
        />Jingle Cat</nuxt-link
      >
    </div>
    <!-- Cat Clicker Section -->
    <div class="w-full mt-6 border-t">
      <cat-clicker />
    </div>

    <!-- Cat Sounds Section -->
    <div class="w-full mt-6 border-t">
      <cat-sounds />
    </div>

    <div class="w-full mt-6 border-t">
      <p class="pt-4">
        Can you find all 10 cats
        <nuxt-link to="/arts/drag-and-drop2">here</nuxt-link>?
      </p>
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
  async fetch() {
    this.cat = await fetch('https://cataas.com/cat?json=true').then((res) => {
      return res.json()
    })
  },
  data() {
    return {
      index: null,
      quote: null,
      featuredSongs: [],
      seeAllSongs: false,
      cat: {},
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
      if (this.cat.url) {
        return `https://cataas.com${this.cat.url}`
      } else {
        return '/catfaces/cat-walking.jpg'
      }
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
  head() {
    return {
      title: 'Cat Activities 🐈',
    }
  },
}
</script>
