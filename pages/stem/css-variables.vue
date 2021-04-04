<style scoped>
:root {
  --h: 50px;
  --bullet2: '$';
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

form {
  display: flex;
  width: 80%;
  justify-content: flex-start;
}

label {
  width: 80%;
  line-height: 40px;
}

input {
  display: block;
  width: 10%;
  margin: auto;
  color: black;
}
</style>
<template>
  <div class="wrapper">
    <div class="row"></div>
    <label for="y"
      >Change the value of the <b>top</b> for <b>::after</b>
      pseudoelement
      <input id="y" type="number" value="0" step="10" />
    </label>
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
