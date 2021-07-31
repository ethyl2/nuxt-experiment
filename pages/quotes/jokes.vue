<template>
  <div
    class="min-h-screen border-b-8 border-black pb-24"
    style="
      background: url('/balloons.jpg') no-repeat center center fixed;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    "
  >
    <h1
      class="text-center text-xl md:text-3xl my-4 font-bold bg-black py-2"
      style="color: #e2d810"
    >
      Favorite Jokes
    </h1>
    <main class="mx-4 flex flex-wrap justify-evenly items-stretch md:mx-20">
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
