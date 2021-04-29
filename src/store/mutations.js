export default {
  addCounter(state, payload) {
    payload.count++
  },
  addToCart(state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  },
  // 减少商品
  deToCart(state, payload) {
    if (state.cartList[payload].count <= 0) {
      return false
    }
    state.cartList[payload].count -= 1
  },
  // 增加商品
  inToCart(state, payload) {
    state.cartList[payload].count += 1
  },
  delToCart(state, payload) {
    state.cartList.splice(payload, 1)
  }
}
