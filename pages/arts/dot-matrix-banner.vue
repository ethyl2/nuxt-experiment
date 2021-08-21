<template>
  <div class="max-w-full">
    <div class="bg-white text-gray-600 overflow-x-auto w-full">
      <h1 class="banner text-2xl text-center text-black py-4 md:text-4xl">
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
      <div class="flex flex-col items-center justify-center w-full py-4">
        <label for="text-input" class="banner text-center text-2xl text-black"
          >What should this banner say?</label
        >
        <input
          id="text-input"
          v-model="bannerText"
          type="text"
          name="text-input"
          class="border border-black p-1 text-center"
          style="width: 600px"
        />
        <p class="banner text-2xl text-black text-center">Pick a graphic:</p>
        <div class="flex items-center justify-center space-x-2">
          <input
            id="cake"
            v-model="currentImage"
            type="radio"
            value="/birthday-cake.png"
          />
          <label for="cake" class="flex items-center justify-center space-x-1"
            ><span>Cake</span>
            <img
              src="/birthday-cake.png"
              alt="cake"
              class="w-6"
              style="filter: grayscale(100%)"
          /></label>

          <input
            id="smile"
            v-model="currentImage"
            type="radio"
            value="/smiley-face.png"
          />
          <label for="smile" class="flex items-center justify-center space-x-1"
            ><span>Smile</span
            ><img
              src="/smiley-face.png"
              alt="face"
              class="w-6"
              style="filter: grayscale(100%)"
          /></label>
          <input
            id="heart"
            v-model="currentImage"
            type="radio"
            value="/heart.png"
          />
          <label for="heart" class="flex items-center justify-center"
            >Heart<img
              src="/heart.png"
              alt="heart"
              class="w-6 pl-1"
              style="filter: grayscale(100%)"
          /></label>
        </div>
      </div>
      <div id="the-banner">
        <div
          class="banner font-bold border-2 border-gray-600 mx-10 my-4 py-1"
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
              :src="currentImage"
              alt="pixelated image"
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
              :src="currentImage"
              alt="pixelated graphic"
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
      <div class="flex items-center justify-center">
        <button
          type="button"
          class="bg-black text-white font-bold py-2 px-3 rounded hover:bg-gray-900 my-1 md:my-2 text-base w-auto mb-6"
          @click="printBanner"
        >
          Print (not quite in the same way, unfortunately)
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DotMatrixBanner',
  data() {
    return {
      bannerText: 'Happy Birthday to You! Happy Pi Day! I Love You!',
      currentImage: '/smiley-face.png',
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
