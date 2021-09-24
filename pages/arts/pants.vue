<template>
  <div
    class="min-h-screen bg-white m-0 p-0 text-center flex flex-col items-center justify-center px-4 md:px-24"
  >
    <h1 class="text-3xl uppercase font-extrabold text-red-800 py-4 md:text-6xl">
      Art Pants
    </h1>
    <p class="text-green-800 text-center pb-4">
      I was inspired by
      <a
        href="https://riordan.fandom.com/wiki/Rachel_Elizabeth_Dare"
        target="_blank"
        >Rachel Elizabeth Dare</a
      >, a character in the Percy Jackson book series who liked to draw on her
      jeans. I started drawing on this pair in 2016 and continue to add more
      things every once in a while. You, too, can make your jeans into artwork!
      Just grab some permanent markers and have fun.
    </p>
    <div
      class="grid grid-cols-2 gap-4 place-items-stretch place-content-center pb-12 sm:grid-cols-3 md:pb-20 md:grid-cols-4"
    >
      <img
        v-for="n in 16"
        :key="n"
        class="text-black"
        :src="`/pants/pants${n}.jpg`"
        alt="art pants"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pants',
}
</script>
