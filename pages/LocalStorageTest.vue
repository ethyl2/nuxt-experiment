<template>
  <div class="container flex flex-col space-y-2">
    <h1>Local Storage Test</h1>
    <input
      v-model="currentValue"
      type="text"
      class="p-2 text-black leading-loose"
      @input="storeValue('test', currentValue)"
    />
    <button class="bg-black px-2 py-1" @click="getValue('test')">
      Get from local storage
    </button>
    <p v-if="storedValue">{{ storedValue }}</p>
  </div>
</template>

<script>
export default {
  name: 'LocalStorageTest',
  data() {
    return {
      currentValue: '',
      storedValue: '',
    }
  },
  methods: {
    storeValue(key, value) {
      if (process.browser) {
        localStorage.setItem(key, value)
      }
    },
    getValue(key) {
      if (process.browser) {
        this.storedValue = localStorage.getItem(key)
      }
    },
  },
}
</script>
