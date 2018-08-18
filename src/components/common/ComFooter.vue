<!--  -->
<template>
  <div class="footer" :style="{background:$store.state.bgColor}">
    <ul>
      <li><router-link :to="{name:'Movie'}">电影</router-link></li>
      <li><router-link :to="{name:'Music'}">音乐</router-link></li>
      <li><router-link :to="{name:'Book'}">书籍</router-link></li>
      <li><router-link :to="{name:'Photo'}">图片</router-link></li>
    </ul>
  </div>
</template>
<script>
export default {

};
</script>
<style scoped>
.footer{
    position: fixed;
    bottom: 0;
    left:0;
    width: 100%;
    height: 1rem;
}
.footer ul{
    display: flex;
}
.footer ul li{
    flex:1;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
}
.footer a{
    color:#ccc;
    outline: 0;
}
.footer a.active{
    color: #fff;
  }
</style>
