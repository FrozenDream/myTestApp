<template>
  <div class="back-top iconfont">&#xe70c;</div>
</template>

<script>
export default {
  name: 'BackTop',

}

</script>

<style scoped>
.back-top {
  position: fixed;
  right: 10px;
  bottom: 55px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #fff;
  text-align: center;
  line-height: 50px;
  z-index: 5;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}
.iconfont {
  font-size: 25px;
  color: red;
}
</style>
