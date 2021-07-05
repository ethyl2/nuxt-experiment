<style scoped>
.card {
  background-color: transparent;
  width: 160px;
  height: 140px;
  perspective: 1000px;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 5px;
}

.card-back {
  background-image: linear-gradient(
    141deg,
    #9fb8ad 0%,
    #1fc8db 51%,
    #2cb5e8 75%
  );
  transform: rotateY(180deg);
}

.flipped {
  transform: rotateY(180deg);
}
</style>

<template>
  <div
    class="card transform ease-in-out duration-700 hover:scale-105 focus:border focus:border-white"
    @click="flipCard(card.word)"
    @keyup.enter="flipCard(card.word)"
  >
    <div class="card-inner" :class="{ flipped: card.flipped }" tabindex="0">
      <div
        class="card-back text-xs overflow-auto text-black flex flex-col items-center justify-start font-semibold p-1"
      >
        <span class="text-sm font-bold pt-1">{{ card.word }}:</span>
        <span class="mt-1">{{ card.definition }}</span>
      </div>

      <div
        class="card-front flex flex-col items-center justify-center text-black"
        :style="{ background: `${card.color}` }"
      >
        <div
          class="pt-1 flex items-center justify-center rounded bg-center bg-cover"
          style="width: 140px; height: 100px"
          :style="{ 'background-image': 'url(' + card.image + ')' }"
        ></div>
        <p class="text-sm text-center font-bold mt-1">{{ card.word }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    flipCard(cardWord) {
      // this.$emit('flip-card', cardWord)
      this.card.flipped = !this.card.flipped
    },
  },
}
</script>
