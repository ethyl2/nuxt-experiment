<template>
  <div class="container flex flex-col min-h-screen">
    <h1 class="text-xl font-bold md:text-3xl mb-4">How to Play Adverb</h1>
    <h2 class="text-lg md:text-2xl mb-4">
      <em>Adverb</em> is a group game that is definitely one of my favorites.
      Here's how you can play with your friends:
    </h2>
    <ol
      class="list-decimal list-inside text-left space-y-2 border rounded p-4 mb-4"
    >
      <li>Sit in a circle so that everyone can see each other.</li>
      <li>Choose someone to be <em>it</em>.</li>
      <li>
        After explaining the rules, have <em>it</em> leave the room and go
        somewhere where they can't hear the group.
      </li>
      <li>
        When <em>it</em> is gone, choose an adverb -- a word that ends in -ly
        and describes an action, such as <em>mysteriously</em>.
      </li>
      <li>Have <em>it</em> come back into the room.</li>
      <li>
        <em>It</em> will now tell a person or people in the group to do an
        action, such as 'Phineas, go shake hands with Ferb.'
      </li>
      <li>
        The people chosen to do the action then do it in the manner of the
        adverb. In our example, they would shake hands mysteriously.
      </li>
      <li>After they finish, <em>it</em> gets a chance to guess the adverb.</li>
      <li>
        If <em>it</em> is correct, the person chosen to do the action will be
        <em>it</em> for the next round.
      </li>
      <li>
        Otherwise, <em>it</em> picks a new person or people to do another thing
        in the manner of the adverb.
      </li>
    </ol>
    <h3 class="text-lg mb-2 font-bold md:text-xl">Adverb Suggestions:</h3>
    <div class="flex items-center justify-between flex-wrap">
      <adverb-card
        v-for="adverb in adverbsToDisplay"
        :key="adverb.word"
        :card="adverb"
      />
    </div>
    <div class="flex items-center justify-around space-x-2">
      <button
        v-if="showMoreButton"
        class="bg-black text-orange font-bold py-2 px-3 rounded hover:text-black hover:bg-white my-2 text-lg"
        @click="showAdverbs()"
      >
        More Adverbs
      </button>
      <button
        class="bg-black text-orange font-bold py-2 px-3 rounded hover:text-black hover:bg-white my-2 text-lg"
        @click="getSuggestion()"
      >
        Get Suggestion
      </button>
    </div>
    <adverb-card v-if="suggestedAdverb" :card="suggestedAdverb" />
  </div>
</template>

