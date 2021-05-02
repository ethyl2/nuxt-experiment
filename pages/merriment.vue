<template>
  <div
    class="flex flex-col justify-start items-center text-center min-h-screen md:flex-row md:justify-center"
  >
    <div
      class="flex flex-col items-center justify-center w-1/2 mr-0 my-4 order-2 md:order-1 md:w-1/3"
    >
      <img src="/monkeys.jpg" alt="monkey chain" class="w-full rounded mb-4" />
      <p class="text-lg md:text-xl">
        And frame your mind to mirth and merriment,
      </p>
      <p class="text-lg mb-4 md:text-xl">
        Which bars a thousand harms and lengthens life.
      </p>
      <p class="text-sm">-- William Shakespeare,</p>
      <p class="text-xs">
        <span class="italic">The Taming of the Shrew</span> (c. 1593-94),
        Induction, scene 2, line 137.
      </p>
    </div>
    <div
      class="flex flex-col space-y-1 order-1 md:w-1/2 md:order-2 md:space-y-0 md:pl-24"
    >
      <div
        class="text-center text-4xl font-extrabold leading-none tracking-tight mt-6 mb-2 md:text-5xl md:text-left"
      >
        <span
          class="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500"
        >
          Merriment
        </span>
      </div>
      <nav
        class="flex flex-col justify-start items-start text-lg space-y-2 border rounded p-2 md:p-0 md:border-none"
      >
        <nuxt-link to="/thimble/start" class="flex items-center font-semibold"
          ><span class="block text-2xl pr-1">😅 </span> Thimble Game</nuxt-link
        >
        <nuxt-link to="/match-game" class="flex items-center font-semibold"
          ><span class="block text-2xl pr-1">🦖 </span> Emoji Matching
          Game</nuxt-link
        >
        <nuxt-link to="/songs" class="flex items-center font-semibold"
          ><span class="block text-2xl pr-1">🎶 </span> Silly Songs</nuxt-link
        >
        <nuxt-link to="/quotes/cats" class="flex items-center font-semibold"
          ><span class="block text-2xl pr-1">😻 </span> Cat
          Celebration</nuxt-link
        >
        <nuxt-link to="/sorting-hat" class="flex items-center font-semibold"
          ><span class="block text-2xl pr-1">🎩 </span> Speedy Sorting
          Hat</nuxt-link
        >
        <nuxt-link to="/sound-machine" class="flex items-center font-semibold"
          ><span class="block text-2xl pr-1">🔊 </span> Sound
          Sentences</nuxt-link
        >
        <nuxt-link to="/arts/madlibs" class="flex items-center font-semibold"
          ><span class="block text-2xl pr-1">🤪 </span> Mad Stories</nuxt-link
        >
        <nuxt-link to="/stem/elements" class="flex items-center font-semibold"
          ><span class="block text-2xl pr-1">🧪</span> Element Words</nuxt-link
        >
        <nuxt-link
          to="/image-match-game"
          class="flex items-center font-semibold"
          ><span class="block text-2xl pr-1">🐐 </span> Animal Matching
          Game</nuxt-link
        >
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Merriment | Nuxt Experiments',
    }
  },
}
</script>
