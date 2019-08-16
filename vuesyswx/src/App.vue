<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <mt-button @click.native="handleClick">按钮</mt-button>
  </div>
</template>

<script>
export default {
  el: 'app',
  methods:{
    handleClick:function () {
      //alert(11)
      this.$toast({
        message: '提示',
        position: 'middle',
        duration: 3000
      });
      /*let instance = this.$toast({message:'提示信息',position:'middle'});
      setTimeout(() => {
        instance.close();
      }, 2000);*/
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
