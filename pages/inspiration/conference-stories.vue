<template>
  <div class="flex flex-col mx-4 min-h-screen sm:mx-10 md:mx-20 lg:mx-32">
    <h1 class="text-2xl text-center">
      Favorite Stories from General Conference
    </h1>
    <h2 class="text-xl pb-5 text-center">
      A collection of stories told during
      <a
        href="https://www.churchofjesuschrist.org/study/general-conference?lang=eng"
        target="_blank"
        >general conference</a
      >
      sessions of
      <a href="https://www.churchofjesuschrist.org" target="_blank"
        >The Church of Jesus Christ of Latter-day Saints</a
      >
    </h2>
    <div class="flex flex-wrap justify-around items-stretch">
      <a
        v-for="story in stories"
        :key="story.title"
        :href="story.url"
        target="_blank"
        class="w-full bg-black shadow-lg transform m-2 rounded hover:scale-105 duration-700 overflow-hidden sm:w-1/3 md:w-1/4"
      >
        <div class="w-full h-full">
          <img :src="story.imageSrc" :alt="story.title" />
          <div class="py-2 px-3">
            <h3 class="text-lg font-bold">{{ story.title }}</h3>
            <p>by {{ story.author }}</p>
            <p class="text-sm pt-2">
              {{ story.summary }}
            </p>
          </div>
        </div></a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConferenceStories',
  data() {
    return {
      stories: [
        {
          title: 'The Current Bush',
          author: 'Elder Hugh B. Brown',
          url: 'https://www.churchofjesuschrist.org/study/new-era/1973/01/the-currant-bush?lang=eng',
          summary:
            '"It is a story that...has to do with an incident in my life when God showed me that he knew best."',
          imageSrc: '/story-images/current-bush.jpg',
        },
        {
          title: 'Herman the Water Snake',
          author: 'President Thomas S. Monson',
          url: 'https://www.churchofjesuschrist.org/study/general-conference/2002/10/peace-be-still?lang=eng',
          summary: '"I learned a lesson in patience and calmness."',
          imageSrc: '/story-images/snake.jpg',
        },
        {
          title: 'Blind Date',
          author: 'Elder Joseph B. Wirthlin',
          url: 'https://www.churchofjesuschrist.org/study/general-conference/2008/10/come-what-may-and-love-it?lang=eng',
          summary:
            '"The next time you’re tempted to groan, you might try to laugh instead. Come what may, and love it."',
          imageSrc: '/story-images/embarrassed.jpg',
        },
        {
          title: 'Ear Wiggle',
          author: 'President Thomas S. Monson',
          url: 'https://www.churchofjesuschrist.org/study/general-conference/2008/04/examples-of-righteousness?lang=eng',
          summary:
            '"We should never permit ourselves to do anything that we are not willing to see our children do."',
          imageSrc: '/story-images/ear.jpg',
        },
        {
          title: 'One Little Match',
          author: 'President Thomas S. Monson',
          url: 'https://www.churchofjesuschrist.org/study/general-conference/2013/04/obedience-brings-blessings?lang=eng',
          summary:
            '"Many of us...learn through experience the wisdom of being obedient."',
          imageSrc: '/story-images/match.jpg',
        },
        {
          title: 'Windows of Stone',
          author: 'Sharon Eubank',
          url: 'https://www.churchofjesuschrist.org/study/general-conference/2019/04/42eubank?lang=eng',
          summary:
            '"With patience and faithful questions, Jesus can transform our windows of stone to glass and light.',
          imageSrc: '/story-images/gazebo.jpg',
        },
        {
          title: 'Rattlesnake Rock',
          author: 'Elder Gary E. Stevenson',
          url: 'https://www.churchofjesuschrist.org/study/general-conference/2017/04/how-does-the-holy-ghost-help-you?lang=eng',
          summary:
            '"I am forever grateful that my father listened to the still, small voice of the Holy Ghost, as it may have saved my life.',
          imageSrc: '/story-images/rattlesnake.jpg',
        },
        {
          title: 'I Can Do the Rest',
          author: 'Bishop W. Christopher Waddell',
          url: 'https://www.churchofjesuschrist.org/study/general-conference/2017/10/turn-to-the-lord?lang=eng',
          summary:
            '"Hyrum Shumway’s life may have been changed by war, but he never doubted his divine nature and eternal potential.',
          imageSrc: '/story-images/socks.jpg',
        },
      ],
    }
  },
}
</script>
