<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="matching-game-title text-xl pt-4 md:text-5xl">
      Emoji Matching Game
    </h1>
    <score-board
      :score="score"
      :matches-count="pairsFoundCount"
      :game-won="gameWon"
    />
    <game-board :cards="cards" @flip-card="flipCard" />
    <button type="button" @click="restart">
      {{ gameWon ? 'Play Again' : 'Restart' }}
    </button>
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
          value: '🔥',
          flipped: false,
          id: 1,
        },
        {
          value: '🌠',
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
          value: '🌺',
          flipped: false,
          id: 5,
        },
        {
          value: '🦖',
          flipped: false,
          id: 6,
        },
        {
          value: '🐿️',
          flipped: false,
          id: 7,
        },
        {
          value: '🥨',
          flipped: false,
          id: 8,
        },
        {
          value: '🛸',
          flipped: false,
          id: 9,
        },
        {
          value: '🍧',
          matched: false,
          flipped: false,
          id: 10,
        },
        {
          value: '🔥',
          flipped: false,
          id: 11,
        },
        {
          value: '🌠',
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
          value: '🌺',
          flipped: false,
          id: 15,
        },
        {
          value: '🦖',
          flipped: false,
          id: 16,
        },
        {
          value: '🐿️',
          flipped: false,
          id: 17,
        },
        {
          value: '🥨',
          flipped: false,
          id: 18,
        },
        {
          value: '🛸',
          flipped: false,
          id: 19,
        },
        {
          value: '🍧',
          flipped: false,
          id: 20,
        },
      ],
      selectedCards: [],
      pairsFoundCount: 0,
      gameWon: false,
      score: 0,
    }
  },
  mounted() {
    this.shuffleCards()
  },
  methods: {
    flipCard(cardId) {
      const [cardToFlip] = this.cards.filter((card) => card.id === cardId)
      if (!cardToFlip.flipped) {
        cardToFlip.flipped = true
        this.selectedCards.push(cardToFlip)
      }
      if (this.selectedCards.length === 2) {
        this.checkForMatch()
      }
    },
    checkForMatch() {
      const [firstSelectedCard, secondSelectedCard] = this.selectedCards
      if (firstSelectedCard.value === secondSelectedCard.value) {
        this.pairsFoundCount += 1
        if (this.pairsFoundCount === this.cards.length / 2) {
          this.gameWon = true
        }
      } else {
        setTimeout(() => {
          firstSelectedCard.flipped = false
          secondSelectedCard.flipped = false
          this.score -= 1
        }, 500)
      }
      this.selectedCards = []
    },
    shuffleCards() {
      // Fisher Yates Shuffle
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const k = this.cards[i]
        this.cards[i] = this.cards[j]
        this.cards[j] = k
      }
    },
    restart() {
      this.cards.map((card) => (card.flipped = false))
      this.shuffleCards()
      this.gameWon = false
      this.selectedCards = []
      this.pairsFoundCount = 0
      this.score = 0
    },
  },
}
</script>
