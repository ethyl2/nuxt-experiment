<template>
  <div class="container">
    <div>
      <img src="../static/tree2.png" alt="logo" class="mx-auto" />
      <h1 class="title mb-6">Nuxt.js Experiments</h1>
      <nuxt-link
        to="/concierge"
        class="bg-black rounded py-2 px-4 my-12 text-2xl font-bold text-white hover:bg-gray-900"
      >
        Let's Go!
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Home Page 🌳',
      meta: [
        {
          name: 'twitter:title',
          content: "Heather Nuffer's Nuxt.js Experiment",
        },
        {
          name: 'twitter:description ',
          content: "Heather Nuffer's Nuxt.js Experiment",
        },
        { name: 'twitter:image', content: '../static/tree2.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
}
</style>
