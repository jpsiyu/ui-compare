<template>
  <div class="main w100">
    <ul class="layui-nav">
      <li
        class="layui-nav-item"
        v-for="(item, idx) in navList"
        :key="idx"
        :class="{'layui-this': pathMatch(item.path)}"
      >
        <a :href="item.path">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { path: '/layui', name: '控件' },
        { path: '/layui/form', name: '表单' }
      ]
    }
  },
  methods: {
    pathMatch(path) {
      return this.$route.path == path
    }
  }
}
</script>

<style scoped>
.w100 {
  width: 100%;
}
</style>