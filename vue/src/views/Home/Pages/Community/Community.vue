<template>
  <div class="community">
    <div class="community-service">
      <mt-cell title="社区服务" is-link value="更多"></mt-cell>
    </div>
    <div class="activity-wrapper">
      <div class="activity-item" v-for="activity in activityList">
        <Activity :imgList="activity.imgList" :name="activity.name" :time="activity.time"></Activity>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Activity from 'components/Activity.vue'
  import image1 from './image1.jpeg'
  import image2 from './image2.jpeg'
  import image3 from './image3.jpeg'
  import image4 from './image4.jpeg'
  import image5 from './image5.jpeg'
  import image6 from './image6.jpeg'
  import image7 from './image7.jpeg'
  import image8 from './image8.jpeg'
  export default {
    name: "Community",
    components:{
      Activity
    },
    data(){
      return{
        activityList:[
          {
            imgList:[image1, image2],
            name:"志愿活动",
            time:"2019年5月19日 8：00-11：30及14：00-17：30"
          },
          {
            imgList:[image3, image4],
            name:"科普教育",
            time:"2019年5月18日 8：30-10：30"
          },
          {
            imgList:[image5, image6],
            name:"定期检查",
            time:"2019年5月25日 8：00-11：30及14：00-17：30"
          },
          {
            imgList:[image7, image8],
            name:"休闲娱乐",
            time:"2019年5月26日 8：30-10：30"
          }
        ]
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .community
    padding-bottom:50px
    .community-service
      border-bottom :1px solid #ccc
</style>
