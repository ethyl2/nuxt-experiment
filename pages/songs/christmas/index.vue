<template>
  <div class="min-h-screen mx-1 md:mx-20">
    <h1 class="font-bold text-xl mb-4 text-center mt-2">
      Christmas Parody Songs
    </h1>
    <main class="flex flex-wrap justify-around">
      <nuxt-link
        v-for="(song, index) in songs"
        :key="index"
        :to="`/songs/christmas/${song.slug}`"
        :class="`flex p-2 rounded border w-full overflow-hidden hover:bg-gray-900 my-2 border-${song.color1} md:w-5/12`"
      >
        <img :src="`/${song.image_url}`" :alt="song.title" class="w-12" />
        <div class="ml-2 w-full">
          <h2 class="font-bold">{{ song.title }}</h2>
          <p
            v-if="song.chorus || song.verses"
            class="truncate overflow-hidden w-full text-xs text-justify md:text-sm"
          >
            {{ firstWords(song) }}
          </p>
        </div>
      </nuxt-link>
    </main>
  </div>
</template>

<script>
export default {
  name: 'ChristmasParodySongs',
  computed: {
    songs() {
      return this.$store.state.songs.christmasParodies
    },
  },
  methods: {
    firstWords(song) {
      let firstString = ''
      if (song.chorus) {
        firstString = song.chorus.join(' ').substring(0, 65) + '...'
      } else if (song.verses) {
        firstString = song.verses[0].join(' ').substring(0, 65) + '...'
      }
      return firstString
    },
  },
}
</script>
