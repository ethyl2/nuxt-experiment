<template>
  <div class="container flex flex-col min-h-screen">
    <h1 class="text-xl font-bold md:text-3xl mb-4">How to Play Adverb</h1>
    <h2 class="text-lg md:text-2xl mb-4">
      <em>Adverb</em> is a group game that is definitely one of my favorites.
      Here's how you can play with your friends:
    </h2>
    <ol class="list-decimal list-inside text-left space-y-2 border p-4 mb-4">
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
    <h3 class="text-lg mb-2 md:text-xl">Adverb Suggestions:</h3>
    <p v-for="adverb in adverbsToDisplay" :key="adverb">
      {{ adverb }}
    </p>
    <button
      v-if="showMoreButton"
      class="bg-black text-orange font-bold py-2 px-3 rounded hover:text-black hover:bg-white my-2 text-lg"
      @click="showAdverbs()"
    >
      More Adverbs
    </button>
  </div>
</template>

<script>
export default {
  name: 'AdverbGame',
  data() {
    return {
      adverbs: [
        'mysteriously',
        'quickly',
        'frantically',
        'quietly',
        'normally',
        'sleepily',
        'angrily',
        'enthusiastically',
        'timidly',
        'robotically',
        'coldly',
        'blindly',
        'absentmindedly',
        'bashfully',
        'calmly',
        'cheerfully',
        'cautiously',
        'seriously',
        'dreamily',
        'elegantly',
        'exactly',
        'gratefully',
        'hungrily',
        'immediately',
        'inquisitively',
        'intensely',
        'lazily',
        'loudly',
        'mechanically',
        'nervously',
        'obediently',
        'obnoxiously',
        'painfully',
        'poorly',
        'powerfully',
        'rudely',
        'shakily',
        'smoothly',
        'softly',
        'sweetly',
        'tenderly',
        'victoriously',
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
        'dramatically',
        'curiously',
        'daintily',
        'fatally',
        'generously',
        'greedily',
        'happily',
        'lovingly',
        'majestically',
        'miserably',
        'thoughtfully',
        'childishly',
        'cleanly',
        'confusedly',
        'dangerously',
        'eagerly',
        'emotionally',
        'fashionably',
        'formally',
        'hatefully',
        'horizontally',
        'icily',
        'imaginatively',
        'incorrectly',
        'repeatedly',
        'judgementally',
        'magically',
        'persuasively',
        'proudly',
        'scarily',
        'shrilly',
        'violently',
        'suspiciously',
        'chivalrously',
        'anxiously',
        'stealthily',
        'thankfully',
        '',
      ],
      adverbsToDisplay: [],
      countToDisplay: 10,
      showMoreButton: true,
    }
  },
  mounted() {
    this.adverbsToDisplay = this.adverbs.slice(0, 10)
  },
  methods: {
    showAdverbs() {
      if (this.countToDisplay + 5 <= this.adverbs.length) {
        this.countToDisplay += 5
        this.adverbsToDisplay = this.adverbs.slice(0, this.countToDisplay)
      } else {
        this.showMoreButton = false
      }
    },
  },
}
</script>
