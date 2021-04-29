<template>
  <div class="commend-info" v-if="Object.keys(commendsInfo).length !== 0">
    <div class="info-top">
      <span>用户评价</span>
      <span class="iconfont">更多&#xe600;</span>
    </div>
    <div class="info-user">
      <img :src="commendsInfo.user.avatar" alt="" />
      <span class="user-name">{{ commendsInfo.user.uname }}</span>
    </div>
    <div class="commend-content">{{ commendsInfo.content }}</div>
    <div class="commend-other">
      <span class="date">{{ showDtae }}</span>
      <span class="styles">{{ commendsInfo.style }}</span>
    </div>
  </div>
</template>

<script>
import { formatDate } from 'common/utils'
export default {
  name: 'DetailCommendInfo',
  props: {
    commendsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showDtae() {
      // 封装formatDate转换时间戳
      let date = new Date(this.commendsInfo.created * 1000)
      return formatDate(date, 'yyyy-MM-dd hh:mm')
    }
  }
}

</script>

<style scoped>
.commend-info {
  padding: 0 15px 10px;
  border-bottom: 2px solid #ccc;
}
.info-top {
  border-bottom: 2px solid #ccc;
  padding-bottom: 8px;
}
.iconfont {
  float: right;
  margin-right: 20px;
}
.info-user {
  margin-top: 15px;
}
.info-user img {
  width: 45px;
  height: 45px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
}
.commend-content {
  margin-top: 20px;
}
.commend-other {
  margin-top: 10px;
}
.commend-other .styles {
  margin-left: 8px;
}
</style>
