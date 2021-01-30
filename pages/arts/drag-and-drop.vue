<template>
  <div class="m-10">
    <div class="drop-zone bg-teal-500 p-2">
      <div v-for="item in listOne" :key="item.title" class="drag-el">
        {{ item.title }}
      </div>
    </div>
    <div class="drop-zone bg-red-500 p-2">
      <div v-for="item in listTwo" :key="item.title" class="drag-el">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DragAndDrop',
  data() {
    return {
      items: [
        {
          id: 0,
          title: 'Aluminum',
          list: 1,
        },
        {
          id: 1,
          title: 'Borium',
          list: 1,
        },
        {
          id: 2,
          title: 'Calcium',
          list: 2,
        },
      ],
    }
  },
  computed: {
    listOne() {
      return this.items.filter((item) => item.list === 1)
    },
    listTwo() {
      return this.items.filter((item) => item.list === 2)
    },
  },
}
</script>
