<template>
  <div class="container flex flex-col space-y-4 min-h-screen">
    <h1 class="text-3xl">Local Storage Test</h1>
    <form class="flex flex-col space-y-4" @submit.prevent="storeValue">
      <legend>Store a key/value pair in local storage</legend>
      <label for="key-input">Key:</label>
      <input
        v-model="currentKey"
        type="text"
        class="p-2 text-black leading-loose rounded"
        name="key-input"
      />
      <label for="value-input">Value:</label>
      <input
        v-model="currentValue"
        type="text"
        class="p-2 text-black leading-loose rounded"
        name="value-input"
      />
      <button type="submit" class="px-2 py-1 bg-black rounded">
        Add key/value to local storage
      </button>
    </form>
    <div v-if="pairsFromStore && pairsFromStore.length > 0">
      <p>What you have in local storage:</p>
      <ul>
        <li
          v-for="([key, value], index) in pairsFromStore"
          :key="`${key}-${index}`"
        >
          {{ key }}: {{ value }}
        </li>
      </ul>
    </div>
    <button
      v-if="pairsFromStore && pairsFromStore.length > 0"
      type="button"
      class="px-2 py-1 bg-black rounded"
      @click="clearLocalStorage"
    >
      Clear Local Storage
    </button>
  </div>
</template>

<script>
export default {
  name: 'LocalStorageTest',
  data() {
    return {
      currentKey: '',
      currentValue: '',
      storedValue: '',
      pairsFromStore: null,
    }
  },
  computed: {
    localStorageKeys() {
      return Object.keys(localStorage)
    },
  },
  mounted() {
    if (process.browser) {
      this.pairsFromStore = Object.entries(localStorage)
    }
  },
  methods: {
    storeValue() {
      if (process.browser) {
        localStorage.setItem(this.currentKey, this.currentValue)
        this.pairsFromStore = Object.entries(localStorage)
        this.currentKey = ''
        this.currentValue = ''
      }
    },
    getValue(key) {
      if (process.browser) {
        this.storedValue = localStorage.getItem(key)
      }
    },
    clearLocalStorage() {
      localStorage.clear()
      this.pairsFromStore = null
    },
  },
}
</script>
