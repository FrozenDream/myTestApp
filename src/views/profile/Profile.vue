<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <template v-slot:center><div>个人中心</div></template></nav-bar
    >
    <profile-login-reg-info />
    <profile-center />
    <profile-bottom />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import ProfileLoginRegInfo from './ChilCompns/ProfileLoginRegInfo'
import ProfileCenter from './ChilCompns/ProfileCenter'
import ProfileBottom from './ChilCompns/ProfileBottom'
export default {
  name: 'Profile',
  components: {
    NavBar,
    ProfileLoginRegInfo,
    ProfileCenter,
    ProfileBottom
  }
}

</script>

<style scoped>
.profile {
  background-color: #f1f1f1;
}
.nav-bar {
  color: #fff;
  background-color: #fa563b;
}
</style>
