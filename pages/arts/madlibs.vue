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
        :current-step="currentStep"
        :total-steps="steps.length"
        @handle-submit="handleSubmit"
      />
    </div>
    <div
      v-if="currentStep === steps.length + 1"
      class="border border-black rounded p-4 mx-4"
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
        >!" and decided to leave right away to go to [the]
        <span class="text-orange-400">{{ userWords['adjective1'] }}</span>
        <span class="text-orange-400">{{ userWords['place1'] }}</span
        >.
      </p>
      <br />
      <p class="text-xl">
        While in [the]
        <span class="text-orange-400">{{ userWords['place1'] }}</span
        >,
        <span class="text-orange-400">{{ userWords['name1'] }}</span> invented a
        <span class="text-orange-400">{{ userWords['adjective2'] }}</span>
        <span class="text-orange-400">{{ userWords['noun2'] }}</span
        >-<span class="text-orange-400">{{ userWords['noun3'] }}</span> so that
        he/she could
        <span class="text-orange-400">{{ userWords['verb1'] }}</span> more
        easily. Bonus: the
        <span class="text-orange-400">{{ userWords['noun2'] }}</span
        >-<span class="text-orange-400">{{ userWords['noun3'] }}</span> could
        also <span class="text-orange-400">{{ userWords['verb2'] }}</span> quite
        <span class="text-orange-400">{{ userWords['adverb1'] }}</span
        >!
      </p>
      <p class="text-xl">
        This <span class="text-orange-400">{{ userWords['adjective2'] }}</span>
        <span class="text-orange-400">{{ userWords['noun2'] }}</span
        >-<span class="text-orange-400">{{ userWords['noun3'] }}</span> made
        <span class="text-orange-400">{{ userWords['name1'] }}</span> feel quite
        <span class="text-orange-400">{{ userWords['adjective3'] }}</span
        >. He/she made $<span class="text-orange-400">{{
          userWords['number1']
        }}</span>
        and used the money to buy
        <span class="text-orange-400">{{ userWords['number2'] }}</span>
        <span class="text-orange-400">{{ userWords['pluralNoun1'] }}</span
        >. The
        <span class="text-orange-400">{{ userWords['adjective1'] }}</span>
        <span class="text-orange-400">{{ userWords['noun1'] }}</span> ate tons
        of <span class="text-orange-400">{{ userWords['food1'] }}</span
        >, washed it down with
        <span class="text-orange-400">{{ userWords['liquid1'] }}</span
        >, and went to bed.
      </p>
      <br />
      <p class="text-xl">
        You, too, could go to [the]
        <span class="text-orange-400">{{ userWords['adjective1'] }}</span>
        <span class="text-orange-400">{{ userWords['place1'] }}</span> and
        invent a <span class="text-orange-400">{{ userWords['noun2'] }}</span
        >-<span class="text-orange-400">{{ userWords['noun3'] }}</span> and live
        <span class="text-orange-400">{{ userWords['adverb2'] }}</span> ever
        after. Just like
        <span class="text-orange-400">{{ userWords['name1'] }}</span
        >. What do you think?
      </p>
    </div>
    <div class="w-1/4">
      <img
        :src="
          currentStep !== steps.length + 1
            ? '/eggs.jpg'
            : '/to_be_continued.jpg'
        "
        :alt="
          currentStep !== steps.length + 1
            ? 'Eggs with caces'
            : 'To Be Continued sign art'
        "
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
        { stepNumber: 9, modelName: 'adjective2', wordType: 'adjective' },
        { stepNumber: 10, modelName: 'noun3', wordType: 'noun' },
        { stepNumber: 11, modelName: 'verb2', wordType: 'verb' },
        { stepNumber: 12, modelName: 'noun2', wordType: 'noun' },
        { stepNumber: 13, modelName: 'adverb2', wordType: 'adverb' },
        { stepNumber: 14, modelName: 'adjective3', wordType: 'adjective' },
        { stepNumber: 15, modelName: 'number1', wordType: 'number' },
        { stepNumber: 16, modelName: 'pluralNoun1', wordType: 'plural noun' },
        { stepNumber: 17, modelName: 'food1', wordType: 'type of food' },
        { stepNumber: 18, modelName: 'liquid1', wordType: 'type of liquid' },
        { stepNumber: 19, modelName: 'number2', wordType: 'number' },
        { stepNumber: 20, modelName: 'adverb3', wordType: 'adverb' },
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
  head() {
    return {
      title: '🤪 Madlibs',
      meta: [
        {
          name: 'description',
          content: 'Create a zany Madlibs story.',
        },
        {
          name: 'twitter:title',
          content: 'Madlibs | Nuxt Experiments',
        },
        {
          name: 'twitter:description ',
          content: 'Create a zany Madlibs story.',
        },
        { name: 'twitter:image', content: '/eggs.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
}
</script>
