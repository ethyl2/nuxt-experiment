<style scoped>
.triangle {
  width: 0;
  height: 0;
  border-left: 48px solid transparent;
  border-right: 48px solid transparent;
  border-bottom: 96px solid #805ad5;
}
.triangle p {
  position: absolute;
  bottom: -96px;
  left: -32px;
}
.triangle-point-left {
  width: 0;
  height: 0;
  border-top: 48px solid transparent;
  border-right: 96px solid #667eea;
  border-bottom: 48px solid transparent;
}
.triangle-point-left p {
  position: absolute;
  bottom: -12px;
  left: 24px;
}
.triangle-point-right {
  width: 0;
  height: 0;
  border-left: 96px solid #ed64a6;
  border-top: 48px solid transparent;
  border-bottom: 48px solid transparent;
}
.triangle-point-right p {
  position: absolute;
  bottom: -12px;
  left: -92px;
}
.triangle-point-down {
  width: 0;
  height: 0;
  border-left: 48px solid transparent;
  border-top: 96px solid #4299e1;
  border-right: 48px solid transparent;
}
.triangle-point-down p {
  position: absolute;
  top: -92px;
  left: -32px;
}

.steps p {
  border-top: 2px dashed;
  border-color: #319795 !important;
  margin: 0;
  padding: 30px;
  counter-increment: section;
  position: relative;
}

.steps p:nth-child(even):before {
  content: counter(section);
  right: 100%;
  margin-right: -15px;
  position: absolute;
  border-radius: 50%;
  padding: 4px;
  height: 30px;
  width: 30px;
  background-color: #319795;
  text-align: center;
  color: white;
  font-size: 110%;
}

.steps p:nth-child(odd):before {
  content: counter(section);
  left: 100%;
  margin-left: -15px;
  position: absolute;
  border-radius: 50%;
  padding: 4px;
  height: 30px;
  width: 30px;
  background-color: #319795;
  text-align: center;
  color: white;
  font-size: 110%;
}

.steps p:nth-child(even) {
  border-left: 2px dashed;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  margin-right: 40px;
  padding-right: 0;
}

.steps p:nth-child(odd) {
  border-right: 2px dashed;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  margin-left: 40px;
  padding-left: 0;
}

.steps p:first-child {
  border-top: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}

.steps p:last-child {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

#half-circle {
  float: left;
  width: 128px;
  height: 128px;
  margin: 4px;
  shape-outside: circle(50% at 10%);
  clip-path: circle(50% at 0%);
  background: #ed64a6;
}
</style>

