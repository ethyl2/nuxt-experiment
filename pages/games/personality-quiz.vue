<style scoped>
input:focus + label {
  background: #998081;
}
input:checked + label {
  background: #22243b;
}
</style>
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
        v-for="(question, index) in questions"
        :key="question.instruction"
        class="mx-auto my-6 md:w-3/4"
      >
        <h3
          class="border-2 bg-black bg-opacity-50 md:w-1/2 p-4 text-xl font-bold text-center mx-auto mb-4"
        >
          {{ index + 1 }}. {{ question.instruction }}
        </h3>
        <div class="flex w-full items-center justify-center space-x-8">
          <div v-for="option in question.options" :key="option.altText">
            <input
              :id="option.altText"
              type="radio"
              :name="question.instruction"
              value="option.altText"
              class="sr-only"
            />
            <label
              :for="option.altText"
              class="flex flex-col space-y-2 items-stretch justify-center p-4 rounded"
            >
              <div
                class="w-20 h-20 bg-cover bg-center bg-no-repeat mx-auto rounded m-2 border-2 md:w-64 md:h-64"
                :style="{
                  backgroundImage: `url(${option.imgUrl})`,
                }"
              ></div>
              <p
                class="border-2 bg-black bg-opacity-50 text-lg font-bold text-center mx-auto px-2 py-1"
              >
                {{ option.altText }}
              </p>
            </label>
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
          reason:
            'There is a breed of fruit bat that had the nickname Yoda Bat.',
          reference: 'https://www.livescience.com/8735-adorable-bat.html',
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
        {
          instruction: 'Pick a baby animal.',
          reason: 'Baby bats are called pups, not kittens.',
          reference: 'https://www.doi.gov/blog/13-facts-about-bats',
          options: [
            {
              imgUrl: '/personality-quiz/puppy.jpg',
              altText: 'Puppy',
              batlike: true,
            },
            {
              imgUrl: '/personality-quiz/kitten.jpg',
              altText: 'kitten',
              batlike: false,
            },
          ],
        },
        {
          instruction: 'Pick a pair of hands.',
          reason:
            'Bats clean themselves. They spend a lot of time grooming themselves, and some even groom each other.',
          reference: 'https://www.doi.gov/blog/13-facts-about-bats',
          options: [
            {
              imgUrl: '/personality-quiz/messy-hands.jpg',
              altText: 'messy hands',
              batlike: false,
            },
            {
              imgUrl: '/personality-quiz/clean-hands.jpg',
              altText: 'clean hands',
              batlike: true,
            },
          ],
        },
      ],
    }
  },
}
</script>
