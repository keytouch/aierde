<template>
  <div class="activity">
    <div class="img-wrapper">
      <img :src="imgUrl"/>
    </div>
    <div class="name-wrapper">活动名称：{{name}}</div>
    <div class="time-wrapper">活动时间：{{time}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      imgUrl:String,
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
