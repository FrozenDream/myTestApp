<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
}

</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
#tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  text-align: center;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.1);
}
</style>
