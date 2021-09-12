<template>
  <div class="flex flex-col">
    <header
      class="flex flex-col items-center justify-center py-10 mb-4 bg-gray-900"
    >
      <h1 class="text-xl font-bold text-center md:text-3xl">
        Songs of Delight
      </h1>
      <p class="mx-4 mb-2 text-center">
        Here are some lyrics and activities for some of my favorite songs.
      </p>
    </header>

    <main class="container flex flex-col px-2">
      <div class="grid w-full grid-cols-2 gap-4 md:gap-10 md:grid-cols-3">
        <div class="flex flex-col space-y-4">
          <nuxt-link to="/songs/campfire">
            <img src="/campfire.png" alt="campfire" class="rounded" />
          </nuxt-link>
          <nuxt-link to="/songs/campfire" class="text-sm md:text-xl"
            >Campfire Songs</nuxt-link
          >
        </div>
        <div class="flex flex-col space-y-4">
          <nuxt-link to="/songs/hogwarts-song"
            ><img
              src="/song_images/harry-potter/potter-glasses.jpg"
              class="rounded"
          /></nuxt-link>
          <nuxt-link to="/songs/hogwarts-song" class="text-sm md:text-xl"
            >Harry Potter Parody Song</nuxt-link
          >
        </div>

        <div class="flex flex-col space-y-4">
          <nuxt-link to="/songs/christmas" class="rounded"
            ><img
              src="/song_images/elves.png"
              alt="elves"
              class="w-full mx-auto rounded"
          /></nuxt-link>
          <nuxt-link to="/songs/christmas" class="text-sm md:text-xl"
            >Christmas Parody Songs</nuxt-link
          >
        </div>

        <div class="flex flex-col space-y-4">
          <nuxt-link to="/arts/twelve-days" class="rounded"
            ><img src="/song_images/potion.png" class="w-full mx-auto rounded"
          /></nuxt-link>
          <nuxt-link to="/arts/twelve-days" class="text-sm md:text-xl"
            >Make a Custom Harry Potter Christmas Song</nuxt-link
          >
        </div>

        <div class="flex flex-col space-y-4">
          <nuxt-link to="/songs/ai-songs" class="rounded"
            ><img
              src="/song_images/taco.png"
              class="w-full mx-auto bg-green-200 rounded"
          /></nuxt-link>
          <nuxt-link to="/songs/ai-songs" class="text-sm md:text-xl"
            >Have an AI Model Make Song Lyrics</nuxt-link
          >
        </div>

        <div class="flex flex-col space-y-4">
          <nuxt-link to="/songSearch" class="rounded"
            ><img src="song.png" class="w-full mx-auto rounded"
          /></nuxt-link>
          <nuxt-link to="/songSearch" class="text-sm md:text-xl"
            >Search with iTunes API</nuxt-link
          >
        </div>
      </div>

      <h3 class="my-4 text-lg md:mt-12">
        More songs that make me chuckle from Spotify
      </h3>
      <iframe
        src="https://open.spotify.com/embed/playlist/0YCESpzXAbPcrTLZAFC9AE"
        width="300"
        height="380"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
      <div class="flex flex-col my-4 md:flex-row">
        <nuxt-link to="/songs/playlist" class="md:pr-4 md:border-r md:mr-4"
          >Make a Playlist or Request List</nuxt-link
        >
        <nuxt-link to="/songs/lists">See Your Request Lists</nuxt-link>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Songs 🎼 | Nuxt Experiments',
      meta: [
        {
          name: 'twitter:title',
          content: 'Songs 🎼 | Nuxt Experiments',
        },
        {
          name: 'twitter:description ',
          content: "Selection of Heather Nuffer's favorite songs",
        },
        {
          name: 'twitter:image',
          content: 'https://nuxt-experiments.herokuapp.com/campfire.png',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
}
</script>
