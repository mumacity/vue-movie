<!--  -->
<template>
   <div class="header" :style="{background:$store.state.bgColor}">
    <h2>{{$store.state.title}}</h2>
  </div>
</template>
<script>
export default {

};
</script>
<style scoped>
.header{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 1rem;
    display: flex;
    color:#fff;
}

.header h2{
    flex: 1;
    line-height: 1rem;
    text-align: center;
}
</style>
