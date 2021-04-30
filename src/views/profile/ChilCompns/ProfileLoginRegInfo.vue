<template>
  <div class="proflie">
    <div class="proflie-top">
      <div><i class="iconfont icon">&#xe646;</i></div>
      <div class="loginRge">
        <span class="proflie-reg">登录/注册</span>
        <div class="iconfont tel">&#xe60a;<span>暂无绑定手机号</span></div>
        <span class="iconfont rightpre">&#xe600;</span>
      </div>
    </div>
    <div class="proflie-bottom">
      <div class="left">
        <div class="price"><span>0.00</span>元</div>
        <span class="content">我的余额</span>
      </div>
      <div class="center">
        <div><span>0</span>个</div>
        <span class="content">我的优惠</span>
      </div>
      <div class="right">
        <div><span>0</span>分</div>
        <span class="content">我的积分</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileLoginRegInfo',
}

</script>

<style scoped>
.proflie-top {
  position: relative;
  display: flex;
  align-items: center;
  height: 100px;
  background-color: #fa563b;
  color: #fff;
  /* line-height: 100px; */
  padding: 0 20px;
}
.proflie-top .icon {
  font-size: 50px;
  color: #ccc;
  background-color: #fff;
  border-radius: 50%;
}
.proflie-reg {
  font-size: 20px;
}
.proflie-top .loginRge {
  /* width: 100%; */
  margin-left: 10px;
}
.proflie-top .loginRge .tel {
  margin-top: 5px;
}
.rightpre {
  position: absolute;
  right: 20px;
  bottom: 20px;
  font-size: 30px;
}
.proflie-bottom {
  display: flex;
  /* align-items: center; */
  text-align: center;
  height: 80px;
  background-color: #fff;
}
.proflie-bottom > div {
  flex: 1;
  height: 80px;
  padding-top: 15px;
}
.proflie-bottom > div > div > span {
  font-size: 24px;
  color: #fa563b;
}
.proflie-bottom .center {
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
.content {
  display: inline-block;
  margin-top: 5px;
}
</style>
