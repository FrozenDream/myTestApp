<template>
  <div class="bottom-bar">
    <div class="allCheck">
      <checked-button
        class="checked-button"
        :is-checked="isSelectAll"
        @click.native="checkClick"
      />
      <span>全选</span>
    </div>
    <div class="total">合计:{{ totalPrice }}</div>
    <div class="calc">去计算:{{ cartLength }}</div>
  </div>
</template>

<script>
import CheckedButton from 'components/content/checkButton/CheckButton'
export default {
  name: 'CartBottomBar',
  components: {
    CheckedButton
  },
  computed: {
    // 计算总价格
    totalPrice() {
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    cartLength() {
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    isSelectAll() {
      // 如果购车车为空时，全选按钮不选中
      if (this.$store.state.cartList.length === 0) return false
      // 使用filter 判断是否全选 创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素
      // return !(this.$store.state.cartList.filter(item => !item.checked).length)
      // 使用find 判断是否全选  当数组中的元素在测试条件时返回 true 时, find() 返回符合条件的元素，之后的值不会再调用执行函数
      // return !this.$store.state.cartList.find(item => !item.checked)
      // 使用every 判断是否全选 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测
      // 普通遍历
      // for (let item of this.$store.state.cartList) {
      //   if (!item.checked) {// 判断 如果有一个不选中 则全选不选中
      //     return false
      //   }
      // }
      // return true
      return this.$store.state.cartList.every(item => item.checked)

    }
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) { // 如果全部都是选中状态 点击取消全部选中
        this.$store.state.cartList.forEach(item => item.checked = false)
      } else {// 如果原来有一些没有全部选中 点击则全部选中
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    }
  }
}

</script>

<style scoped>
.bottom-bar {
  display: flex;
  /* justify-content: space-around; */
  position: fixed;
  bottom: 46px;
  left: 0;
  right: 0;
  height: 44px;
  background-color: #f1f1f1;
  line-height: 44px;
  font-size: 16px;
}
.allCheck {
  width: 80px;
  padding-left: 26px;
}
.checked-button {
  position: absolute;
  left: 0;
  top: 0;
}
.total {
  flex: 1;
}
.calc {
  width: 100px;
  color: #fff;
  background-color: red;
  text-align: center;
}
</style>
