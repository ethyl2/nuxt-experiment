<style scoped>
.cat-button:active {
  transform: translate(0px, 5px);
  -webkit-transform: translate(0px, 5px);
}
</style>

<template>
  <section>
    <h1 class="font-bold text-2xl py-4">Cat Clicking Time</h1>
    <h2 v-if="!selectedName" class="text-sm mb-2 md:text-lg">
      In the past, you may have clicked on
      <a href="http://cowclicker.com/" target="_blank">cows</a> or
      <a href="https://orteil.dashnet.org/cookieclicker/" target="_blank"
        >cookies</a
      >. Now, here's your chance to click on cats. How many times can you click
      on your cat?
    </h2>
    <div v-if="!selectedName" class="flex flex-col space-y-2 mb-4">
      <label for="name">Choose a Name for Your Cat</label>
      <select
        v-model="selectedName"
        class="text-black w-5/6 mx-auto rounded md:w-1/4"
        name="name"
      >
        <option value="-" class="text-black" disabled>Choose a cat:</option>
        <option
          v-for="nameOption in nameOptions"
          :key="nameOption"
          :value="nameOption"
          class="text-black"
        >
          {{ nameOption }}
        </option>
      </select>
    </div>

    <div v-if="selectedName">
      <img
        src="https://cataas.com/cat?width=300"
        :alt="selectedName"
        class="cat-button mx-auto w-64 rounded mb-4"
        @click.prevent="handleClick"
      />
      <p>{{ selectedName }} says</p>
      <p>"{{ sound }}"</p>
      <div class="rounded-full p-1 bg-black text-white w-12 mx-auto">
        <span>{{ counter }}</span>
      </div>
      <p>{{ message }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CatClicker',
  data() {
    return {
      selectedName: '',
      counter: 0,
      sound: 'meow',
    }
  },
  computed: {
    names() {
      return this.$store.state.cats.names
    },
    nameOptions() {
      const nameIndices = []
      const featuredNames = []
      while (nameIndices.length < 10) {
        const nameIndex = Math.floor(Math.random() * this.names.length)
        if (!nameIndices.includes(nameIndex)) nameIndices.push(nameIndex)
      }
      nameIndices.forEach((nameIndex) => {
        featuredNames.push(this.names[nameIndex])
      })
      return featuredNames
    },
    sounds() {
      return this.$store.state.cats.sounds
    },
    message() {
      let currentMessage = ''
      switch (true) {
        case this.counter === 0:
          currentMessage = `Go ahead and click on ${this.selectedName}. It's painless!`
          break
        case this.counter < 10:
          currentMessage =
            'And so the path begins to become a cat click-a-holic!'
          break
        case this.counter < 25:
          currentMessage = "Isn't it so satisfying to click on cats?"
          break
        case this.counter < 40:
          currentMessage =
            "What would you rather be doing with your life right now? There's probably nothing more important than clicking on your cat."
          break
        default:
          currentMessage =
            'You win! You are on your way to become a cat click-a-holic!'
      }
      return currentMessage
    },
  },
  methods: {
    handleClick() {
      this.counter++
      this.sound = this.sounds[Math.floor(Math.random() * this.sounds.length)]
    },
  },
}
</script>
