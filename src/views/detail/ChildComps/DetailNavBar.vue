<template>
  <nav-bar>
    <template v-slot:left>
      <div class="iconfont" @click="backClick">&#xe617;</div>
    </template>
    <template v-slot:center>
      <div class="title">
        <div
          v-for="(item, index) in titles"
          :key="index"
          :class="{ active: currentIndex == index }"
          @click="itemClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </template>
    <template v-slot:right><div></div></template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('itemClick', index)
    },
    backClick() {
      this.$router.back()
    }
  }
}

</script>

<style scoped>
.title {
  display: flex;
}
.title > div {
  flex: 1;
}
.iconfont {
  font-size: 24px;
}
.active {
  color: red;
}
</style>
