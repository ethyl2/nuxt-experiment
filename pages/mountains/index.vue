<template>
  <div class="container">
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <h1 class="text-3xl mt-2 mb-8 font-bold">
        Mountains From Around the World
      </h1>
      <ul>
        <li v-for="mountain of mountains" :key="mountain.title">
          <mountain-card :mountain="mountain" />
        </li>
      </ul>
      <button @click="$fetch">Refresh</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mountains',
  components: {
    MountainCard: () => import('~/components/MountainCard'),
  },
  async fetch() {
    this.mountains = await fetch(
      'https://api.nuxtjs.dev/mountains'
    ).then((res) => res.json())
  },
  data() {
    return {
      mountains: [],
    }
  },
}
</script>
