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
    class="flex flex-col items-center justify-center min-h-screen text-center md:m-16 md:flex-row"
  >
    <img
      src="/song.png"
      alt="cassette tape"
      class="order-2 w-1/3 my-4 mr-0 md:order-1"
    />
    <div
      class="flex flex-col order-1 space-y-1 md:w-1/2 md:order-2 md:pl-4 md:space-y-0"
    >
      <h1 class="text-5xl">Arts</h1>
      <nav class="flex flex-col space-y-2 text-lg">
        <!-- SOUNDS -->
        <div
          v-if="!showSoundOptions"
          class="text-lg cursor-pointer hover:font-bold"
          style="color: var(--teal-light)"
          @click="showSoundOptions = !showSoundOptions"
        >
          Explore Sound
        </div>
        <transition name="fade">
          <div
            v-if="showSoundOptions"
            class="relative flex flex-col p-2 pt-6 space-y-2 border border-black rounded md:pt-2"
            @mouseleave="showSoundOptions = false"
          >
            <span
              class="absolute top-0 right-0 p-2 text-sm rounded cursor-pointer hover:bg-black"
              @click="showSoundOptions = !showSoundOptions"
              >✖️</span
            >
            <nuxt-link to="/sound-machine" class="text-orange-400"
              >Make a Sound Sentence</nuxt-link
            >
            <nuxt-link to="/songs" class="text-orange-400"
              >Find Songs</nuxt-link
            >
          </div>
        </transition>
        <!-- WORDS -->
        <div
          v-if="!showWordOptions"
          class="text-lg cursor-pointer hover:font-bold"
          style="color: var(--teal-light)"
          @click="showWordOptions = !showWordOptions"
        >
          Explore Words
        </div>
        <transition name="fade">
          <div
            v-if="showWordOptions"
            class="relative flex flex-col p-2 pt-6 space-y-2 border border-black rounded md:pt-2"
            @mouseleave="showWordOptions = false"
          >
            <span
              class="absolute top-0 right-0 p-2 text-sm rounded cursor-pointer hover:bg-black"
              @click="showWordOptions = !showWordOptions"
              >✖️</span
            >
            <nuxt-link to="/arts/drag-and-drop" class="text-orange-400"
              >Explore Your Feelings About Words</nuxt-link
            >
            <nuxt-link to="/arts/madlibs" class="text-orange-400"
              >Create a Mad Story</nuxt-link
            >
            <nuxt-link to="/sorting-hat" class="text-orange-400"
              >Join a Hogwarts House</nuxt-link
            >
            <nuxt-link to="/quotes" class="text-orange-400"
              >Become Inspired by Quotes</nuxt-link
            >
            <nuxt-link to="/arts/jabberwocky" class="text-orange-400"
              >Search the Jabberwocky</nuxt-link
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
            <a
              href="http://www.bookcrossing.com/referral/zizzerzazzerzuz"
              target="_blank"
              class="bg-white p-2 rounded-full w-20 h-20 flex items-center justify-center mx-auto"
            >
              <img
                alt="Read and Release at BookCrossing.com..."
                align="middle"
                border="0"
                height="60"
                width="60"
                onmouseover="this.src=this.src;"
                src="http://www.bookcrossing.com/images/ReadAndReleaseAnimated60.gif"
            /></a>
          </div>
        </transition>
        <!-- VISUAL ART -->
        <div
          v-if="!showVisualOptions"
          class="text-lg cursor-pointer hover:font-bold"
          style="color: var(--teal-light)"
          @click="showVisualOptions = !showVisualOptions"
        >
          Explore Visual Art
        </div>
        <transition name="fade">
          <div
            v-if="showVisualOptions"
            class="relative flex flex-col p-2 pt-6 space-y-2 border border-black rounded md:pt-2"
            @mouseleave="showVisualOptions = false"
          >
            <span
              class="absolute top-0 right-0 p-2 text-sm rounded cursor-pointer hover:bg-black"
              @click="showVisualOptions = !showVisualOptions"
              >✖️</span
            >
            <nuxt-link to="/arts/can-wall" class="text-orange-400"
              >Build a Can Wall</nuxt-link
            >
            <nuxt-link to="/canvas" class="text-orange-400"
              >Time to Draw</nuxt-link
            >
            <nuxt-link to="/arts/drag-and-drop2" class="text-orange-400"
              >Play with Stickers</nuxt-link
            >
            <nuxt-link to="/arts/color-picker" class="text-orange-400"
              >Explore Color Names</nuxt-link
            >
            <nuxt-link to="/arts/drag-and-drop3" class="text-orange-400"
              >Make a Flower Arrangement</nuxt-link
            >
            <nuxt-link to="/arts/lite-brite" class="text-orange-400"
              >Light up your Screen With Lite Brite Inspired Art</nuxt-link
            >
            <nuxt-link to="/arts/dot-matrix-banner" class="text-orange-400"
              >Feel Nostalgic Making a Virtual Dot Matrix Banner</nuxt-link
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
      showSoundOptions: false,
      showWordOptions: false,
      showVisualOptions: false,
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
