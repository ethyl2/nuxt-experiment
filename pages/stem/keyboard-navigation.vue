<template>
  <div class="min-h-screen mx-4 flex flex-col space-y-6 md:mx-24">
    <h1 class="text-lg text-center py-6 md:text-3xl">Keyboard Navigation</h1>
    <p>
      I've been learning lately about the importance of ensuring that a site can
      be navigated by purely using a keyboard, no mouse.
    </p>
    <p>
      Some html elements naturally are focusable. They are interactive elements
      such as <code>&lt;a&gt;</code> tags with a <code>href</code> property,
      <code>&lt;input&gt;</code>, and <code>&lt;select&gt;</code>. Others can be
      made focusable by adding <code>tabindex="0"</code>.
    </p>
    <p>
      Examples of elements that aren't natively focusable are
      <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code>.
    </p>
    <p>
      Using a number other than <code>0</code> is possible, but highly
      discouraged. The elements with a positive <code>tabindex</code> are put
      before the ones with <code>tabindex="0"</code>, which makes things hairier
      to maintain.
    </p>
    <p>
      Using <code>0</code> puts the element in tab order relative to the
      element's position in the document.
    </p>
    <p>
      Here are some <code>&lt;div&gt;</code>s. See if you can guess which have
      <code>tabindex="0"</code> and which ones don't have a tabindex at all!
      (Hint: Use your tab key, and then your enter <key class=""></key>)
    </p>
    <div class="flex flex-wrap items-center justify-center">
      <div
        class="w-20 h-20 bg-red-500 m-4 flex items-center justify-center text-3xl font-bold cursor-pointer hover:bg-red-300 rounded focus:bg-red-700"
        @click="showAnswer(false, '🎈')"
        @keydown.enter="showAnswer(false, '🎈')"
        @keydown.space="showAnswer(false, '🎈')"
      >
        🎈
      </div>
      <div
        class="w-20 h-20 bg-green-500 m-4 flex items-center justify-center text-3xl font-bold cursor-pointer hover:bg-green-300 rounded focus:bg-green-700"
        tabindex="0"
        @click="showAnswer(true, '🧸')"
        @keydown.enter="showAnswer(true, '🧸')"
        @keydown.space="showAnswer(true, '🧸')"
      >
        🧸
      </div>
      <div
        class="w-20 h-20 bg-yellow-500 m-4 flex items-center justify-center text-3xl font-bold cursor-pointer hover:bg-yellow-300 rounded focus:bg-yellow-700"
        @click="showAnswer(false, '🩸')"
        @keydown.enter="showAnswer(false, '🩸')"
        @keydown.space="showAnswer(false, '🩸')"
      >
        🩸
      </div>
      <div
        class="w-20 h-20 bg-purple-500 m-4 flex items-center justify-center text-3xl font-bold cursor-pointer hover:bg-purple-300 rounded focus:bg-purple-700"
        tabindex="0"
        @click="showAnswer(true, '🪕')"
        @keydown.enter="showAnswer(true, '🪕')"
        @keydown.space="showAnswer(true, '🪕')"
      >
        🪕
      </div>
      <div
        class="w-20 h-20 bg-teal-500 m-4 flex items-center justify-center text-3xl font-bold cursor-pointer hover:bg-teal-300 rounded focus:bg-teal-700"
        @click="showAnswer(false, '🧪')"
        @keydown.enter="showAnswer(false, '🧪')"
        @keydown.space="showAnswer(false, '🧪')"
      >
        🧪
      </div>
      <div
        class="w-20 h-20 bg-blue-500 m-4 flex items-center justify-center text-3xl font-bold cursor-pointer hover:bg-blue-300 rounded focus:bg-blue-700"
        tabindex="0"
        @click="showAnswer(true, '🧻')"
        @keydown.enter="showAnswer(true, '🧻')"
        @keydown.space="showAnswer(true, '🧻')"
      >
        🧻
      </div>
      <div
        class="w-20 h-20 bg-indigo-500 m-4 flex items-center justify-center text-3xl font-bold cursor-pointer hover:bg-indigo-300 rounded focus:bg-indigo-700"
        @click="showAnswer(false, '📀')"
        @keydown.enter="showAnswer(false, '📀')"
        @keydown.space="showAnswer(false, '📀')"
      >
        📀
      </div>
      <div
        class="w-20 h-20 bg-orange-500 m-4 flex items-center justify-center text-3xl font-bold cursor-pointer hover:bg-orange-300 rounded focus:bg-orange-700"
        tabindex="0"
        @click="showAnswer(true, '🔮')"
        @keydown.enter="showAnswer(true, '🔮')"
        @keydown.space="showAnswer(true, '🔮')"
      >
        🔮
      </div>
      <div
        class="w-20 h-20 bg-pink-500 m-4 flex items-center justify-center text-3xl font-bold cursor-pointer hover:bg-pink-300 rounded focus:bg-pink-700"
        @click="showAnswer(false, '🪁')"
        @keydown.enter="showAnswer(false, '🪁')"
        @keydown.space="showAnswer(false, '🪁')"
      >
        🪁
      </div>
    </div>
    <div v-if="answer" v-html="answer"></div>
  </div>
</template>

<script>
export default {
  name: 'KeyboardNavigation',
  data() {
    return {
      answer: null,
    }
  },
  methods: {
    showAnswer(hasTabIndex, emoji) {
      if (hasTabIndex) {
        this.answer =
          '<p>Yes, this ' +
          emoji +
          ' <code>&lt;div&gt;</code> has <code>tabindex=0</code>.<p>'
      } else {
        this.answer =
          '<p>No, the developer forgot to add the <code>tabindex</code> attribute to this ' +
          emoji +
          ' <code>&lt;div&gt;</code>.</p>'
      }
    },
  },
}
</script>
