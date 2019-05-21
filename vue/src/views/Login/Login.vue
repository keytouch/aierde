<template>
  <div class="login">
    <h3 class="title">爱尔德</h3>
    <mt-field label="账号" v-model="loginForm.account" type="text"  placeholder="请输入账号"></mt-field>
    <mt-field label="密码" v-model="loginForm.password" type="password" placeholder="请输入密码"></mt-field>
    <mt-button class="login-button" type="primary" size="large" @click.native="login">登录</mt-button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "Login",
    data(){
      return{
        loginForm:{
          account:'',
          password:''
        },
      }
    },
    methods:{
      login(){
        if(this.loginForm.account=="root" && this.loginForm.password=="123456"){
          sessionStorage.setItem("account",this.loginForm.account);
          this.$router.push({ path: '/' });
        }else{
          this.$messagebox("账号或密码错误！");
        }
      }
    }
  };
</script>

<style>

</style>
