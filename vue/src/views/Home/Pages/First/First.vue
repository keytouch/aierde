<template>
  <div class="first">
    <mt-swipe class="swipe">
      <mt-swipe-item v-for="swipeImg in swipeImgList" :key="swipeImg" class="swipe-item"><img :src="swipeImg" class="swipe-img"></mt-swipe-item>
    </mt-swipe>
    <div class="service-wrapper">
      <div class="service-title-row1">装修服务</div>
      <div class="service-row1"><i class="fa fa-feed"></i> 定制装修</div>
      <div class="service-row1"><i class="fa fa-legal"></i> 资讯服务</div>
      <div class="service-title-row2">安全防护</div>
      <div class="service-row2"><i class="fa fa-map-pin"></i> 关联家人</div>
      <div class="service-row2"><i class="fa fa-minus-square"></i> 关联设备</div>
    </div>
    <mt-cell title="养老资讯" is-link :to="{path:'/example' }"></mt-cell>
    <div class="aged-info-wrapper">
      <div class="aged-info" v-for="imgDesc in imgDescList" :key="title">
        <ImgDesc :imgUrl="imgDesc.imgUrl" :title="imgDesc.title" :desc="imgDesc.desc"></ImgDesc>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import ImgDesc from 'components/ImgDesc.vue'
  import swipeImg1 from './swipe1.jpg';
  import swipeImg2 from './swipe2.jpg';
  import swipeImg3 from './swipe3.jpg';

  export default {
    name: "First",
    data(){
      return{
        swipeImgList:[swipeImg1,swipeImg2,swipeImg3],
        imgDescList:[
          {
            imgUrl:swipeImg1,
            title:"123",
            desc:"444"
          },
          {
            imgUrl:swipeImg2,
            title:"12",
            desc:"444445234234234"
          },
          {
            imgUrl:swipeImg3,
            title:"333",
            desc:"444445234234234"
          },
          {
            imgUrl:swipeImg1,
            title:"124453",
            desc:"444445234234234"
          },
          {
            imgUrl:swipeImg2,
            title:"1233333",
            desc:"444445234234234"
          }
        ]
      }
    },
    components:{
      ImgDesc
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .first
    width:100%
    margin:0
    padding-bottom:50px
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
      .service-title-row1
        float:left
        width:40%
        line-height:50px
        margin:1%
        text-align :center
        border-radius :5px
        color:white
        background-color :#ffa07aee
      .service-title-row2
        float:left
        width:40%
        line-height:50px
        margin:1%
        text-align :center
        border-radius :5px
        color:white
        background-color :#87cefaee
      .service-row1
        float:left
        width: 25%
        margin:1%
        line-height:50px
        text-align :center
        border-radius :5px
        color:white
        background-color :#ffa07a88
      .service-row2
        float:left
        width: 25%
        margin:1%
        line-height:50px
        text-align :center
        border-radius :5px
        color:white
        background-color :#87cefa88
    .aged-info-wrapper
      width:95%
      .aged-info
        height:120px
        border-bottom:1px solid #eee
        padding:10px
</style>
