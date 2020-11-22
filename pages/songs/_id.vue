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
      <h4 v-if="song.verses.length > 1" class="text-lg mt-5 mb-2">Verses:</h4>
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
    <aside>
      <h3 class="text-xl mt-6">Other songs you might enjoy</h3>
      <ul>
        <li v-for="relatedSong in relatedSongs" :key="relatedSong.id">
          <nuxt-link :to="`/songs/${relatedSong.id}`">{{
            relatedSong.title
          }}</nuxt-link>
        </li>
      </ul>
    </aside>
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
          id: 'possum',
          url:
            'https://sites.google.com/site/1stbalcombeheightscubs/home/camps/campfire-songs/song-im-a-little-possum',
          title: "I'm a Little Possum",
          tune: "I'm a Little Teapot",
          chorus: [
            "I'm a little possum short and stout",
            'Here is my tail (turn and point to your rear end)',
            'and here is my snout (put your fingers on your nose)',
            "If you pull my tail you'll hear me shout",
            "Hey, I'm a possum, (Shake your fingers or fists angrily)",
            'CUT THAT OUT!',
          ],
          image_url: 'possum.png',
        },
        {
          id: 'cream',
          url: 'https://scoutermom.com/17787/cool-and-creamy-skit-song/',
          title: 'Cool and Creamy',
          tune: 'Alouette',
          chorus: [
            'Cool and creamy',
            'We like cool and creamy',
            'Cool and creamy',
            'We like it the best!',
          ],
          verses: [
            [
              'Would you like some on your head?',
              'Yes, I’d like some on my head!',
              'On your head?',
              'On my head! (Spray whipped cream or shaving cream on the one who’d like it on their head)',
            ],
            [
              'Would you like some on your shirt?',
              'Yes, I’d like some on my shirt!',
              'On your shirt?',
              'On my shirt!',
            ],
            [
              'Would you like some in your hair?',
              'Yes, I’d like some in my hair!',
              'In your hair?',
              'In my hair!',
            ],
            [
              'Would you like some in your shoes?',
              'Yes, I’d like some in my shoes!',
              'In your shoes?',
              'In my shoes!',
            ],
          ],
          image_url: 'cream.png',
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
      // return this.songs.find((song) => song.id === this.id)
      // To use the store instead:
      return this.$store.state.songs.all.find((song) => song.id === this.id)
    },
    relatedSongs() {
      // return this.songs.filter((song) => song.id !== this.id).slice(0, 3)
      return this.$store.state.songs.all
        .filter((song) => song.id !== this.id)
        .slice(0, 3)
    },
  },
  head() {
    return {
      title: `${this.song.title} 🎼`,
      meta: [
        { name: 'twitter:title', content: this.song.title },
        {
          name: 'twitter:description ',
          content: `${this.song.title} Campfire Song`,
        },
        { name: 'twitter:image', content: `/${this.song.image_url}` },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
}
</script>
