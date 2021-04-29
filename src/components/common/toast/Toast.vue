<template>
  <div class="toast" v-show="isShow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      isShow: false,
      message: ''
    }
  },
  methods: {

  },
}

</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
  transform: translate(-50%, -50%);
  padding: 10px 10px;
  border-radius: 10px;
}
</style>
