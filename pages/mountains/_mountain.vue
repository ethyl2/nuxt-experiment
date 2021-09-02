<template>
  <div class="container">
    <p v-if="$fetchState.pending">Fetching mountain...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <div v-if="mountainData" class="flex flex-col space-y-6">
        <h2 v-if="mountainData.title" class="text-2xl font-bold">
          {{ mountainData.title }}
        </h2>
        <div>
          <img
            v-if="mountainData"
            :src="mountainData.image"
            :alt="mountainData.title"
            class="mx-auto"
          />
        </div>
        <div class="w-full">
          <p class="pb-6">{{ mountainData.description }}</p>
          <div class="border rounded p-2 w-11/12 md:w-1/3 mx-auto bg-blue-900">
            <p class="flex justify-between">
              <span>Height:</span>
              <span>{{ mountainData.height }}</span>
            </p>
            <p class="flex justify-between">
              <span>Continent:</span>
              <span>{{ mountainData.continent }}</span>
            </p>
            <p v-if="mountainData" class="flex justify-between">
              <span>Countries:</span>
              <span>{{ formattedCountries }}</span>
            </p>
          </div>
        </div>
        <nuxt-link to="/mountains">⬅️ Back</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.mountainData = await fetch(
      `https://api.nuxtjs.dev/mountains/${this.$route.params.mountain}`
    ).then((res) => {
      return res.json()
    })
  },
  data() {
    return {
      mountainData: [],
    }
  },
  computed: {
    formattedCountries() {
      if (this.mountainData?.countries) {
        return this.mountainData.countries.join(', ')
      }
      return null
    },
  },
  head() {
    return {
      title: `${this.mountain.title} ⛰️`,
    }
  },
}
</script>
