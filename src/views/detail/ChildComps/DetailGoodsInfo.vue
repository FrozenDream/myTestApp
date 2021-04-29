<template>
  <div class="goods-info" v-if="Object.keys(goodsInfo).length !== 0">
    <div class="goods-title">{{ goodsInfo.title }}</div>
    <div class="goods-price">
      <span class="new-price">{{ goodsInfo.newPrice }}</span>
      <span class="old-price" v-if="goodsInfo.oldPrice">{{
        goodsInfo.oldPrice
      }}</span>
      <span class="discountDesc" v-if="goodsInfo.discountDesc">{{
        goodsInfo.discountDesc
      }}</span>
    </div>
    <div class="goods-other">
      <div>{{ goodsInfo.columns[0] }}</div>
      <div>{{ goodsInfo.columns[1] }}</div>
      <div>{{ goodsInfo.services[goodsInfo.services.length - 1].name }}</div>
    </div>
    <div class="goods-services">
      <div
        class="goods-services-item"
        v-for="index in goodsInfo.services.length - 1"
        :key="index"
      >
        <img
          :src="goodsInfo.services[index - 1].icon"
          v-if="goodsInfo.services[index - 1].icon"
          alt=""
        />
        <span>{{ goodsInfo.services[index - 1].name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },

}

</script>

<style scoped>
.goods-info {
  font-size: 16px;
  padding: 10px;
  color: #333;
}
.goods-price {
  margin-top: 10px;
}
.new-price {
  color: var(--color-high-text);
}
.old-price {
  font-size: 14px;
  color: #ccc;
  text-decoration: line-through;
  margin-left: 5px;
}
.discountDesc {
  position: relative;
  top: -6px;
  right: -5px;
  display: inline-block;
  /* width: 70px; */
  padding: 0 15px;
  height: 18px;
  background-color: var(--color-tint);
  border-radius: 10px;
  text-align: center;
  line-height: 18px;
  font-size: 14px;
  color: #fff;
}
.goods-other {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #666;
  margin-top: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #ccc;
}
.goods-services {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
.goods-services-item img {
  width: 15px;
  height: 15px;
  vertical-align: middle;
}
</style>
