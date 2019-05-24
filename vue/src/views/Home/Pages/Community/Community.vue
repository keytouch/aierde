<template>
  <div class="community">
    <div class="activity-wrapper">
      <div class="activity-item" v-for="activity in activityList">
        <Activity :imgUrl="activity.imgUrl" :name="activity.name" :time="activity.time"></Activity>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Activity from 'components/Activity.vue'
  export default {
    name: "Community",
    components:{
      Activity
    },
    data(){
      return{
        activityList:[
          {
            imgUrl:"img1",
            name:"name1",
            time:"time1"
          },
          {
            imgUrl:"img2",
            name:"name2",
            time:"time2"
          },
          {
            imgUrl:"img3",
            name:"name3",
            time:"time3"
          }
        ]
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
