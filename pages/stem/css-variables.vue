<style>
:root {
  --h: 50px;
  --bullet2: '$';
  --blue: #1e90ff;
}

h2.h2-example {
  color: var(--blue) !important;
}

.row {
  width: 100px;
  height: 50px;
  background: navy;
  position: relative;
}

.row::after {
  content: '::after';
  display: block;
  position: absolute;
  width: 100px;
  height: 50px;
  line-height: 50px;
  background: gold;
  text-align: center;
  top: var(--h);
}
.wrapper {
  display: flex;
  justify-content: space-between;
  min-width: 576px;
  margin: auto;
  padding: 20px;
}

#y {
  display: block;
  width: 10%;
  margin: auto;
  color: black;
}
</style>
<template>
  <div class="flex flex-col items-start justify-start mx-4 md:mx-40">
    <h1>CSS Variables</h1>
    <p>
      You can reuse values in your css. Instead of having to type #1e90ff, for
      example, you can declare a variable with that value.
    </p>
    <p>
      Here, we prefix the variable name with '--', and stick it in the :root
      selector. It's in :root so that it has global scope.
    </p>
    <pre>
        :root {
            --blue: #1e90ff;
        }
    </pre>
    <p>Here, we use the variable for the color of the h2 and the span.</p>
    <pre>
        h2 {
            color: var(--blue);
        }
        span {
            color: var(--blue);
        }
    </pre>
    <h2 class="h2-example">Here is an h2 with that color.</h2>
    <div class="wrapper">
      <div class="row"></div>
      <label for="y"
        >Change the value of the <b>top</b> for <b>::after</b>
        pseudoelement
        <input id="y" type="number" value="0" step="10" />
      </label>
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
