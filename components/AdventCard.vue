<template>
  <div>
    <div
      v-if="!isOpen"
      class="w-32 h-32 text-white text-3xl font-bold flex justify-center items-center rounded hover:text-gray-700"
      :class="[
        date % 2 === 0
          ? 'bg-green-600 hover:bg-green-400'
          : 'bg-red-600 hover:bg-red-400',
        date === currentDate - 1 ? 'border-4 border-yellow-400' : 'border-none',
      ]"
      @click="handleClick"
    >
      <span class="cursor-pointer">{{ date + 1 }}</span>
    </div>
    <div
      v-else-if="isOpen"
      class="w-32 h-32 bg-white text-xs font-bold flex flex-col justify-center items-center rounded hover:bg-green-200 hover:font-extrabold"
      :class="[date % 2 === 0 ? 'text-green-600' : 'text-red-600']"
      @click="handleClick"
    >
      <img
        :src="date === 24 ? 'stars.gif' : surpriseUrl"
        alt="inside surprise"
        class="w-24 h-24 rounded"
      />
      <span v-if="date !== 24" class="text-base">{{ message }}</span>
      <span v-else class="text-base">Peace & Joy</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdventCard',
  props: {
    date: {
      type: Number,
      default: 1,
    },
    surpriseUrl: {
      type: String,
      default: 'cat.gif',
    },
    message: {
      type: String,
      default: 'Happy Day!',
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    currentDate() {
      const today = new Date()
      return today.getDate()
    },
    allowedToOpen() {
      return this.date < this.currentDate
    },
  },
  created() {
    setTimeout(this.openOldDoors, 1000)
  },
  methods: {
    handleClick() {
      if (this.allowedToOpen) {
        this.isOpen = !this.isOpen
      }
    },
    openOldDoors() {
      if (this.date < this.currentDate - 1) {
        this.isOpen = true
      }
    },
  },
}
</script>
