<!--  -->
<template>
  <div class="music">
    <ComHeader></ComHeader>
    <router-view></router-view>
    <ComFooter></ComFooter>
  </div>
</template>
<script>
import ComHeader from '@/components/common/ComHeader';
import ComFooter from '@/components/common/ComFooter';
import Axios from 'axios';
export default {
  components: {
    ComHeader,
    ComFooter
  },
  mounted(){
      this.$store.dispatch('changeTitle',['music','rgb(0, 150, 136)','<']);
    Axios.get('../../../static/musiclist.json').then((res)=>{
        this.albums = res.data.albums;
    });
  },
  methods:{
    changeTitle(name){
        this.$store.dispatch('changeTitle',[name,'rgb(0, 150, 136)','<']);
    }
  }
};
</script>
<style scoped>

</style>
