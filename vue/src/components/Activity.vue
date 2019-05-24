<template>
  <div class="activity">
    <mt-swipe class="img-swipe">
      <mt-swipe-item v-for="img in imgList" :key="img" class="swipe-item"><img :src="img" class="swipe-img"></mt-swipe-item>
    </mt-swipe>
    <div class="name-wrapper">活动名称：{{name}}</div>
    <div class="time-wrapper">活动时间：{{time}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      imgList:Array,
      name:String,
      time:String
    },
    name: "Activity"
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
.activity
  width:100%
  margin:0
  padding-bottom:50px
  .mint-swipe
    height:180px
    text-align: center;
    margin-bottom: 20px;
    
    .mint-swipe-items-wrap
      .mint-swipe-item
        width:100%
        .swipe-img
          width:100%
          height:100%
</style>
