<template>
  <div class="min-h-screen mx-4 md:mx-24">
    <h1 class="text-3xl text-center font-bold pb-2">HTML Attributes</h1>
    <p class="pb-2 text-sm md:text-base">
      HTML attributes are used to provide additional information about an HTML
      element. You've probably used attributes like
      <code>href="www.mywebsite.com"</code> to make a link, and
      <code>alt="my alt text"</code> in an image tag.
    </p>
    <p class="pb-2 text-sm md:text-base">
      You can learn more basics about attributes
      <a
        href="https://html5-tutorial.net/html-basics/attributes/"
        target="_blank"
        >here.</a
      >
    </p>
    <p class="border-b pb-2 text-sm md:text-base">
      <a
        href="https://dev.to/simonpaix/7-useful-html-attributes-you-may-not-know-7mn"
        target="_blank"
        >This post</a
      >
      talks about some html attributes that aren't as commonly known. They are
      kind of neat. Here are some of them:
    </p>
    <h2 class="text-2xl font-bold mt-6">Content Editable</h2>
    <p class="pb-2 text-sm md:text-base">
      The first <code>div</code> below has <code>contenteditable="true"</code>.
      So users can edit the text. However, if the user refreshes the page, the
      text is back to what it was originally.
    </p>
    <p class="text-sm md:text-base">
      Try it out! Click on the first <code>div</code> and change the text. Then
      try doing the same with the second div.
    </p>
    <section class="my-4 p-4 bg-black rounded">
      <div contenteditable="true" class="mb-2 border p-2">
        I'm a cool editable div 😊.
      </div>
      <div class="border p-2">I'm an uncool non-editable div 😞.</div>
    </section>
    <p class="text-sm md:text-base">
      Now customize this t-shirt. Click on the text to change it. And change the
      tshirt color and emoji with the <code>select</code>s below:
    </p>
    <div class="flex flex-col items-center justify-center">
      <div
        :style="{
          backgroundImage: `url('/stem/tshirts/${tshirtColor}-tshirt.png')`,
        }"
        class="w-64 h-64 bg-cover bg-center bg-norepeat pb-6 pt-16 px-16 flex flex-col items-center justify-start my-6"
      >
        <span class="text-xl">{{ emoji }}</span>
        <p
          contenteditable="true"
          class="text-center font-bold break-words overflow-hidden"
          :class="
            tshirtColor === 'white' || tshirtColor === 'yellow'
              ? 'text-black'
              : 'text-white'
          "
          style="word-break: break-word"
        >
          Change me!
        </p>
      </div>
      <div>
        <select v-model="tshirtColor" class="bg-black">
          <option
            disabled
            default
            value=""
            class="text-white bg-black font-bold"
          >
            Pick a t-shirt color:
          </option>
          <option v-for="color in tshirtColors" :key="color" :value="color">
            {{ color }}
          </option>
        </select>
        <select v-model="emoji" class="bg-black">
          <option
            disabled
            default
            value=""
            class="text-white bg-black font-bold"
          >
            Pick an emoji:
          </option>
          <option
            v-for="emojiOption in emojis"
            :key="emojiOption"
            :value="emojiOption"
          >
            {{ emojiOption }}
          </option>
        </select>
      </div>
    </div>
    <section class="my-6 border-t border-b py-6">
      <h2 class="text-2xl font-bold">Spellcheck</h2>
      <p class="pb-2 text-sm md:text-base">
        Another attribute you can use on elements that have
        <code>contenteditable="true"</code> is <code>spellcheck</code>.
      </p>
      <p class="pb-2 text-sm md:text-base">
        In most situations if you have <code>contenteditable="true"</code>,
        <code>spellcheck</code> is most likedly <code>true</code> by default,
        but you can add <code>spellcheck="true"</code> to explicitly ensure that
        you'll get spellcheck squiggly-line warnings. Set
        <code>spellcheck</code> to <code>false</code> if you don't want them.
      </p>
      <p class="text-sm md:text-base">
        The first <code>div</code> below has both attributes set to
        <code>true</code>. The second has
        <code>contenteditable="true"</code> and <code>spellcheck="false"</code>.
      </p>
      <div class="my-4 p-4 bg-black rounded">
        <div contenteditable="true" spellcheck="true" class="mb-2 border p-2">
          I have contenteditable and spellcheck both set to true 😊 !
        </div>
        <div contenteditable="true" spellcheck="false" class="border p-2">
          I only have contenteditable set to true 😞.
        </div>
      </div>
    </section>
    <div class="bg-black text-white my-6 p-4 rounded mx-2 md:mx-6">
      <h2 class="text-center font-bold text-2xl">Let it Go, Emoji Style</h2>
      <p class="italic text-center pb-3 text-sm md:text-base">
        For emoji inspiration. Feel free to try out editing it, too. To add
        emojis on a PC, try pressing the Windows key on your keyboard and the
        period key. Or Windows key and semicolon works too. For Apple, press
        CTRL + CMD + Space.
      </p>
      <p contenteditable="true" class="leading-loose text-sm md:text-base">
        The ❄️ 🌟 🔦 ⚪ on the mountain 🌙 🌠. 🙅🏻 a👣 to 🐝 👀. A 🏰 of 😢, and
        it 👀 like☝️️ the 👑. The 💨 is 🐺 like this 🌀 ❄️ ☔️ 🏠. 🙅🏻 keep it
        in, ☁️ 💡 ☝️️ tried. 🙅🏻 let 👬👫 in,🙅🏻 let 👬👫 👀. 🐝 the 👍 👧 👇
        always have to 🐝. 🙅🏻, don't 👐, 🚫 let 👬👫💡. Well now 👬👫 💡. 👐 it
        🚗,, 👐 it 🚗,,🙅🏻 ✊ it back anymore. 👐 it 🚗,, 👐 it 🚗, turn ✈️ and
        🔨 the 🚪. ☝️️ 🚫 care, what 👬👫 going to 👄, let the ☔️ ⚡ ❄️ 😡 on,
        the ❄️ ⛄️ 🙅🏻 bothered ☝️️ anyway. It's 😜😂 how some ✈️ 🚆 makes
        everything 😳 🐜. And the 😱 that once 👮 me, 🙅🏻 get to☝️️ at all. It's
        🕓 to 👀 what☝️️ can do. To 📝 the 📊 and 🔨 through. 🚫 👍 , 🚫 👎, 🚫
        👮 for ☝️️. ☝️️ 🏃. 👐 it 🚗,, 👐 it 🚗., ☝️️ am ☝️ with the 🌀 and 🌌.
        👐 it 🚗,, 👐 it 🚗..👇 🙅🏻 👀 ☝️️ 😭 . 👉 ☝️️ 🚶, and 👉 ☝️️ stay. Let
        the⚡ ❄️ 😡 on. ☝️️ 💪 ❄️ through the 🌀 into the 🌎.☝️️ 👤 is 🌀 in ❄️
        ⛄️ fractals all 🔁. And 1️⃣💡 💎 like an ❄️ 📢. ☝️️ 🙅🏻 🏃 back, the past
        is in the past. 👐 it 🚗,,👐 it 🚗,. And ☝️️ 🚀 like the 💔 of 🌌. 👐 it
        🚗,, 👐 it 🚗.. That 💁 is 🚫. Here ☝️️ 🚶, in the 🔦 of ☀️. Let the ⚡
        ❄️ 😡 on, the ❄️ ⛄️ 🙅🏻 bothered ☝️️ anyway.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Attributes',
  data() {
    return {
      tshirtColors: ['white', 'blue', 'yellow', 'pink', 'purple', 'green'],
      tshirtColor: 'blue',
      emojis: ['🐧', '👣', '🦩', '✏️', '🌳', '🐬', '🌹'],
      emoji: '✏️',
    }
  },
}
</script>
