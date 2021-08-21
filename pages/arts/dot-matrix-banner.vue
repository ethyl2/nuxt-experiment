<template>
  <div class="max-w-full">
    <div class="bg-white text-gray-600 overflow-x-auto w-full">
      <h1
        class="text-2xl text-center font-bold text-black py-4"
        style="font-family: 'VT323', monospace"
      >
        Dot Matrix Printer Banners
      </h1>
      <p class="text-center">
        Were you around when these wonderful decorations were popular?
      </p>
      <p class="text-center">
        I have fond memories of making them with
        <a
          href="https://www.howtogeek.com/737306/how-the-print-shop-turned-people-into-banner-wizards-in-the-1980s/"
          target="_blank"
          rel="nofollow"
          >The Print Shop</a
        >.
      </p>
      <div class="flex flex-col items-center justify-center w-full">
        <label for="text-input" class="text-center text-lg"
          >What should this banner say?</label
        >
        <input
          id="text-input"
          v-model="bannerText"
          type="text"
          name="text-input"
          class="border border-black p-1"
        />
        <button type="button" @click="printBanner">Print</button>
      </div>
      <div id="the-banner">
        <div
          class="banner font-bold border-2 border-gray-600 m-10 py-1"
          style="width: 3000px"
        >
          <div
            class="flex justify-center items-center flex-shrink-0 space-x-8 border-b border-gray-300 border-dashed pb-1"
          >
            <div
              v-for="firstIndex in 62"
              :key="firstIndex"
              class="border border-gray-600 rounded-full flex-shrink-0 w-4 h-4 m-px bg-gray-100 shadow"
            ></div>
          </div>
          <div class="flex items-center justify-between">
            <img
              src="/birthday-cake.png"
              alt="pixelated birthday cake"
              style="filter: grayscale(100%)"
              class="w-64 pl-6"
            />
            <p
              class="banner font-bold p-10 text-center"
              style="font-size: 7rem"
            >
              {{ bannerText }}
            </p>
            <img
              src="/birthday-cake.png"
              alt="pixelated birthday cake"
              style="filter: grayscale(100%)"
              class="w-64 pr-6"
            />
          </div>
          <div
            class="flex justify-center items-center space-x-8 border-t border-gray-300 border-dashed pt-1"
          >
            <div
              v-for="secondIndex in 62"
              :key="secondIndex"
              class="border border-gray-600 rounded-full w-4 h-4 m-px flex-shrink-0 bg-gray-100 shadow"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DotMatrixBanner',
  data() {
    return {
      bannerText: 'Happy Birthday to You!!! Happy Pi Day!!!',
    }
  },
  methods: {
    printBanner() {
      const banner = document.getElementById('the-banner').innerHTML
      const a = window.open('', '', 'height=1000, width=3050')
      a.document.write(
        `<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">`
      )
      a.document
        .write(`<link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">`)
      a.document.write(`<style>.banner {
                font-family: 'VT323', monospace;
                }</style>`)
      a.document.write('<html>')
      a.document.write('<body>')
      a.document.write(banner)
      a.document.write('</body></html>')
      a.document.close()
      a.print()
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
.banner {
  font-family: 'VT323', monospace;
}
</style>
