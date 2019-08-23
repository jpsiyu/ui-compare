 <template>
  <div class="main box">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from '@/components/Nav'
export default {
  components: { Nav },
}
</script>

<style scoped>
.main {
  width: 80%;
}

.box {
  margin: 10px auto;
  box-sizing: border-box;
  padding: 20px;
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.1);
}
</style>
