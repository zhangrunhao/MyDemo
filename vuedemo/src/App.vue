// 组件
<template>
  <div id="app">
    <router-view
    class="view"
    kepp-alive
    transtion
    transtion-mode="out-in">
    </router-view>
  </div>
</template>

// JS
<script>
export default {
  components: {}
}
</script>

// 样式
<style lang="scss">
  @import  "./style/style"
</style>
