export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 查找之前的数组(cartList)中是否有商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct) {
        // 如果oldProduct 有商品 则数量加1
        // oldProduct.count += 1
        context.commit('addCounter', oldProduct)
        resolve('当前商品数量加1,当前商品数量为：' + oldProduct.count)
      } else {
        // 如果oldProduct没有商品 则赋值创建变量 count = 1
        payload.count = 1
        // 并且添加新的商品
        // context.state.cartList.push(payload)
        context.commit('addToCart', payload)
        resolve('添加购物车成功')
      }
    })

  },
  // 减少
  deCart(context, payload) {
    context.commit('deToCart', payload)
  },
  // 增加
  inCart(context, payload) {
    context.commit('inToCart', payload)
  },
  // 删除
  delCart(context, payload) {
    context.commit('delToCart', payload)
  }
}
