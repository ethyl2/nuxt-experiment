<template>
  <div class="flex flex-col mb-8 pb-8 border-b md:flex-row md:space-x-2">
    <div
      class="w-full h-48 md:h-auto md:w-1/2 bg-cover bg-center"
      :style="{ backgroundImage: `url(${mountain.image}) ` }"
    ></div>
    <div class="w-full md:w-1/2">
      <nuxt-link :to="`/mountains/${mountain.slug}`">
        <h2 class="text-xl font-bold">{{ mountain.title }}</h2>
      </nuxt-link>
      <p class="pb-2">
        {{ mountain.description }}
      </p>
      <div class="border rounded p-2 w-11/12 md:w-1/2 mx-auto bg-blue-900">
        <p class="flex justify-between">
          <span>Height:</span> <span>{{ mountain.height }}</span>
        </p>
        <p class="flex justify-between">
          <span>Continent:</span> <span>{{ mountain.continent }}</span>
        </p>
        <p class="flex justify-between">
          <span>Countries:</span>
          <span>{{ formattedCountries }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MountainCard',
  props: {
    mountain: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedCountries() {
      if (this.mountain) {
        return this.mountain.countries.join(', ')
      }
      return null
    },
  },
}
</script>
