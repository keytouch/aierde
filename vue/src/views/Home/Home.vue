<template>
  <div class="home">
    <router-view/>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="/first">
        <div slot="icon" style="line-height:24px;text-align: center;">
          <i class="fa fa-home"></i>
        </div>
        首页
      </mt-tab-item>
      <mt-tab-item id="/example">
        <div slot="icon" style="line-height:24px;text-align: center;">
          <i class="fa fa-building"></i>
        </div>
        样例
      </mt-tab-item>
      <mt-tab-item id="/community">
        <div slot="icon" style="line-height:24px;text-align: center;">
          <i class="fa fa-heart"></i>
        </div>
        社区
      </mt-tab-item>
      <mt-tab-item id="/person">
        <div slot="icon" style="line-height:24px;text-align: center;">
          <i class="fa fa-user"></i>
        </div>
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

<style lang="stylus" rel="stylesheet/stylus">

</style>
