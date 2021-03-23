<style scoped>
.card {
  background-color: transparent;
  width: 100px;
  height: 100px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
}

.card-front {
  background-image: linear-gradient(
    141deg,
    #9fb8ad 0%,
    #1fc8db 51%,
    #2cb5e8 75%
  );
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
}

.card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}

.flipped {
  transform: rotateY(180deg);
}
</style>

<template>
  <div class="card" @click="flipCard(card.id)">
    <div class="card-inner" :class="{ flipped: card.flipped }">
      <div
        v-if="card.value.length === 1"
        class="card-back"
        :class="{ 'cursor-not-allowed': card.flipped }"
      >
        {{ card.value }}
      </div>
      <div
        v-else
        class="card-back bg-center bg-cover bg-no-repeat"
        :class="{ 'cursor-not-allowed': card.flipped }"
        :style="{ 'background-image': 'url(' + card.value + ')' }"
      ></div>

      <div class="card-front">💎</div>
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
    flipCard(cardId) {
      this.$emit('flip-card', cardId)
    },
  },
}
</script>
