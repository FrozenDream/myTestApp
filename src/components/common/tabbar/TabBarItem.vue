<template>
  <div class="tab-bar-item" @click="itemClick">
    <div :style="activeStyle"><slot name="item-icon"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
    <!-- <slot name="item-icon"></slot>
    <slot name="item-text"></slot> -->
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: true,
    }
  },
  computed: {
    isActive() {
      // 动态决定isActive为true还是false
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
}

</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  font-size: 14px;
  padding-top: 5px;
  font-size: 16px;
}
</style>
