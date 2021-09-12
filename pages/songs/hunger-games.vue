<template>
  <div
    class="flex flex-col items-center justify-center pt-6 mx-4 space-y-6 md:mx-24"
  >
    <h1 class="text-xl font-bold text-white md:text-3xl">
      Music for the Hunger Games
    </h1>
    <h2 class="text-lg font-bold md:text-2xl">Where I Love You</h2>
    <p class="text-sm italic md:text-base">
      Lyrics are from
      <a
        href="https://smile.amazon.com/dp/0439023483/ref=cm_sw_r_tw_dp_ARGB637KPXMKY4DCGGGY"
        target="_blank"
        >The Hunger Games</a
      >, pp. 234-235
    </p>
    <img
      src="/song_images/daisy-meadow.jpg"
      alt="daisy meadow"
      class="w-full rounded md:max-w-2xl"
    />
    <iframe
      src="https://flat.io/embed/5a049d6e8993a34a1d102ffc"
      height="450"
      frameBorder="0"
      allowfullscreen
      allow="midi"
      class="w-full md:w-2/3"
    ></iframe>
    <iframe
      type="text/html"
      width="336"
      height="550"
      frameborder="0"
      allowfullscreen
      style="max-width: 100%"
      src="https://read.amazon.com/kp/card?asin=B002MQYOFW&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_ARGB637KPXMKY4DCGGGY"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'HungerGames',
}
</script>
