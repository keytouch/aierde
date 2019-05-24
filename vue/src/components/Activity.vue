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

</style>
