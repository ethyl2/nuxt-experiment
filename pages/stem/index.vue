<template>
  <div>
    <h1 class="text-5xl text-center">STEM</h1>
    <div
      class="flex flex-col justify-center items-center text-center m-2 md:mx-24 md:flex-row md:items-stretch md:space-x-6"
    >
      <!-- LEFT SIDE -->
      <div
        class="w-full flex flex-row items-center justify-center mx-auto my-4 order-2 bg-black md:flex-col md:order-1 md:my-0 md:w-1/3 md:mr-0 md:space-y-4"
      >
        <nuxt-link to="/stem/binary">
          <img src="/binaryShield.png" alt="binary shield" />
        </nuxt-link>
        <nuxt-link to="/stem/elements">
          <img src="/chemistry.png" alt="chemistry" />
        </nuxt-link>
        <nuxt-link to="/stem/css-variables">
          <img src="/orange-sun.png" alt="sun" />
        </nuxt-link>
      </div>
      <!-- RIGHT SIDE -->

      <nav
        class="w-full flex flex-col order-1 text-lg justify-between space-y-4 md:order-2 md:w-2/3 md:space-y-0"
      >
        <div class="p-6 rounded bg-black flex flex-col space-y-2">
          <h2 class="text-2xl">Activities</h2>
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
        </div>
        <div class="p-6 rounded bg-gray-900 flex flex-col space-y-2">
          <h2 class="text-2xl">Computer Programming Concepts</h2>
          <nuxt-link to="/stem/case-styles"
            >Creating Variable Names in Case Styles</nuxt-link
          >
          <nuxt-link to="/stem/local-storage-test"
            >Using Local Storage</nuxt-link
          >
          <nuxt-link to="/stem/caps-lock">Caps Lock Event Listening</nuxt-link>
          <nuxt-link to="/stem/css-variables">CSS Variables</nuxt-link>
          <nuxt-link to="/arts/shapes">CSS Shapes</nuxt-link>
          <nuxt-link to="/stem/keyboard-navigation"
            >Keyboard Navigation</nuxt-link
          >
          <nuxt-link to="/stem/blur">CSS Backdrop Filter Blur</nuxt-link>
          <nuxt-link to="/stem/attributes">HTML Attributes</nuxt-link>
        </div>
        <div class="p-6 rounded bg-teal-900 flex flex-col space-y-2">
          <h2 class="text-2xl">STEM-Themed Songs</h2>
          <nuxt-link to="/songs/christmas/pi">Oh Number Pi</nuxt-link>
          <nuxt-link to="/songs/christmas/pi-day">Pi Day</nuxt-link>
          <nuxt-link to="/songs/christmas/xenon"
            >Xenon, the Inert Atom</nuxt-link
          >
          <nuxt-link to="/songs/christmas/virus"
            >Viruses Are Comin' to Town</nuxt-link
          >
          <nuxt-link to="/songs/christmas/precipitate"
            >Oh That Precipitate</nuxt-link
          >
          <nuxt-link to="/songs/christmas/zero"
            >You Can't Divide by Zero</nuxt-link
          >
          <nuxt-link to="/songs/christmas/photon">Frosty the Photon</nuxt-link>
          <nuxt-link to="/songs/christmas/gravity">Gravity Bells</nuxt-link>
          <nuxt-link to="/songs/christmas/gases"
            >O Come, All Ye Gases</nuxt-link
          >
          <nuxt-link to="/songs/christmas/refactoring"
            >Refactoring All The Way</nuxt-link
          >
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'STEM | Nuxt Experiments',
    }
  },
}
</script>
