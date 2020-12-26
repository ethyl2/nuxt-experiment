<template>
  <nav class="nav">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <nuxt-link to="/" class="flex justify-start items-center">
        <img src="tree2.png" alt="logo" class="w-10" />
        <h1 class="logo text-lg">Nuxt Experiments</h1>
      </nuxt-link>
      <div
        class="flex justify-between w-full md:w-auto md:space-x-5 border-t border-b py-2 mt-2 text-xs text-center md:text-base md:border-none"
      >
        <nuxt-link to="/advent">Advent</nuxt-link>
        <nuxt-link to="/songs">Songs</nuxt-link>
        <nuxt-link to="/gratitude">Gratitude</nuxt-link>
        <nuxt-link to="/aboutNuxt">Nuxt</nuxt-link>
        <nuxt-link to="/mountains">Mountains</nuxt-link>
        <nuxt-link to="/binary">Binary</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavBar',
}
</script>
