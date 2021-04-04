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
      <li>
        <a
          href="https://gimletmedia.com/shows/science-vs"
          target="_blank"
          nofollow
          >Science Vs</a
        >
      </li>
      <li>
        <a
          href="https://gimletmedia.com/shows/every-little-thing"
          target="_blank"
          nofollow
          >Every Little Thing</a
        >
      </li>
      <li>
        <a href="https://99percentinvisible.org/" target="_blank" nofollow
          >99% Invisible</a
        >
      </li>
      <li>
        <a href="https://followhim.co/" target="_blank" nofollow>followHim</a>
      </li>
      <li>
        <a href="https://gastropod.com/" target="_blank" nofollow>Gastropod</a>
      </li>
      <li>
        <a href="https://www.omnibusproject.com/" target="_blank" nofollow
          >Omnibus</a
        >
      </li>
      <li>
        <a href="https://officeladies.com/" target="_blank" nofollow
          >Office Ladies</a
        >
      </li>
      <li>
        <a href="http://www.spitballerspod.com/" target="_blank" nofollow
          >Spitballers</a
        >
      </li>
      <li>
        <a href="https://strongsongspodcast.com/" target="_blank" nofollow
          >Strong Songs</a
        >
      </li>
      <li>
        <a href="https://www.realweirdsisters.com/" target="_blank" nofollow
          >The Real Weird Sisters</a
        >
      </li>
      <li>
        <a href="https://www.20k.org/" target="_blank" nofollow
          >Twenty Thousand Hertz</a
        >
      </li>
      <li>
        <a href="https://michaelscottpod.com/" target="_blank" nofollow
          >The Michael Scott Podcast Company</a
        >
      </li>
      <li>
        <a
          href="https://maximumfun.org/podcasts/sawbones/"
          target="_blank"
          nofollow
          >Sawbones: A Marital Tour of Misguided Medicine</a
        >
      </li>
      <li>
        <a
          href="https://www.iheart.com/podcast/105-savor-28019899/"
          target="_blank"
          nofollow
          >Savor</a
        >
      </li>
      <li>
        <a
          href="https://www.iheart.com/podcast/105-ridiculous-history-28588696/"
          target="_blank"
          nofollow
          >Ridiculous History</a
        >
      </li>
      <li>
        <a href="https://www.mythpodcast.com/" target="_blank" nofollow
          >Myths and Legends</a
        >
      </li>
      <li>
        <a href="https://changelog.com/jsparty" target="_blank" nofollow
          >JS Party</a
        >
      </li>
      <li>
        <a
          href="https://www.futilitycloset.com/podcast/"
          target="_blank"
          nofollow
          >Futility Closet</a
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
