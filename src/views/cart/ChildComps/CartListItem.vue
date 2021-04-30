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
        <button class="increase" @click="increase">+</button>
        <button class="subtract" @click="subtract">-</button>
        <button class="del" @click="del">删除</button>
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
    subtract() {
      this.$emit('subtract')
    },
    increase() {
      this.$emit('increase')
    },
    del() {
      this.$emit('del')
    }
  }
}

</script>

<style scoped>
.subtract,
.increase,
.del {
  width: 25px;
  height: 20px;
  border: 0;
  margin-right: 2px;
  line-height: 20px;
  vertical-align: middle;
}
.del {
  font-size: 12px;
  color: orangered;
  width: 40px;
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
  display: inline-block;
  height: 30px;
  color: orangered;
}
.count {
  float: right;
  margin-right: 5px;
}
.check-btn {
  margin-top: 45px;
  margin-right: 2px;
}
</style>
