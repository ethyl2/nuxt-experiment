<template>
  <div class="mx-4 flex flex-col text-center md:mx-10">
    <h1 class="text-xl mb-2">Search the Jabberwocky</h1>
    <p class="mb-4">
      Poem by Lewis Carroll, included in
      <em>Through the Looking-Glass, and What Alice Found There</em>
    </p>
    <div class="w-full mb-2">
      <label for="search">Search:</label>
      <input
        v-model="query"
        type="text"
        placeholder="what do you want to find?"
        class="text-black p-1 w-5/6 rounded md:w-1/2"
      />
    </div>
    <h2 class="font-bold text-md py-1">Jabberwocky</h2>
    <div
      class="leading-loose mx-auto w-full mb-6 flex flex-col md:flex-row md:justify-around md:w-5/6"
      v-html="highlight()"
    ></div>
    <img class="w-full mx-auto md:w-1/2" src="/jabberwocky.jpg" />
  </div>
</template>

<script>
export default {
  name: 'Jabberwocky',
  data() {
    return {
      query: '',
      text: `
            <div>
                <p>'Twas brillig, and the slithy toves</p>
                <p>Did gyre and gimble in the wabe;</p>
                <p>All mimsy were the borogoves,</p>
                <p>And the mome raths outgrabe.</p>
                <br />
                <p>"Beware the Jabberwock, my son!</p>
                <p>The jaws that bite, the claws that catch!</p>
                <p>Beware the Jubjub bird, and shun</p>
                <p>The frumious Bandersnatch!"</p>
                <br />
            </div>
            <div>
                <p>He took his vorpal sword in hand:</p>
                <p>Long time the manxome foe he sought —</p>
                <p>So rested he by the Tumtum tree,</p>
                <p>And stood awhile in thought.</p>
                <br />
                <p>And as in uffish thought he stood,</p>
                <p>The Jabberwock, with eyes of flame,</p>
                <p>Came whiffling through the tulgey wood,</p>
                <p>And burbled as it came!</p>
                <br />
                <p>One, two! One, two! And through and through</p>
                <p>The vorpal blade went snicker-snack!</p>
                <p>He left it dead, and with its head</p>
                <p>He went galumphing back.</p>
                <br />
            </div>
            <div>
                <p>"And hast thou slain the Jabberwock?</p>
                <p>Come to my arms, my beamish boy!</p>
                <p>O frabjous day! Callooh! Callay!"</p>
                <p>He chortled in his joy.</p>
                <br />
                <p>'Twas brillig, and the slithy toves</p>
                <p>Did gyre and gimble in the wabe;</p>
                <p>All mimsy were the borogoves,</p>
                <p>And the mome raths outgrabe.</p>
            </div>
        `,
    }
  },
  methods: {
    highlight() {
      const tagsToIgnore = ['div', 'p', 'br', '<', '/', '>']
      if (!this.query || tagsToIgnore.includes(this.query)) {
        return this.text
      }
      return this.text.replace(new RegExp(this.query, 'gi'), (match) => {
        return (
          '<span class="bg-yellow-400 text-black font-bold rounded p-1">' +
          match +
          '</span>'
        )
      })
    },
  },
}
</script>
