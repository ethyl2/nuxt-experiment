<style lang="css" scoped>
/* These styles aren't needed b/c of tailwind, but I'm leaving them here as reference. */
.loader {
  animation-name: spin;
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<template>
  <div :style="styles" class="animate-spin rounded-full"></div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
  props: {
    longColor: {
      type: String,
      default: 'white',
    },
    shortColor: {
      type: String,
      default: '#319795',
    },
    styles: {
      type: Object,
      default() {
        return {
          border: `6px solid ${this.shortColor}`,
          borderTopColor: this.longColor,
          borderBottomColor: this.longColor,
          borderRightColor: this.longColor,
          width: '50px',
          height: '50px',
          animationDuration: '1s',
        }
      },
    },
  },
}
</script>
