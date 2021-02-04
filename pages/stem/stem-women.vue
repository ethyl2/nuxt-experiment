<style scoped>
nav {
  width: 200px;
}
.scroll-container {
  scroll-behavior: smooth;
}
.scroll-item {
  height: 800px;
}
@media (min-width: 768px) {
  nav {
    width: 380px;
  }
}
</style>

<template>
  <div>
    <header class="mx-4">
      <h1 class="text-center text-lg my-2 md:text-2xl">STEM Women</h1>
      <p class="text-center text-base md:text-lg">
        “All sorts of things can happen when you’re open to new ideas and
        playing around with things.”
      </p>
      <p class="text-center italic text-sm md:text-base">
        — Stephanie Kwolek, chemist who invented Kevlar and winner of the
        Lavoisier Medal for technical achievements
      </p>
    </header>
    <nav
      class="sticky block text-center top-0 bg-black z-50 my-8 mx-auto p-1 rounded"
    >
      <a
        v-for="(woman, index) in stemWomen"
        :key="`link-${index + 1}`"
        :href="`#page-${index + 1}`"
        class="inline-block w-6 no-underline md:w-12"
        >{{ index + 1 }}</a
      >
    </nav>
    <div
      class="scroll-container block text-center w-full h-full overflow-y-auto mx-auto"
    >
      <div
        v-for="(woman, index) in stemWomen"
        :id="`page-${index + 1}`"
        :key="`stem-woman-${index}`"
      >
        <img :src="woman.imgSrc" :alt="woman.imgAlt" />
        <p class="p-2 mb-6">{{ woman.imgCaption }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StemWomen',
  data() {
    return {
      stemWomen: [
        {
          imgSrc: '/stem/space-engineer.jpg',
          imgAlt: 'space operations engineer in space tunnel',
          imgCaption: 'Space Operations Engineer in Space Tunnel',
        },
        {
          imgSrc: '/stem/noise-engineer.jpg',
          imgAlt: 'noise and vibration engineer in workshop',
          imgCaption: 'Noise & Vibration Engineer in Workshop',
        },
        {
          imgSrc: '/stem/analytical-chemists.jpg',
          imgAlt:
            'analytical chemists at Lawrence Livermore National Laboratory work in an environmental reference laboratory',
          imgCaption:
            'Analytical Chemists in Environmental Reference Laboratory',
        },
        {
          imgSrc: '/stem/software-engineer.jpg',
          imgAlt: 'software engineer codes at computer',
          imgCaption: 'Software Engineer in Office',
        },
        {
          imgSrc: '/stem/electronics-engineer.jpg',
          imgAlt: 'electronics engineer runs vehicle tests',
          imgCaption: 'Electronics Engineer in Vehicle Testing Laboratory',
        },
        {
          imgSrc: '/stem/civil-engineer.jpg',
          imgAlt: 'civil engineer works on CAD theme park attraction',
          imgCaption:
            'Civil Engineer Works on CAD Theme Park Attraction in Office',
        },
        {
          imgSrc: '/stem/laboratory-technician.jpg',
          imgAlt: 'technician takes algae sample in greehouse laboratory',
          imgCaption:
            'NREL (National Renewable Energy Laboratory) Technician Takes Algae Sample in Greenhouse',
        },
      ],
    }
  },
}
</script>
