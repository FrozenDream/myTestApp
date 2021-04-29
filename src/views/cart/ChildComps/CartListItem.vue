<template>
  <div class="list-item">
    <div class="item-check">
      <checked-button
        :is-checked="itemInfo.checked"
        @click.native="checkedClick"
        class="check-btn"
      />
    </div>
    <div class="item-img">
      <img :src="itemInfo.image" alt="" />
    </div>
    <div class="item-info">
      <div class="title">{{ itemInfo.title }}</div>
      <div class="desc">{{ itemInfo.desc }}</div>
      <span class="price"
        >￥{{ itemInfo.price }}
        <button class="zengjia" @click="jiafa">+</button>
        <button class="jianfa" @click="jianfa">-</button>
      </span>
      <span class="count">X{{ itemInfo.count }}</span>
    </div>
  </div>
</template>

<script>
import CheckedButton from 'components/content/checkButton/CheckButton'
export default {
  name: 'CartListItem',
  components: {
    CheckedButton
  },
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {}
      }
    },
    currentIndex: {
      type: Number
    }
  },
  methods: {
    checkedClick() {
      this.itemInfo.checked = !this.itemInfo.checked
    },
    jianfa() {
      // for (let i = 0; i < this.$store.state.cartList.length; i++) {
      //   this.currentIndex = i
      //   console.log(this.$store.state.cartList);
      // }
      this.$emit('jianfa')
    },
    jiafa() {
      this.$emit('jiafa')
    },
    shanchu() {
      this.$emit('shanchu')
    }
  }
}

</script>

<style scoped>
.jianfa,
.zengjia {
  width: 30px;
}
.list-item {
  display: flex;
  padding: 10px 2px;
}
.list-item img {
  width: 80px;
  background-size: contain;
  border-radius: 10px;
}
.item-info {
  margin-top: 15px;
  font-size: 16px;
  padding: 5px 10px;
  overflow: hidden;
}
.item-info > div {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-info .desc {
  margin-top: 10px;
  margin-bottom: 25px;
}
.price {
  color: orangered;
}
.count {
  float: right;
  margin-right: 30px;
}
.check-btn {
  margin-top: 45px;
  margin-right: 2px;
}
</style>
