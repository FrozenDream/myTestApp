export default {
  addCounter(state, payload) {
    payload.count++
  },
  addToCart(state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  },
  deToCart(state, payload) {
    if (state.cartList[payload].count <= 1) {
      return false
    }
    state.cartList[payload].count -= 1
  },
  inToCart(state, payload) {
    // if (state.cartList[payload].count <= 1) {
    //   return false
    // }
    state.cartList[payload].count += 1
  },
}
