<!--  -->
<template>
  <div class="movie">
      <ComHeader></ComHeader>
      <MovieNav></MovieNav>
      <router-view></router-view>
      <ComFooter></ComFooter>
  </div>
</template>
<script>
import ComHeader from '@/components/common/ComHeader';
import MovieNav from '@/components/movie/MovieNav';
import ComFooter from '@/components/common/ComFooter';
export default {
  components: {
    ComHeader,
    MovieNav,
    ComFooter
  },
  mounted() {
    this.$store.dispatch('changeTitle', ['movie', 'rgb(47, 47, 47)']);
  }
};
</script>
<style scoped>
</style>
