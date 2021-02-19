<template>
  <div
    class="flex flex-col justify-center items-center text-center min-h-screen md:m-16 md:flex-row"
  >
    <img
      src="/song.png"
      alt="cassette tape"
      class="w-1/3 mr-0 my-4 order-2 md:order-1"
    />
    <div
      class="flex flex-col space-y-1 order-1 md:w-1/2 md:order-2 md:pl-4 md:space-y-0"
    >
      <h1 class="text-5xl">Arts</h1>
      <nav class="flex flex-col text-lg space-y-2">
        <nuxt-link to="/canvas">Time to Draw</nuxt-link>
        <nuxt-link to="/songs">Find Songs</nuxt-link>
        <nuxt-link to="/quotes">Become Inspired</nuxt-link>
        <nuxt-link to="/quotes/cats">Celebrate Cats</nuxt-link>
        <nuxt-link to="/sorting-hat">Join a Hogwarts House</nuxt-link>
        <nuxt-link to="/sound-machine">Make a Sound Sentence</nuxt-link>
        <nuxt-link to="/arts/drag-and-drop"
          >Explore Your Feelings About Words</nuxt-link
        >
        <nuxt-link to="/arts/drag-and-drop2">Play with Stickers</nuxt-link>
        <nuxt-link to="/arts/color-picker">Explore Color Names</nuxt-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {}
</script>
