<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<template>
  <div
    class="flex flex-col justify-center items-center text-center min-h-screen md:m-16 md:flex-row"
  >
    <img
      src="/song.png"
      alt="cassette tape"
      class="w-1/3 mr-0 my-4 order-2 md:order-1"
    />
    <div
      class="flex flex-col space-y-1 order-1 md:w-1/2 md:order-2 md:pl-4 md:space-y-0"
    >
      <h1 class="text-5xl">Arts</h1>
      <nav class="flex flex-col text-lg space-y-2">
        <nuxt-link to="/canvas">Time to Draw</nuxt-link>
        <nuxt-link to="/songs">Find Songs</nuxt-link>
        <nuxt-link to="/quotes">Become Inspired</nuxt-link>
        <nuxt-link to="/quotes/cats">Celebrate Cats</nuxt-link>
        <nuxt-link to="/sorting-hat">Join a Hogwarts House</nuxt-link>
        <nuxt-link to="/sound-machine">Make a Sound Sentence</nuxt-link>
        <nuxt-link to="/arts/drag-and-drop"
          >Explore Your Feelings About Words</nuxt-link
        >
        <nuxt-link to="/arts/drag-and-drop2">Play with Stickers</nuxt-link>
        <nuxt-link to="/arts/color-picker">Explore Color Names</nuxt-link>
        <nuxt-link to="/arts/jabberwocky">Search the Jabberwocky</nuxt-link>
        <nuxt-link to="/arts/madlibs">Create a Mad Story</nuxt-link>
        <nuxt-link to="/arts/drag-and-drop3"
          >Make a Flower Arrangement</nuxt-link
        >
        <div
          v-if="!showStoriesOptions"
          class="text-lg cursor-pointer hover:font-bold"
          style="color: var(--teal-light)"
          @click="toggleStoriesOptions"
        >
          Read Stories & Writings
        </div>
        <transition name="fade">
          <div
            v-if="showStoriesOptions"
            class="relative flex flex-col rounded p-2 border border-black pt-6 md:pt-2"
            @mouseleave="showStoriesOptions = false"
          >
            <span
              class="absolute top-0 right-0 p-2 text-sm cursor-pointer hover:bg-black rounded"
              @click="toggleStoriesOptions"
              >✖️</span
            >
            <nuxt-link
              to="/inspiration/conference-stories"
              class="text-orange-400"
              >Favorite General Conference Stories</nuxt-link
            >
            <a
              href="https://ethyl2.github.io/snake-lessons/"
              target="_blank"
              class="text-orange-400"
              >Snake Lessons Talk</a
            >
            <a
              href="https://ethyl2.github.io/snake-lessons/dieter-and-dumbledore.html"
              class="text-orange-400"
              target="_blank"
              >Dieter and Dumbledore Talk</a
            >
          </div>
        </transition>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtsIndex',
  data() {
    return {
      showStoriesOptions: false,
    }
  },
  methods: {
    toggleStoriesOptions() {
      this.showStoriesOptions = !this.showStoriesOptions
    },
  },
  head() {
    return {
      title: '🎨 Arts Menu',
      meta: [
        {
          name: 'description',
          content:
            'Presents options of arts activities -- including drawing, music, quotes, and stories.',
        },
        {
          name: 'twitter:title',
          content: 'Arts Menu | Nuxt Experiments',
        },
        {
          name: 'twitter:description ',
          content:
            'Presents options of arts activities -- including drawing, music, quotes, and stories.',
        },
        { name: 'twitter:image', content: '/song.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
}
</script>
