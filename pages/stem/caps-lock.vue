<template>
  <div
    class="mx-4 flex flex-col items-center justify-start min-h-screen space-y-4 md:mx-10"
  >
    <h1 class="text-xl mt-4 font-bold md:text-2xl">
      Caps Lock Event Listening
    </h1>
    <p>
      As I was about to log in to my computer today, I noticed a handy warning
      message, 'Caps lock is on'.
    </p>
    <p>
      I became curious about how to go about checking programmatically whether a
      user had caps lock on.
    </p>
    <p>
      I learned that you can do this check in JavaScript using
      <code class="bg-black p-1 rounded"
        >event.getModifierState('CapsLock')</code
      >, which will return true when the caps lock is on. Perfect!
    </p>
    <p>
      In Vue.js, you can pass the
      <code class="bg-black p-1 rounded">event</code> as a parameter to your
      methods.
    </p>
    <code class="bg-black p-2 rounded">
      methods: { checkCapsLock(event) { this.capsLockStatus =
      event.getModifierState('CapsLock') ? 'On' : 'Off' }, }
    </code>
    <button
      class="bg-orange-700 text-white rounded py-1 px-2 mt-2 hover:bg-orange-600 text-lg md:text-xl"
      type="button"
      @click="checkCapsLock"
    >
      Check Caps Lock
    </button>
    <p>
      Is your caps lock on?
      <span
        class="font-bold text-lg"
        :class="[capsLockStatus === 'Off' ? 'text-green-500' : 'text-red-500']"
        >{{
          capsLockStatus === 'On' ? 'Yes' : capsLockStatus === 'Off' ? 'No' : ''
        }}</span
      >
    </p>
    <label for="typing-input"
      >Type here to see the caps lock in action/out of action:</label
    >
    <input
      name="typing-input"
      type="text"
      class="text-black rounded p-1 w-full"
      :class="[capsLockStatus === 'Off' ? 'text-green-500' : 'text-red-500']"
    />
    <p v-if="capsLockStatus === 'On'" class="text-red-500">
      ⚠️ Warning! Caps lock is on! 🚨
    </p>
    <p>{{ capsLockMessage }}</p>
    <img
      src="/stem/keyboard.jpg"
      alt="keyboard"
      class="w-full rounded mx-auto md:w-1/3"
    />
  </div>
</template>

<script>
export default {
  name: 'CapsLock',
  data() {
    return {
      capsLockStatus: '',
      capsLockMessage:
        'I also added the check to the keypress event handler. If you press a key (not a modifier key though, unfortunately) it will check to see if the caps lock is on.',
    }
  },
  mounted() {
    window.addEventListener('keypress', this.handleKeyPress)
  },
  destroyed() {
    window.removeEventListener('keypress', this.handleKeyPress)
  },
  methods: {
    checkCapsLock(event) {
      this.capsLockStatus = event.getModifierState('CapsLock') ? 'On' : 'Off'
    },
    handleKeyPress(event) {
      const initialCapsLockStatus = this.capsLockStatus
      const newCapsLockStatus = event.getModifierState('CapsLock')
        ? 'On'
        : 'Off'
      if (initialCapsLockStatus !== newCapsLockStatus) {
        this.capsLockMessage =
          'You pressed the caps lock key before pressing the current key!'
      } else {
        this.capsLockMessage = ''
      }
      this.capsLockStatus = newCapsLockStatus
    },
  },
  head() {
    return {
      title: 'Caps Lock Event Listening',
    }
  },
}
</script>
