<style scoped>
.cat-button:active {
  transform: translate(0px, 5px);
  -webkit-transform: translate(0px, 5px);
}
</style>

<template>
  <section>
    <h1 class="py-4 text-2xl font-bold">Cat Clicking Time</h1>
    <h2 v-if="!selectedName" class="mb-2 text-sm md:text-lg">
      In the past, you may have clicked on
      <a href="http://cowclicker.com/" target="_blank">cows</a> or
      <a href="https://orteil.dashnet.org/cookieclicker/" target="_blank"
        >cookies</a
      >. Now, here's your chance to click on cats. How many times can you click
      on your cat?
    </h2>
    <div v-if="!selectedName" class="flex flex-col mb-4 space-y-2">
      <label for="name">First, Choose a Name for Your Cat</label>
      <select
        v-model="selectedName"
        class="w-5/6 mx-auto text-black rounded md:w-1/4"
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
        :src="imageUrl"
        :alt="selectedName"
        class="w-64 mx-auto mb-4 rounded cat-button"
        @click.prevent="handleClick"
      />
      <p>{{ selectedName }} says</p>
      <p>"{{ sound }}"</p>
      <div class="w-12 p-1 mx-auto my-1 text-white bg-black rounded-full">
        <span>{{ counter }}</span>
      </div>
      <p>{{ message }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CatClicker',
  async fetch() {
    this.cat = await fetch('https://cataas.com/cat?json=true').then((res) => {
      return res.json()
    })
  },
  data() {
    return {
      selectedName: '',
      counter: 0,
      sound: 'meow',
      cat: {},
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
    imageUrl() {
      if (this.cat.url) {
        return `https://cataas.com${this.cat.url}`
      } else {
        return '/catfaces/cat-looking-up.jpg'
      }
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
