<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="matching-game-title text-xl pt-4 md:text-4xl">
      Animal Matching Game
    </h1>
    <score-board
      :score="score"
      :matches-count="pairsFoundCount"
      :game-won="gameWon"
    />
    <game-board :cards="cards" @flip-card="flipCard" />
    <button
      type="button"
      class="bg-black px-2 py-1 rounded hover:bg-gray-800"
      @click="restart"
    >
      {{ gameWon ? 'Play Again' : 'Restart' }}
    </button>
    <p>Best score so far: {{ bestScore }}</p>
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
          value:
            'https://images.unsplash.com/photo-1533926392763-a1df3bf391f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
          flipped: false,
          id: 1,
        },
        {
          value:
            'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=639&q=80',
          flipped: false,
          id: 2,
        },
        {
          value:
            'https://images.unsplash.com/photo-1603349136288-95d87bd0a268?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          flipped: false,
          id: 3,
        },
        {
          value:
            'https://images.unsplash.com/photo-1589182337358-2cb63099350c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          flipped: false,
          id: 4,
        },
        {
          value:
            'https://images.unsplash.com/photo-1517519014922-8fc06b814a0e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=676&q=80',
          flipped: false,
          id: 5,
        },
        {
          value:
            'https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=678&q=80',
          flipped: false,
          id: 6,
        },
        {
          value:
            'https://images.unsplash.com/photo-1535745023281-627f021e68b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          flipped: false,
          id: 7,
        },
        {
          value:
            'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80',
          flipped: false,
          id: 8,
        },
        {
          value:
            'https://images.unsplash.com/photo-1545006398-2cf47cd87b90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=615&q=80',
          flipped: false,
          id: 9,
        },
        {
          value:
            'https://images.unsplash.com/photo-1568430462989-44163eb1752f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
          matched: false,
          flipped: false,
          id: 10,
        },
        {
          value:
            'https://images.unsplash.com/photo-1533926392763-a1df3bf391f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
          flipped: false,
          id: 11,
        },
        {
          value:
            'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=639&q=80',
          flipped: false,
          id: 12,
        },
        {
          value:
            'https://images.unsplash.com/photo-1603349136288-95d87bd0a268?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          flipped: false,
          id: 13,
        },
        {
          value:
            'https://images.unsplash.com/photo-1589182337358-2cb63099350c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          flipped: false,
          id: 14,
        },
        {
          value:
            'https://images.unsplash.com/photo-1517519014922-8fc06b814a0e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=676&q=80',
          flipped: false,
          id: 15,
        },
        {
          value:
            'https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=678&q=80',
          flipped: false,
          id: 16,
        },
        {
          value:
            'https://images.unsplash.com/photo-1535745023281-627f021e68b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          flipped: false,
          id: 17,
        },
        {
          value:
            'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80',
          flipped: false,
          id: 18,
        },
        {
          value:
            'https://images.unsplash.com/photo-1545006398-2cf47cd87b90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=615&q=80',
          flipped: false,
          id: 19,
        },
        {
          value:
            'https://images.unsplash.com/photo-1568430462989-44163eb1752f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
          flipped: false,
          id: 20,
        },
      ],
      selectedCards: [],
      pairsFoundCount: 0,
      gameWon: false,
      score: 0,
      bestScore: -100,
    }
  },
  mounted() {
    this.shuffleCards()
    if (process.browser) {
      this.bestScore = localStorage.getItem('imageBestScore')
        ? localStorage.getItem('imageBestScore')
        : -100
    }
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
          if (this.score > this.bestScore) {
            this.bestScore = this.score
            if (process.browser) {
              localStorage.setItem('imageBestScore', this.bestScore)
            }
          }
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
      setTimeout(() => {
        this.shuffleCards()
        this.gameWon = false
        this.selectedCards = []
        this.pairsFoundCount = 0
        this.score = 0
      }, 500)
    },
  },
}
</script>
