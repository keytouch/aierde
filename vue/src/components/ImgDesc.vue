<template>
<div class="img-desc">

    <div class="left">
        <img class="pic" :src="imgUrl"/>
    </div>

    <div class="right">
        <div class="title">{{title}}</div>
        <div class="desc">{{desc}}</div>
    </div>
</div>
</template>
<script>
export default {
    name:"ImgDesc",
    props:{
      imgUrl:String,
      title:String,
      desc:String
    },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.img-desc
  clear:both
  width:100%
  height:100%
  margin-left 20px
  .left
    float:left
    height 100px
    width:35%
    .pic
      height:100%
      width:100%
  .right
    width:55%
    height:100%
    float:left
    margin-left:20px
    overflow:hidden
    .title
      font-size :18px
      font-weight :700
    .desc
      margin-top :10px
      font-size:14px
</style>

