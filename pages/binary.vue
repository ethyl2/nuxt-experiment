<template>
  <div class="container flex flex-col">
    <h1 class="text-bold text-4xl pb-2">Text to Binary & Binary to Text</h1>
    <h2 class="text-2xl italic pb-4">
      Use binary to make secret messages or decorate crafts for your geeky
      friends!
    </h2>
    <div class="grid grid-cols-2 w-full gap-x-2 gap-y-6">
      <form class="w-full" @submit.prevent="handleTextSubmit">
        <label for="original-text" class="font-bold pb-1 text-lg"
          >Text to Binary</label
        >
        <textarea
          id="original-text"
          v-model="inputText"
          class="text-black p-1 rounded w-full"
          type="text"
          placeholder="type your text here"
          name="original-text"
          rows="4"
          required
        />
        <button
          class="border border-white rounded p-1 bg-teal-700 hover:bg-teal-800"
          :class="[
            toBinaryIsDisabled ? 'cursor-not-allowed' : 'cursor-pointer',
          ]"
          type="submit"
          :disabled="toBinaryIsDisabled"
        >
          Convert
        </button>
      </form>
      <div class="w-full">
        <p class="font-bold pb-1 text-lg text-teal-400">Binary Result:</p>
        <p v-if="binaryResult" class="w-full overflow-y-auto h-24">
          {{ binaryResult }}
        </p>
      </div>
      <form class="w-full" @submit.prevent="handleBinarySubmit">
        <label for="original-binary" class="font-bold pb-1 text-lg"
          >Binary to Text</label
        >
        <textarea
          id="original-binary"
          v-model="inputBinary"
          class="text-black p-1 rounded w-full"
          type="text"
          placeholder="type your binary here"
          name="original-binary"
          rows="4"
          required
        />
        <button
          class="border border-white rounded p-1 bg-teal-700 hover:bg-teal-800"
          :class="[toTextIsDisabled ? 'cursor-not-allowed' : 'cursor-pointer']"
          type="submit"
          :disabled="toTextIsDisabled"
        >
          Convert
        </button>
      </form>
      <div class="w-full">
        <p class="font-bold pb-1 text-lg text-teal-400">Text Result:</p>
        <p v-if="textResult">{{ textResult }}</p>
      </div>
    </div>

    <img
      class="w-56 mx-auto border rounded"
      src="/binaryCoaster.jpg"
      alt="binary coaster"
    />
    <figcaption>Awesome coaster made by Faith Bishop</figcaption>
  </div>
</template>

<script>
export default {
  name: 'Binary',
  data() {
    return {
      inputText: '',
      binaryResult: '',
      inputBinary: '',
      textResult: '',
    }
  },
  computed: {
    toBinaryIsDisabled() {
      return this.inputText.length < 1
    },
    toTextIsDisabled() {
      return this.inputBinary.length < 1
    },
  },
  methods: {
    handleTextSubmit() {
      this.binaryResult = this.inputText
        .split('')
        .map(function (char) {
          return char.charCodeAt(0).toString(2)
        })
        .join(' ')
    },
    handleBinarySubmit() {
      const allowedChars = /^[01\s]+$/
      if (this.inputBinary.match(allowedChars)) {
        this.textResult = this.inputBinary
          .split(' ')
          .map(function (char) {
            return String.fromCharCode(parseInt(char, 2))
          })
          .join('')
      } else {
        this.textResult = 'Sorry, input was not valid binary. Try again!'
      }
    },
  },
}
</script>
