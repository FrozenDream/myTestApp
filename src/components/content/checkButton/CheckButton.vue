<template>
  <div class="checked-button">
    <span class="iconfont" :class="{ check: isChecked }">&#xe6c5;</span>
  </div>
</template>

<script>
export default {
  name: 'CheckedButton',
  props: {
    // 界面发生修改根据模型发生变化 所以要在vuex里面保存isChecked状态
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}

</script>

<style scoped>
.checked-button {
  text-align: center;
}
.iconfont {
  color: #fff;
  font-size: 20px;
  border: 1px solid #ccc;
  border-radius: 50%;
}

.check {
  color: red;
  border-color: red;
}
</style>
