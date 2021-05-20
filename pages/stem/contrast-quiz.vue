<template>
  <div class="container flex flex-col min-h-screen">
    <h1 class="text-xl font-bold md:text-3xl">
      Test Your Contrast Analysis Skills
    </h1>
    <div class="flex items-center justify-center flex-wrap">
      <color-box
        v-for="(colorPair, index) in colorPairs"
        :key="index"
        :color-pair="colorPair"
      />
    </div>
    <p class="mt-6">
      Try out more color combinations here:
      <a
        href="https://coolors.co/contrast-checker/112a46-acc8e5"
        target="_blank"
        >coolors.co/contrast-checker</a
      >
    </p>
  </div>
</template>

<script>
export default {
  name: 'ContrastQuiz',
  data() {
    return {
      colorPairs: [
        {
          textColor: 'white',
          backgroundColor: 'black',
          analysis: 'Great contrast for all text sizes.',
        },
        {
          textColor: '#F2B13A',
          backgroundColor: '#112F41',
          analysis:
            'Good contrast for small text (below 18pt) and great contrast for large text (above 18pt or bold above 14pt).',
        },
        {
          textColor: 'white',
          backgroundColor: '#7BBAE6',
          analysis: 'Poor contrast for all text sizes.',
        },
        {
          textColor: '#FFC502',
          backgroundColor: '#375273',
          analysis: 'Good contrast for all text sizes.',
        },
        {
          textColor: '#97CCEC',
          backgroundColor: '#FAFAFA',
          analysis: 'Poor contrast for all text sizes.',
        },
        {
          textColor: '#FFC502',
          backgroundColor: 'white',
          analysis: 'Poor contrast for all text sizes.',
        },
        {
          textColor: '#FFFFFF',
          backgroundColor: '#00CE93',
          analysis: 'Poor contrast for all text sizes.',
        },
        {
          textColor: 'white',
          backgroundColor: '#054C38',
          analysis:
            'Good contrast for small text (below 18pt) and great contrast for large text (above 18pt or bold above 14pt).',
        },
        {
          textColor: '#4FB99F',
          backgroundColor: '#112F41',
          analysis: 'Good contrast for all text sizes.',
        },
        {
          textColor: 'white',
          backgroundColor: '#144467',
          analysis:
            'Good contrast for small text (below 18pt) and great contrast for large text (above 18pt or bold above 14pt).',
        },
        {
          textColor: 'white',
          backgroundColor: '#F09C19',
          analysis: 'Poor contrast for all text sizes.',
        },
        {
          textColor: 'black',
          backgroundColor: '#F09C19',
          analysis:
            'Good contrast for small text (below 18pt) and great contrast for large text (above 18pt or bold above 14pt).',
        },
        {
          textColor: '#9B9B9B',
          backgroundColor: '#F4F4F4',
          analysis: 'Poor contrast for all text sizes.',
        },
        {
          textColor: '#3B3B3B',
          backgroundColor: '#F4F4F4',
          analysis:
            'Good contrast for small text (below 18pt) and great contrast for large text (above 18pt or bold above 14pt).',
        },
        {
          textColor: '#4FB99F',
          backgroundColor: '#000000',
          analysis:
            'Good contrast for small text (below 18pt) and great contrast for large text (above 18pt or bold above 14pt).',
        },
      ],
    }
  },
}
</script>
