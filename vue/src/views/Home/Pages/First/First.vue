<template>
  <div class="first">
    <mt-swipe class="swipe">
      <mt-swipe-item v-for="swipeImg in swipeImgList" :key="swipeImg" class="swipe-item"><img :src="swipeImg" class="swipe-img"></mt-swipe-item>
    </mt-swipe>
    <div class="service-wrapper">
      <div class="service">装修服务</div>
      <div class="service">定制装修</div>
      <div class="service">资讯服务</div>
      <div class="service">安全防护</div>
      <div class="service">关联家人</div>
      <div class="service">关联设备</div>
    </div>
    <mt-cell title="养老资讯" is-link :to="{path:'/example' }"></mt-cell>
    <div class="aged-info">

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import swipeImg1 from './swipe1.jpg';
  import swipeImg2 from './swipe2.jpg';
  import swipeImg3 from './swipe3.jpg';

  export default {
    name: "First",
    data(){
      return{
        swipeImgList:[swipeImg1,swipeImg2,swipeImg3]
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .first
    width:100%
    margin:0
    padding:0
    .mint-swipe
      height:200px
      text-align: center;
      margin-bottom: 20px;
      .mint-swipe-items-wrap
        width:100%
        .mint-swipe-item
          width:100%
          .swipe-img
            width:100%
            height:100%
    .service-wrapper
      margin-left:2%
      height:150px
      .service
        float:left
        width: 30%
        margin:1%
        line-height:50px
        text-align :center
        border:1px solid #eee
        border-radius :5px
    .aged-info
      height:30px
</style>
