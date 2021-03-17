<template>
  <div>
    <div
      :class="`container flex flex-col items-center justify-start min-h-screen border rounded pb-4 border-${color1}`"
    >
      <div
        class="text-center text-4xl font-extrabold leading-none tracking-tight mt-6 mb-2 md:text-5xl md:text-left"
      >
        <span
          :class="`bg-clip-text text-transparent bg-gradient-to-r from-${song.color1} to-${song.color2}`"
        >
          {{ song.title }}
        </span>
      </div>
      <h3 v-if="song.author" class="text-base italic mb-1">
        By {{ song.author }}
      </h3>
      <h4 v-if="song.tune" class="text-base italic mb-2">
        Tune: {{ song.tune }}
      </h4>
      <div v-if="song.chorus" class="pb-2">
        <h4 class="text-lg font-bold mb-1">Chorus:</h4>
        <p v-for="(line, index) in song.chorus" :key="`chorus-line-${index}`">
          {{ line }}
        </p>
      </div>
      <div v-if="song.verses" class="pb-2">
        <h4 class="text-lg font-bold mb-1">Verses:</h4>
        <div
          v-for="(verse, index) in song.verses"
          :key="`verse-${index}`"
          class="pb-4"
        >
          <p
            v-for="(line, lineIndex) in verse"
            :key="`verse-${index}-line-${lineIndex}`"
          >
            {{ line }}
          </p>
        </div>
      </div>
      <img
        v-if="song.image_url"
        :src="`/${song.image_url}`"
        :alt="song.title"
        class="w-1/4 content-center py-4"
      />
      <div v-if="song.urls" class="pb-2">
        <h4 class="text-lg font-bold mb-1">See More:</h4>
        <a
          v-for="(url, index) in song.urls"
          :key="`url-${index}`"
          :href="url"
          target="_blank"
          class="block"
        >
          {{ url }}
        </a>
      </div>
    </div>
    <nuxt-link
      to="/songs/christmas"
      class="flex items-center justify-center text-center mx-auto"
      ><span class="pb-1 mr-1">👈</span> <span>Back</span></nuxt-link
    >
  </div>
</template>

<script>
export default {
  name: 'ChristmasSong',
  data() {
    return {
      slug: this.$route.params.slug,
      color1: 'green-400',
      color2: 'yellow-500',
    }
  },
  computed: {
    song() {
      return this.$store.state.songs.christmasParodies.find(
        (song) => song.slug === this.slug
      )
    },
  },
}
</script>
