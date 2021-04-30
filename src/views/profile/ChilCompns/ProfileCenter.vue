<template>
  <div class="profile-center">
    <div class="top">
      <span class="iconfont">&#xe601;</span>
      <span class="content">我的消息</span>
    </div>
    <div class="center">
      <span class="iconfont">&#xe640;</span>
      <span class="center-text content">积分商城</span>
    </div>
    <div class="bottom">
      <span class="iconfont">&#xe602;</span>
      <span class="content">会员卡</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileCenter',
}

</script>

<style scoped>
.profile-center {
  margin-top: 10px;
  background-color: #fff;
}

.iconfont {
  padding: 0 10px;
}
.profile-center > div .iconfont {
  color: #fa563b;
  font-size: 18px;
}
.profile-center .center-text {
  width: 89%;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.content {
  display: inline-block;
  padding: 10px 0;
}
</style>
