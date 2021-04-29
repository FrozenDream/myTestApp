<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item, indey) in topImages" :key="indey">
      <a href="javascript:;">
        <img :src="item" alt="" preview="indey" preview-text="描述文字" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
  name: 'DetailSwiper',
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}

</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
.detail-swiper img {
  height: 100%;
  background-size: cover;
}
</style>
