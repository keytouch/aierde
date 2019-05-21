<template>
  <div class="home">
    <router-view/>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="/first">
        首页
      </mt-tab-item>
      <mt-tab-item id="/example">
        样例
      </mt-tab-item>
      <mt-tab-item id="/community">
        社区
      </mt-tab-item>
      <mt-tab-item id="/person">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "Home",
    data(){
      return{
        selected:"/first"
      }
    },
    watch:{
      selected(val){
        this.$router.push(val)
      }
    }
  };
</script>

<style>

</style>
