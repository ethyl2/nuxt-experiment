<style scoped>
.board {
  width: 100%;
  max-width: 640px;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 10px;
}
</style>

<template>
  <div class="board">
    <Card
      v-for="(card, index) in cards"
      :key="index"
      :card="card"
      v-on="$listeners"
    />
  </div>
</template>

<script>
export default {
  name: 'GameBoard',
  components: {
    Card: () => import('~/components/matchGame/Card'),
  },
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
