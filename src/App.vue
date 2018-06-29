<template>
  <div id="app">
    <keep-alive> <!--优化性能：路由de内容加载过一次，就将其缓存，下一次进入页面就不执行钩子函数-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
