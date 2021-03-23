<style scoped>
@import url('https://fonts.googleapis.com/css?family=Codystar&display=swap');
.score-board {
  width: 250px;
  height: 150px;
  background-color: black;
  margin: 30px 10px 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
}

.score-board-score {
  font-family: 'Codystar', sans-serif;
  font-size: 2.25rem;
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
    <h2 class="score-board-score text-green-500">
      MATCHES: {{ matchesCount }}
    </h2>
    <h2 v-if="gameWon" class="score-board-score winner text-yellow-500">
      🎉 YOU WIN!
    </h2>
    <h2 v-else class="score-board-score text-red-500">SCORE: {{ score }}</h2>
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
    matchesCount: {
      type: Number,
      default: 0,
    },
  },
}
</script>
