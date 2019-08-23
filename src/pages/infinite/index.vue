<template>
  <div class="main shadow">
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <p v-for="(item, index) in fruit" :key="index">{{item}}</p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      count: 0,
      data: [],
      busy: true,
      fruit: ['apple', 'banana', 'candy', 'macro', 'hello', 'waji', 'sun', 'month', 'sea']
    }
  },
  mounted() {
    this.scrollEnd()
  },
  methods: {
    scrollEnd() {
      setInterval(_ => {
        this.busy = false
      }, 3000)
    },
    loadMore: function () {
      const r = Math.ceil(Math.random() * this.fruit.length)
      this.fruit.push(this.fruit[r])
      this.busy = true
    }
  }
}
</script>

<style scoped>
.main {
  height: 100px;
  width: 300px;
  margin: 20px auto;
  padding: 20px;
  overflow-y: scroll;
}

.shadow {
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.1);
}
</style>