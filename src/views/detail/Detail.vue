<template>
  <div class="detail">
    <detail-nav-bar @itemClick="itemClick" ref="nav" />
    <scroll
      :probe-type="3"
      :pull-up-load="true"
      ref="scroll"
      class="content"
      @scroll="contentScroll"
    >
      <detail-swiper :top-images="topImages" />
      <detail-goods-info :goods-info="goods"></detail-goods-info>
      <detail-shop-info :shop-info="shopInfo" />
      <detail-product-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-goods-params :goods-params="goodsParams" ref="params" />
      <detail-commend-info :commends-info="commendsInfo" ref="commend" />
      <goods-list :goods="recommends" ref="recommends" class="recommends" />
    </scroll>
    <detail-bottom-bar @addCart="addToCart" />
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
// 子组件
import DetailNavBar from './ChildComps/DetailNavBar'
import DetailSwiper from './ChildComps/DetailSwiper'
import DetailGoodsInfo from './ChildComps/DetailGoodsInfo'
import DetailShopInfo from './ChildComps/DetailShopInfo'
import DetailProductInfo from './ChildComps/DetailProductInfo'
import DetailGoodsParams from './ChildComps/DetailGoodsParams'
import DetailCommendInfo from './ChildComps/DetailCommendInfo'
import GoodsList from 'components/content/goods/GoodsList'
import DetailBottomBar from './ChildComps/DetailBottomBar'
// 公共组件(功能组件)
import Scroll from '../../components/common/scroll/Scroll'
import { debounce } from 'common/utils'
import { backTopMixin } from 'common/mixin'
// 网络请求
import { getDetail, Goods, shopInfo, goodsParams, getRecommend } from '../../network/detail'
export default {
  name: 'Detail',
  mixins: [backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shopInfo: {},
      detailInfo: {},
      goodsParams: {},
      commendsInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopYs: null,
      currentIndex: 0
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailGoodsInfo,
    DetailShopInfo,
    DetailProductInfo,
    DetailGoodsParams,
    DetailCommendInfo,
    DetailBottomBar,
    GoodsList,
    Scroll,
  },
  created() {
    // 保存传入的iid
    this.iid = this.$route.params.iid
    // 根据iid获得商品详情页的数据
    getDetail(this.iid).then(res => {
      const data = res.result
      // 获取顶部轮播图的数据
      this.topImages = data.itemInfo.topImages
      // 获取顶部商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // 获取商铺信息
      this.shopInfo = new shopInfo(data.shopInfo)
      // 获取商品详情展示数据
      this.detailInfo = data.detailInfo
      // 获取商品参数信息
      this.goodsParams = new goodsParams(data.itemParams.info, data.itemParams.rule)
      // 获取评论的数据
      // 判断评论信息是否为空
      if (data.rate.cRate !== 0) {
        this.commendsInfo = data.rate.list[0]
      }
      // 等商品数据加载完后在获取
      // 获取各个标题对应位置的offsetTop值 以便于做点击标题跳转到对应位置
      // 不能在mouted 和 created里面直接获取 不准确 在updated离开获取的太频繁($el挂载的元素还没有渲染完成)

      // 在$nextTick(回调函数)里面获取的也不太准确
      // nextTick 是根据最新的数据 对应的DOMhi已经被渲染出来的
      // 但是图片依然是没有加载完(目前的offsetTop不包含其中的图片的(图片加载原因))
      // 需要等图片加载完成后
      this.getThemeTopYs = debounce(() => {
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44)
        this.themeTopYs.push(this.$refs.commend.$el.offsetTop - 70)
        this.themeTopYs.push(this.$refs.recommends.$el.offsetTop - 65)
        this.themeTopYs.push(Number.MAX_VALUE)
      }, 100)
    }),
      // 请求详情页推荐的数据
      getRecommend().then(res => {
        this.recommends = res.data.list
      })

  },
  methods: {
    itemClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 1000)
    },
    contentScroll(position) {
      // 判断backTop是否显示 (滚动到>1000)
      this.isShowBackTop = (-position.y) > 1000
      // 滚动到部分内容后 对应标题联动变色
      const positionY = -position.y
      // offsetTop区间判断
      for (let i = 0; i < this.themeTopYs.length - 1; i++) {
        if (this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])) {
          this.currentIndex = i
          // 获取detailNavBar的currentIndex 让其等于当前页面的this.currentIndex = i 做到变色
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
    },
    imageLoad() {
      // 监听图片是否加载完成
      this.$refs.scroll.scroll.refresh()
      this.getThemeTopYs()
    },
    addToCart() {
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      // 将商品添加到购物车里面
      // 传给mutations
      // this.$store.commit('addCart', product)
      // 传给action
      // 将商品添加到购物车后 返回信息.要现在action 使用promise里面完成操作再返回信息
      // 另一种方式需要 使用 导入mapActions  ...mapActions(['addCart']) 映射actions里面的关系
      // this.addCart(product).then(res => {
      //   console.log(res);
      // })
      this.$store.dispatch('addCart', product).then(res => {
        console.log(res);
      })
    }
  }
}

</script>

<style scoped>
.content {
  touch-action: none;
  height: calc(100vh - 49px);
  overflow: hidden;
}
.recommends {
  margin-top: 20px;
}
</style>
