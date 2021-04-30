<template>
  <div class="profile-bottom">
    <div class="top">
      <span class="iconfont">&#xe63f;</span>
      <span class="content top-cart">我的购物车</span>
    </div>
    <div class="bottom">
      <span class="iconfont">&#xe60b;</span>
      <span class="content">下载购物APP</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileBottom',
}

</script>

<style scoped>
.profile-bottom {
  margin-top: 10px;
  background-color: #fff;
  /* padding: 0 10px; */
}
.iconfont {
  color: #fa563b;
  font-size: 18px;
  padding: 0 10px;
}
.content {
  display: inline-block;
  padding: 10px 0;
}
.top-cart {
  width: 89%;
  border-bottom: 1px solid #ccc;
}
</style>
