<template>
  <div class="home">
    <nav-bar class="nav-bar"
      ><template v-slot:center><h2>购物街</h2></template></nav-bar
    >
    <tab-control
      :titles="['流行', '精选', '新款']"
      @tabClick="tabClick"
      ref="tabControl2"
      class="tabControl"
      v-show="isTabFixed"
    />
    <scroll
      class="content"
      :probe-type="3"
      :pull-up-load="true"
      ref="scroll"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        class="home-swiper"
        @swiperImage.once="swiperImage"
      ></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-popula />
      <tab-control
        :titles="['流行', '精选', '新款']"
        @tabClick="tabClick"
        ref="tabControl1"
      />
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="backTop" />
  </div>
</template>

<script>
// 子组件
import HomeSwiper from './ChildComps/HomeSwiper'
import HomeRecommend from './ChildComps/HomeRecommend'
import HomePopula from './ChildComps/HomePopula'
// 公共组件(功能组件)
import NavBar from 'components/common/navbar/NavBar'
import tabControl from 'components/content/tabControl/tabControl'
import Scroll from '../../components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'
// 网络请求
import { getHomeMultidata, getHomeGoods } from 'network/home'
export default {
  name: 'Home',
  components: {
    HomeSwiper,
    HomeRecommend,
    HomePopula,
    GoodsList,
    NavBar,
    tabControl,
    Scroll, BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      goodsType: 'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      saveY: 0,
      isTabFixed: false
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.goodsType].list
    },
  },
  created() {
    // 请求多个数据
    this.getHomeMultidata()

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  mounted() {
    // 监听goodslistitem里面的图片加载完成
    this.$bus.$on('imageLoad', () => {
      this.$refs.scroll.scroll.refresh()
    })
  },
  activated() {
    // 刷新
    this.$refs.scroll.scroll.refresh()
    //  离开页面后 重新进来的时候保持离开时的位置
    this.$refs.scroll.scrollTo(0, this.saveY, 0)

  },
  deactivated() {
    // 保存 Y 值用于保持离开时Home的状态
    this.saveY = this.$refs.scroll.getScrollY()
  },
  methods: {
    // 事件点击
    tabClick(index) {
      switch (index) {
        case 0:
          this.goodsType = 'pop'
          break
        case 1:
          this.goodsType = 'new'
          break
        case 2:
          this.goodsType = 'sell'
          break
      }
      this.$refs.tabControl1.currentindex = index
      this.$refs.tabControl2.currentindex = index
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 3000)
    },
    loadMore() {
      // 上垃加载更多
      this.getHomeGoods(this.goodsType)
      // this.$refs.scroll.finishPullUp()
      this.$refs.scroll.scroll.refresh()
    },
    contentScroll(position) {
      // 回到顶部按钮是否（Y轴滑动了多少）显示 判断backtop是否显示
      this.isShowBackTop = (-position.y) > 1000
      // 判断tabControl是否吸顶(position:fixed;)
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    swiperImage() {
      // 等轮播图加载完成后 才是tabControl 比较正确的offsetTop值
      // 获取tabControl 的offsetTop 值 以便于吸顶效果的实现
      this.tabOffsetTop = this.$refs.tabControl1.$el.offsetTop
    },
    // 请求数据
    // 请求首页数据
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // 获取首页轮播图数据
        this.banners = res.data.banner.list
        // 获取首页推荐数据
        this.recommends = res.data.recommend.list
      })
    },
    // 请求首页商品数据
    getHomeGoods(type) {
      // 页数
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        // 获取新数据时页码加1
        this.goods[type].page += 1
        this.$refs.scroll.finishPullUp()
      })
    }
  }
}

</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  touch-action: none;
  height: calc(100vh - 49px);
  overflow: hidden;
}
</style>
