<template>
  <div>
    <the-nav-bar />
    <Nuxt />
    <the-footer />
  </div>
</template>

<script>
export default {
  components: {
    TheNavBar: () => import('~/components/TheNavBar'),
    TheFooter: () => import('~/components/TheFooter'),
  },
}
</script>
