<template>
  <div class="cart-list">
    <cart-list-item
      v-for="(item, index) in cartList"
      :key="index"
      :item-info="item"
      @subtract="subtract(index)"
      @increase="increase(index)"
      @del="del(index)"
    />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import CartListItem from './CartListItem'
export default {
  name: 'CartList',
  components: {
    CartListItem
  },
  computed: {

    ...mapGetters(['cartList'])
  },
  methods: {
    ...mapMutations(['deToCart', 'inToCart']),
    subtract(index) {
      // 通过actions进行一系列操作后再修改mutation的值
      this.$store.dispatch('deCart', index)
      if (this.cartList[index].count <= 0) {
        this.$toast.show('商品已经不能再减了。如不需要请删除该商品')
      }
      // 直接修改mutation的值
      // this.deToCart(index)
      // this.cartList[index].count -= 1
    },
    increase(index) {
      // 通过actions进行一系列操作后再修改mutation的值
      this.$store.dispatch('inCart', index)
      // 直接修改mutation的值
      // this.inToCart(index)
      // this.cartList[index].count += 1
    },
    del(index) {
      this.$store.dispatch('delCart', index)
    }
  }
}

</script>

<style scoped>
</style>
