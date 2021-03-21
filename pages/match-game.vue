<style scoped>
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
.matching-game-title {
  font-family: 'Press Start 2P', cursive;
  font-size: 3rem;
  color: rgb(0, 0, 0, 0.7);
  padding-top: 16px;
}
</style>

<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="matching-game-title">Matching Game</h1>
    <score-board />
    <game-board :cards="cards" @flip-card="flipCard" />
  </div>
</template>

<script>
export default {
  name: 'MatchGame',
  components: {
    ScoreBoard: () => import('~/components/matchGame/ScoreBoard'),
    GameBoard: () => import('~/components/matchGame/GameBoard'),
  },
  data() {
    return {
      cards: [
        {
          value: '😂',
          flipped: false,
          id: 1,
        },
        {
          value: '🍀',
          flipped: false,
          id: 2,
        },
        {
          value: '🌻',
          flipped: false,
          id: 3,
        },
        {
          value: '🌈',
          flipped: false,
          id: 4,
        },
        {
          value: '🐸',
          flipped: false,
          id: 5,
        },
        {
          value: '🐱',
          flipped: false,
          id: 6,
        },
        {
          value: '🐶',
          flipped: false,
          id: 7,
        },
        {
          value: '🥨',
          flipped: false,
          id: 8,
        },
        {
          value: '🌯',
          flipped: false,
          id: 9,
        },
        {
          value: '😍',
          matched: false,
          flipped: false,
          id: 10,
        },
        {
          value: '😂',
          flipped: false,
          id: 11,
        },
        {
          value: '🍀',
          flipped: false,
          id: 12,
        },
        {
          value: '🌻',
          flipped: false,
          id: 13,
        },
        {
          value: '🌈',
          flipped: false,
          id: 14,
        },
        {
          value: '🐸',
          flipped: false,
          id: 15,
        },
        {
          value: '🐱',
          flipped: false,
          id: 16,
        },
        {
          value: '🐶',
          flipped: false,
          id: 17,
        },
        {
          value: '🥨',
          flipped: false,
          id: 18,
        },
        {
          value: '🌯',
          flipped: false,
          id: 19,
        },
        {
          value: '😍',
          flipped: false,
          id: 20,
        },
      ],
    }
  },
  mounted() {
    // Fisher Yates Shuffle
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const k = this.cards[i]
      this.cards[i] = this.cards[j]
      this.cards[j] = k
    }
  },
  methods: {
    flipCard(cardId) {
      const [cardToFlip] = this.cards.filter((card) => card.id === cardId)
      cardToFlip.flipped = true
    },
  },
}
</script>
