<template>
  <div class="printing">
    <nav class="flex justify-start space-x-10 items-center p-4">
      <nuxt-link to="/3d-printing"
        ><img
          src="\printing\TN3D_logo_no_text_smallest.png"
          alt="3D Printing Logo"
          class="hidden md:block w-20" />
        <img
          src="\printing\TN3D_logo_no_text_tiniest.png"
          alt="3D Printing Logo"
          class="w-10 md:hidden"
      /></nuxt-link>
      <h1 class="text-sm text-center md:text-4xl">
        Thomas Nuffer's 3D Printing Shop
      </h1>
    </nav>
    <Nuxt />
    <footer class="bg-black py-4 text-center mt-6">
      Copyright © {{ currentYear }} Thomas, Rose, & Heather Nuffer
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>
