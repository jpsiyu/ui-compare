<template>
  <div class="upload">
    <el-upload
      action="https://api.hman.fun/api/upload-service/sys/upload/image"
      name="image"
      :data="{path: 'test'}"
    >
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
  </div>
</template>

<style scoped>
.upload {
  margin: 30px auto;
  width: 300px;
  height: 300px;
  box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.1);
}
</style>