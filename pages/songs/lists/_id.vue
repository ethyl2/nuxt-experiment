<template>
  <div>
    <h1>Welcome to the List Page</h1>
    <p>{{ listObject['name'] }}</p>
  </div>
</template>

<script>
export default {
  name: 'ListPage',
  data() {
    return {
      id: this.$route.params.id,
      listObject: {},
    }
  },
  mounted() {
    if (process.browser) {
      this.playlists = localStorage.getItem('playlists')
        ? JSON.parse(localStorage.getItem('playlists'))
        : {}
      this.listObject = this.playlists[this.id]
    }
  },
}
</script>