<script>
export default {
  name: 'AdverbGame',
  components: {
    AdverbCard: () => import('~/components/games/AdverbCard'),
  },
  data() {
    return {
      adverbs: [
        {
          word: 'mysteriously',
          image: '/adverbs/mysteriously.jpg',
        },
        {
          word: 'quickly',
          image: '/adverbs/quickly.jpg',
        },
        {
          word: 'frantically',
          image: '/adverbs/frantically.jpg',
        },
        {
          word: 'quietly',
          image: '/adverbs/quietly.jpg',
        },
        {
          word: 'scarily',
          image: '/adverbs/scarily.jpg',
        },
        {
          word: 'normally',
          image: '/adverbs/normally.jpg',
        },
        {
          word: 'sleepily',
          image: '/adverbs/sleepily.jpg',
        },
        {
          word: 'angrily',
          image: '/adverbs/angrily.jpg',
        },
        {
          word: 'enthusiastically',
          image: '/adverbs/enthusiastically.jpg',
        },
        {
          word: 'timidly',
          image: '/adverbs/timidly.jpg',
        },
        {
          word: 'robotically',
          image: '/adverbs/robotically.jpg',
        },
        {
          word: 'coldly',
          image: '/adverbs/coldly.jpg',
        },
        {
          word: 'blindly',
          image: '/adverbs/blindly.jpg',
        },
        {
          word: 'absentmindedly',
          image: '/adverbs/absentmindedly.jpg',
        },
        {
          word: 'bashfully',
          image: '/adverbs/bashfully.jpg',
        },
        {
          word: 'calmly',
          image: '/adverbs/calmly.jpg',
        },
        {
          word: 'cheerfully',
          image: '/adverbs/cheerfully.jpg',
        },
        {
          word: 'cautiously',
          image: '/adverbs/cautiously.jpg',
        },
        {
          word: 'seriously',
          image: '/adverbs/seriously.jpg',
        },
        {
          word: 'dreamily',
          image: '/adverbs/dreamily.jpg',
        },
        {
          word: 'elegantly',
          image: '/adverbs/elegantly.jpg',
        },
        {
          word: 'exactly',
          image: '/adverbs/exactly.jpg',
        },
        {
          word: 'gratefully',
          image: '/adverbs/gratefully.jpg',
        },
        {
          word: 'hungrily',
          image: '/adverbs/hungrily.jpg',
        },
        {
          word: 'immediately',
          image: '/adverbs/immediately.jpg',
        },
        {
          word: 'inquisitively',
          image: '/adverbs/inquisitively.jpg',
        },
        {
          word: 'thankfully',
          image: '/adverbs/thankfully.jpg',
        },
        {
          word: 'intensely',
          image: '/adverbs/intensely.jpg',
        },
        {
          word: 'lazily',
          image: '/adverbs/lazily.jpg',
        },
        {
          word: 'loudly',
          image: '/adverbs/loudly.jpg',
        },
        {
          word: 'mechanically',
          image: '/adverbs/mechanically.jpg',
        },
        {
          word: 'nervously',
          image: '/adverbs/nervously.jpg',
        },
        {
          word: 'obediently',
          image: '/adverbs/obediently.jpg',
        },
        {
          word: 'obnoxiously',
          image: '/adverbs/obnoxiously.jpg',
        },
        {
          word: 'childishly',
          image: '/adverbs/childishly.jpg',
        },
        {
          word: 'creepily',
          image: '/adverbs/creepily.jpg',
        },
        {
          word: 'formally',
          image: '/adverbs/formally.jpg',
        },
        {
          word: 'painfully',
          image: '/adverbs/painfully.jpg',
        },
        {
          word: 'happily',
          image: '/adverbs/happily.jpg',
        },
        {
          word: 'poorly',
          image: '/adverbs/poorly.jpg',
        },
        {
          word: 'powerfully',
          image: '/adverbs/powerfully.jpg',
        },
        {
          word: 'rudely',
          image: '/adverbs/rudely.jpg',
        },
        {
          word: 'curiously',
          image: '/adverbs/curiously.jpg',
        },
        {
          word: 'shakily',
          image: '/adverbs/shakily.jpg',
        },
        {
          word: 'proudly',
          image: '/adverbs/proudly.jpg',
        },
        {
          word: 'smoothly',
          image: '/adverbs/smoothly.jpg',
        },
        {
          word: 'softly',
          image: '/adverbs/softly.jpg',
        },
        {
          word: 'lovingly',
          image: '/adverbs/lovingly.jpg',
        },
        {
          word: 'sweetly',
          image: '/adverbs/sweetly.jpg',
        },
        {
          word: 'violently',
          image: '/adverbs/violently.jpg',
        },
        {
          word: 'tenderly',
          image: '/adverbs/tenderly.jpg',
        },
        {
          word: 'victoriously',
          image: '/adverbs/victoriously.jpg',
        },
        {
          word: 'anxiously',
          image: '/adverbs/anxiously.jpg',
        },
        {
          word: 'fashionably',
          image: '/adverbs/fashionably.jpg',
        },
        {
          word: 'emotionally',
          image: '/adverbs/emotionally.jpg',
        },
        {
          word: 'majestically',
          image: '/adverbs/majestically.jpg',
        },
        {
          word: 'dangerously',
          image: '/adverbs/dangerously.jpg',
        },
        {
          word: 'magically',
          image: '/adverbs/magically.jpg',
        },
        {
          word: 'horizontally',
          image: '/adverbs/horizontally.jpg',
        },
        {
          word: 'dramatically',
          image: '/adverbs/dramatically.jpg',
        },
        {
          word: 'greedily',
          image: '/adverbs/greedily.jpg',
        },
        {
          word: 'generously',
          image: '/adverbs/generously.jpg',
        },
        {
          word: 'repeatedly',
          image: '/adverbs/repeatedly.png',
        },
        {
          word: 'fatally',
          image: '/adverbs/fatally.jpg',
        },
        {
          word: 'daintily',
          image: '/adverbs/daintily.jpg',
        },
        {
          word: 'imaginatively',
          image: '/adverbs/imaginatively.jpg',
        },
        'weakly',
        'wildly',
        'reluctantly',
        'mockingly',
        'arrogantly',
        'carefully',
        'sloppily',
        'politely',
        'badly',
        'irritably',
        'crazily',
        'defiantly',
        'doubtfully',
        'miserably',
        'thoughtfully',
        'cleanly',
        'confusedly',
        'eagerly',
        'hatefully',
        'icily',
        'incorrectly',
        'judgementally',
        'persuasively',
        'shrilly',
        'suspiciously',
        'chivalrously',
        'stealthily',
      ],
      adverbsToDisplay: [],
      countToDisplay: 10,
      showMoreButton: true,
      colors: [
        '#faf089',
        '#68d391',
        '#4fd1c5',
        '#63b3ed',
        '#7f9cf5',
        'white',
        '#f6ad55',
        '#30D5C8',
        '#F28C28',
        '#FFC000',
        '#7a49a5',
      ],
      suggestedAdverb: null,
    }
  },
  mounted() {
    const adverbsToUse = this.adverbs.slice(0, 10)
    this.adverbsToDisplay = adverbsToUse.map((adverb) => {
      return {
        word: typeof adverb === 'object' ? adverb.word : adverb,
        flipped: false,
        definition: 'This will be the definition',
        image:
          typeof adverb === 'object' && adverb.image
            ? adverb.image
            : '/adverbs/mysteriously.jpg',
        color: this.getColor(),
      }
    })
    // this.adverbsToDisplay = this.adverbs.slice(0, 10)
  },
  methods: {
    showAdverbs() {
      if (this.countToDisplay + 5 <= this.adverbs.length) {
        this.countToDisplay += 5
        // this.adverbsToDisplay = this.adverbs.slice(0, this.countToDisplay)
        const adverbsToUse = this.adverbs.slice(0, this.countToDisplay)
        this.adverbsToDisplay = adverbsToUse.map((adverb) => {
          return {
            word: typeof adverb === 'object' ? adverb.word : adverb,
            flipped: false,
            definition: 'This will be the definition',
            image:
              typeof adverb === 'object' && adverb.image
                ? adverb.image
                : '/adverbs/mysteriously.jpg',
            color: this.getColor(),
          }
        })
      } else {
        this.showMoreButton = false
      }
    },
    getColor() {
      const colorIndex = Math.floor(Math.random() * this.colors.length)
      return this.colors[colorIndex]
    },
    getSuggestion() {
      const adverbIndex = Math.floor(Math.random() * this.adverbs.length)
      this.suggestedAdverb = {
        word:
          typeof this.adverbs[adverbIndex] === 'object'
            ? this.adverbs[adverbIndex].word
            : this.adverbs[adverbIndex],
        flipped: false,
        definition: 'This will be the definition',
        image:
          typeof this.adverbs[adverbIndex] === 'object' &&
          this.adverbs[adverbIndex].image
            ? this.adverbs[adverbIndex].image
            : '/adverbs/mysteriously.jpg',
        color: this.getColor(),
      }
    },
  },
}
</script>
