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
  margin:10% auto
  width: 80%
  height:240px
  border-bottom:1px solid #ccc
  .mint-swipe
    height:140px
    text-align: center;
    margin-bottom: 20px;
    .mint-swipe-items-wrap
      width:100%
      .mint-swipe-item
        width:100%
        .swipe-img
          width:100%
          margin-top:-30px
  .img-wrapper
    margin:0 auto
    width: 80%
    height:150px
  .name-wrapper
    margin:10px
    width:100%
    height:20px
    line-height :20px
    font-size:18px
  .time-wrapper
    margin:10px
    width:100%
    height:20px
    line-height :20px
    font-size:18px
</style>
