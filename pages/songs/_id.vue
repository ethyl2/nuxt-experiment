<template>
  <div class="container flex flex-col">
    <h2 class="text-xl pt-4">{{ song.title }}</h2>
    <h3 v-if="song.tune" class="text-xl">Tune: {{ song.tune }}</h3>
    <div v-if="song.chorus">
      <h4 class="text-lg mb-4">Chorus:</h4>
      <p v-for="(line, index) in song.chorus" :key="`chorus-line-${index}`">
        {{ line }}
      </p>
    </div>

    <div v-if="song.verses" class="mt-6">
      <hr />
      <div
        v-for="(verse, index) in song.verses"
        :key="`verse-${index}`"
        class="py-4"
      >
        <p
          v-for="(line, lineIndex) in verse"
          :key="`line-${lineIndex}-verse-${index}`"
        >
          {{ line }}
        </p>
      </div>
    </div>
    <img
      v-if="song.image_url"
      :src="`/${song.image_url}`"
      :alt="song.title"
      class="w-1/4 pt-4"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      songs: [
        {
          id: 'rootbeer',
          url: '',
          title: 'The Root Beer Song',
          tune: 'Do-Re-Mi',
          chorus: [
            'Do (Dough) – The money to buy my root beer',
            'Re (Ray) – The guy who pours my root beer.',
            'Mi (Me) – The guy who drinks my root beer.',
            'Fa – A long way to the bathroom.',
            'So – Let’s have another root beer.',
            '(La) – Lots and lots and lots of root beer.',
            "Ti (Tea) - No thanks, I'm having rootbeer.",
            "And that's why I have no dough, dough, dough, dough. (Repeat)",
          ],
          image_url: 'rootbeer.png',
        },
        {
          id: 'nerves',
          url:
            'https://boyscouttrail.com/content/song/a_song_that_gets_on_everybodys_nerves-452.asp',
          tune: "John Brown's Body",
          title: "A Song That Gets On Everybody's Nerves",
          chorus: [
            `I know a song that gets on everybody's nerves,`,
            `Everybody's nerves,`,
            `Yes, on everybody's nerves.`,
            `I know a song that gets on everybody's nerves`,
            `And this is how it goes...`,

            `(repeat forever)`,
          ],
          image_url: 'song.png',
        },
        {
          id: 'nut',
          url: 'https://boyscouttrail.com/content/song/im_a_nut-486.asp',
          title: "I'm a Nut",
          image_url: 'nut2.png',
          chorus: [
            `I'm a nut, (click, click)`,
            `I'm a nut, (click, click)`,
            `I'm a nut, I'm a nut, I'm a nut. (click, click)`,
          ],
          verses: [
            [
              `I'm an acorn, small and round,`,
              `Lying on the cold, cold ground.`,
              `Everybody steps on me,`,
              `That is why I'm cracked you see.`,
            ],

            [
              `Called myself on the telephone`,
              `Just to see if I was home.`,
              `Made a date for half past eight,`,
              `Better hurry or I'll be late!`,
            ],

            [
              `Took myself to the picture show`,
              `Sat myself in the very last row`,
              `Wrapped my arms around my waist`,
              `Got so fresh I slapped my face!`,
            ],

            [
              `Bought some roses at the store.`,
              `Told myself I wanted more.`,
              `That's why I broke up with me.`,
              `Now I am a nut that's free!`,
            ],
            [
              `Gee, I miss me all the time.`,
              `Wonder if I'm doing fine.`,
              `Maybe I'll stop by to see`,
              `If I have a chance with me.`,
            ],
            [
              `Coca-Cola went to town,`,
              `Pepsi-Cola shot him down.`,
              `Dr. Pepper fixed him up,`,
              `Now we all drink 7-Up.`,
            ],
            [
              `I'm so nutty, I don't know`,
              `Why the squirrels love me so.`,
              `I'm descended from an oak.`,
              `Nuts to you, and that's no joke.`,
            ],
          ],
        },
      ],
    }
  },
  computed: {
    song() {
      return this.songs.find((song) => song.id === this.id)
    },
  },
}
</script>
