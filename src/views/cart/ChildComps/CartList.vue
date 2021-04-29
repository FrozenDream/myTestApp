<template>
  <div class="cart-list">
    <cart-list-item
      v-for="(item, index) in cartList"
      :key="index"
      :item-info="item"
      @jianfa="jianfa(index)"
      @jiafa="jiafa(index)"
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
    jianfa(index) {
      this.$store.dispatch('deCart', index)
      this.deToCart()
      // this.cartList[index].count -= 1
    },
    jiafa(index) {
      this.$store.dispatch('inCart', index)
      this.inToCart()
      // this.cartList[index].count += 1
    },
  }
}

</script>

<style scoped>
</style>
