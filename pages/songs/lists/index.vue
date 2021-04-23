<template>
  <div class="mx-4 min-h-screen md:mx-10">
    <h1 class="text-xl mb-4">Song Lists</h1>
    <div
      v-for="([listId, listObject], index) in Object.entries(lists)"
      :key="`${index}-${listId}`"
    >
      <nuxt-link :to="`/songs/lists/${listId}`" class="text-lg mb-2"
        >🎵 {{ listObject['name'] }}</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListIndex',
  data() {
    return {
      lists: {},
    }
  },
  mounted() {
    if (process.browser) {
      this.lists = localStorage.getItem('playlists')
        ? JSON.parse(localStorage.getItem('playlists'))
        : {}
    }
  },
}
</script>