<template>
  <div class="mx-4 md:mx-20">
    <h1 class="font-bold text-2xl mb-4">Shapes made with CSS</h1>
    <h2 class="font-bold text-lg text-orange-600 mb-4">
      Easy shapes, made with
      <a href="https://tailwindcss.com/docs" target="_blank">tailwindcss</a>
      here, but could also be made with vanilla css:
    </h2>
    <div class="flex flex-wrap items-center justify-between">
      <div
        class="flex flex-col items-center justify-center w-24 h-24 bg-teal-500 m-4"
      >
        <p class="font-bold">Square</p>
        <pre>w-24 h-24</pre>
      </div>
      <div
        class="flex flex-col items-center justify-center w-24 h-24 bg-red-500 rounded m-4 text-sm"
      >
        <p class="font-bold text-center">Rounded Square</p>
        <pre>rounded</pre>
      </div>
      <div
        class="flex flex-col items-center justify-center w-24 h-24 bg-yellow-500 rounded-md m-4 text-sm"
      >
        <p class="font-bold text-center">Medium-Rounded Square</p>
        <pre>rounded-md</pre>
      </div>
      <div
        class="flex flex-col items-center justify-center w-24 h-24 bg-green-500 rounded-lg m-4 text-sm"
      >
        <p class="font-bold text-center">Large-Rounded Square</p>
        <pre>rounded-lg</pre>
      </div>
      <div
        class="w-48 h-24 bg-orange-500 flex flex-col items-center justify-center m-4"
      >
        <p class="font-bold">Rectangle</p>
        <pre>w-48 h-24</pre>
      </div>
      <div
        class="rounded-full w-24 h-12 bg-blue-500 flex items-center justify-center m-4"
      >
        Pill
      </div>
    </div>
    <div
      class="mx-auto flex flex-col items-center justify-center text-center w-24 h-24 bg-teal-500 m-4"
    >
      <p class="font-bold">Square Centered</p>
      <pre>mx-auto</pre>
    </div>
    <div
      class="rounded-full w-32 h-32 bg-green-500 flex flex-col items-center text-center justify-center mx-auto m-4 text-sm"
    >
      <p class="font-bold">Circle Centered</p>
      <pre>rounded-full</pre>
    </div>
    <hr />
    <h2 class="font-bold text-lg text-orange-600 mb-4 pt-12">
      A bit trickier, uses some vanilla css, in addition to tailwind classes:
    </h2>
    <section class="flex flex-wrap items-center justify-between m-4">
      <div class="triangle w-0 h-0 relative">
        <p class="font-bold text-sm text-center">Triangle1</p>
      </div>
      <div class="triangle-point-left w-0 h-0 relative m-4">
        <p class="font-bold text-sm text-center">Triangle2</p>
      </div>
      <div class="triangle-point-right w-0 h-0 relative m-4">
        <p class="font-bold text-sm text-center">Triangle3</p>
      </div>
      <div class="triangle-point-down w-0 h-0 relative m-4">
        <p class="font-bold text-sm text-center">Triangle4</p>
      </div>
    </section>
    <div class="flex flex-col mt-2 md:flex-row border-b pb-4">
      <div class="w-full md:w-2/5">
        <p class="text-lg font-bold mb-2">In order to make triangles:</p>
        <div class="steps md:mr-20">
          <p>Set the width and height to zero.</p>
          <p>
            Add a border side -- either top, left, right, or bottom (depending
            on what triangle shape you want) that has the size you want your
            triangle to be, with the desired color.
          </p>
          <p>
            Add the border sides that surround that border, with the size less
            than the first border and with the color as transparent.
          </p>
          <p>Use absolute positioning to get your text where you want it.</p>
        </div>
      </div>
      <div class="w-full md:w-1/2">
        <p class="text-lg font-bold mb-2">Css for 1st triangle:</p>
        <pre class="bg-black p-2 rounded overflow-x-scroll">
      .triangle { 
        width: 0; 
        height: 0;
        border-bottom: 96px solid #805ad5; /* Visible */
        border-left: 48px solid transparent;
        border-right: 48px solid transparent;
        }
      .triangle p { 
        position: absolute; 
        bottom: -96px; 
        left: -32px;
        }
    </pre
        >
      </div>
    </div>

    <section>
      <h3 class="font-bold text-lg text-orange-600 mb-4 pt-12">
        Getting text to flow around and wrap a shape
      </h3>
      <div class="bg-gray-900 p-4 w-full mx-auto mb-4 md:w-1/2">
        <div class="float-right ml-4 my-2 h-24 w-24 bg-indigo-500"></div>
        <p>
          <span class="text-yellow-200"
            >The square here has classes
            <code>float-right ml-4 my-2 h-24 w-24 bg-indigo-500</code>. So this
            <code>p</code> will wrap around it.</span
          >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis
          et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis
          ultrices condimentum velit. Proin velit libero, interdum ac rhoncus
          sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel
          efficitur ante.
        </p>
      </div>
      <div class="bg-gray-900 p-4 w-full mx-auto mb-4 md:w-1/2">
        <div class="float-left mr-4 my-2 w-24 h-24 bg-purple-500"></div>
        <p>
          <span class="text-yellow-200"
            >The square here has classes
            <code>float-left mr-4 my-2 w-24 h-24 bg-purple-500</code>. So this
            <code>p</code> will wrap around it.</span
          >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis
          et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis
          ultrices condimentum velit. Proin velit libero, interdum ac rhoncus
          sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel
          efficitur ante.
        </p>
      </div>
      <div class="bg-gray-900 p-4 w-full mx-auto mb-4 md:w-1/2">
        <div
          class="rounded-full w-32 h-32 bg-green-500 flex flex-col items-center text-center justify-center text-sm float-left mr-4 my-2"
        >
          <p class="font-bold">Circle</p>
          <pre>rounded-full</pre>
        </div>
        <p>
          <span class="text-yellow-200"
            >The circle here is made like the circle examples above, with the
            addition of classes <code>float-left mr-4 my-2</code> . So this
            <code>p</code> will wrap around it, but makes a straight line and
            doesn't follow the edge of the circle.</span
          >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis
          et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis
          ultrices condimentum velit. Proin velit libero, interdum ac rhoncus
          sit amet, pellentesque ac turpis.
        </p>
      </div>
      <div class="bg-gray-900 p-4 w-full mx-auto md:w-1/2">
        <div
          class="rounded-full w-32 h-32 bg-green-500 flex flex-col items-center text-center justify-center text-sm float-left mr-4 my-2"
          style="shape-outside: circle(); clip-path: circle()"
        >
          <p class="font-bold">Circle</p>
          <pre>rounded-full</pre>
        </div>
        <p>
          <span class="text-yellow-200"
            >The circle here is made like the circle examples above, with the
            addition of classes <code>float-left mr-4 my-2</code>. Also, it has
            two additional lines of css:
            <code>shape-outside: circle(); clip-path: circle();</code>. So this
            p will wrap around it and follow the edge of the circle!</span
          >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis
          et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis
          ultrices condimentum velit.
        </p>
      </div>
      <div class="bg-gray-900 p-4 w-full mx-auto md:w-1/2">
        <div id="half-circle" class="flex items-start justify-center">
          <p class="font-bold">Circle</p>
        </div>
        <p>
          <span class="text-yellow-200"
            >The half circle here is made using parameters to
            <code>circle</code>
            in the lines of css:
            <code
              >shape-outside: circle(50% at 10%); clip-path: circle(50% at
              0%);</code
            >. This p will wrap around it and follow the edge of the
            circle!</span
          >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis
          et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis
          ultrices condimentum velit.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CssShapes',
}
</script>
