<template>
  <div class="goods-list-item" @click="itemClick">
    <img v-lazy="showImage" alt="" @load="imageLoad" />
    <div class="goods-info">
      <div class="title">{{ goodsItem.title }}</div>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="iconfont">&#xe8b9;{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  computed: {
    showImage() {
      return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
    }
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    itemClick() {
      this.$router.push('/detail/' + this.goodsItem.iid)
    },
    imageLoad() {
      this.$bus.$emit('imageLoad')
    }
  },
}

</script>

<style scoped>
.goods-list-item {
  width: 48%;
  margin-right: 2px;
  font-size: 14px;
}
.goods-list-item img {
  width: 100%;
  border-radius: 10px;
}
.goods-info {
  margin-top: 5px;
  height: 44px;
  text-align: center;
}
.goods-info .title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 5px;
}
</style>
