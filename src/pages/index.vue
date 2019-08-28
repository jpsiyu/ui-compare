<template>
  <div class="main">
    <h1>UI framework compare</h1>
    <el-tree class="tree" :data="links" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>

<script>
import navTree from '@/assets/js/navTree'

export default {
  data() {
    return {
      links: navTree
    }
  },
  computed: {
    defaultProps() {
      return {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick(event) {
      if(event.link){
        this.$router.push(event.link)
      }
    }
  }

}
</script>

<style scoped>
.main {
  margin: 100px auto;
}

.main h1 {
  text-align: center;
}

.tree {
  box-shadow: 0 0 2px 2px lightgray;
  width: 600px;
  margin: 30px auto;
  padding: 20px;
}
</style>
