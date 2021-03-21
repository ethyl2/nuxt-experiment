<template>
  <div
    class="flex flex-col justify-start items-center text-center min-h-screen md:flex-row md:justify-center"
  >
    <img
      src="/monkeys.jpg"
      alt="monkey chain"
      class="w-1/2 mr-0 my-4 order-2 md:order-1 md:w-1/3"
    />
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
      </nav>
    </div>
  </div>
</template>

<script>
export default {}
</script>
