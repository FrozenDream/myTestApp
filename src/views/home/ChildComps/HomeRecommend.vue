<template>
  <div class="recommends">
    <div
      class="recommend-item"
      v-for="(item, index) in recommends"
      :key="index"
    >
      <img :src="item.image" alt="" />
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}

</script>

<style scoped>
.recommends {
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-top: 10px;
}
.recommend-item img {
  /* width: 70px; */
  height: 70px;
  background-size: contain;
}
.recommend-item p {
  margin-top: 5px;
}
</style>
