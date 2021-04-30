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
      </scroll>
    </div>
  </div>
</template>

<script>
// 公共组件
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
// 子组件
// 网络请求.
import { getCategory, getSubcategory } from 'network/category'
export default {
  name: 'Category',
  components: {
    NavBar,
    Scroll
  },
  data() {
    return {
      categorys: [],
      maitKeys: '',
      currentIndex: 0,
      maitKeyList: []
    }
  },
  created() {
    this.getCategory()
    this.getSubcategory('3627')
  },
  methods: {
    getCategory() {
      getCategory().then(res => {
        this.categorys = res.data.category.list
      })
    },
    getSubcategory(maitKey) {
      getSubcategory(maitKey).then(res => {
        this.maitKeyList = res.data.list
        console.log(this.maitKeyList);
      })
    },
    itemClick(index) {
      this.currentIndex = index
      this.maitKeys = this.categorys[index].maitKey
      this.getSubcategory(this.maitKeys)
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
</style>
