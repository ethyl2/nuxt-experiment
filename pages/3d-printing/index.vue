<template>
  <div class="flex flex-col space-y-8">
    <img
      src="/printing/abstract.jpg"
      alt="abstract art"
      class="m-0 p-0 w-full"
    />
    <h1 class="text-xl md:text-5xl text-center p-4">
      Order Your Custom 3D Prints
    </h1>
    <div
      class="w-full flex flex-col space-y-4 justify-center items-center mx-auto md:flex-row md:space-x-6 md:space-y-0"
    >
      <img
        src="/printing/tom.jpg"
        alt="Thomas Nuffer"
        class="w-1/2 rounded border-4 border-white md:w-1/3"
      />
      <div
        class="w-5/6 flex flex-col justify-center items-center space-y-6 md:w-1/3"
      >
        <p class="text-sm text-white md:text-xl">
          Thomas is eager to put our new 3D printer to work for you! Printing
          all kinds of interesting objects has been a fun adventure for him.
          Fill out the form to contact him about available designs, colors,
          cost, and pickup/delivery/shipping options.
        </p>
        <button
          class="bg-black px-3 py-2 my-2 rounded border-2 border-teal-700"
        >
          <a href="#order-form" class="text-white font-bold text-xl md:text-2xl"
            >Let's Print!</a
          >
        </button>
      </div>
    </div>
    <div
      class="w-full flex flex-col justify-center items-center mx-auto pb-6 space-y-4 md:flex-row md:space-x-6 md:space-y-0"
    >
      <div class="w-5/6 md:w-1/3">
        <p class="font-bold text-base mb-2 md:text-2xl">
          A Few of the Infinite Possibilities:
        </p>
        <ul class="flex flex-col space-y-2 text-sm md:text-xl">
          <li>
            🟠 Become mesmerized by the motion of an
            <a href="https://en.wikipedia.org/wiki/Oloid" target="_blank"
              >oloid</a
            >
          </li>
          <li>🟠 Decorate with the cutest miniature vase</li>
          <li>
            🟠 You, too, can get a hippopotamus for Christmas, or whatever
            holiday is next
          </li>
          <li>🟠 Top a wedding cake with a miniature model of a temple</li>
          <li>
            🟠 Prop up your phone with a nifty holder to free it from the morass
            of chaos at your desk
          </li>
        </ul>
      </div>
      <img
        src="/printing/3d_printer.jpg"
        alt="3D Printer"
        class="w-5/6 rounded border border-black md:w-1/4"
      />
    </div>
    <images-section />
    <contact-form-with-form-submit />
  </div>
</template>

<script>
export default {
  layout: 'printing',
  components: {
    ImagesSection: () => import('~/components/printing/ImagesSection'),
    ContactFormWithFormSubmit: () =>
      import('~/components/printing/ContactFormWithFormSubmit'),
  },
  head() {
    return {
      title: '🖼️ 3D Printing Shop',
      meta: [
        {
          name: 'description',
          content:
            "Thomas Nuffer's 3D Printing Shop will custom print 3D items for you. See examples and contact form.",
        },
        {
          name: 'twitter:title',
          content: "Thomas Nuffer's 3D Printing Shop",
        },
        {
          name: 'twitter:description ',
          content:
            "Thomas Nuffer's 3D Printing Shop will custom print 3D items for you. See examples and contact form.",
        },
        { name: 'twitter:image', content: '/printing/tom.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
}
</script>
