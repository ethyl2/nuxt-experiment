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
      <p v-if="keyExistsInLocalStorage(currentKey)">✔️</p>
      <label for="value-input">Value:</label>
      <input
        v-model="currentValue"
        type="text"
        class="p-2 text-black leading-loose rounded"
        name="value-input"
      />
      <button type="submit" class="px-2 py-1 bg-black rounded">
        {{ keyExistsInLocalStorage(currentKey) ? 'Edit' : 'Add' }} key/value
      </button>
    </form>
    <div v-if="pairsFromStore && pairsFromStore.length > 0">
      <p class="mb-2">What you have in local storage:</p>
      <table class="table-auto">
        <tr>
          <th class="px-4 py-2">Key</th>
          <th class="px-4 py-2">Value</th>
          <th class="px-4 py-2">Actions</th>
        </tr>
        <tr v-for="[key, value] in pairsFromStore" :key="key">
          <td class="border px-4 py-2">{{ key }}</td>
          <td class="border px-4 py-2">{{ value }}</td>
          <td class="border px-4 py-2 cursor-pointer">
            <span @click="clearKey(key)">🗑️</span>
            <span @click="editPair(key, value)">✏️</span>
          </td>
        </tr>
      </table>
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
    clearKey(chosenKey) {
      if (process.browser) {
        localStorage.removeItem(chosenKey)
        this.pairsFromStore = Object.entries(localStorage)
      }
    },
    editPair(chosenKey, chosenValue) {
      this.currentKey = chosenKey
      this.currentValue = chosenValue
    },
    keyExistsInLocalStorage(chosenKey) {
      if (process.browser) {
        return localStorage.getItem(chosenKey) !== null
      }
    },
  },
}
</script>
