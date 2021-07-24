<template>
  <div class="flex flex-col">
    <header
      class="flex flex-col items-center justify-center bg-gray-900 py-10 mb-4"
    >
      <h1 class="text-xl font-bold text-center md:text-3xl">
        I Am Slowly Going Crazy...
      </h1>
      <h2 class="text-lg mb-2 text-center md:text-2xl">
        ...Because My Reindeer Flies Sideways on the Hinky Dinky Double D Farm
      </h2>
      <p class="mb-2 text-center mx-4">
        Here is a collection of songs that tickle my funny bone, mostly because
        they have a degree of absurdity, nostalgia, cleverness and/or
        randomness. I hope you enjoy them, too.
      </p>
    </header>

    <main class="container flex flex-col px-2">
      <img src="/campfire.png" alt="campfire" class="w-1/5 pb-2" />
      <h2 class="text-xl mb-4">Favorite Campfire Songs</h2>
      <nav class="grid grid-cols-2 gap-4 md:grid-cols-3">
        <nuxt-link
          v-for="song in allSongs"
          :key="song.id"
          :to="`/songs/${song.id}`"
          class="flex items-center justify-center text-center text-base px-3 py-2 bg-gray-800 rounded hover:bg-black"
          >{{ song.title }}</nuxt-link
        >
      </nav>

      <nuxt-link
        to="/songs/christmas"
        class="mt-16 flex items-center justify-center w-1/5"
        ><img src="/song_images/elves.png" alt="elves" class="pb-2"
      /></nuxt-link>
      <nuxt-link to="/songs/christmas" class="text-lg mb-4"
        >See Christmas Parody Songs</nuxt-link
      >
      <nuxt-link to="/arts/twelve-days" class="text-lg mb-4"
        >Make a Custom Harry Potter Christmas Song</nuxt-link
      >
      <nuxt-link
        to="/songs/ai-songs"
        class="text-lg mb-4 p-4 rounded bg-black font-bold"
        >Have an AI Model Make Song Lyrics</nuxt-link
      >

      <h3 class="text-lg my-4">More songs that make me chuckle from Spotify</h3>
      <iframe
        src="https://open.spotify.com/embed/playlist/0YCESpzXAbPcrTLZAFC9AE"
        width="300"
        height="380"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
      <div class="my-4 flex flex-col md:flex-row">
        <nuxt-link to="/songSearch" class="md:pr-4 md:border-r md:mr-4"
          >Search with iTunes API</nuxt-link
        >
        <nuxt-link to="/songs/playlist" class="md:pr-4 md:border-r md:mr-4"
          >Make a Playlist or Request List</nuxt-link
        >
        <nuxt-link to="/songs/lists">See Your Request Lists</nuxt-link>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    // Original way to access the song data. Now, use the store instead, in computed.
    return {
      songs: [
        { title: "I'm a Nut", id: 'nut' },
        {
          title: "I Know a Song That Gets on Everybody's Nerves",
          id: 'nerves',
        },
        { title: 'The Rootbeer Song', id: 'rootbeer' },
        { title: "I'm a Little Possum", id: 'possum' },
        { title: 'Cool and Creamy', id: 'cream' },
      ],
    }
  },
  computed: {
    allSongs() {
      return [...this.$store.state.songs.all].sort(function (a, b) {
        return a.title < b.title ? -1 : a.title > b.title ? 1 : 0
      })
    },
  },
  head() {
    return {
      title: 'Songs 🎼 | Nuxt Experiments',
      meta: [
        {
          name: 'twitter:title',
          content: 'Songs 🎼 | Nuxt Experiments',
        },
        {
          name: 'twitter:description ',
          content: "Selection of Heather Nuffer's favorite songs",
        },
        {
          name: 'twitter:image',
          content: 'https://nuxt-experiments.herokuapp.com/campfire.png',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
}
</script>
