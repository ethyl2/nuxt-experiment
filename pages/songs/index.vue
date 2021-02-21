<template>
  <div class="container flex flex-col">
    <h1 class="text-2xl">Songs</h1>
    <nuxt-link to="/songSearch" class="mb-4">Search with iTunes API</nuxt-link>
    <h2 class="text-xl">Campfire Songs</h2>
    <nav class="flex flex-col">
      <nuxt-link
        v-for="song in allSongs"
        :key="song.id"
        :to="`/songs/${song.id}`"
        class="text-base"
        >{{ song.title }}</nuxt-link
      >
    </nav>
    <img src="/campfire.png" alt="campfire" class="w-1/4 pt-4" />
    <h3 class="text-lg my-4">
      More songs that tickle my funny bone from Spotify
    </h3>
    <iframe
      src="https://open.spotify.com/embed/playlist/0YCESpzXAbPcrTLZAFC9AE"
      width="300"
      height="380"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
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
      return this.$store.state.songs.all
    },
  },
  head() {
    return {
      title: 'Campfire Songs 🎼',
      meta: [
        {
          name: 'twitter:title',
          content: 'Campfire Songs',
        },
        {
          name: 'twitter:description ',
          content: "Selection of Heather Nuffer's favorite campfire songs",
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
