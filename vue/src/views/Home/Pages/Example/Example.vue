<template>
  <div class="example">
    <!--<mt-search v-model="searchText" :result="searchResult"></mt-search>-->
    <div class="example-wrapper">
      <div class="example-item" v-for="imgDesc in imgDescList" :key="imgDesc.title">
        <ImgDesc :imgUrl="imgDesc.imgUrl" :title="imgDesc.title" :desc="imgDesc.desc"></ImgDesc>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">

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
           imgUrl:"img",
           title:"123",
           desc:"444"
         },
         {
           imgUrl:"img",
           title:"12",
           desc:"444445234234234"
         },
         {
           imgUrl:"img",
           title:"333",
           desc:"444445234234234"
         },
         {
           imgUrl:"img",
           title:"124453",
           desc:"444445234234234"
         },
         {
           imgUrl:"img",
           title:"1233333",
           desc:"444445234234234"
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
    .example-wrapper
      width: 95%
      .example-item
        height:120px
        border-bottom:1px solid #eee
        padding:10px
</style>
