<template>
  <div id="grid">
    <div
      v-for="index in 40"
      :key="index"
      class="flex justify-center items-center flex-shrink-0"
      :class="{ 'pl-4': originallySpacedGrid && index % 2 === 0 }"
    >
      <div
        v-for="secondIndex in 75"
        :key="secondIndex"
        class="hole border border-gray-200 border-opacity-25 rounded-full w-4 h-4 m-px flex-shrink-0 cursor-pointer bg-transparent"
        tabindex="0"
        @click="$emit('handle-click', $event)"
        @keyup.enter="$emit('handle-click', $event)"
        @mousedown="$emit('handle-mouse-down', $event)"
        @mousemove="$emit('handle-mouse-move', $event)"
        @mouseup="$emit('handle-mouse-up', $event)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Grid',
  props: {
    originallySpacedGrid: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
