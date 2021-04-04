<style scoped>
ul.podcast-list li::before {
  content: var(--bullet);
  padding-right: 0.5em;
}
</style>
<template>
  <div class="podcast-list container flex flex-col">
    <h1>Favorite Podcasts</h1>
    <ul class="podcast-list">
      <li>
        <a href="https://www.goodjobbrain.com/" target="_blank" nofollow
          >Good Job, Brain!</a
        >
      </li>
      <li>
        <a
          href="https://www.themcelroy.family/2018/11/2/18113030/the-empty-bowl-one"
          target="_blank"
          nofollow
          >The Empty Bowl</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PodcastList',
}
</script>
