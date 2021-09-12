<template>
  <div class="flex flex-col">
    <header
      class="flex flex-col items-center justify-center py-10 mb-4 bg-gray-900"
    >
      <h1 class="text-xl font-bold text-center md:text-3xl">
        I Am Slowly Going Crazy...
      </h1>
      <h2 class="mb-2 text-lg text-center md:text-2xl">
        ...Because My Reindeer Flies Sideways on the Hinky Dinky Double D Farm
      </h2>
      <p class="mx-4 mb-2 text-center md:mx-10">
        Here is a collection of songs that tickle my funny bone, mostly because
        they have a degree of absurdity, nostalgia, cleverness and/or
        randomness. I hope you enjoy them, too.
      </p>
    </header>

    <main class="container flex flex-col px-2">
      <img src="/campfire.png" alt="campfire" class="w-1/5 pb-2" />
      <h2 class="mb-4 text-xl">Favorite Campfire Songs</h2>
      <nav class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <nuxt-link
          v-for="song in allSongs"
          :key="song.id"
          :to="`/songs/${song.id}`"
          class="flex items-center justify-center px-3 py-2 text-base text-center bg-gray-800 rounded hover:bg-black"
          >{{ song.title }}</nuxt-link
        >
      </nav>
      <nuxt-link to="/songs" class="mt-6">Back to Songs</nuxt-link>
    </main>
  </div>
</template>

<script>
export default {
  name: 'CampfireSongs',
  computed: {
    allSongs() {
      return [...this.$store.state.songs.all].sort(function (a, b) {
        return a.title < b.title ? -1 : a.title > b.title ? 1 : 0
      })
    },
  },
}
</script>
