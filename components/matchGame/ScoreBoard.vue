<style scoped>
@import url('https://fonts.googleapis.com/css?family=Codystar&display=swap');
.score-board {
  width: 400px;
  height: 100px;
  background-color: black;
  margin: 30px 0px 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.score-board-score {
  font-family: 'Codystar', cursive;
  color: #57f542;
  font-size: 3.7rem;
  font-weight: bold;
}

.winner {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>

<template>
  <div class="score-board">
    <h2 v-if="gameWon" class="score-board-score winner">🥳 YOU WIN!</h2>
    <h2 v-else class="score-board-score">SCORE: {{ score }}</h2>
  </div>
</template>

<script>
export default {
  name: 'ScoreBoard',
  props: {
    gameWon: {
      type: Boolean,
      default: false,
    },
    score: {
      type: Number,
      default: 0,
    },
  },
}
</script>
