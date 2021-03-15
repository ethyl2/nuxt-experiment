<template>
  <nav class="nav">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <nuxt-link to="/" class="flex justify-start items-center">
        <img src="/tree2.png" alt="logo" class="w-10" />
        <h1 class="logo text-lg font-semibold">Nuxt Experiments</h1>
      </nuxt-link>
      <div
        class="flex justify-between w-full border-t border-b py-2 mt-2 px-2 text-xs text-center font-semibold md:w-auto md:space-x-5 md:text-base md:border-none"
      >
        <nuxt-link to="/merriment">Merriment</nuxt-link>
        <nuxt-link to="/advent">Advent</nuxt-link>
        <nuxt-link to="/arts">Arts</nuxt-link>
        <nuxt-link to="/gratitude">Gratitude</nuxt-link>
        <nuxt-link to="/aboutNuxt">Nuxt</nuxt-link>
        <nuxt-link to="/stem">STEM</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavBar',
}
</script>
