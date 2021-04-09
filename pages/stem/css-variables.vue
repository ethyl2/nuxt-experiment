<style>
:root {
  --h: 0;
  --bullet2: '$';
  --blue: #1e90ff;
}

h2.h2-example {
  color: var(--blue) !important;
}

.mountains {
  background: rgb(27, 207, 231);
  position: relative;
  font-size: 4rem;
  z-index: 20;
  border-bottom: 20px solid green;
  border-radius: 4px;
}

.mountains::after {
  content: '🌞';
  display: block;
  position: absolute;
  text-align: center;
  bottom: var(--h);
  font-size: 4rem;
  z-index: -1;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  min-width: 576px;
  margin: auto;
  padding-top: 3rem;
}

#y {
  display: block;
  width: 15%;
  margin: auto;
  color: black;
  padding-left: 0.25rem;
  margin-top: 1rem;
}

@media (max-width: 640px) {
  .wrapper {
    flex-flow: column nowrap;
    min-width: 200px;
  }
}
</style>
<template>
  <div class="flex flex-col items-start justify-start mx-4 md:mx-40">
    <h1 class="text-2xl font-bold my-2">CSS Variables</h1>
    <p>
      You can reuse values in your css. Instead of having to type #1e90ff, for
      example, you can declare a variable with that value.
    </p>
    <p>
      Here, we prefix the variable name with '--', and stick it in the :root
      selector. It's in <code class="bg-black rounded p-1">:root</code> so that
      it has global scope.
    </p>
    <pre class="bg-black p-2 rounded my-2">
    :root {
        --blue: #1e90ff;
    }
    </pre>
    <p>Here, we use the variable for the color of the h2 and the span.</p>
    <pre class="bg-black p-2 rounded my-2">
    h2 {
        color: var(--blue);
    }
    span {
        color: var(--blue);
    }
    </pre>
    <h2 class="h2-example">Here is an h2 with that color.</h2>
    <h2 class="mt-4 mb-2 text-xl">One More Example</h2>
    <p>
      The mountains div ⛰️ below has an
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/::after"
        target="_blank"
        >::after pseudoelement</a
      >
      with a sun emoji 🌞. The pseudoelement's position is determined by the
      value of the <code class="bg-black rounded p-1">--h</code> css variable.
    </p>
    <pre class="bg-black p-2 rounded my-2">
    :root {
        --h: 0;
    }
    .mountains::after {
      content: '🌞';
      position: absolute;
      bottom: var(--h);
    }
  </pre
    >
    <div class="wrapper">
      <div class="mountains"><span>⛰️⛰️⛰️</span></div>
      <div class="ml-4">
        <label for="y"
          >Make the sun rise or set, by changing the value of <b>--h</b>:</label
        >
        <input id="y" type="number" value="0" step="10" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CssVariables',
  mounted() {
    const height = document.getElementById('y')
    height.addEventListener('change', move, false)
    function move() {
      document.documentElement.style.setProperty('--h', height.value + 'px')
    }
  },
}
</script>
