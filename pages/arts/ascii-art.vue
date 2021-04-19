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
  </div>
</template>

<script>
export default {
  name: 'AsciiArt',
  data() {
    return {
      showGopher: false,
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
  },
}
</script>
