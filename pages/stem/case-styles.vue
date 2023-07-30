<template>
  <div class="m-2 flex flex-col text-center min-h-screen md:m-10">
    <h1 class="text-2xl mb-2">Case Styles</h1>
    <p>Variable names often need to use more than one word.</p>
    <p>
      However, words with spaces in between them are not practical in almost (or
      all) cases.
    </p>
    <p class="mb-2">
      It would be confusing to determine if
      <code class="text-green-300">my variable</code> is referring to 1 or 2
      variables.
    </p>
    <p class="text-lg italic bold text-yellow-600 mb-2">
      Case styles to the rescue!
    </p>
    <p>They allow you to combine multiple words to create a varible name.</p>
    <p>
      Different programming languages have different conventions for choosing
      which case style to use, but here are some of more commonly-used case
      styles.
    </p>
    <div
      class="flex flex-col bg-teal-800 rounded w-5/6 my-4 mx-auto p-4 md:w-1/2"
    >
      <label for="variable-words" class="mb-1"
        >Type the words you want in your variable name, with a space between
        each:</label
      >
      <input
        v-model="variableWords"
        type="text"
        name="variable-words"
        class="rounded text-black p-1"
        @input="handleInputChange"
      />
    </div>

    <section class="w-full flex flex-col md:flex-row md:justify-between">
      <div class="flex-1 border border-black rounded pb-2 m-2">
        <h2 class="bg-black text-lg mb-1">snake_case</h2>
        <p v-if="snakeCase" class="text-green-300 text-bold">
          <code>{{ snakeCase }}</code>
        </p>
        <ul class="list-disc list-inside text-left px-2 py-1">
          <li>Substitutes an underscore for each space.</li>
          <li>One common use is for field names in databases.</li>
        </ul>
      </div>

      <div class="flex-1 border border-black rounded pb-2 m-2">
        <h2 class="bg-black text-lg mb-1">SNAKE_CASE</h2>
        <p v-if="snakeCaseCapitalized" class="text-green-300 text-bold">
          <code>{{ snakeCaseCapitalized }}</code>
        </p>
        <ul class="list-disc list-inside text-left px-2 py-1">
          <li>
            Substitutes an underscore for each space and capitalizes each
            letter.
          </li>
          <li>One common use is for naming constants.</li>
        </ul>
      </div>

      <div class="flex-1 border border-black rounded pb-2 m-2">
        <h2 class="bg-black text-lg mb-1">kebab-case</h2>
        <p v-if="kebabCase" class="text-green-300 text-bold">
          <code>{{ kebabCase }}</code>
        </p>
        <ul class="list-disc list-inside text-left px-2 py-1">
          <li>Substitutes a dash for each space.</li>
          <li>One common use is for url slugs.</li>
        </ul>
      </div>

      <div class="flex-1 border border-black rounded pb-2 m-2">
        <h2 class="bg-black text-lg mb-1">PascalCase</h2>
        <p v-if="pascalCase" class="text-green-300 text-bold">
          <code>{{ pascalCase }}</code>
        </p>
        <ul class="list-disc list-inside text-left px-2 py-1">
          <li>Capitalizes every word and takes out the spaces.</li>
          <li>One common use is for naming classes.</li>
        </ul>
      </div>

      <div class="flex-1 border border-black rounded pb-2 m-2">
        <h2 class="bg-black text-lg mb-1">camelCase</h2>
        <p v-if="camelCase" class="text-green-300 text-bold">
          <code>{{ camelCase }}</code>
        </p>
        <ul class="list-disc list-inside text-left px-2 py-1">
          <li>
            Capitalizes every word except for the first, and takes out the
            spaces.
          </li>
        </ul>
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
      this.pascalCase = this.variableWords.replace(
        /(\w+)(?:\s+|$)/g,
        function (_, word) {
          // uppercase first letter and add rest unchanged
          return word.charAt(0).toUpperCase() + word.substr(1)
        }
      )
      this.camelCase =
        this.pascalCase.charAt(0).toLowerCase() + this.pascalCase.substr(1)
    },
  },
  head() {
    return {
      title: 'Variable Case Styles',
    }
  },
}
</script>
