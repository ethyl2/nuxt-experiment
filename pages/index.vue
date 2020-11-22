<template>
  <div class="container">
    <div>
      <img src="../static/tree2.png" alt="logo" class="mx-auto" />
      <h1 class="title">Nuxt.js Experiments</h1>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Home Page 🌳',
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
