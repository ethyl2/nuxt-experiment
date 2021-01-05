<template>
  <form
    method="POST"
    action="https://formsubmit.co/c9e4d3a323f94fd2a26e397ffe5a8283"
    enctype="multipart/form-data"
    class="container flex flex-col space-y-2"
  >
    <input
      type="email"
      name="email"
      placeholder="Your email"
      class="text-black"
    />
    <textarea
      name="message"
      placeholder="Your message"
      class="text-black"
    ></textarea>
    <input type="file" name="attachment" accept="image/png, image/jpeg" />
    <button type="submit">Send</button>
  </form>
</template>
