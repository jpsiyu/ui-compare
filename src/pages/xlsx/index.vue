<template>
  <div class="xlsx shadow">
    <el-tabs v-model="activeName">
      <el-tab-pane label="二维数组" name="first">
        <el-form label-width="100px">
          <el-form-item label="数据">
            <el-input type="textarea" :value="aoaStr" :rows="10" />
          </el-form-item>
          <el-form-item label>
            <el-button type="primary" @click="exportAOA">导出</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="Obj数组" name="second">
        <el-form label-width="100px">
          <el-form-item label="数据">
            <el-input type="textarea" :value="aooStr" :rows="10" />
          </el-form-item>
          <el-form-item label>
            <el-button type="primary" @click="exportAOO">导出</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="Dom Table" name="third">On development</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import XLSX from 'xlsx'
export default {
  data() {
    return {
      activeName: 'first',
      aoa: [
        ['名称', '价格', '颜色'],
        ['apple', '12.4', 'red'],
        ['banana', '10', 'yellow']
      ],
      aoo: [
        { id: 1, name: '水', owner: 'Tom' },
        { id: 2, name: '手机', owner: 'Adom' },
        { id: 3, name: '笔记本', owner: 'Bob' },
      ]
    }
  },
  computed: {
    aoaStr() {
      return JSON.stringify(this.aoa, null, " ")
    },
    aooStr() {
      return JSON.stringify(this.aoo, null, " " )
    }
  },
  methods: {
    exportAOA() {
      const ws = XLSX.utils.aoa_to_sheet(this.aoa)
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, ws, "aoa")
      XLSX.writeFile(wb, 'sheet-aoa.xlsx')
    },
    exportAOO() {
      const ws = XLSX.utils.json_to_sheet(this.aoo)
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, ws, "aoo")
      XLSX.writeFile(wb, 'sheet-aoo.xlsx')
    }
  }
}
</script>

<style scoped>
.xlsx {
  margin: 50px auto;
  width: 600px;
  min-height: 300px;
  padding: 10px;
}

.shadow {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
</style>