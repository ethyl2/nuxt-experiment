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
        <div
          class="bg-center bg-cover bg-no-repeat w-12 h-12 flex-shrink-0"
          :style="{ 'background-image': 'url(/' + song.image_url + ')' }"
        ></div>
        <div class="ml-2 w-full">
          <h2 class="font-bold">{{ song.title }}</h2>
          <p
            v-if="song.chorus || song.verses"
            class="truncate overflow-hidden w-full text-xs text-justify md:hidden"
          >
            {{ firstWords(song)[1] }}
          </p>
          <p
            v-if="song.chorus || song.verses"
            class="hidden truncate overflow-hidden w-full text-sm text-justify md:block"
          >
            {{ firstWords(song)[0] }}
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
      let desktopFirstString = ''
      let mobileFirstString = ''
      if (song.chorus) {
        desktopFirstString = song.chorus.join(' ').substring(0, 60) + '...'
        mobileFirstString = song.chorus.join(' ').substring(0, 40) + '...'
      } else if (song.verses) {
        desktopFirstString = song.verses[0].join(' ').substring(0, 60) + '...'
        mobileFirstString = song.verses[0].join(' ').substring(0, 40) + '...'
      }
      return [desktopFirstString, mobileFirstString]
    },
  },
  head() {
    return {
      title: 'Christmas Parody Songs 🎄',
    }
  },
}
</script>
