<template>
  <div class="max-w-2xl mx-auto min-h-screen">
    <header class="bg-black text-white font-bold p-6 rounded">
      <h1 class="text-2xl md:text-4xl py-4">Lyrics Created by an AI</h1>
      <p class="italic pb-4">
        "Shake the hand of the taco. Tell the truth to the taco."
      </p>
      <h2 class="text-lg md:text-2xl pb-6">
        You can give an AI a prompt to create more text for you, so let's have
        it write us some lyrics!
      </h2>
    </header>
    <main class="mx-4 md:mx-0">
      <section class="py-6 md:py-12">
        <ol class="list-decimal list-inside space-y-4">
          <li>
            Visit this site:
            <a href="https://6b.eleuther.ai/" target="_blank">EleutherAI</a>.
          </li>
          <li class="py-4 leading-loose md:leading-normal md:py-0">
            Prompt the model by typing something similar to
            <span
              class="font-serif text-teal-300 bg-black px-4 py-2 select-all rounded"
              >Here's lyrics for a song about tacos:</span
            >
          </li>
          <li>And see what is created!</li>
        </ol>
      </section>
      <section class="w-full">
        <div class="grid grid-cols-3">
          <img src="/song_images/taco.png" alt="taco" class="mx-auto" />
          <img src="/song_images/taco.png" alt="taco" class="mx-auto" />
          <img src="/song_images/taco.png" alt="taco" class="mx-auto" />
        </div>
        <h2 class="text-xl md:text-2xl font-bold pb-4">Sample Results</h2>
        <div class="flex flex-col md:flex-row items-start justify-between">
          <div class="flex flex-col space-y-2 md:w-1/2">
            <h3 class="font-bold text-base md:text-lg">Taco Song #1</h3>
            <p class="italic">Here's lyrics for a song about tacos:</p>

            <p>I don't like tacos</p>

            <p>They aren't really good</p>

            <p>They don't have enough meat</p>

            <p>I don't like tacos</p>

            <p>I want a real taco</p>

            <p>That's how I think about you</p>

            <p>I don't like you</p>

            <p>You're not very tasty</p>

            <p>I don't like you</p>

            <p>I don't like you</p>

            <p>You're too bland</p>

            <p>I don't like you</p>

            <p>I don't like you</p>

            <p>You're not that cool</p>

            <p>I don't like you</p>

            <p>I don't like you</p>

            <p>I'd rather eat some olives</p>
            <img
              src="/song_images/olives.png"
              alt="olives"
              class="w-1/3 md:w-2/3"
            />
          </div>
          <div class="flex flex-col space-y-2 md:w-1/2">
            <h3 class="font-bold text-base md:text-lg">Taco Song #2</h3>
            <p class="italic">Here's lyrics for a song about tacos:</p>

            <p>You can tell I'm a taco,</p>

            <p>Spanish is my game.</p>

            <p>Don't call me Mexican,</p>

            <p>Call me taco, taco, taco!</p>

            <p>I make my own rules,</p>

            <p>I work for the taco truck,</p>

            <p>Shake the hand of the taco,</p>

            <p>Tell the truth to the taco.</p>

            <p>I'm the taco, taco, taco,</p>

            <p>I'm the taco, taco, taco,</p>

            <p>I'm the taco, taco, taco,</p>

            <p>Ohhhh. Taco. Taco. Taco.</p>

            <p>Taco, taco, taco,</p>

            <p>Taco, taco, taco,</p>

            <p>Taco, taco, taco,</p>

            <p>Ohhhh. Taco. Taco. Taco.</p>

            <p>
              If you wanted to make a song that looks like a song about tacos,
              it would go like this.
            </p>

            <p>
              Then you would have a song about tacos, and the taco would be the
              star of the show. And the taco would be the center of the
              universe. And that's the way it should be.
            </p>

            <p>
              Because, really, there is no way that the taco could be the center
              of the universe. The taco is too small. And it's always flinging
              tacos at us.
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'AISongs',
  head() {
    return {
      title: '🎶 AI Songs | Nuxt Experiments',
    }
  },
}
</script>
