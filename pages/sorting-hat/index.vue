<template>
  <div class="container flex flex-col w-5/6 mx-auto space-y-4 md:w-full">
    <h1 class="text-2xl">Short & Sweet Sorting Hat Quiz</h1>
    <form class="flex flex-col space-y-4" @submit.prevent="handleSubmit">
      <div
        v-for="(question, index) in questions"
        :key="index"
        class="w-full flex flex-col space-y-2"
      >
        <label for="`question-${index}`">{{ question.question }}</label>
        <select
          v-model="responses[`question${index}`]"
          name="`question-${index}`"
          class="text-black font-medium rounded mx-auto text-xs md:text-base"
        >
          <option
            v-for="(option, optionIndex) in question.options"
            :key="`select-option-${optionIndex}`"
            :value="optionIndex + 1"
            class="font-medium text-xs md:text-base"
          >
            {{ option }}
          </option>
        </select>
      </div>
      <button
        type="submit"
        class="bg-black text-white rounded p-1 m-2 hover:bg-gray-700 text-xs mx-auto md:text-base"
        :disabled="disableButton"
        :class="[disableButton ? 'cursor-not-allowed' : '']"
        style="max-width: 130px"
      >
        Sort Yourself
      </button>
    </form>
    <div v-if="house">
      <h2 class="text-lg">Congratulations on being sorted into {{ house }}!</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SortingHat',
  data() {
    return {
      responses: { question0: '', question1: '', question2: '', question3: '' },
      house: '',
      questions: [
        {
          question: "When I'm dead, I want people to remember me as:",
          options: ['The Good', 'The Great', 'The Wise', 'The Bold'],
        },
        { question: 'Dawn or Dusk?', options: ['Dawn', 'Dusk'] },
        {
          question: 'Which kind of instrument most pleases my ear?',
          options: ['Violin', 'Trumpet', 'Piano', 'Drum'],
        },
        {
          question: 'Which road tempts me the most?',
          options: [
            'The wide, sunny, grassy lane',
            'The narrow, dark, lantern-lit alley',
            'The twisting, leaf-strewn path through the woods',
            'The cobbled street lined with ancient buildings',
          ],
        },
      ],
    }
  },
  computed: {
    disableButton() {
      return (
        !this.responses.question0 ||
        !this.responses.question1 ||
        !this.responses.question2 ||
        !this.responses.question3
      )
    },
  },
  methods: {
    handleSubmit() {
      let gryffindor = 0
      let hufflepuff = 0
      let ravenclaw = 0
      let slytherin = 0
      switch (this.responses.question0) {
        case 1:
          hufflepuff++
          break
        case 2:
          slytherin++
          break
        case 3:
          ravenclaw++
          break
        case 4:
          gryffindor++
      }
      switch (this.responses.question1) {
        case 1:
          gryffindor++
          ravenclaw++
          break
        case 2:
          hufflepuff++
          slytherin++
      }
      switch (this.responses.question2) {
        case 1:
          slytherin++
          break
        case 2:
          hufflepuff++
          break
        case 3:
          ravenclaw++
          break
        case 4:
          gryffindor++
      }
      switch (this.responses.question3) {
        case 1:
          hufflepuff++
          break
        case 2:
          slytherin++
          break
        case 3:
          gryffindor++
          break
        case 4:
          ravenclaw++
      }
      this.house = 'Gryffindor'
      let max = gryffindor
      if (hufflepuff > max) {
        this.house = 'Hufflepuff'
        max = hufflepuff
      }
      if (ravenclaw > max) {
        this.house = 'Ravenclaw'
        max = ravenclaw
      }
      if (slytherin > max) {
        this.house = 'Slytherin'
        max = slytherin
      }
    },
  },
  head() {
    return {
      title: 'Short & Sweet Sorting Hat',
    }
  },
}
</script>
