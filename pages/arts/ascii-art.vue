<template>
  <div class="mx-10">
    <h1>ascii art</h1>
    <p>Open up the developer tools, select the console, then click:</p>
    <button
      type="button"
      class="bg-black p-1 rounded m-2 text-sm hover:bg-gray-800 lg:p-2 lg:text-base"
      @click="printGopher"
    >
      Print Gopher
    </button>
    <button
      type="button"
      class="bg-black p-1 rounded m-2 text-sm hover:bg-gray-800 lg:p-2 lg:text-base"
      @click="printDog"
    >
      Print Dog
    </button>
    <pre v-if="showGopher">
        `.-::::::-.
    .:-::::::::::::::-:.
     _:::    ::    :::_
     .:( ^   :: ^   ):.
      :::   (..)   :::.
      :::::::UU:::::::
     .::::::::::::::::.
     O::::::::::::::::O
     -::::::::::::::::-
      ::::::::::::::::
      .::::::::::::::.
        oO:::::::Oo`
    </pre>
    <pre v-if="showDog">
       `__       _
       o'')}____//
        `_/      )
        (_(_/-(_/
        `
    </pre>
  </div>
</template>

<script>
export default {
  name: 'AsciiArt',
  data() {
    return {
      showGopher: false,
      showDog: false,
    }
  },
  methods: {
    printGopher() {
      this.showGopher = true
      // eslint-disable-next-line no-console
      console.log(
        `
         .-::::::-.
    .:-::::::::::::::-:.
     _:::    ::    :::_
     .:( ^   :: ^   ):.
      :::   (..)   :::.
      :::::::UU:::::::
     .::::::::::::::::.
     O::::::::::::::::O
     -::::::::::::::::-
      ::::::::::::::::
      .::::::::::::::.
         oO:::::::Oo`
      )
    },
    printDog() {
      this.showDog = true
      // eslint-disable-next-line no-console
      console.log(
        `
               __       _
              o'')}____//
               '_/      )
               (_(_/-(_/
            `
      )
    },
  },
}
</script>
