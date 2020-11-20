<template>
  <div>
    <the-nav-bar />
    <Nuxt />
  </div>
</template>

<script>
export default {
  components: {
    TheNavBar: () => import('~/components/TheNavBar'),
  },
}
</script>
