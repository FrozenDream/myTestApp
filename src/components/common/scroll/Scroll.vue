<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
import ObserveDOM from '@better-scroll/observe-dom'
import ObserveImage from '@better-scroll/observe-image'
import MouseWheel from '@better-scroll/mouse-wheel'

BScroll.use(MouseWheel)
BScroll.use(ObserveImage)
BScroll.use(ObserveDOM)
BScroll.use(Pullup)

export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true,
      ObserveImage: true,
      mouseWheel: true,

      click: true,
      tap: 'tap',
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    if (this.probeType == 2 || this.probeType == 3) {
      this.scroll.on('scroll', (position) => {
        // console.log(position);
        this.$emit('scroll', position)
      })
    }
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }
  },
  methods: {
    scrollTo(x, y, time) {
      // 滚动到指定位置
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      // 上拉加载更多
      this.scroll && this.scroll.finishPullUp()
    },
    getScrollY() {
      // 获取滚动的Y值 用于保持离开时Home的状态
      return this.scroll ? this.scroll.y : 0
    }
  },

}

</script>

<style scoped>
</style>
