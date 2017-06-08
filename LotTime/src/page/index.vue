<template>
  <div>
    <h1 class="logo">cnodejs Api Test</h1>
    <button v-on:click="goContent">跳转到内容页面</button>
    <ul class="list">
      <li v-for="item in lists" v-text="item.title"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lists: []
    }
  },
  created () {
    // 组件创建完成后获取数据, 这里和1.0不一样, 改成了这个样子
    this.get_data()
  },
  methods: {
    get_data: function (params) {
      var v = this
      if (!params) params = {}
      // 我们这里使用全局绑定的 $api方法来获取数据
      v.$api.get('topics', params, function (r) {
        v.lists = r.data
      })
    },
    goContent: function () {
      this.$router.push({
        path: '/content'
      })
    }
  }
}
</script>
