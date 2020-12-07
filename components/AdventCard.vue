<template>
  <div>
    <div
      v-if="!isOpen"
      class="w-32 h-32 text-white text-xl font-bold flex justify-center items-center rounded"
      :class="[date % 2 === 0 ? 'bg-green-600' : 'bg-red-600']"
      @click="handleClick"
    >
      <span class="cursor-pointer">{{ date + 1 }}</span>
    </div>
    <div
      v-else
      class="w-32 h-32 bg-white text-xs font-bold flex flex-col justify-center items-center rounded"
      :class="[date % 2 === 0 ? 'text-green-600' : 'text-red-600']"
      @click="handleClick"
    >
      <img
        :src="date === 24 ? 'stars.gif' : surpriseUrl"
        alt="inside surprise"
        class="w-24 h-24 rounded"
      />
      <span v-if="date !== 24" class="text-xs">{{ message }}</span>
      <span v-else class="text-xs">Peace & Joy</span>
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
  methods: {
    handleClick() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
