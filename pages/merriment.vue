<template>
  <div
    class="flex flex-col items-center justify-start min-h-screen text-center md:flex-row md:justify-center"
  >
    <div
      class="flex flex-col items-center justify-center order-2 w-1/2 my-4 mr-0 md:order-1 md:w-1/3"
    >
      <img src="/monkeys.jpg" alt="monkey chain" class="w-full mb-4 rounded" />
      <p class="text-lg md:text-xl">
        And frame your mind to mirth and merriment,
      </p>
      <p class="mb-4 text-lg md:text-xl">
        Which bars a thousand harms and lengthens life.
      </p>
      <p class="text-sm">-- William Shakespeare,</p>
      <p class="text-xs">
        <span class="italic">The Taming of the Shrew</span> (c. 1593-94),
        Induction, scene 2, line 137.
      </p>
    </div>
    <div
      class="flex flex-col order-1 space-y-1 md:w-1/2 md:order-2 md:space-y-0 md:pl-24"
    >
      <div
        class="mt-6 mb-2 text-4xl font-extrabold leading-none tracking-tight text-center md:text-5xl md:text-left"
      >
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500"
        >
          Merriment
        </span>
      </div>
      <nav
        class="flex flex-col items-start justify-start p-2 space-y-2 text-lg border rounded md:p-0 md:border-none"
      >
        <nuxt-link to="/thimble/start" class="flex items-center font-semibold"
          ><span class="block pr-1 text-2xl">😅 </span> Thimble Game</nuxt-link
        >
        <nuxt-link to="/games/adverb" class="flex items-center font-semibold"
          ><span class="block pr-1 text-2xl">🎭 </span> Adverb Game</nuxt-link
        >

        <nuxt-link
          to="/games/personality-quiz"
          class="flex items-center font-semibold"
          ><span class="block pr-1 text-2xl">🦇 </span> Are You Secretly a
          Bat?</nuxt-link
        >

        <nuxt-link to="/match-game" class="flex items-center font-semibold"
          ><span class="block pr-1 text-2xl">🦖 </span> Emoji Matching
          Game</nuxt-link
        >
        <nuxt-link to="/songs" class="flex items-center font-semibold"
          ><span class="block pr-1 text-2xl">🎶 </span> Silly Songs</nuxt-link
        >
        <nuxt-link to="/quotes/cats" class="flex items-center font-semibold"
          ><span class="block pr-1 text-2xl">😻 </span> Cat
          Celebration</nuxt-link
        >
        <nuxt-link to="/sorting-hat" class="flex items-center font-semibold"
          ><span class="block pr-1 text-2xl">🎩 </span> Speedy Sorting
          Hat</nuxt-link
        >
        <nuxt-link to="/sound-machine" class="flex items-center font-semibold"
          ><span class="block pr-1 text-2xl">🔊 </span> Sound
          Sentences</nuxt-link
        >
        <nuxt-link to="/arts/madlibs" class="flex items-center font-semibold"
          ><span class="block pr-1 text-2xl">🤪 </span> Mad Stories</nuxt-link
        >
        <nuxt-link to="/stem/elements" class="flex items-center font-semibold"
          ><span class="block pr-1 text-2xl">🧪</span> Element Words</nuxt-link
        >
        <nuxt-link
          to="/image-match-game"
          class="flex items-center font-semibold"
          ><span class="block pr-1 text-2xl">🐐 </span> Animal Matching
          Game</nuxt-link
        >
        <nuxt-link to="/quotes/jokes" class="flex items-center font-semibold"
          ><span class="block pr-1 text-2xl">🤣</span> Favorite Jokes</nuxt-link
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
