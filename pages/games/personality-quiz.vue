<template>
  <div
    class="bg-no-repeat bg-cover bg-center min-h-screen"
    style="background-image: url('/personality-quiz/bats.jpg')"
  >
    <header
      class="w-5/6 mx-auto my-6 font-bold text-white p-5 text-center border-2 bg-black bg-opacity-25 md:w-1/2"
    >
      <h2 class="uppercase">Personality Quiz Time</h2>
      <h1 class="text-xl md:text-5xl">
        Are you or are you not secretly a bat?
      </h1>
      <p>This may change your life.</p>
    </header>
    <main class="flex flex-col items-center justify-center mx-auto">
      <div
        v-for="question in questions"
        :key="question.instruction"
        class="mx-auto md:w-3/4"
      >
        <h3
          class="border-2 bg-black bg-opacity-50 md:w-1/2 p-4 text-lg font-bold text-center mx-auto"
        >
          {{ question.instruction }}
        </h3>
        <div class="flex w-full items-stretch justify-between">
          <div
            v-for="option in question.options"
            :key="option.altText"
            class="w-1/2 p-4 rounded overflow-hidden"
          >
            <img
              class="w-full h-full rounded"
              :src="option.imgUrl"
              :alt="option.altText"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  name: 'PodcastList',
  data() {
    return {
      questions: [
        {
          instruction: 'Pick a character.',
          options: [
            {
              imgUrl: '/personality-quiz/baby-yoda.jpg',
              altText: 'Grogu aka Baby Yoda',
              batlike: true,
            },
            {
              imgUrl: '/personality-quiz/darth-vader.jpg',
              altText: 'Darth Vader',
              batlike: false,
            },
          ],
        },
      ],
    }
  },
}
</script>
