<template>
  <div class="container">
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <h1 class="text-3xl mt-2 mb-8 font-bold text-center">
        Mountains From Around the World
      </h1>
      <div>
        <ul>
          <li v-for="mountain of mountains" :key="mountain.title">
            <mountain-card :mountain="mountain" />
          </li>
        </ul>
      </div>
      <image-slider :images="images" class="mt-8" />
      <button class="mt-8" @click="$fetch">Refresh</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mountains',
  components: {
    MountainCard: () => import('~/components/MountainCard'),
    ImageSlider: () => import('~/components/ImageSlider'),
  },
  async fetch() {
    this.mountains = await fetch('https://api.nuxtjs.dev/mountains').then(
      (res) => {
        return res.json()
      }
    )
  },
  data() {
    return {
      mountains: [],
    }
  },
  computed: {
    images() {
      if (this.mountains.length > 0) {
        return this.mountains.map((mountain) => mountain.image)
      } else {
        return []
      }
    },
  },
  head() {
    return {
      title: 'Mountains ⛰️',
    }
  },
}
</script>
