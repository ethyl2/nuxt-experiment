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
    <div
      id="order-form"
      class="flex flex-col space-y-4 w-11/12 mx-auto bg-teal-700 p-2 rounded mt-6 md:p-4 md:w-1/2"
    >
      <h2 class="text-white text-xl text-center">Contact Us</h2>
      <form
        class="flex flex-col space-y-4 md:mx-12 md:px-4"
        @submit.prevent="submitForm"
      >
        <input
          v-model="submission.name"
          type="text"
          class="text-black px-1 rounded leading-loose"
          placeholder="your name"
          required
          max="100"
          min="5"
        />
        <input
          v-model="submission.email"
          type="email"
          class="text-black px-1 rounded leading-loose"
          placeholder="your email"
          required
        />
        <input
          v-model="submission.phone"
          type="tel"
          class="text-black px-1 rounded leading-loose"
          placeholder="your phone"
          required
        />
        <button
          type="button"
          class="w-full mx-auto rounded p-1 bg-black text-sm text-white text-center hover:bg-gray-700 md:text-base"
          style="max-width: 160px"
          @click.prevent="geolocate"
        >
          Get My Location
        </button>
        <p v-if="locationMessage" class="text-center text-sm text-white pt-1">
          {{ locationMessage }}
        </p>
        <input
          v-model="submission.location"
          type="tel"
          class="text-black px-1 rounded leading-loose"
          placeholder="your city and state"
          required
        />
        <textarea
          v-model="submission.notes"
          type="tel"
          class="text-black px-1 rounded leading-loose"
          placeholder="your message - what object are you interested in, etc."
          required
        />
        <button
          type="submit"
          class="w-full mx-auto rounded p-1 bg-black text-sm text-white text-center hover:bg-gray-700 md:text-base"
          style="max-width: 160px"
        >
          Send
        </button>
        <p v-if="message" class="text-center text-sm text-white pt-1">
          {{ message }}
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'printing',
  data() {
    return {
      submission: {
        name: '',
        email: '',
        phone: '',
        notes: '',
        location: '',
      },
      userLocation: {
        lat: null,
        long: null,
      },
      endpoint: process.env.mailUrl,
      message: '',
      location_search_endpoint: `https://places.cit.api.here.com/places/v1/discover/around?at=`,
      location_search_results: [],
      locationMessage: '',
    }
  },
  methods: {
    async submitForm() {
      try {
        const response = await this.$axios.post(this.endpoint, this.submission)
        this.message = response.data.ok
          ? 'Message sent successfully. Thomas will get back to you soon!'
          : 'There was a problem sending your submission. Please try again later.'
      } catch {
        this.message =
          'There was a problem sending your submission. Please try again later.'
      }
    },
    geolocate() {
      if (window.navigator && window.navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          this.onGeolocateSuccess,
          this.onGeolocateError
        )
      }
    },
    onGeolocateSuccess(coordinates) {
      const { latitude, longitude } = coordinates.coords
      this.userLocation.lat = latitude
      this.userLocation.long = longitude
      this.getUserLocation()
    },
    // eslint-disable-next-line handle-callback-err
    onGeolocateError(error) {
      this.locationMessage =
        'Sorry, there was an error getting your location. Please type your location in the box.'
    },
    async getUserLocation() {
      try {
        const completeLocationSearchEndpoint = `${this.location_search_endpoint}${this.userLocation.lat},${this.userLocation.long}&app_id=${process.env.locationAppId}&app_code=${process.env.locationAppCode}`
        const response = await this.$axios.get(completeLocationSearchEndpoint)
        this.location_search_results = response.data.results.items.map(
          (result) => result.vicinity
        )
        if (this.location_search_results.length > 0) {
          const separatedVicinity = this.location_search_results[0].split(
            '<br/>'
          )
          this.submission.location =
            separatedVicinity[separatedVicinity.length - 1]
        }
      } catch {
        this.locationMessage =
          'Sorry, there was an error getting your location. Please type your location in the box.'
      }
    },
  },
}
</script>
