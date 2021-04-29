<template>
  <div class="bottom-bar">
    <div class="bar-item item-left">
      <div>
        <span class="iconfont customer">&#xe604;</span>
        <p>客服</p>
      </div>
      <div>
        <span class="iconfont">&#xe603;</span>
        <p>店铺</p>
      </div>
      <div>
        <span class="iconfont">&#xe8b9;</span>
        <p>收藏</p>
      </div>
    </div>
    <div class="bar-item item-right">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    addCart() {
      this.$emit('addCart')
    }
  }
}

</script>

<style scoped>
.bottom-bar {
  display: flex;
  height: 49px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 12;
  background: #fff;
}
.bottom-bar .bar-item {
  flex: 1;
  display: flex;
  justify-content: space-around;
  margin-top: 5px;
  text-align: center;
}
.iconfont {
  font-size: 20px;
}
.customer {
  color: var(--color-high-text);
}
.bottom-bar .item-left > div > p {
  margin-top: 3px;
}
.bottom-bar .item-right {
  display: flex;
  line-height: 49px;
}
.item-right > div {
  flex: 1;
}
.cart {
  background-color: #ffde0f;
}
.buy {
  color: #fff;
  background-color: #ff789a;
}
</style>
