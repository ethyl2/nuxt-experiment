<template>
  <section class="p-2 md:mx-12 nd:p-4">
    <h1 class="text-3xl text-center p-4">Recent Projects</h1>
    <div class="flex flex-wrap justify-around items-start">
      <div
        v-for="image in images"
        :key="image.title"
        class="w-1/2 flex flex-col p-1 space-y-2 md:w-1/3 md:p-6"
      >
        <img
          :src="`/printing/${image.url}`"
          :alt="image.title"
          class="rounded"
        />
        <p class="text-center">
          {{ image.title }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ImagesSection',
  data() {
    return {
      images: [
        { title: 'Phone Holder', url: '/phone_holder.jpg' },
        { title: 'Oloid', url: '/oloid.jpg' },
        { title: 'Mount Timpanogos Temple', url: '/temple.jpg' },
        { title: 'Grabber', url: '/grabber.jpg' },
        { title: 'Window (not backlit)', url: '/window.jpg' },
        { title: 'Window (backlit)', url: '/window_lit.jpg' },
        { title: 'Hippo Head', url: '/hippo_head.jpg' },
      ],
    }
  },
}
</script>
