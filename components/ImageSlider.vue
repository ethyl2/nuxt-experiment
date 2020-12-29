<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  display: block;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  display: none;
  width: 100%;
  opacity: 0;
}
.prev,
.next {
  top: 40%;
}

img {
  height: 600px;
}
</style>

<template>
  <div>
    <h1 v-if="title">{{ title }}</h1>
    <div class="relative">
      <transition-group name="fade" tag="div" class="w-full">
        <div v-for="i in [currentIndex]" :key="i">
          <img :src="currentImg" class="w-full mx-auto" />
        </div>
      </transition-group>
      <a
        class="prev transition absolute font-bold text-white text-lg p-4 left-0 top-1/2 rounded no-underline select-none hover:bg-black"
        href="#"
        @click="prev"
        >&#10094; Previous</a
      >
      <a
        class="next transition absolute font-bold text-white text-lg p-4 right-0 top-1/2 rounded no-underline select-none hover:bg-black"
        href="#"
        @click="next"
        >&#10095; Next</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    title: {
      type: String,
      default: '',
    },
    images: {
      type: Array,
      default: () => [
        'https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg',
        'https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg',
      ],
    },
  },
  data() {
    return {
      timer: null,
      currentIndex: 0,
    }
  },

  computed: {
    currentImg() {
      return this.images[Math.abs(this.currentIndex) % this.images.length]
    },
  },

  mounted() {
    this.startSlide()
  },

  methods: {
    startSlide() {
      this.timer = setInterval(this.next, 5000)
    },

    next() {
      this.currentIndex += 1
    },
    prev() {
      this.currentIndex -= 1
    },
  },
}
</script>
