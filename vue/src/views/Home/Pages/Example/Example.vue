<template>
  <div class="example">
    <div class="search">
      <mt-search v-model="searchText" :result="searchResult"></mt-search>
    </div>

    <div class="example-wrapper">
      <div class="example-item" v-for="imgDesc in imgDescList" :key="imgDesc.title">
        <ImgDesc :imgUrl="imgDesc.imgUrl" :title="imgDesc.title" :desc="imgDesc.desc"></ImgDesc>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import img1 from './img1.png'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
  import ImgDesc from 'components/ImgDesc.vue'
  export default {
    name: "Example",
    data(){
     return{
       searchText:"",
       defaultResult: [
         'Apple',
         'Banana',
         'Orange',
         'Durian',
         'Lemon',
         'Peach',
         'Cherry',
         'Berry',
         'Core',
         'Fig',
         'Haw',
         'Melon',
         'Plum',
         'Pear',
         'Peanut',
         'Other'
       ],
       imgDescList:[
         {
           imgUrl:img1,
           title:"单人自理床（自然风格经济型）",
           desc:"适老化设计:床尾设计抓握横杆，可以作为扶手使用，\
           美观同时兼顾老人行走时抓握，还可防止杯子掉落等功能；护栏采用木纹色，\
           增加温馨感。床底镂空设计，方便清洁地面以及防潮；大圆角设计，安全，\
           保护老人不易受伤；实木框架结构，经久耐用。"
         },
         {
           imgUrl:img2,
           title:"老人智能定位拐杖",
           desc:"一个拐杖，随时随地，为您保驾护航\
           一个报警器，危急时报警，为您争取宝贵时间。\
           一个方便的手机，可拨打两个紧急联系人电话。\
           一个MP3，自带TF卡，听自己喜欢的评书，戏曲，歌曲\
           一个收音，随时可以打开收音机听你喜欢的频道\
           一个手电筒，黑暗中照亮光明，让您不再惊慌害怕"
         },
         {
           imgUrl:img3,
           title:"马桶助力架",
           desc:"老年人常有关节炎等膝关节疾病，由于膝关节软骨表面被破坏，\
           常会造成下蹲，站立与坐下都困难。以至于越来越多的家庭存在着这样的一个问题：\
           厕所马桶太矮，老年人如厕起身坐下困难，身边没人看护如厕时更有摔倒的危险，从而导致生活质量下降。\
           这款马桶助力架操作简单，对墙壁和地面无任何破坏，拿到后，架在马桶上就可以直接用，\
           护围的宽度与高度均可调节，以适应不同体型的使用者和不同规格的马桶便器。"
         },
         {
           imgUrl:img4,
           title:"马桶垫脚凳",
           desc:"从生理结构上来说，蹲着排便更顺畅，但坐姿排便适合体力相对较弱的老人和小孩，\
           这是因为蹲着时腿部和膝盖受力较大，容易发生滑倒、骨折等意外。如今，多数家庭都安装的坐便器，\
           坐马桶时应该如何做来帮助排便呢？这款多功能垫脚凳，充分反映了自然蹲坐的角度与效率，\
           同时也让您的厕所更豪华舒适。"
         }
       ]
     }
    },
    computed:{
      searchResult(){
        return this.defaultResult.filter(value => new RegExp(this.searchText, 'i').test(value));
      }
    },
    components:{
      ImgDesc
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .example
    .search
      height:60px
    .example-wrapper
      width: 95%
      .example-item
        height:120px
        border-bottom:1px solid #eee
        padding:10px
</style>
