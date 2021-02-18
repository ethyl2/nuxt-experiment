<template>
  <div class="container flex flex-col">
    <h1 class="text-2xl mb-2">Case Styles</h1>
    <p>Variable names often need to use more than one word.</p>
    <p>
      However, words with spaces in between them are not practical in almost (or
      all) cases.
    </p>
    <p class="mb-2">
      It would be confusing to deter if
      <code class="text-orange-600">my variable</code> is referring to 1 or 2
      variables.
    </p>
    <p class="text-lg italic bold text-yellow-600 mb-2">
      Case styles to the rescue!
    </p>
    <p>They allow you to combine multiple words to create a varible name.</p>
    <p>
      Different programming languages have different conventions for choosing
      which case style to use, but here are the general case styles.
    </p>
    <div class="flex flex-col bg-teal-800 rounded m-4 p-2">
      <label for="variable-words"
        >Type the words you want in your variable name, with a space between
        each:</label
      >
      <input
        v-model="variableWords"
        type="text"
        name="variable-words"
        class="text-black p-1"
        @input="handleInputChange"
      />
    </div>

    <section class="w-full flex flex-col md:flex-row md:justify-between">
      <div>
        <h2 class="text-lg">snake_case</h2>
        <p v-if="snakeCase">{{ snakeCase }}</p>
        <p>Substitutes an underscore for each space.</p>
        <p>One common use is for field names in databases.</p>
      </div>

      <div>
        <h2 class="text-lg">SNAKE_CASE</h2>
        <p v-if="snakeCaseCapitalized">{{ snakeCaseCapitalized }}</p>
        <p>
          Substitutes an underscore for each space and capitalizes each letter.
        </p>
        <p>One common use is for naming constants.</p>
      </div>

      <div>
        <h2 class="text-lg">kebab-case</h2>
        <p v-if="kebabCase">{{ kebabCase }}</p>
        <p>Substitutes a dash for each space.</p>
        <p>One common use is for url slugs.</p>
      </div>

      <div>
        <h2 class="text-lg">PascalCase</h2>
        <p v-if="pascalCase">{{ pascalCase }}</p>
        <p>Capitalizes every word and takes out the spaces.</p>
        <p>One common use is for naming classes.</p>
      </div>

      <div>
        <h2 class="text-lg">camelCase</h2>
        <p v-if="camelCase">{{ camelCase }}</p>
        <p>
          Capitalizes every word except for the first, and takes out the spaces.
        </p>
        <p>It is commonly used to name variables in many languages.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CaseStyles',
  data() {
    return {
      variableWords: '',
      camelCase: '',
      pascalCase: '',
      snakeCase: '',
      kebabCase: '',
      snakeCaseCapitalized: '',
    }
  },
  methods: {
    handleInputChange() {
      this.kebabCase = this.variableWords.replace(/\s/g, '-')
      this.snakeCase = this.variableWords.replace(/\s/g, '_')
      this.snakeCaseCapitalized = this.snakeCase.toUpperCase()
      this.pascalCase = this.variableWords.replace(/(\w+)(?:\s+|$)/g, function (
        _,
        word
      ) {
        // uppercase first letter and add rest unchanged
        return word.charAt(0).toUpperCase() + word.substr(1)
      })
      this.camelCase =
        this.pascalCase.charAt(0).toLowerCase() + this.pascalCase.substr(1)
    },
  },
}
</script>
