<style scoped>
ul.podcast-list li > a::before {
  content: var(--bullet);
  padding-right: 0.5em;
  color: var(--yellow);
  font-weight: bold;
}
</style>
<template>
  <div>
    <h1
      id="top"
      class="text-2xl font-bold mb-2 text-center md:text-3xl md:mb-4"
    >
      Favorite Podcasts
    </h1>

    <!-- Top Nav -->
    <nav class="flex flex-wrap mx-auto items-center justify-center px-1">
      <a
        v-for="category in categories"
        :key="category"
        :href="'#' + getId(category)"
      >
        <img
          :src="'/podcast-group/' + getId(category) + '.png'"
          :alt="`speech
        bubble for ${category}`"
          class="w-16 md:w-24"
        />
      </a>
    </nav>

    <main class="flex items-start justify-around max-w-5xl mx-auto">
      <!-- Podcasts by Category -->
      <div class="flex flex-col mt-8 space-y-6 md:space-y-12">
        <div
          v-for="(podcastList, category) in organizedPodcasts"
          :key="category"
          class="flex flex-col items-center justify-start px-4 max-w-4xl ml-0 md:px-8"
        >
          <h2
            :id="getId(category)"
            class="text-lg font-bold mb-1 md:text-2xl text-center"
          >
            {{ category }}
          </h2>
          <ul
            class="podcast-list flex flex-col justify-start items-start space-y-2 md:space-y-4"
          >
            <li
              v-for="podcast in podcastList"
              :key="podcast.title"
              class="flex flex-col items-start justify-center md:block"
            >
              <a
                class="text-base font-bold mr-2 flex-shrink-0 md:text-lg md:inline"
                :href="podcast.url"
                target="_blank"
                nofollow
                >{{ podcast.title }}</a
              >
              <p class="text-left text-sm md:text-base md:inline">
                "{{ podcast.synopsis }}"
              </p>
            </li>
          </ul>
        </div>
      </div>
      <aside class="hidden md:mt-6 md:grid md:grid-cols-1">
        <a
          v-for="podcast in podcasts"
          :key="podcast.title"
          :href="podcast.url"
          target="_blank"
          class="z-10 w-16 h-16 sm:w-24 sm:h-24 md:w-24 md:h-24 transform hover:scale-105 hover:z-50"
        >
          <img
            :src="podcast.thumbnail"
            :alt="podcast.title"
            class="h-full w-full"
          />
        </a>
      </aside>
    </main>

    <!-- Mobile Thumbnail Gallery -->
    <div
      class="flex flex-wrap mx-auto py-10 justify-center items-center px-1 md:hidden"
    >
      <a
        v-for="podcast in podcasts"
        :key="podcast.title"
        :href="podcast.url"
        target="_blank"
        class="z-10 w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 transform hover:scale-105 hover:z-50"
      >
        <img
          :src="podcast.thumbnail"
          :alt="podcast.title"
          class="h-full w-full"
        />
      </a>
    </div>
    <a href="#top" class="flex items-center justify-center">☝️ To Top </a>
  </div>
</template>

<script>
export default {
  name: 'PodcastList',
  data() {
    return {
      podcasts: [
        {
          title: 'Good Job Brain',
          category: 'Interesting Facts',
          url: 'https://www.goodjobbrain.com/',
          thumbnail: '/podcasts/good-job-brain.png',
          synopsis: `A podcast that’s part quiz show, part offbeat trivia, and all
            awesome.`,
        },
        {
          title: 'Every Little Thing',
          category: 'Interesting Facts',
          url: 'https://gimletmedia.com/shows/every-little-thing',
          thumbnail: '/podcasts/every-little-thing.jpg',
          synopsis: `ELT is here to answer your burning questions.`,
        },
        {
          title: '99% Invisible',
          category: 'Interesting Facts',
          url: 'https://99percentinvisible.org/',
          thumbnail: '/podcasts/99-percent-invisible.jpg',
          synopsis: `99% Invisible is a sound rich, narrative podcast hosted by Roman
            Mars about all the thought that goes into the things we don’t think
            about — the unnoticed architecture and design that shape our world.`,
        },
        {
          title: 'Spitballers',
          category: 'Comedy',
          url: 'http://www.spitballerspod.com/',
          thumbnail: '/podcasts/spitballers.png',
          synopsis: `We all need a little nonsense in our everyday lives. Join Jason,
            Andy, and Mike each week for an hour of comedic madness.`,
        },
        {
          title: 'We Got This with Mark and Hal',
          category: 'Comedy',
          url: 'https://maximumfun.org/podcasts/we-got-this-with-mark-and-hal/',
          thumbnail: '/podcasts/we-got-this.jpg',
          synopsis: `Actors Mark Gagliardi and Hal Lublin sit down to settle all the
            small debates that are a big deal to YOU — once and for all. Don’t
            worry… We Got This.`,
        },
        {
          title: 'Follow HIM',
          category: 'Inspirational',
          url: 'https://followhim.co/',
          thumbnail: '/podcasts/follow-him.jpg',
          synopsis: `A weekly podcast dedicated to helping
            individuals and families with their Come Follow Me study. We are
            Hank Smith and John Bytheway. We love to learn. We love to laugh. We
            want to learn and laugh with you as together we followHIM.`,
        },
        {
          title: 'Twenty Thousand Hertz',
          category: 'Sound',
          url: 'https://www.20k.org/',
          thumbnail: '/podcasts/twenty-thousand-hertz.jpg',
          synopsis: `The stories behind the world's most recognizable and interesting
            sounds.`,
        },
        {
          title: 'Strong Songs',
          category: 'Sound',
          url: 'https://strongsongspodcast.com/',
          thumbnail: '/podcasts/strong-songs.jpg',
          synopsis: `Music: it's good. On each episode of Strong Songs, host Kirk
            Hamilton takes listeners inside a piece of music, breaking it down
            and figuring out what makes it work.`,
        },
        {
          title: 'Myths and Legends',
          category: 'Literature',
          url: 'https://www.mythpodcast.com/',
          thumbnail: '/podcasts/myths-and-legends.jpg',
          synopsis: `This show brings you folklore that has shaped our world. Some are
            incredibly popular stories you think you know, but with surprising
            origins. Others are stories that might be new to you, but are
            definitely worth a listen.`,
        },
        {
          title: 'The Real Weird Sisters',
          category: 'Literature',
          url: 'https://www.realweirdsisters.com/',
          thumbnail: '/podcasts/weird-sisters.jpg',
          synopsis: `Two real weird sisters break down the Harry Potter series chapter
            by chapter and delve into special topics related to the Harry Potter
            universe.`,
        },
        {
          title: 'Book Vs Movie',
          category: 'Literature',
          url: 'https://bookvsmovie.libsyn.com/',
          thumbnail: '/podcasts/book-vs-movie.png',
          synopsis: `Book Vs. Movie is the podcast that ponders the question: 'Which was
            better...the book or the movie?'`,
        },
        {
          title: 'The Empty Bowl',
          category: 'Food',
          url: 'https://www.themcelroy.family/emptybowl',
          thumbnail: '/podcasts/the-empty-bowl.jpg',
          synopsis: `A meditative podcast about cereal from cereal eater Justin McElroy
            and Cerealously creator Dan Goubert.`,
        },
        {
          title: 'Gastropod',
          category: 'Food',
          url: 'https://gastropod.com/',
          thumbnail: '/podcasts/gastropod.jpg',
          synopsis: `Gastropod looks at food through the lens of science and history.`,
        },
        {
          title: 'Savor',
          category: 'Food',
          url: 'https://www.iheart.com/podcast/105-savor-28019899/',
          thumbnail: '/podcasts/savor.jpg',
          synopsis: `Savor digs into how people live and how they eat – and why. Hosts
            Anney Reese and Lauren Vogelbaum interview the culinary creators and
            consumers of the world, exploring the science, history, and culture
            of food and drink, all with a key question in mind: Why do we like
            what we like, and how can we find more of those things?`,
        },
        {
          title: 'Futility Closet',
          category: 'History',
          url: 'https://www.futilitycloset.com/podcast/',
          thumbnail: '/podcasts/futility-closet.jpg',
          synopsis: `The Futility Closet podcast is a weekly show featuring forgotten
            stories from the pages of history.`,
        },
        {
          title: 'Omnibus',
          category: 'History',
          url: 'https://www.omnibusproject.com/',
          thumbnail: '/podcasts/omnibus.jpg',
          synopsis: `An encyclopedic reference of strange-but-true stories compiled as a
            time capsule for future generations.`,
        },
        {
          title: 'Ridiculous History',
          category: 'History',
          url: 'https://www.iheart.com/podcast/105-ridiculous-history-28588696/',
          thumbnail: '/podcasts/ridiculous-history.jpg',
          synopsis: `History is beautiful, brutal and, often, ridiculous. Join Ben
            Bowlin and Noel Brown as they dive into some of the weirdest stories
            from across the span of human civilization.`,
        },
        {
          title: 'Cabinet of Curiosities',
          category: 'History',
          url: 'http://aaronmahnke.com/curiosities/',
          thumbnail: '/podcasts/cabinet-of-curiosities.jpg',
          synopsis: `The show is an audio tour of the unbelievable, the unsettling, and
            the bizarre, introducing listeners to short tales about the most
            amazing things on display in the pages of history.`,
        },
        {
          title: 'Science Vs',
          category: 'Science',
          url: 'https://gimletmedia.com/shows/science-vs',
          thumbnail: '/podcasts/science-vs.jpg',
          synopsis: `Science Vs takes on fads, trends, and the opinionated mob to find
            out what’s fact, what’s not, and what’s somewhere in between.`,
        },
        {
          title: 'CrowdScience',
          category: 'Science',
          url: 'https://www.bbc.co.uk/programmes/p04d42rc',
          thumbnail: '/podcasts/crowd-science.jpg',
          synopsis: `We take your questions about life, Earth and the universe to
            researchers hunting for answers at the frontiers of knowledge.`,
        },
        {
          title: 'Short Wave',
          category: 'Science',
          url: 'https://www.npr.org/podcasts/510351/short-wave',
          thumbnail: '/podcasts/short-wave.png',
          synopsis: `New discoveries, everyday mysteries, and the science behind the
            headlines — all in about 10 minutes, every weekday. It's science for
            everyone, using a lot of creativity and a little humor.`,
        },
        {
          title: 'JS Party',
          category: 'Web Development',
          url: 'https://changelog.com/jsparty',
          thumbnail: '/podcasts/js-party.png',
          synopsis:
            'Your weekly celebration of JavaScript and the web. Topics discussed include the web platform (Chrome, Safari, Edge, Firefox, Brave, etc), front-end frameworks (React, Ember, Angular, Vue, etc), Node.js, web animation, SVG, robotics, IoT, and much more.',
        },
        {
          title: 'Syntax',
          category: 'Web Development',
          url: 'https://syntax.fm/',
          thumbnail: '/podcasts/syntax.png',
          synopsis:
            'Full Stack Developers Wes Bos and Scott Tolinski dive deep into web development topics, explaining how they work and talking about their own experiences. They cover JavaScript frameworks like React, the latest advancements in CSS, and simplifying web tooling.',
        },
        {
          title: 'Office Ladies',
          category: 'The Office',
          url: 'https://officeladies.com/',
          thumbnail: '/podcasts/office-ladies.jpg',
          synopsis: `The Office co-stars and best friends, Jenna Fischer and Angela
            Kinsey, are doing the ultimate The Office re-watch podcast for you.
            Each week, Jenna and Angela will break down an episode of The Office
            and give exclusive behind-the-scene stories that only two people who
            were there, can tell you.`,
        },
        {
          title: 'The Michael Scott Podcast Company',
          category: 'The Office',
          url: 'https://michaelscottpod.com/',
          thumbnail: '/podcasts/michael-scott-podcast-company.jpg',
          synopsis: `The Michael Scott Podcast Company takes a deep dive into NBC’s ‘The
            Office’. Hosts Sean Roney, Edwin Janes, and Alex Ward look at the
            moments, arcs, and characters that make up the show’s 9-season run,
            and why it remains so popular after all these years.`,
        },
      ],
      categories: [
        'Interesting Facts',
        'Comedy',
        'Inspirational',
        'Sound',
        'Literature',
        'Food',
        'History',
        'Science',
        'Web Development',
        'The Office',
      ],
    }
  },
  computed: {
    organizedPodcasts() {
      const organizedPodcasts = {}
      this.categories.forEach((category) => {
        organizedPodcasts[category] = this.podcasts.filter(
          (podcast) => podcast.category === category
        )
      })
      return organizedPodcasts
    },
  },
  methods: {
    getId(category) {
      return category.toLowerCase().trim().split(/\s+/).join('-')
    },
  },
  head() {
    return {
      title: '🎙️ Podcast List',
      meta: [
        {
          name: 'twitter:title',
          content: '🎙️ Podcast List | Nuxt Experiments',
        },
        {
          name: 'twitter:description ',
          content: 'Favorite podcasts list',
        },
        {
          name: 'twitter:image',
          content:
            'https://nuxt-experiments.herokuapp.com/podcast-group/interesting-facts.png',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
}
</script>
