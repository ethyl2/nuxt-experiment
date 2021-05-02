<style scoped>
.has-tooltip:hover .tooltip-content {
  visibility: visible;
}
</style>

<template>
  <div class="container flex flex-col space-y-6 min-h-screen">
    <h1 class="text-3xl">Using Local Storage</h1>
    <div class="p-6 bg-gray-900 rounded">
      <p class="mb-2">
        The Web Storage API provides a handy way to store data, in key/value
        pairs, such as 'colorSetting' : '#C70039', where 'colorSetting' is the
        key, and '#C70039' is the value. Once you save a key/value pair in local
        storage, it remains in local storage, even after you close the page or
        the browser.
      </p>

      <p class="mb-2">
        You can see your local storage in the browser tools. With Chrome, you
        can access the tools (F12), pick "Application" from the tools' top menu,
        and then select "Local Storage" in the left menu.
      </p>

      <p>
        Read more about local storage
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API"
          target="_blank"
          >here</a
        >.
      </p>
    </div>
    <!-- KEY/VALUE STORAGE & EDITING -->
    <form class="flex flex-col space-y-2" @submit.prevent="storeValue">
      <legend class="text-lg text-teal-400">
        Store a key/value pair in local storage
      </legend>
      <label for="key-input">Key:</label>
      <input
        v-model="currentKey"
        type="text"
        class="p-2 text-black leading-relaxed rounded"
        name="key-input"
      />
      <label for="value-input">Value:</label>
      <input
        v-model="currentValue"
        type="text"
        class="p-2 text-black leading-relaxed rounded"
        name="value-input"
      />
      <button
        type="submit"
        class="px-2 py-1 bg-black rounded hover:bg-gray-900"
      >
        {{ keyExistsInLocalStorage(currentKey) ? 'Edit' : 'Add' }} key/value
      </button>
    </form>

    <!-- FETCHING VALUE FOR KEY -->
    <form
      class="flex flex-col bg-gray-900 p-6 rounded"
      @submit.prevent="getValue"
    >
      <legend class="text-lg text-teal-400 mb-2">Get the value of a key</legend>
      <div class="flex justify-between items-center space-x-2">
        <select
          v-model="selectedKey"
          class="text-black p-2 leading-relaxed rounded"
        >
          <option disabled selected class="text-black" value="-">
            Select Key:
          </option>
          <option
            v-for="[key] in pairsFromStore"
            :key="key"
            :value="key"
            class="text-black"
          >
            {{ key }}
          </option>
        </select>
        <button
          type="submit"
          class="px-2 py-1 bg-black rounded hover:bg-gray-900"
        >
          Get value
        </button>
      </div>
      <p v-if="selectedValue" class="mt-2">{{ selectedValue }}</p>
    </form>

    <!-- TABLE OF ALL KEY/VALUE PAIRS -->
    <table
      v-if="pairsFromStore && pairsFromStore.length > 0"
      class="table-auto"
    >
      <caption class="text-lg text-teal-400">
        Local Storage Contents
      </caption>
      <tr>
        <th class="px-4 py-2">Key</th>
        <th class="px-4 py-2">Value</th>
        <th class="px-4 py-2">Actions</th>
      </tr>
      <tr v-for="[key, value] in pairsFromStore" :key="key">
        <td class="border px-4 py-2">{{ key }}</td>
        <td class="border px-4 py-2">{{ value }}</td>
        <td class="border px-4 py-2 relative">
          <span
            class="has-tooltip inline-block cursor-pointer hover:bg-gray-800"
            @click="clearKey(key)"
            >🗑️<span
              class="tooltip-content invisible bg-black absolute left-0 bottom-0 p-1 rounded z-10 opacity-75 text-xs"
              >Delete</span
            ></span
          >
          <span
            class="has-tooltip inline-block cursor-pointer hover:bg-gray-800"
            @click="editPair(key, value)"
            >✏️<span
              class="tooltip-content invisible bg-black absolute right-0 bottom-0 p-1 rounded z-10 opacity-75 text-xs"
              >Edit</span
            ></span
          >
        </td>
      </tr>
    </table>

    <button
      v-if="pairsFromStore && pairsFromStore.length > 0"
      type="button"
      class="px-2 py-1 bg-black rounded hover:bg-gray-900"
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
      pairsFromStore: null,
      selectedKey: '-',
      selectedValue: '',
    }
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
    getValue() {
      if (process.browser) {
        this.selectedValue = localStorage.getItem(this.selectedKey)
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
  head() {
    return {
      title: 'Using Local Storage',
    }
  },
}
</script>
