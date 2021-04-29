<template>
  <div class="cart">
    <nav-bar class="cartNav">
      <template v-slot:center
        ><h2>购物车({{ cartLength }})</h2></template
      >
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list />
    </scroll>
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartBottomBar from './ChildComps/CartBottomBar'
import Scroll from '../../components/common/scroll/Scroll'
import CartList from './ChildComps/CartList'
import { mapGetters } from 'vuex'
export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    Scroll,
    CartBottomBar
  },
  computed: {
    // 1.
    // cartLength() {
    //   return this.$store.state.cartList.length
    // }
    // 2.在store(VUEx)里面定义getters 写进去
    // 第一种写法
    ...mapGetters(['cartLength', 'cartList']),
    // 第二种写法可以自定义名字
    // ...mapGetters({
    //   length:'cartLength',
    //   cartList:'cartList'
    // })
  },
  activated() {
    this.$refs.scroll.scroll.refresh()
  },
}

</script>

<style scoped>
.cartNav {
  color: #fff;
  background-color: #ff8198;
}
.content {
  touch-action: none;
  height: calc(100vh - 49px - 70px);
  overflow: hidden;
}
</style>
