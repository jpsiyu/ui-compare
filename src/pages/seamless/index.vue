<template>
  <div class="main shadow">
    <vue-seamless-scroll :data="fruit" :class-option="classOption" class="warp">
      <ul class="item">
        <li v-for="(item, idx) in fruit" :key="idx">
          <span class="title" v-text="item"></span>
        </li>
      </ul>
    </vue-seamless-scroll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruit: ['apple', 'banana', 'watermallon', 'file', 'fish', 'dog', 'cat', 'pig', 'monkey'],
    }
  },
  computed: {
    classOption() {
      return {
        step: 1,
        limitMoveNum: 5,
        singleHeight: 30,
        waitTime: 1000,
      }
    }
  }
}
</script>

<style scoped>
.main{
  width: 500px;
  margin: 20px auto;
  padding: 10px;
  box-sizing: border-box;
}

.shadow{
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.1);
}

.warp {
  height: 30px;
  width: '100%';
  overflow: hidden;
}
.warp ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
}
.warp li {
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
}

</style>