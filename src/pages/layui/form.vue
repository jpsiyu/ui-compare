<template>
  <div class="main">
    <form action class="layui-form box">
      <div class="layui-form-item">
        <label for class="layui-form-label">输入</label>
        <div class="layui-input-block">
          <input type="text" name="name" class="layui-input" placeholder="name" />
        </div>
      </div>
      <div class="layui-form-item">
        <label for class="layui-form-label">密码</label>
        <div class="layui-input-block">
          <input type="password" name="password" class="layui-input" placeholder="password" />
        </div>
      </div>
      <div class="layui-form-item">
        <label for class="layui-form-label">选择框</label>
        <div class="layui-input-block">
          <select name="city">
            <option value></option>
            <option value="0">北京</option>
            <option value="1">上海</option>
            <option value="2">广州</option>
            <option value="3">深圳</option>
          </select>
        </div>
      </div>
      <div class="layui-form-item">
        <label for class="layui-form-label">选择框</label>
        <div class="layui-input-block">
          <input type="checkbox" name="write" title="写作" />
          <input type="checkbox" name="read" title="阅读" lay-skin="primary" />
          <input type="checkbox" name="listen" title="听写" checked />
        </div>
      </div>
      <div class="layui-form-item">
        <label for class="layui-form-label">性别</label>
        <div class="layui-input-block">
          <input type="radio" name="sex" value="男" title="男" checked />
          <input type="radio" name="sex" value="女" title="女" />
        </div>
      </div>
      <div class="layui-form-item">
        <label for class="layui-form-label">开关</label>
        <div class="layui-input-block">
          <input type="checkbox" name="yyy" lay-skin="switch" lay-text="ON|OFF" checked />
        </div>
      </div>
      <div class="layui-form-item">
        <label for class="layui-form-label">描述</label>
        <div class="layui-input-block">
          <textarea name="desc" cols="30" rows="3" class="layui-textarea"></textarea>
        </div>
      </div>
      <div class="layui-form-item">
        <div class="layui-input-block">
          <button class="layui-btn" lay-submit lay-filter="sure">确定</button>
          <button class="layui-btn" type="reset">重置</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  mounted() {
    layui.use('form', _ => {
      const form = layui.form
      form.on('submit(sure)', event => {
        console.log(event.field)
        return false
      })
    })
  },
}
</script>

<style scoped>
.main {
  width: 80%;
}

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