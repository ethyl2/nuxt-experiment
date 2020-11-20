<template>
  <div class="container flex flex-col">
    <h1 class="text-xl">Campfire Songs</h1>
    <nav class="flex flex-col">
      <nuxt-link
        v-for="song in songs"
        :key="song.id"
        :to="`/songs/${song.id}`"
        class="text-base"
        >{{ song.title }}</nuxt-link
      >
    </nav>
    <img src="/campfire.png" alt="campfire" class="w-1/4 pt-4" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      songs: [
        { title: "I'm a Nut", id: 'nut' },
        {
          title: "I Know a Song That Gets on Everybody's Nerves",
          id: 'nerves',
        },
        { title: 'The Rootbeer Song', id: 'rootbeer' },
      ],
    }
  },
}
</script>
