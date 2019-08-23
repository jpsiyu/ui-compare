<template>
  <div class="box">
    <div class="layui-row">
      <div class="layui-col-xs12 layui-col-sm6 layui-col-md4 cell">根据屏幕大小伸缩</div>
    </div>
    <div class="layui-row">
      <i class="layui-icon layui-icon-face-smile"></i>
      <i class="layui-icon layui-icon-search"></i>
    </div>
    <div class="layui-row">
      <button class="layui-btn layui-btn-normal" @click="hi">按钮</button>
    </div>
    <div class="layui-row">
      <ul class="layui-timeline">
        <li class="layui-timeline-item">
          <i class="layui-icon layui-timeline-axis">&#xe63f;</i>
          <div class="layui-timeline-content layui-text">
            <h3 class="layui-timeline-title">昨天</h3>
            <p>昨天已经过去了</p>
          </div>
        </li>
        <li class="layui-timeline-item">
          <i class="layui-icon layui-timeline-axis layui-icon-note"></i>
          <div class="layui-timeline-content layui-text">
            <h3 class="layui-timeline-title">今天</h3>
            <p>今天正在发生</p>
          </div>
        </li>
        <li class="layui-timeline-item">
          <i class="layui-icon layui-icon-praise layui-timeline-axis"></i>
          <div class="layui-timeline-content layui-text">
            <h3 class="layui-timeline-title">明天</h3>
            <p>明天还没有到来</p>
          </div>
        </li>
      </ul>
    </div>
    <div id="laypage"></div>
  </div>
</template>

<script>
export default {
  mounted() { 
    this.initPage()
  },
  methods: {
    hi() {
      layui.use('layer', _ => {
        layui.layer.msg('Hi')
      })
    },
    initPage(){
      layui.use('laypage', _ => {
        const laypage = layui.laypage
        laypage.render({
          elem: 'laypage',
          count: 50,
          layout: ['prev', 'page', 'next', 'count', 'refresh', 'limit'],
        })
        $('#layui-laypage-1').append('<span class="layui-laypage-count">haha</span>')
      })
    }
  }
}
</script>

<style scoped>
.cell {
  background: #009688;
  color: #fff;
  padding: 10px 0;
}

.box {
  margin: 10px auto;
  box-sizing: border-box;
  padding: 20px;
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.1);
}
</style>