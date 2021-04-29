<template>
  <div class="goods-params" v-if="Object.keys(goodsParams).length !== 0">
    <table
      class="params-rules"
      v-for="(tables, index) in goodsParams.rule"
      :key="index"
    >
      <tr v-for="(tr, indey) in tables" :key="indey">
        <td v-for="(td, indez) in tr">{{ td }}</td>
      </tr>
    </table>
    <table class="params-info">
      <tr v-for="(item, index) in goodsParams.infos" :key="index">
        <td>{{ item.key }}</td>
        <td class="value">{{ item.value }}</td>
      </tr>
    </table>
    <div class="params-img" v-if="goodsParams.image.length !== 0">
      <img :src="goodsParams.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsParams',
  props: {
    goodsParams: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}

</script>

<style scoped>
.goods-params {
  padding: 20px 15px;
  border-top: 3px solid #ccc;
}
.goods-params table {
  width: 100%;
  font-size: 16px;
}
table td {
  height: 40px;
  border-bottom: 2px solid #eee;
}
.params-info td {
  width: 30px;
  height: 40px;
  line-height: 1.5;
}
.params-info .value {
  color: var(--color-high-text);
}
.params-img img {
  width: 100%;
}
</style>
