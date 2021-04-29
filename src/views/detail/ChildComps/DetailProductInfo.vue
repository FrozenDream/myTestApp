<template>
  <div class="detail-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="desc">{{ detailInfo.desc }}</div>
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-imgs">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :src="item"
        :key="index"
        alt=""
        @load="imgLoad"
        preview="index"
        preview-text="描述文字"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailProductInfo',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }, data() {
    return {
      counter: 0,
      imagesLength: 0
    }
  },
  methods: {
    imgLoad() {
      // 判断 所有图片加载完了，那么进行一次回调就可以了
      if (++this.counter === this.imagesLength) {
        this.$emit('imageLoad')
      }
    }
  },
  watch: {
    detailInfo() {
      this.imagesLength = this.detailInfo.detailImage[0].list.length
    }
  }
}

</script>

<style scoped>
.detail-info {
  border-top: 3px solid #ccc;
  padding: 20px 10px;
}
.desc {
  line-height: 1.7;
}
.info-key {
  margin-top: 10px;
  margin-bottom: 15px;
}
.info-imgs img {
  width: 100%;
}
</style>
