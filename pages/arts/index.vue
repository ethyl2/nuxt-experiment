<template>
  <div
    class="flex flex-col justify-center items-center text-center m-2 md:m-16 md:flex-row md:space-x-4"
  >
    <img
      src="/song.png"
      alt="cassette tape"
      class="w:1/3 mx-auto my-4 order-2 md:order-1"
    />
    <div class="flex flex-col space-y-6 order-1 md:order-2">
      <h1 class="text-5xl">Arts</h1>
      <nav class="flex flex-col text-lg space-y-4">
        <nuxt-link to="/canvas">Time to Draw</nuxt-link>
        <nuxt-link to="/songs">Find Songs</nuxt-link>
        <nuxt-link to="/quotes">Become Inspired</nuxt-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {}
</script>
