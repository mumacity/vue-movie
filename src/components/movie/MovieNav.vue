<!--  -->
<template>
  <nav>
    <ul>
      <li><router-link :to="{name:'MovieTop250'}">top250</router-link></li>
      <li><router-link :to="{name:'MovieHot'}">正在热映</router-link></li>
      <li><router-link :to="{name:'MovieComing'}">即将上映</router-link></li>
    </ul>
  </nav>
</template>
<script>
export default {

};
</script>
<style scoped>
nav{
    position: fixed;
    left: 0;
    top: 1rem;
    width: 100%;
    height: 1rem;
    background: rgb(63, 63, 63);
}
nav ul{
    display: flex;
}
nav ul li{
    flex: 1;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
}
nav a{
    color: #ccc;
}
nav a.active{
    color: #fff;
}
</style>
