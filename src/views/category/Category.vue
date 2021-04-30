<template>
  <div class="category">
    <nav-bar class="nav-bar"
      ><template v-slot:center><h2>商品分类</h2></template></nav-bar
    >
    <div class="cateListItem">
      <scroll class="content content-left" :probe-type="3" :pull-up-load="true">
        <div class="item-left">
          <ul>
            <li
              v-for="(item, index) in categorys"
              :class="{ active: currentIndex === index }"
              @click="itemClick(index)"
            >
              {{ item.title }}
            </li>
          </ul>
        </div>
      </scroll>
      <scroll class="content" :probe-type="3" :pull-up-load="true">
        <div class="item-right">
          <div
            class="right-list"
            v-for="(item, index) in maitKeyList"
            :key="index"
          >
            <img :src="item.image" alt="" />
            <div class="title">{{ item.title }}</div>
          </div>
        </div>
        <tab-control
          :titles="['综合', '新品', '销量']"
          ref="tabControl"
          class="tabControl"
          @tabClick="tabClick"
        />
        <goods-list :goods="showCate" />
      </scroll>
    </div>
  </div>
</template>

<script>
// 公共组件
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import tabControl from 'components/content/tabControl/tabControl'
import GoodsList from 'components/content/goods/GoodsList'
// 子组件
// 网络请求.
import { getCategory, getSubcategory, getCategoryDetail } from 'network/category'
export default {
  name: 'Category',
  components: {
    NavBar,
    Scroll,
    tabControl,
    GoodsList
  },
  data() {
    return {
      categorys: [],
      maitKeys: '',
      currentIndex: 0,
      maitKeyList: [],
      categorysData: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      },
      // 请求miniWallkey参数
      miniWallkey: null,
      goodsType: 'pop'
    }
  },
  created() {
    // 页面初始化数据
    this.getCategory()
    this.getSubcategory('3627')
    // 点击左边分类动态绑定当前点击的miniWallkey
    // 右边页面商品推荐初始化数据
    this.getCategoryDetail('10062603', 'pop')
    this.getCategoryDetail('10062603', 'new')
    this.getCategoryDetail('10062603', 'sell')
  },
  computed: {
    showCate() {
      return this.categorysData[this.goodsType].list
    },
  },
  methods: {
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
    },

    // 商品左边分类
    getCategory() {
      getCategory().then(res => {
        this.categorys = res.data.category.list

      })
    },
    // 右边分类
    getSubcategory(maitKey) {
      getSubcategory(maitKey).then(res => {
        this.maitKeyList = res.data.list
      })
    },
    // 点击当前左边分类请求分类右边数据
    itemClick(index) {
      this.currentIndex = index
      this.maitKeys = this.categorys[index].maitKey
      this.getSubcategory(this.maitKeys)
      // 可以获取miniWallkey
      this.miniWallkey = this.categorys[index].miniWallkey
      // console.log(this.miniWallkey);
      // 动态获取当前左边分类按钮
      this.getCategoryDetail(this.categorys[index].miniWallkey, 'pop')
      this.getCategoryDetail(this.categorys[index].miniWallkey, 'new')
      this.getCategoryDetail(this.categorys[index].miniWallkey, 'sell')
    },
    // 请求分类页商品数据
    getCategoryDetail(miniWallkey, type) {
      getCategoryDetail(miniWallkey, type).then(res => {
        // 动态获取类型 点击后先清空数组
        // this.categorysData[type].list = []
        // this.categorysData[type].list.push(...res)
        this.categorysData[type].list = res
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
  height: calc(100vh - 49px - 39px);
  overflow: hidden;
}
.content-left {
  flex-shrink: 0;
}
.active {
  border-left: 3px solid #ff8198;
  color: #ff8198;
  background-color: #fff !important;
}
.cateListItem {
  display: flex;
}

.cateListItem .item-left li {
  width: 100px;
  height: 40px;
  background-color: #f1f1f1;
  text-align: center;
  line-height: 40px;
}
.item-right {
  flex: 1;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 5px;
}
.item-right img {
  width: 60px;
  height: 60px;
}

.right-list {
  width: 70px;
  height: 80px;
  margin-top: 20px;
}
/* .tabControl {
  position: absolute;
  right: 0;
  bottom: 0;
} */
</style>
