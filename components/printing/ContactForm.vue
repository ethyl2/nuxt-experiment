<template>
  <div
    id="order-form"
    class="flex flex-col space-y-4 w-11/12 mx-auto bg-teal-700 p-2 rounded mt-6 md:p-4 md:w-1/2"
  >
    <h2 class="text-white text-xl text-center">Contact Us</h2>
    <form
      class="flex flex-col space-y-4 md:mx-12 md:px-4"
      enctype="multipart/form-data"
      accept-charset="utf-8"
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
      <label for="upload"
        >Please include the link to your image if you are interested in a custom
        window:</label
      >
      <input
        id="imgSrc"
        v-model="submission.imgSrc"
        type="url"
        name="imgSrc"
        class="text-black px-1 rounded leading-loose"
        placeholder="your image's url"
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
</template>

<script>
export default {
  data() {
    return {
      submission: {
        name: '',
        email: '',
        phone: '',
        notes: '',
        location: '',
        imgSrc: '',
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
