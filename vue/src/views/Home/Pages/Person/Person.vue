<template>
  <div class="person">
    <div class="account-wrapper">
      <div class="head-img-wrapper">
        <img class="head-img"/>
      </div>
      <div class="account-prompt">点击登录</div>
      <div class="setting-icon">
        <i class="fa fa-gear"></i>
      </div>
    </div>
    <div class="cell-wrapper">
      <mt-cell title="个人资料" is-link></mt-cell>
      <mt-cell title="健康数据" is-link></mt-cell>
      <mt-cell title="我的钱包" is-link></mt-cell>
      <mt-cell title="我的活动" is-link></mt-cell>
      <mt-cell title="我的设备" is-link></mt-cell>
      <mt-cell title="我的订单" is-link></mt-cell>
    </div>
    <div class="status-wrapper">
      <div class="status-item">
        <div class="icon">
          <i class="fa fa-support"></i>
        </div>
        待付款
      </div>
      <div class="status-item">
        <div class="icon">
          <i class="fa fa-tag"></i>
        </div>
        进行中
      </div>
      <div class="status-item">
        <div class="icon">
          <i class="fa fa-ticket"></i>
        </div>
        待评价
      </div>
      <div class="status-item">
        <div class="icon">
          <i class="fa fa-tint"></i>
        </div>
        已完成
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "Person"
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .person
    width: 100%
    .account-wrapper
      margin-top:20px
      width:100%
      height:80px
      line-height:100px
      .head-img-wrapper
        float:left
        display:inline-block
        width: 80px
        height:100%
        margin-left:30px
        .head-img
          height: 100%
          width:100%
      .account-prompt
        float:left
        display:inline-block
        width:100px
        height:80px
        line-height:80px
        margin-left:20px
      .setting-icon
        float:left
        display:inline-block
        height:80px
        line-height:80px
        margin-left:50px
        font-size:30px
    .cell-wrapper
      width: 100%
      margin-top:30px
    .status-wrapper
      width: 100%
      margin-top:30px
      .status-item
        display :inline-block
        width: 22%
        margin:1%
        text-align :center
        .icon
          margin:0 auto
          height:24px
          width:24px
          line-height:24px
          text-align: center
</style>
