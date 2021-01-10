<template>
  <div class="py-1 md:py-6">
    <h2 class="text-center text-lg font-bold mb-1 md:mb-4 md:text-xl">
      {{ title }}
    </h2>
    <div class="flex flex-col justify-center md:flex-row">
      <button
        type="button"
        class="w-full mx-auto bg-black text-white rounded p-1 my-1 hover:bg-gray-700 text-xs md:text-base md:w-auto md:mx-2"
        style="max-width: 160px"
        @click="playSong"
      >
        Play Song Snippet
      </button>
      <button
        type="button"
        class="w-full mx-auto bg-black text-white rounded p-1 my-1 hover:bg-gray-700 text-xs md:text-base md:w-auto md:mx-2"
        style="max-width: 160px"
        @click="stopSong"
      >
        Stop Song Snippet
      </button>
    </div>
    <a :href="trackUrl" target="_blank">
      <img :src="imgUrl" :alt="imgAlt" class="mx-auto mt-1" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'SongCard',
  props: {
    title: {
      type: String,
      default: 'Celebrate the Periodic Table!',
    },
    trackUrl: {
      type: String,
      default:
        'https://music.apple.com/us/album/the-new-periodic-table-song/647856204?i=647857505&uo=4',
    },
    audioUrl: {
      type: String,
      default:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview71/v4/82/1b/14/821b1416-b8dd-1757-470c-719a33f99d4b/mzaf_135016786046637505.plus.aac.p.m4a',
    },
    imgUrl: {
      type: String,
      default:
        'https://is5-ssl.mzstatic.com/image/thumb/Music2/v4/c3/a7/94/c3a79499-1a87-1784-897d-ff1735bfee26/source/60x60bb.jpg',
    },
    imgAlt: {
      type: String,
      default: 'The New Periodic Table Song',
    },
  },
  data() {
    return {
      audio: null,
    }
  },
  methods: {
    playSong() {
      if (this.audio) {
        this.audio.pause()
        this.audio.currentTime = 0
      }
      this.audio = new Audio(this.audioUrl)
      this.audio.play()
    },
    stopSong() {
      if (this.audio) {
        this.audio.pause()
        this.audio.currentTime = 0
      }
    },
  },
}
</script>
