<template>
  <div class="xlsx shadow">
    <el-form>
      <el-form-item>
        <el-button type="primary" @click="exportData">Export</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import XLSX from 'xlsx'
export default {
  methods: {
    exportData() {
      const data = ["SheetJS".split(""), "1234567".split("")]
      const ws = XLSX.utils.aoa_to_sheet(data)
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, ws, "SheetJS")
      XLSX.writeFile(wb, 'sheetjs.xlsx')
    }
  }
}
</script>

<style scoped>
.xlsx {
  margin: 20px auto;
  width: 600px;
  min-height: 300px;
}

.shadow {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
</style>