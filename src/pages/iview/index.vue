<template>
  <div class="main">
    <DatePicker
      v-model="dateRange"
      type="datetimerange"
      placeholder="Select date and time"
      style="width: 300px"
    ></DatePicker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateRange: '',
    }
  }
}
</script>

<style scoped>
.main{
  margin: 30px auto;
  width: 300px;
  height: 300px;
  box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.1);
}
</style>