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
      <h2 class="text-center font-bold text-2xl pb-2">
        Let it Go, Emoji Style
      </h2>
      <p
        class="italic text-center pb-3 text-sm border-b pb-4 md:text-base md:px-12"
      >
        For emoji inspiration. Feel free to try out editing it, too. To add
        emojis on a PC, try pressing the Windows key on your keyboard and the
        period key. Or Windows key and semicolon works too. For Apple, press
        CTRL + CMD + Space.
      </p>
      <div
        contenteditable="true"
        class="pt-6 text-sm flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-6 md:justify-around md:text-base md:px-12"
      >
        <div class="flex flex-col space-y-6">
          <div class="w-full">
            <p>The ❄️ 🌟 🔦 ⚪ on the mountain 🌙 🌠.</p>
            <p>🙅🏻 a👣 to 🐝 👀.</p>
            <p>A 🏰 of 😢,</p>
            <p>and it 👀 like☝️️ the 👑.</p>
          </div>

          <div class="w-full">
            <p>The 💨 is 🐺 like this 🌀 ❄️ ☔️ 🏠.</p>
            <p>🙅🏻 keep it in, ☁️ 💡 ☝️️ tried.</p>
            <p>🙅🏻 let 👬👫 in,🙅🏻 let 👬👫 👀.</p>
            <p>🐝 the 👍 👧 👇 always have to 🐝.</p>
            <p>🙅🏻, don't 👐, 🚫 let 👬👫💡.</p>
            <p>Well now 👬👫 💡.</p>
          </div>

          <div class="w-full">
            <p>👐 it 🚗, 👐 it 🚗,</p>
            <p>🙅🏻 ✊ it back anymore.</p>
            <p>👐 it 🚗, 👐 it 🚗,</p>
            <p>Turn ✈️ and 🔨 the 🚪.</p>
            <p>☝️️ 🚫 care, what 👬👫 going to 👄,</p>
            <p>👐 the ☔️ ⚡ ❄️ 😡 on,</p>
            <p>The ❄️ ⛄️ 🙅🏻 bothered ☝️️ anyway.</p>
          </div>

          <div class="w-full">
            <p>It's 😜😂 how some ✈️ 🚆 makes everything 😳 🐜.</p>
            <p>And the 😱 that once 👮 me, 🙅🏻 get to☝️️ at all.</p>
            <p>It's 🕓 to 👀 what☝️️ can do.</p>
            <p>To 📝 the 📊 and 🔨 through.</p>
            <p>🚫 👍 , 🚫 👎, 🚫 👮 for ☝️️.</p>
            <p>☝️️ 🏃.</p>
          </div>
        </div>
        <div class="flex flex-col space-y-6">
          <div class="w-full">
            <p>👐 it 🚗, 👐 it 🚗</p>
            <p>☝️️ am ☝️ with the 🌀 and 🌌.</p>
            <p>👐 it 🚗, 👐 it 🚗.</p>
            <p>👇 🙅🏻 👀 ☝️️ 😭 .</p>
            <p>👉 ☝️️ 🚶, and 👉 ☝️️ stay.</p>
            <p>Let the ⚡ ❄️ 😡 on.</p>
          </div>

          <div class="w-full">
            <p>☝️️ 💪 ❄️ through the 🌀 into the 🌎.</p>
            <p>☝️️ 👤 is 🌀 in ❄️ ⛄️ fractals all 🔁.</p>
            <p>And 1️⃣💡 💎 like an ❄️ 📢.</p>
            <p>☝️️ 🙅🏻 🏃 back, the past is in the past.</p>
          </div>

          <div class="w-full">
            <p>👐 it 🚗, 👐 it 🚗</p>
            <p>And ☝️️ 🚀 like the 💔 of 🌌.</p>
            <p>👐 it 🚗, 👐 it 🚗</p>
            <p>That 💁 is 🚫.</p>
            <p>Here ☝️️ 🚶, in the 🔦 of ☀️.</p>
            <p>👐 the ⚡ ❄️ 😡 on,</p>
            <p>The ❄️ ⛄️ 🙅🏻 bothered ☝️️ anyway.</p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h2 class="text-2xl font-bold mt-6 border-t pt-4">Poster</h2>
      <div
        class="flex flex-col space-y-4 md:space-y-0 md:flex-row items-center justify-center w-full"
      >
        <div class="w-full md:w-1/3">
          <video
            controls
            src="/stem/happy-emoji.mp4"
            poster="/stem/poster-image.png"
            class="h-64 w-64 mx-auto mt-6"
          ></video>
        </div>
        <p class="w-full md:w-1/3">
          You can use the <code>poster</code> attribute to specify an image to
          be shown when the video is loading and hasn't been played yet.
        </p>
        <img
          src="/stem/poster-code.png"
          alt="code to add a poster image"
          class="w=full md:w-1/3"
        />
      </div>
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
