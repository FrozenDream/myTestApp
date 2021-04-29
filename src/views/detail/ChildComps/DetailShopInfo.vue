<template>
  <div class="shop-info" v-if="Object.keys(shopInfo).length !== 0">
    <div class="shop-top">
      <img :src="shopInfo.logo" alt="" />
      <span>{{ shopInfo.title }}</span>
    </div>
    <div class="shop-content">
      <div class="shop-content-item item-left">
        <div class="shop-sells">
          <div class="sells">{{ sellCountFilter }}</div>
          <span class="sells-text">全部销量</span>
        </div>
        <div class="shop-count">
          <div class="count">{{ shopInfo.goodsCount }}</div>
          <span class="count-text">全部宝贝</span>
        </div>
      </div>
      <div class="shop-content-item item-right">
        <table>
          <tr v-for="(item, index) in shopInfo.score" :key="index">
            <td class="name">{{ item.name }}</td>
            <td class="score" :class="{ 'score-more': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ 'better-more': item.isBetter }">
              {{ item.isBetter ? "高" : "低" }}
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-botton">
      <span class="enter-shop">进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  computed: {
    sellCountFilter() {
      if (this.shopInfo.sells < 10000) return this.shopInfo.sells
      return (this.shopInfo.sells / 10000).toFixed(1) + '万'
    }
  },
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}

</script>

<style scoped>
.shop-info {
  padding: 25px 8px;
  border-top: 3px solid #ccc;
}
.shop-top img {
  width: 45px;
  height: 45px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
}
.shop-content {
  display: flex;
  margin-top: 30px;
}
.shop-content .shop-content-item {
  flex: 1;
}
.item-left {
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-top: 15px;
}
.item-left::after {
  position: relative;
  top: -5px;
  right: 0;
  content: "";
  height: 100%;
  border-right: 1px solid #ccc;
}
.sells,
.count {
  font-size: 22px;
  margin-bottom: 5px;
}
.item-right {
  margin-left: 10px;
}
.item-right table td {
  padding: 5px 7px;
}
.item-right .score {
  color: #5ea732;
}
.item-right .better {
  background-color: #5ea732;
  color: #fff;
  text-align: center;
}
.item-right .score-more {
  color: #f13e3a;
}
.item-right .better-more {
  background-color: #f13e3a;
}
.shop-botton {
  margin-top: 20px;
  text-align: center;
}
.enter-shop {
  padding: 8px 30px;
  background-color: #ddd;
  border-radius: 10px;
  cursor: pointer;
}
</style>
