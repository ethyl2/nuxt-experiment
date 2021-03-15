<template>
  <div class="container flex flex-col min-height-screen">
    <h1 class="text-4xl text-bold mb-6">Sincere apologies. 😕</h1>
    <div v-if="error.statusCode === 404">
      <h2 class="text-2xl mb-4">Page not found; it might not exist yet?</h2>
      <p class="text-xl mb-6">
        💡 If you have an awesome idea for a page, please
        <a href="https://www.heathernuffer.com/contact" target="_blank"
          >tell me all about it</a
        >!
      </p>
    </div>
    <h1 v-else>An error occurred.</h1>
    <nuxt-link class="flex items-center justify-center" to="/quotes/cats">
      <img
        src="/confused_cat.jpg"
        alt="confused cat"
        class="w-1/2 rounded mb-4"
      />
    </nuxt-link>
    <p class="text-xl mb-4">Here are a few other pages to poke around in: 👇</p>
    <nav class="flex flex-col text-base space-y-3 items-start md:text-lg">
      <a href="https://github.com/ethyl2/nuxt-experiment" target="_blank"
        >🧬 Repo for this project</a
      >
      <nuxt-link to="/stem/binary"
        >🧮 Converting Between Text and Binary</nuxt-link
      >
      <nuxt-link to="/arts/madlibs">🤪 Mad Libs</nuxt-link>
      <nuxt-link to="/stem/elements"
        >⚗️ Periodic Table Element Symbols</nuxt-link
      >
      <nuxt-link to="/quotes/cats">🐈 Cat Inspiration</nuxt-link>
      <nuxt-link to="/3d-printing">🖼️ 3D Prints Ordering</nuxt-link>
      <a href="https://www.heathernuffer.com/" target="_blank"
        >🎨 My Portfolio</a
      >
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  layout: 'error', // you can set a custom layout for the error page
}
</script>
