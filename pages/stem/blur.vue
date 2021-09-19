<template>
  <div class="min-h-screen mx-auto text-center">
    <h1 class="text-xl md:text-3xl py-4">Background Blur</h1>
    <p class="max-w-xl mx-4 pb-4 md:mx-auto">
      A css property that I hadn't heard of before yesterday, but is quite neat,
      is <code class="text-yellow-500">backdrop-filter</code>, and when you set
      its value to <code class="text-yellow-500">blur()</code>, it will blur
      what's behind the element.
    </p>
    <p class="max-w-xl mx-4 pb-4 md:mx-auto">
      Which wouldn't be noticeable, of course, because the element would be in
      the way. However, if you have some part of the element transparent or
      partially transparent, you will see the blur in action!
    </p>
    <p class="max-w-xl mx-4 pb-4 md:mx-auto">
      The blur takes a parameter specifying how much blurring you'd like to
      have.
    </p>
    <pre
      class="bg-black p-4 w-full mx-auto text-left mb-4 overflow-x-auto text-sm md:text-base md:w-3/5"
    >
.my-class {
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}</pre
    >
    <p class="pb-2 mx-4 md:mx-auto">
      See the
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter"
        target="_blank"
        >docs</a
      >
      for more details.
    </p>
    <p class="mx-4 md:mx-auto">
      And
      <a href="https://tailwindcss.com/docs/backdrop-opacity" target="_blank"
        >tailwindcss docs</a
      >
      for available classes you can use.
    </p>
    <div
      class="bg-cover bg-center bg-no-repeat flex flex-wrap items-center justify-center gap-6 p-8 mt-6 md:mt-12"
      style="background-image: url('/stem/mural.jpg')"
    >
      <div
        v-for="blurAmount in blurAmounts"
        :key="blurAmount"
        class="w-64 h-64 border-4 border-white rounded-2xl p-4 bg-white bg-opacity-50 flex items-center justify-center"
        :style="{ backdropFilter: `blur(${blurAmount}px)` }"
      >
        <div
          class="w-32 h-32 text-blue-500 text-lg bg-white rounded flex items-center justify-center"
        >
          {{ blurAmount }}px
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blur',
  data() {
    return {
      blurAmounts: [1, 2, 3, 5, 8, 10, 15, 20, 30, 35, 40, 50, 65, 85, 100],
    }
  },
}
</script>
