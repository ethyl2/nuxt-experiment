<template>
  <div
    class="flex flex-col justify-start items-center min-h-screen mt-4 md:mt-10"
  >
    <h1 class="text-4xl mb-4">Mad Libs Time</h1>
    <p v-if="currentStep !== steps.length + 1" class="text-center mb-6 text-xl">
      Enter words of each specified type, and then see the wonderful story that
      will result!
    </p>
    <div
      v-for="step in steps"
      :key="step['stepNumber']"
      :class="[currentStep === step['stepNumber'] ? 'block' : 'hidden']"
    >
      <word-input
        v-model="userWords[step['modelName']]"
        :word-type="step['wordType']"
        @handle-submit="handleSubmit"
      />
    </div>
    <div
      v-if="currentStep === steps.length + 1"
      class="border border-black rounded p-4"
    >
      <p class="text-xl">
        Once upon a time, there was a
        <span class="text-orange-400">{{ userWords['adjective1'] }}</span>
        <span class="text-orange-400">{{ userWords['noun1'] }}</span> named
        <span class="text-orange-400">{{ userWords['name1'] }}</span
        >.
      </p>
      <p class="text-xl">
        This
        <span class="text-orange-400">{{ userWords['noun1'] }}</span> liked to
        <span class="text-orange-400">{{ userWords['verb1'] }}</span>
        <span class="text-orange-400">{{ userWords['adverb1'] }}</span> all day.
      </p>
      <p class="text-xl">
        So much
        <span class="text-orange-400">{{ userWords['verb1'] }}</span
        >ing made his/her
        <span class="text-orange-400">{{ userWords['bodyPart1'] }}</span> ache
        terribly.
      </p>
      <p class="text-xl">
        <span class="text-orange-400">{{ userWords['name1'] }}</span> exclaimed,
        "<span class="text-orange-400">{{ userWords['exclamation1'] }}</span
        >!" and decided to leave right away to go to
        <span class="text-orange-400">{{ userWords['adjective1'] }}</span>
        <span class="text-orange-400">{{ userWords['place1'] }}</span
        >.
      </p>
    </div>
    <div>
      <img
        v-if="currentStep === steps.length + 1"
        src="/to_be_continued.jpg"
        alt="To be continued sign art"
        class="w-5/6 mx-auto m-6 rounded md:w-1/2"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Madlibs',
  components: {
    WordInput: () => import('~/components/madlibs/WordInput'),
  },
  data() {
    return {
      currentStep: 1,
      steps: [
        { stepNumber: 1, modelName: 'name1', wordType: 'name' },
        { stepNumber: 2, modelName: 'adjective1', wordType: 'adjective' },
        { stepNumber: 3, modelName: 'noun1', wordType: 'noun' },
        { stepNumber: 4, modelName: 'verb1', wordType: 'verb' },
        { stepNumber: 5, modelName: 'adverb1', wordType: 'adverb' },
        { stepNumber: 6, modelName: 'exclamation1', wordType: 'exclamation' },
        { stepNumber: 7, modelName: 'bodyPart1', wordType: 'body part' },
        { stepNumber: 8, modelName: 'place1', wordType: 'place' },
      ],
      userWords: {
        name1: '',
        adjective1: '',
        noun1: '',
        verb1: '',
        adverb1: '',
        exclamation1: '',
        bodyPart1: '',
        place1: '',
      },
    }
  },
  methods: {
    handleSubmit() {
      if (this.currentStep <= this.steps.length) {
        this.currentStep += 1
      }
    },
  },
}
</script>
