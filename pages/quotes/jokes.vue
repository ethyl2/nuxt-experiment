<template>
  <div
    class="min-h-screen border-b-8 border-black pb-24"
    style="
      background: url('/balloons.jpg') no-repeat center center fixed;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    "
  >
    <h1
      class="text-center text-xl md:text-3xl my-4 font-bold bg-black py-2"
      style="color: #e2d810"
    >
      Favorite Jokes
    </h1>
    <main class="mx-4 flex flex-wrap justify-evenly items-stretch md:mx-20">
      <joke v-for="(joke, index) in jokes" :key="index" :joke="joke" />
    </main>
  </div>
</template>
<script>
export default {
  name: 'Jokes',
  components: {
    Joke: () => import('~/components/Joke'),
  },
  data() {
    return {
      jokes: [
        {
          question: "What do you call a snake that's shed its skin?",
          answer: 'Naked.',
        },
        {
          question: 'What do you call Santa at the South Pole?',
          answer: 'A lost Claus.',
        },
        {
          question: 'What side of a cat has the most fur?',
          answer: 'The outside.',
        },
        {
          question:
            'What did the buffalo say when he dropped his son off at school?',
          answer: 'Bye son.',
        },
        {
          question: 'Why was the pig in the kitchen?',
          answer: 'It was bacon.',
        },
        {
          question: "Why aren't koalas actual bears?",
          answer: "They don't meet the koalafications.",
        },
        {
          question: "What's smarter than a talking parrot?",
          answer: 'A spelling bee.',
        },
        {
          question: 'How do porcupines talk to each other?',
          answer: 'With spine language.',
        },
        {
          question:
            'What do you call 2 monkeys that share an Amazon prime account?',
          answer: 'Prime mates.',
        },
        {
          question: 'What are bears without bees?',
          answer: 'Ears.',
        },
        {
          question: "Why can't you give Elsa a balloon?",
          answer: 'Because she will let it go...',
        },
        {
          question: 'Why did half a chicken cross the road?',
          answer: 'To get to his other side.',
        },
        {
          question: 'Why did the skunk cross the road?',
          answer: 'To get to the odor side.',
        },
        {
          question: 'What kind of bagel can fly?',
          answer: 'A plain bagel!',
        },
        {
          question: 'What do you call a fake noodle?',
          answer: 'An impasta.',
        },
        {
          question:
            'How is the alphabet different on Christmas than any other day?',
          answer: 'On Christmas, it has Noel.',
        },
        {
          question: 'Why did the couple get hitched on the 24th of December?',
          answer: 'So they could have a married Christmas.',
        },
        {
          question: 'What does the gingerbread man use to make his bed?',
          answer: 'Cookie sheets.',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Favorite Jokes | Nuxt Experiments',
      meta: [
        {
          name: 'twitter:title',
          content: 'Favorite Jokes | Nuxt Experiments',
        },
        {
          name: 'twitter:description ',
          content: 'A collection of some of my favorite jokes.',
        },
        { name: 'twitter:image', content: '../static/can-wall/can-wall.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
}
</script>
