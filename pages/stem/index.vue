<template>
  <div
    class="flex flex-col justify-center items-center text-center m-2 md:m-16 md:flex-row md:space-x-4"
  >
    <img
      src="/binaryShield.png"
      alt="binary shield"
      class="w:1/3 mx-auto my-4 order-2 md:order-1"
    />
    <div class="flex flex-col space-y-6 order-1 md:order-2">
      <h1 class="text-5xl">STEM</h1>
      <nav class="flex flex-col text-lg space-y-4">
        <nuxt-link to="/stem/binary"
          >Converting Between Text and Binary</nuxt-link
        >
        <nuxt-link to="/stem/elements"
          >Creating Words and Passwords from Periodic Table Symbols</nuxt-link
        >
        <nuxt-link to="/3d-printing">3D Printing Shop</nuxt-link>
        <nuxt-link to="/stem/stem-women">STEM Women</nuxt-link>
        <nuxt-link to="/stem/cistercian-monk-numerals"
          >Creating Cistercian Monk Numerals</nuxt-link
        >
        <nuxt-link to="/songs/christmas/pi">Pi Song</nuxt-link>
        <div class="p-6 rounded bg-gray-900 flex flex-col space-y-4">
          <h2 class="text-2xl">Computer Programming Concepts</h2>
          <nuxt-link to="/stem/case-styles"
            >Creating Variable Names in Case Styles</nuxt-link
          >
          <nuxt-link to="/stem/local-storage-test"
            >Using Local Storage</nuxt-link
          >
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {}
</script>
