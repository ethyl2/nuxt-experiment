<template>
  <div class="container flex flex-col items-center px-4">
    <form
      name="fruitForm"
      class="flex flex-col items-start space-y-2 mb-4"
      @submit.prevent="handleSubmit"
    >
      <legend class="text-3xl font-bold text-yellow-200">
        What is your favorite fruit?
      </legend>
      <label v-for="fruitChoice in fruits" :key="fruitChoice"
        ><input
          v-model="fruit"
          type="radio"
          :value="fruitChoice"
          class="mr-2"
          required
          @click="regularFruit"
        />{{ fruitChoice }}</label
      >
      <label class="flex flex-col items-start md:flex-row">
        <div>
          <input
            id="other_fruit"
            v-model="fruit"
            type="radio"
            value="other"
            class="mr-2"
          />or other fruit:
        </div>
        <input
          id="other_text"
          v-model="other"
          class="text-black pl-1 rounded ml-4 md:ml-2"
          type="text"
      /></label>
      <div class="pt-4">
        <button
          type="submit"
          class="bg-red-800 font-bold px-3 py-1 rounded text-lg hover:bg-red-900"
        >
          Submit
        </button>
      </div>
    </form>
    <p v-if="finalFruit" class="my-4 text-2xl font-bold">
      The favorite: {{ finalFruit }}
    </p>
    <img src="/fruit-salad.jpg" alt="fruit salad" class="md:w-1/2 rounded" />
  </div>
</template>

<script>
export default {
  name: 'FruitForm',
  data() {
    return {
      fruit: '',
      other: '',
      finalFruit: '',
      fruits: [
        'apple',
        'banana',
        'orange',
        'lemon',
        'peach',
        'strawberry',
        'watermelon',
        'grape',
        'kiwi',
        'passionfruit',
        'blueberry',
        'mango',
        'cherry',
      ],
    }
  },
  methods: {
    regularFruit() {
      this.other = ''
    },
    handleSubmit() {
      this.finalFruit = this.fruit !== 'other' ? this.fruit : this.other
    },
  },
}
</script>
