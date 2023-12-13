<!-- src/App.vue -->

<template>
  <div>
    <h1>{{ message }}</h1>
    <p>{{ description }}</p>
    <button @click="changeMessage">更改消息666666666</button>
    <!-- 使用 router-link 添加到 ImagePage.vue 的链接 -->
    <router-link to="/image-page">跳转到图片页面</router-link>

    <!-- 添加一个按钮，通过方法跳转到图片页面 -->
    <button @click="goToImagePage">跳转到图片页面</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '欢迎使用Vue.js',
      description: '这是一个简单的Vue主界面示例',
    };
  },
  methods: {
    changeMessage() {
      this.message = '消息已被更改！';
    },
    goToImagePage() {
      // 使用 $router.push 方法跳转到指定路径
      this.$router.push('/image-page');
    },
  },
};
</script>

<style scoped>
/* 这里可以添加样式 */
</style>
