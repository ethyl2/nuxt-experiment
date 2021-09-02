<template>
  <div
    class="min-h-screen pb-24 border-b-8 border-black"
    style="
      background: url('/balloons.jpg') no-repeat center center fixed;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    "
  >
    <h1
      class="py-2 my-4 text-xl font-bold text-center bg-black md:text-3xl"
      style="color: #e2d810"
    >
      Favorite Jokes
    </h1>
    <main class="flex flex-wrap items-stretch mx-4 justify-evenly md:mx-20">
      <joke v-for="(joke, index) in jokes" :key="index" :joke="joke" />
    </main>
  </div>
</template>
<script>
export default {
  name: 'Jokes',
  components: {
    Joke: () => import('~/components/Joke'),
  },
  computed: {
    jokes() {
      const jokesFromStoreCopy = JSON.parse(
        JSON.stringify(this.$store.state.jokes.all)
      )
      jokesFromStoreCopy.sort(() => 0.5 - Math.random())
      return jokesFromStoreCopy
    },
  },
  head() {
    return {
      title: 'Favorite Jokes | Nuxt Experiments',
      meta: [
        {
          name: 'twitter:title',
          content: 'Favorite Jokes | Nuxt Experiments',
        },
        {
          name: 'twitter:description ',
          content: 'A collection of some of my favorite jokes.',
        },
        { name: 'twitter:image', content: '../static/can-wall/can-wall.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
}
</script>
