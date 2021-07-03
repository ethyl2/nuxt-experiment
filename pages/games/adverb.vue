<template>
  <div class="container flex flex-col min-h-screen">
    <h1 class="text-xl font-bold md:text-3xl mb-4">How to Play Adverb</h1>
    <h2 class="text-lg md:text-2xl mb-4">
      <em>Adverb</em> is a group game that is definitely one of my favorites.
      Here's how you can play with your friends:
    </h2>
    <ol
      class="list-decimal list-inside text-left space-y-2 border border-yellow-400 rounded p-4 mb-4"
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
    <div class="flex items-center justify-center w-full mx-auto">
      <adverb-card v-if="suggestedAdverb" :card="suggestedAdverb" />
    </div>
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
          definition:
            'in a way that is difficult or impossible to understand, explain, or identify; in a deliberately enigmatic manner.',
        },
        {
          word: 'quickly',
          image: '/adverbs/quickly.jpg',
          definition:
            'at a fast speed; rapidly; with little or no delay; promptly',
        },
        {
          word: 'boredly',
          image: '/adverbs/boredly.jpg',
          definition:
            'in a bored, tired, and uninterested manner, wearied by dullness or sameness',
        },
        {
          word: 'silently',
          image: '/adverbs/silently.jpg',
          definition:
            'at a fast speed; rapidly; with little or no delay; promptly',
        },
        {
          word: 'incorrectly',
          image: '/adverbs/incorrectly.jpg',
          definition:
            'in a mistaken way; wrongly; not in accordance with particular standards or rules',
        },
        {
          word: 'frantically',
          image: '/adverbs/frantically.jpg',
          definition:
            'in a hurried, excited, or disorganized manner; in a distraught way owing to fear, anxiety, or other emotion',
        },
        {
          word: 'quietly',
          image: '/adverbs/quietly.jpg',
          definition:
            'with low volume; with little or no activity or no agitation; in a restful manner; privately, secretly, discreetly, confidentially; modestly, humbly',
        },
        {
          word: 'scarily',
          image: '/adverbs/scarily.jpg',
          definition:
            'in a way that causes fear or alarm; in a very striking or surprising way',
        },
        {
          word: 'normally',
          image: '/adverbs/normally.jpg',
          definition:
            'in a normal manner; in the usual way; at right angles to a given line or surface ',
        },
        {
          word: 'sleepily',
          image: '/adverbs/sleepily.jpg',
          definition: 'in a sleepy or drowsy manner',
        },
        {
          word: 'angrily',
          image: '/adverbs/angrily.jpg',
          definition:
            'in a manner resulting from or betraying anger, strong resentment, or annoyance; stormily or threateningly',
        },
        {
          word: 'enthusiastically',
          image: '/adverbs/enthusiastically.jpg',
          definition:
            'in a way that shows intense and eager enjoyment, interest, or approval',
        },
        {
          word: 'timidly',
          image: '/adverbs/timidly.jpg',
          definition: 'in a manner that shows a lack of courage or confidence',
        },
        {
          word: 'alphabetically',
          image: '/adverbs/alphabetically.jpg',
          definition: 'in the order of the letters of the alphabet',
        },
        {
          word: 'robotically',
          image: '/adverbs/robotically.jpg',
          definition:
            'in a robotic manner, especially in being stiff or unemotional; resembling the functioning of a machine',
        },
        {
          word: 'coldly',
          image: '/adverbs/coldly.jpg',
          definition:
            'without affection or warmth of feeling; unemotionally; in a way that shows lack of kindness or sympathy',
        },
        {
          word: 'blindly',
          image: '/adverbs/blindly.jpg',
          definition:
            'as if blind; without seeing or noticing; without reasoning or questioning',
        },
        {
          word: 'absentmindedly',
          image: '/adverbs/absentmindedly.jpg',
          definition:
            'in a preoccupied manner; without paying attention to what you are doing or what is happening near you because you are thinking about other things',
        },
        {
          word: 'bashfully',
          image: '/adverbs/bashfully.jpg',
          definition:
            'in a way that shows someone is very shy or easily embarrassed',
        },
        {
          word: 'calmly',
          image: '/adverbs/calmly.jpg',
          definition:
            'in a peaceful, quiet way and without worry or extreme emotion; without hurried movement or noise',
        },
        {
          word: 'cheerfully',
          image: '/adverbs/cheerfully.jpg',
          definition: 'in a happy, bright, pleasant, and positive way',
        },
        {
          word: 'cautiously',
          image: '/adverbs/cautiously.jpg',
          definition: 'in a careful and well-considered way that avoids risk',
        },
        {
          word: 'seriously',
          image: '/adverbs/seriously.jpg',
          definition: 'in a solemn or considered manner; not joking',
        },
        {
          word: 'dreamily',
          image: '/adverbs/dreamily.jpg',
          definition:
            'in a way that suggests you are imagining something pleasant and not giving much attention to what is happening around you',
        },
        {
          word: 'elegantly',
          image: '/adverbs/elegantly.jpg',
          definition: 'in a graceful, stylish, and attractive manner',
        },
        {
          word: 'exactly',
          image: '/adverbs/exactly.jpg',
          definition: 'in an exact manner; precisely; accurately',
        },
        {
          word: 'gratefully',
          image: '/adverbs/gratefully.jpg',
          definition:
            'with appreciation and thanks for something done or received',
        },
        {
          word: 'hungrily',
          image: '/adverbs/hungrily.jpg',
          definition:
            'in a way that shows a need or desire for food; in a way that shows a strong desire for something',
        },
        {
          word: 'agreeably',
          image: '/adverbs/agreeably.jpg',
          definition:
            'pleasantly, or with enjoyment or pleasure; willing to agree to something',
        },
        {
          word: 'secretly',
          image: '/adverbs/secretly.jpg',
          definition: '',
        },
        {
          word: 'immediately',
          image: '/adverbs/immediately.jpg',
          definition: '',
        },
        {
          word: 'inquisitively',
          image: '/adverbs/inquisitively.jpg',
          definition: '',
        },
        {
          word: 'thankfully',
          image: '/adverbs/thankfully.jpg',
          definition: '',
        },
        {
          word: 'intensely',
          image: '/adverbs/intensely.jpg',
          definition: '',
        },
        {
          word: 'lazily',
          image: '/adverbs/lazily.jpg',
          definition: '',
        },
        {
          word: 'loudly',
          image: '/adverbs/loudly.jpg',
          definition: '',
        },
        {
          word: 'mechanically',
          image: '/adverbs/mechanically.jpg',
          definition: '',
        },
        {
          word: 'nervously',
          image: '/adverbs/nervously.jpg',
          definition: '',
        },
        {
          word: 'obediently',
          image: '/adverbs/obediently.jpg',
          definition: '',
        },
        {
          word: 'obnoxiously',
          image: '/adverbs/obnoxiously.jpg',
          definition: '',
        },
        {
          word: 'childishly',
          image: '/adverbs/childishly.jpg',
          definition: '',
        },
        {
          word: 'creepily',
          image: '/adverbs/creepily.jpg',
          definition: '',
        },
        {
          word: 'formally',
          image: '/adverbs/formally.jpg',
          definition: '',
        },
        {
          word: 'painfully',
          image: '/adverbs/painfully.jpg',
          definition: '',
        },
        {
          word: 'happily',
          image: '/adverbs/happily.jpg',
          definition: '',
        },
        {
          word: 'poorly',
          image: '/adverbs/poorly.jpg',
          definition: '',
        },
        {
          word: 'powerfully',
          image: '/adverbs/powerfully.jpg',
          definition: '',
        },
        {
          word: 'rudely',
          image: '/adverbs/rudely.jpg',
          definition: '',
        },
        {
          word: 'curiously',
          image: '/adverbs/curiously.jpg',
          definition: '',
        },
        {
          word: 'shakily',
          image: '/adverbs/shakily.jpg',
          definition: '',
        },
        {
          word: 'proudly',
          image: '/adverbs/proudly.jpg',
          definition: '',
        },
        {
          word: 'smoothly',
          image: '/adverbs/smoothly.jpg',
          definition: '',
        },
        {
          word: 'softly',
          image: '/adverbs/softly.jpg',
          definition: '',
        },
        {
          word: 'lovingly',
          image: '/adverbs/lovingly.jpg',
          definition: '',
        },
        {
          word: 'sweetly',
          image: '/adverbs/sweetly.jpg',
          definition: '',
        },
        {
          word: 'stiffly',
          image: '/adverbs/stiffly.jpg',
          definition: '',
        },
        {
          word: 'violently',
          image: '/adverbs/violently.jpg',
          definition: '',
        },
        { word: 'cleanly', image: '/adverbs/cleanly.jpg', definition: '' },
        {
          word: 'tenderly',
          image: '/adverbs/tenderly.jpg',
          definition: '',
        },
        {
          word: 'victoriously',
          image: '/adverbs/victoriously.jpg',
          definition: '',
        },
        {
          word: 'anxiously',
          image: '/adverbs/anxiously.jpg',
          definition: '',
        },
        {
          word: 'fashionably',
          image: '/adverbs/fashionably.jpg',
          definition: '',
        },
        {
          word: 'emotionally',
          image: '/adverbs/emotionally.jpg',
          definition: '',
        },
        {
          word: 'badly',
          image: '/adverbs/badly.jpg',
          definition: '',
        },
        {
          word: 'majestically',
          image: '/adverbs/majestically.jpg',
          definition: '',
        },
        {
          word: 'dangerously',
          image: '/adverbs/dangerously.jpg',
          definition: '',
        },
        {
          word: 'magically',
          image: '/adverbs/magically.jpg',
          definition: '',
        },
        {
          word: 'horizontally',
          image: '/adverbs/horizontally.jpg',
          definition: '',
        },
        {
          word: 'dramatically',
          image: '/adverbs/dramatically.jpg',
          definition: '',
        },
        {
          word: 'greedily',
          image: '/adverbs/greedily.jpg',
          definition: '',
        },
        {
          word: 'generously',
          image: '/adverbs/generously.jpg',
          definition: '',
        },
        {
          word: 'repeatedly',
          image: '/adverbs/repeatedly.png',
          definition: '',
        },
        {
          word: 'crazily',
          image: '/adverbs/crazily.jpg',
          definition: '',
        },
        {
          word: 'fatally',
          image: '/adverbs/fatally.jpg',
          definition: '',
        },
        {
          word: 'daintily',
          image: '/adverbs/daintily.jpg',
          definition: '',
        },
        {
          word: 'imaginatively',
          image: '/adverbs/imaginatively.jpg',
          definition: '',
        },
        {
          word: 'thoughtfully',
          image: '/adverbs/thoughtfully.jpg',
          definition: '',
        },
        {
          word: 'wildly',
          image: '/adverbs/wildly.jpg',
          definition: '',
        },
        {
          word: 'artistically',
          image: '/adverbs/artistically.jpg',
          definition: '',
        },
        {
          word: 'miserably',
          image: '/adverbs/miserably.jpg',
          definition: '',
        },
        {
          word: 'suspiciously',
          image: '/adverbs/suspiciously.jpg',
          definition: '',
        },
        {
          word: 'politely',
          image: '/adverbs/politely.jpg',
          definition: '',
        },
        {
          word: 'messily',
          image: '/adverbs/messily.jpg',
          definition: '',
        },
        {
          word: 'musically',
          image: '/adverbs/musically.jpg',
          definition: '',
        },
        {
          word: 'helpfully',
          image: '/adverbs/helpfully.jpg',
          definition: '',
        },
        {
          word: 'carefully',
          image: '/adverbs/carefully.jpg',
          definition: '',
        },
        {
          word: 'mathematically',
          image: '/adverbs/mathematically.png',
          definition: '',
        },
        {
          word: 'strangely',
          image: '/adverbs/strangely.jpg',
          definition: '',
        },
        {
          word: 'confusedly',
          image: '/adverbs/confusedly.jpg',
          definition: '',
        },
        {
          word: 'eagerly',
          image: '/adverbs/eagerly.jpg',
          definition: '',
        },
        {
          word: 'doubtfully',
          image: '/adverbs/doubtfully.jpg',
          definition: '',
        },
        {
          word: 'icily',
          image: '/adverbs/icily.jpg',
          definition: '',
        },
        {
          word: 'slowly',
          image: '/adverbs/slowly.jpg',
          definition: '',
        },
        {
          word: 'reluctantly',
          image: '/adverbs/reluctantly.jpg',
          definition: '',
        },
        {
          word: 'ignorantly',
          image: '/adverbs/ignorantly.jpg',
          definition: '',
        },
        {
          word: 'stealthily',
          image: '/adverbs/stealthily.jpg',
          definition: '',
        },
        {
          word: 'shrilly',
          image: '/adverbs/shrilly.jpg',
          definition: '',
        },
        {
          word: 'defiantly',
          image: '/adverbs/defiantly.jpg',
          definition: '',
        },
        {
          word: 'chivalrously',
          image: '/adverbs/chivalrously.jpg',
          definition: '',
        },
        {
          word: 'persuasively',
          image: '/adverbs/persuasively.jpg',
          definition: '',
        },
        {
          word: 'mockingly',
          image: '/adverbs/mockingly.jpg',
          definition: '',
        },
        {
          word: 'judgementally',
          image: '/adverbs/judgementally.jpg',
          definition: '',
        },
        {
          word: 'ambidextrously',
          image: '/adverbs/ambidextrously.jpg',
          definition: '',
        },
        {
          word: 'goofily',
          image: '/adverbs/goofily.jpg',
          definition: '',
        },
        {
          word: 'arrogantly',
          image: '/adverbs/arrogantly.jpg',
          definition: '',
        },
        {
          word: 'weakly',
          image: '/adverbs/weakly.jpg',
          definition: '',
        },
        {
          word: 'joyfully',
          image: '/adverbs/joyfully.jpg',
          definition: '',
        },
        {
          word: 'operatically',
          image: '/adverbs/operatically.jpg',
          definition: '',
        },
        {
          word: 'hesitantly',
          image: '/adverbs/hesitantly.jpg',
          definition: '',
        },
        {
          word: 'athletically',
          image: '/adverbs/athletically.jpg',
          definition: '',
        },
        {
          word: 'thirstily',
          image: '/adverbs/thirstily.jpg',
          definition: '',
        },
        {
          word: 'flirtatiously',
          image: '/adverbs/flirtatiously.jpg',
          definition: '',
        },
        {
          word: 'adorably',
          image: '/adverbs/adorably.jpg',
          definition: '',
        },
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
  },
  methods: {
    showAdverbs() {
      if (this.countToDisplay + 5 <= this.adverbs.length) {
        this.countToDisplay += 5
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
