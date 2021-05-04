<template>
  <div class="mx-10 min-h-screen">
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
    <button
      type="button"
      class="bg-black p-1 rounded m-2 text-sm hover:bg-gray-800 lg:p-2 lg:text-base"
      @click="printFlowers"
    >
      Print Flowers
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
    <pre v-if="showFlowers">
    `
         wWWWw               wWWWw
   vVVVv (___) wWWWw         (___)  vVVVv
   (___)  ~Y~  (___)  vVVVv   ~Y~   (___)
    ~Y~   \|    ~Y~   (___)    |/    ~Y~
    \|   \ |/   \| /  \~Y~/   \|    \ |/
   \\|// \\|//  \\|/// \\|//  \\|// \\\|///
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   `
    </pre>
    <div>
      <a href="https://www.asciiart.eu/" target="blank"
        >See a plethora of ascii art</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'AsciiArt',
  data() {
    return {
      showGopher: false,
      showDog: false,
      showFlowers: false,
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
    printFlowers() {
      this.showFlowers = true
      // eslint-disable-next-line no-console
      console.log(
        `
         wWWWw               wWWWw
   vVVVv (___) wWWWw         (___)  vVVVv
   (___)  ~Y~  (___)  vVVVv   ~Y~   (___)
    ~Y~    |    ~Y~   (___)    |/    ~Y~
     |     |/    | /   ~Y~/    |      |/
     |//   |//   |///   |//    |//    |///
  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 
`
      )
    },
  },
  head() {
    return {
      title: 'ASCII Art 👾',
    }
  },
}
</script>
