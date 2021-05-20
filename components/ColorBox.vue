<template>
  <div
    :style="{
      background: colorPair.backgroundColor,
      color: colorPair.textColor,
    }"
    class="h-32 w-32 p-2 m-4 flex flex-col items-center justify-center cursor-pointer text-xs transform hover:scale-105 md:h-64 md:w-64 md:text-base overflow-y-auto"
    @click="showAnswer = true"
  >
    Does this have enough contrast?
    <span v-if="showAnswer">{{ colorPair.analysis }}</span>
  </div>
</template>

<script>
export default {
  name: 'ColorBox',
  props: {
    colorPair: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showAnswer: false,
    }
  },
}
</script>
