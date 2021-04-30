<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <template v-slot:center><div>个人中心</div></template></nav-bar
    >
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
export default {
  name: 'Profile',
  components: {
    NavBar
  }
}

</script>

<style scoped>
.nav-bar {
  color: #fff;
  background-color: #fa563b;
}
</style>
