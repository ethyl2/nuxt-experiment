<template>
  <nav class="nav">
    <div class="flex justify-between items-center">
      <nuxt-link to="/" class="flex justify-start items-center">
        <img src="../static/tree2.png" alt="logo" class="w-10" />
        <h1 class="logo text-lg">Nuxt Experiments</h1>
      </nuxt-link>
      <div class="flex space-x-5">
        <nuxt-link to="/songs">Campfire Songs</nuxt-link>
        <nuxt-link to="/balut">Balut</nuxt-link>
        <nuxt-link to="/aboutNuxt">About Nuxt</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavBar',
}
</script>
