<style scoped>
input:hover + label {
  background: rgba(0, 0, 0, 0.25);
}
input:focus + label {
  background: #998081;
}
input:checked + label {
  background: #22243b;
}
</style>
<template>
  <div
    class="min-h-screen pt-6 md:pt-12"
    style="
      background: url('/personality-quiz/bats-in-sky.jpg') no-repeat center
        center fixed;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    "
  >
    <header
      class="w-5/6 mx-auto my-6 font-bold text-white p-5 text-center border-2 bg-black bg-opacity-25 md:w-1/2"
    >
      <h1 class="text-2xl md:text-5xl">
        Are you or are you not secretly a bat?
      </h1>
      <p class="italic">
        Inspired by
        <a
          href="https://roses-personality-quiz.rosenuffergwc.repl.co/"
          target="_blank"
          >this quiz.</a
        >
      </p>
    </header>
    <main class="flex flex-col items-center justify-center mx-auto">
      <div
        v-for="(question, index) in questions"
        :id="question.id"
        :key="question.instruction"
        class="mx-auto my-6 md:w-3/4"
      >
        <div
          class="flex flex-col border-2 bg-black bg-opacity-50 md:w-1/2 px-2 py-1 text-xl font-bold text-center mx-4 mb-4 md:mx-auto md:text-2xl md:px-4 md:py-2"
        >
          <h3>{{ index + 1 }}. {{ question.instruction }}</h3>
          <p v-if="showReason" class="text-sm md:text-base">
            {{ question.reason }}
          </p>
        </div>
        <div class="flex w-full items-center justify-center space-x-8 px-2">
          <div v-for="option in question.options" :key="option.altText">
            <input
              :id="option.altText"
              v-model="responses[question.id]"
              type="radio"
              :name="question.instruction"
              :value="option.batlike"
              class="sr-only"
            />
            <label
              :for="option.altText"
              class="flex flex-col space-y-2 items-stretch justify-center p-4 rounded"
            >
              <div
                class="w-24 h-20 bg-cover bg-center bg-no-repeat mx-auto rounded m-2 border-2 md:w-64 md:h-56"
                :style="{
                  backgroundImage: `url(${option.imgUrl})`,
                }"
              ></div>
              <p
                class="border-2 bg-black bg-opacity-50 text-lg font-bold text-center mx-auto px-2 py-1 rounded md:text-xl"
              >
                {{ option.altText }}
              </p>
            </label>
          </div>
        </div>
      </div>

      <button
        v-if="
          Object.keys(responses).length === questions.length &&
          finalText.length === 0
        "
        class="text-3xl md:text-5xl bg-black py-2 px-3 rounded hover:bg-white hover:text-black my-4"
        @click="handleSubmit"
      >
        Find out
      </button>
      <p v-else class="text-black">
        You have made {{ Object.keys(responses).length }}/{{ questions.length }}
        selections.
      </p>
      <p class="text-2xl my-6 text-black md:text-6xl">{{ finalText }}</p>
      <svg
        v-if="finalText === 'Calculating...'"
        class="animate-spin h-12 w-12 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <img
        v-if="finalText === 'You are.'"
        src="/personality-quiz/bat-faces.jpg"
        alt="bat faces"
        class="w-32 h-30 md:w-64 md:h-56 rounded"
      />
      <button
        v-if="Object.keys(responses).length === questions.length"
        class="text-xl md:text-2xl bg-black py-2 px-3 rounded hover:bg-white hover:text-black my-4"
        @click="reset"
      >
        Reset
      </button>
    </main>
  </div>
</template>
<script>
export default {
  name: 'PersonalityQuiz',
  data() {
    return {
      finalText: '',
      responses: {},
      showReason: false,
      questions: [
        {
          id: 'color',
          instruction: 'Pick a color.',
          reason:
            'Of the 1400+ species of bats in the world, 3 are vampire bats that drink blood.',
          reference: 'https://www.batcon.org/about-bats/faq/',
          options: [
            {
              imgUrl: '/personality-quiz/green.jpg',
              altText: 'green',
              batlike: false,
            },
            {
              imgUrl: '/personality-quiz/red.jpg',
              altText: 'red',
              batlike: true,
            },
          ],
        },
        {
          id: 'character',
          instruction: 'Pick a character.',
          reason:
            'There is a breed of fruit bat that had the nickname Yoda bat.',
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
          id: 'baby',
          instruction: 'Pick a baby animal.',
          reason: 'Baby bats are called pups, not kittens.',
          reference: 'https://www.doi.gov/blog/13-facts-about-bats',
          options: [
            {
              imgUrl: '/personality-quiz/puppy.jpg',
              altText: 'puppy',
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
          id: 'hands',
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
        {
          id: 'pumpkins',
          instruction: 'Pick a pair of pumpkins.',
          reason:
            'Hanging upside down allows bats to let go and quickly fall to gain momentum for flight. Unlike birds that have hollow bones, bats have solid bones like all other mammals, which is why they have more need for the extra momentum gained from falling. ',
          reference: 'https://www.batcon.org/about-bats/faq/',
          options: [
            {
              imgUrl: '/personality-quiz/painted-pumpkins.jpg',
              altText: 'painted pumpkins',
              batlike: true,
            },
            {
              imgUrl: '/personality-quiz/jack-o-lanterns.jpg',
              altText: 'jack-o-lanterns',
              batlike: false,
            },
          ],
        },
      ],
    }
  },
  methods: {
    handleSubmit() {
      this.finalText = 'Calculating...'
      setTimeout(() => {
        const trueCount = Object.values(this.responses).filter(Boolean).length
        if (trueCount >= this.questions.length / 2) {
          this.finalText = 'You are.'
        } else {
          this.finalText = 'You are not. Sorry.'
        }
        this.showReason = true
      }, 1000)
    },
    reset() {
      this.responses = {}
      location.href = `#${this.questions[0].id}`
      this.finalText = ''
      this.showReason = false
    },
  },
  head() {
    return {
      title: 'Are You Secretly a Bat? 🦇 | Nuxt Experiments',
    }
  },
}
</script>
