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
    <h1 id="top" class="text-2xl font-bold mb-2 text-center">
      Favorite Podcasts
    </h1>
    <div class="flex">
      <nav class="flex flex-wrap mx-auto items-center justify-center">
        <a href="#interesting-facts"
          ><img
            src="/podcast-group/interesting-facts.png"
            class="w-24"
            alt="speech bubble for interesting facts"
        /></a>
        <a href="#comedy"
          ><img
            src="/podcast-group/comedy.png"
            class="w-24"
            alt="speech bubble for comedy"
        /></a>
        <a href="#inspirational"
          ><img
            src="/podcast-group/inspirational.png"
            class="w-24"
            alt="speech bubble for inspirational"
        /></a>
        <a href="#sound"
          ><img
            src="/podcast-group/sound.png"
            class="w-24"
            alt="speech bubble for sound"
        /></a>
        <a href="#literature"
          ><img
            src="/podcast-group/literature.png"
            class="w-24"
            alt="speech bubble for literature"
        /></a>
        <a href="#food"
          ><img
            src="/podcast-group/food.png"
            class="w-24"
            alt="speech bubble for food"
        /></a>
        <a href="#history"
          ><img
            src="/podcast-group/history.png"
            class="w-24"
            alt="speech bubble for history"
        /></a>
        <a href="#science"
          ><img
            src="/podcast-group/science.png"
            class="w-24"
            alt="speech bubble for science"
        /></a>
        <a href="#web-development"
          ><img
            src="/podcast-group/web-development.png"
            class="w-24"
            alt="speech bubble for web-development"
        /></a>
        <a href="#the-office"
          ><img
            src="/podcast-group/the-office.png"
            class="w-24"
            alt="speech bubble for the-office"
        /></a>
      </nav>
    </div>
    <div class="podcast-list container flex flex-col px-4 md:px-12">
      <h2 id="interesting-facts" class="text-lg font-bold mb-1 mt-6">
        Interesting Facts
      </h2>
      <ul
        class="podcast-list flex flex-col items-start w-full space-y-2 md:space-y-4"
      >
        <li class="flex flex-col items-start justify-center md:flex-row">
          <a
            class="text-base font-bold mr-2 flex-shrink-0 md:text-lg"
            href="https://www.goodjobbrain.com/"
            target="_blank"
            nofollow
            >Good Job, Brain!</a
          >
          <p class="text-left text-sm md:text-base">
            "A podcast that’s part quiz show, part offbeat trivia, and all
            awesome."
          </p>
        </li>
        <li class="flex flex-col items-start justify-center md:flex-row">
          <a
            class="text-base font-bold mr-2 flex-shrink-0 md:text-lg"
            href="https://gimletmedia.com/shows/every-little-thing"
            target="_blank"
            nofollow
            >Every Little Thing</a
          >
          <p class="text-left text-sm md:text-base">
            "ELT is here to answer your burning questions."
          </p>
        </li>
        <li class="flex flex-col items-start justify-center md:flex-row">
          <a
            class="text-base font-bold mr-2 flex-shrink-0 md:text-lg"
            href="https://99percentinvisible.org/"
            target="_blank"
            nofollow
            >99% Invisible</a
          >
          <p class="text-left text-sm md:text-base">
            "99% Invisible is a sound rich, narrative podcast hosted by Roman
            Mars about all the thought that goes into the things we don’t think
            about — the unnoticed architecture and design that shape our world."
          </p>
        </li>
      </ul>
      <h2 id="comedy" class="text-lg font-bold mb-1 mt-6">Comedy</h2>
      <ul
        class="podcast-list flex flex-col items-start w-full space-y-2 md:space-y-4"
      >
        <li class="flex flex-col items-start justify-center md:flex-row">
          <a
            class="text-base font-bold mr-2 flex-shrink-0 md:text-lg"
            href="http://www.spitballerspod.com/"
            target="_blank"
            nofollow
            >Spitballers</a
          >
          <p class="text-left text-sm md:text-base">
            "We all need a little nonsense in our everyday lives. Join Jason,
            Andy, and Mike each week for an hour of comedic madness."
          </p>
        </li>
      </ul>
      <h2 id="inspirational" class="text-lg font-bold mb-1 mt-6">
        Inspirational
      </h2>
      <ul
        class="podcast-list flex flex-col items-start w-full space-y-2 md:space-y-4"
      >
        <li class="flex flex-col items-start justify-center md:flex-row">
          <a
            class="text-base font-bold mr-2 flex-shrink-0 md:text-lg"
            href="https://followhim.co/"
            target="_blank"
            nofollow
            >followHim</a
          >
          <p class="text-left text-sm md:text-base">
            "Welcome to followHIM, a weekly podcast dedicated to helping
            individuals and families with their Come Follow Me study. We are
            Hank Smith and John Bytheway. We love to learn. We love to laugh. We
            want to learn and laugh with you as together we followHIM."
          </p>
        </li>
      </ul>
      <h2 id="sound" class="text-lg font-bold mb-1 mt-6">Sound</h2>
      <ul
        class="podcast-list flex flex-col items-start w-full space-y-2 md:space-y-4"
      >
        <li class="flex flex-col items-start justify-center md:flex-row">
          <a
            class="text-base font-bold mr-2 flex-shrink-0 md:text-lg"
            href="https://www.20k.org/"
            target="_blank"
            nofollow
            >Twenty Thousand Hertz</a
          >
          <p class="text-left text-sm md:text-base">
            "The stories behind the world's most recognizable and interesting
            sounds."
          </p>
        </li>
        <li class="flex flex-col items-start justify-center md:flex-row">
          <a
            class="text-base font-bold mr-2 flex-shrink-0 md:text-lg"
            href="https://strongsongspodcast.com/"
            target="_blank"
            nofollow
            >Strong Songs</a
          >
          <p class="text-left text-sm md:text-base">
            "Music: it's good. On each episode of Strong Songs, host Kirk
            Hamilton takes listeners inside a piece of music, breaking it down
            and figuring out what makes it work."
          </p>
        </li>
      </ul>
      <h2 id="literature" class="text-lg font-bold mb-1 mt-6">Literature</h2>
      <ul
        class="podcast-list flex flex-col items-start w-full space-y-2 md:space-y-4"
      >
        <li class="flex flex-col items-start justify-center md:flex-row">
          <a
            class="text-base font-bold mr-2 flex-shrink-0 md:text-lg"
            href="https://www.mythpodcast.com/"
            target="_blank"
            nofollow
            >Myths and Legends</a
          >
          <p class="text-left text-sm md:text-base">
            "This show brings you folklore that has shaped our world. Some are
            incredibly popular stories you think you know, but with surprising
            origins. Others are stories that might be new to you, but are
            definitely worth a listen."
          </p>
        </li>
        <li class="flex flex-col items-start justify-center md:flex-row">
          <a
            class="text-base font-bold mr-2 flex-shrink-0 md:text-lg"
            href="https://www.realweirdsisters.com/"
            target="_blank"
            nofollow
            >The Real Weird Sisters</a
          >
          <p class="text-left text-sm md:text-base">
            "Two real weird sisters break down the Harry Potter series chapter
            by chapter and delve into special topics related to the Harry Potter
            universe."
          </p>
        </li>
      </ul>
      <h2 id="food" class="text-lg font-bold mb-1 mt-6">Food</h2>
      <ul
        class="podcast-list flex flex-col items-start w-full space-y-2 md:space-y-4"
      >
        <li class="flex flex-col items-start justify-center md:flex-row">
          <a
            class="text-base font-bold mr-2 flex-shrink-0 md:text-lg"
            href="https://www.themcelroy.family/2018/11/2/18113030/the-empty-bowl-one"
            target="_blank"
            nofollow
            >The Empty Bowl</a
          >
          <p class="text-left text-sm md:text-base">
            "A meditative podcast about cereal from cereal eater Justin McElroy
            and Cerealously creator Dan Goubert."
          </p>
        </li>
        <li class="flex flex-col items-start justify-center md:flex-row">
          <a
            class="text-base font-bold mr-2 flex-shrink-0 md:text-lg"
            href="https://gastropod.com/"
            target="_blank"
            nofollow
            >Gastropod</a
          >
          <p class="text-left text-sm md:text-base">
            "Gastropod looks at food through the lens of science and history."
          </p>
        </li>
        <li class="flex flex-col items-start justify-center md:flex-row">
          <a
            class="text-base font-bold mr-2 flex-shrink-0 md:text-lg"
            href="https://www.iheart.com/podcast/105-savor-28019899/"
            target="_blank"
            nofollow
            >Savor</a
          >
          <p class="text-left text-sm md:text-base">
            "Savor digs into how people live and how they eat – and why. Hosts
            Anney Reese and Lauren Vogelbaum interview the culinary creators and
            consumers of the world, exploring the science, history, and culture
            of food and drink, all with a key question in mind: Why do we like
            what we like, and how can we find more of those things?"
          </p>
        </li>
      </ul>
      <h2 id="history" class="text-lg font-bold mb-1 mt-6">History</h2>
      <ul
        class="podcast-list flex flex-col items-start w-full space-y-2 md:space-y-4"
      >
        <li class="flex flex-col items-start justify-center md:flex-row">
          <a
            class="text-base font-bold mr-2 flex-shrink-0 md:text-lg"
            href="https://www.futilitycloset.com/podcast/"
            target="_blank"
            nofollow
            >Futility Closet</a
          >
          <p class="text-left text-sm md:text-base">
            "The Futility Closet podcast is a weekly show featuring forgotten
            stories from the pages of history."
          </p>
        </li>
        <li class="flex flex-col items-start justify-center md:flex-row">
          <a
            class="text-base font-bold mr-2 flex-shrink-0 md:text-lg"
            href="https://www.omnibusproject.com/"
            target="_blank"
            nofollow
            >Omnibus</a
          >
          <p class="text-left text-sm md:text-base">
            "An encyclopedic reference of strange-but-true stories compiled as a
            time capsule for future generations."
          </p>
        </li>
        <li class="flex flex-col items-start justify-center md:flex-row">
          <a
            class="text-base font-bold mr-2 flex-shrink-0 md:text-lg"
            href="https://www.iheart.com/podcast/105-ridiculous-history-28588696/"
            target="_blank"
            nofollow
            >Ridiculous History</a
          >
          <p class="text-left text-sm md:text-base">
            "History is beautiful, brutal and, often, ridiculous. Join Ben
            Bowlin and Noel Brown as they dive into some of the weirdest stories
            from across the span of human civilization."
          </p>
        </li>
        <li class="flex flex-col items-start justify-center md:flex-row">
          <a
            class="text-base font-bold mr-2 flex-shrink-0 md:text-lg"
            href="http://aaronmahnke.com/curiosities/"
            target="_blank"
            nofollow
            >Cabinet of Curiosities</a
          >
          <p class="text-left text-sm md:text-base">
            "The show is an audio tour of the unbelievable, the unsettling, and
            the bizarre, introducing listeners to short tales about the most
            amazing things on display in the pages of history."
          </p>
        </li>
      </ul>
      <h2 id="science" class="text-lg font-bold mb-1 mt-6">Science</h2>
      <ul
        class="podcast-list flex flex-col items-start w-full space-y-2 md:space-y-4"
      >
        <li class="flex flex-col items-start justify-center md:flex-row">
          <a
            class="text-base font-bold mr-2 flex-shrink-0 md:text-lg"
            href="https://gimletmedia.com/shows/science-vs"
            target="_blank"
            nofollow
            >Science Vs</a
          >
          <p class="text-left text-sm md:text-base">
            "Science Vs takes on fads, trends, and the opinionated mob to find
            out what’s fact, what’s not, and what’s somewhere in between."
          </p>
        </li>
        <li class="flex flex-col items-start justify-center md:flex-row">
          <a
            class="text-base font-bold mr-2 flex-shrink-0 md:text-lg"
            href="https://www.bbc.co.uk/programmes/p04d42rc/episodes/downloads"
            target="_blank"
            nofollow
            >CrowdScience</a
          >
          <p class="text-left text-sm md:text-base">
            "We take your questions about life, Earth and the universe to
            researchers hunting for answers at the frontiers of knowledge."
          </p>
        </li>
        <li class="flex flex-col items-start justify-center md:flex-row">
          <a
            class="text-base font-bold mr-2 flex-shrink-0 md:text-lg"
            href="https://www.npr.org/podcasts/510351/short-wave"
            target="_blank"
            nofollow
            >Short Wave</a
          >
          <p class="text-left text-sm md:text-base">
            "New discoveries, everyday mysteries, and the science behind the
            headlines — all in about 10 minutes, every weekday. It's science for
            everyone, using a lot of creativity and a little humor."
          </p>
        </li>
      </ul>
      <h2 id="web-development" class="text-lg font-bold mb-1 mt-6">
        Web Development
      </h2>
      <ul
        class="podcast-list flex flex-col items-start w-full space-y-2 md:space-y-4"
      >
        <li class="flex flex-col items-start justify-center md:flex-row">
          <a
            class="text-base font-bold mr-2 flex-shrink-0 md:text-lg"
            href="https://changelog.com/jsparty"
            target="_blank"
            nofollow
            >JS Party</a
          >
          <p class="text-left text-sm md:text-base">
            "Welcome to JS Party, a weekly celebration of JavaScript and the
            web"
          </p>
        </li>
        <li class="flex flex-col items-start justify-center md:flex-row">
          <a
            class="text-base font-bold mr-2 flex-shrink-0 md:text-lg"
            href="https://syntax.fm/"
            target="_blank"
            nofollow
            >Syntax</a
          >
          <p class="text-left text-sm md:text-base">
            "A Tasty Treats Podcast for Web Developers."
          </p>
        </li>
      </ul>
      <h2 id="the-office" class="text-lg font-bold mb-1 mt-6">The Office</h2>
      <ul
        class="podcast-list flex flex-col items-start w-full space-y-2 md:space-y-4"
      >
        <li class="flex flex-col items-start justify-center md:flex-row">
          <a
            class="text-base font-bold mr-2 flex-shrink-0 md:text-lg"
            href="https://officeladies.com/"
            target="_blank"
            nofollow
            >Office Ladies</a
          >
          <p class="text-left text-sm md:text-base">
            "The Office co-stars and best friends, Jenna Fischer and Angela
            Kinsey, are doing the ultimate The Office re-watch podcast for you.
            Each week, Jenna and Angela will break down an episode of The Office
            and give exclusive behind-the-scene stories that only two people who
            were there, can tell you."
          </p>
        </li>
        <li class="flex flex-col items-start justify-center md:flex-row">
          <a
            class="text-base font-bold mr-2 flex-shrink-0 md:text-lg"
            href="https://michaelscottpod.com/"
            target="_blank"
            nofollow
            >The Michael Scott Podcast Company</a
          >
          <p class="text-left text-sm md:text-base">
            "The Michael Scott Podcast Company takes a deep dive into NBC’s ‘The
            Office’. Hosts Sean Roney, Edwin Janes, and Alex Ward look at the
            moments, arcs, and characters that make up the show’s 9-season run,
            and why it remains so popular after all these years."
          </p>
        </li>
      </ul>
    </div>
    <a href="#top" class="flex items-center justify-center">☝️ To Top </a>
  </div>
</template>

<script>
export default {
  name: 'PodcastList',
  head() {
    return {
      title: 'Podcast List',
    }
  },
}
</script>
