<template>
    <div class="top-250">
      <div class="movie-list" v-for="(movie,index) in movieList" :key="index">
        <div class="movie-img">
          <img :src="movie.images.small">
        </div>
        <div class="movie-title">
          <span>{{movie.title}}</span>
          <p class="movie-des"><span v-for="(genre,index) in movie.genres" :key="index">{{genre}}</span>({{movie.year}})(平均{{movie.rating.average}}分)</p>
        </div>
      </div>
    <div class="loading" v-show="show">
        <span><img src="../../assets/images/loading.gif"></span>
    </div>
  </div>
</template>
<script>
import Axios from 'axios';
import $ from 'jquery';
export default {
  data() {
    return {
      movieList: [],
      show: false
    };
  },
  mounted() {
    this.loadData();
    var _this = this;
    $(window).scroll(function() {
      var windowHeight = $(this).height();
      var scrollTop = $(this).scrollTop();
      var height = $(document).height();
      if (windowHeight + scrollTop >= height) {
        _this.show = true;
        _this.loadData();
      };
    });
  },
  methods: {
    loadData() {
      let length = this.movieList.length;
      Axios.get('/api/coming_soon?count=10&start=' + length)
        .then((res) => {
          this.movieList = this.movieList.concat(res.data.subjects);
          this.show = false;
        });
    }
  }

};
</script>
<style scoped>
.top-250{
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  .movie-list{
    padding: 0.4rem;
    margin: 0.4rem 0;
  }
  .movie-list .movie-img{
    width: 0.8rem;
    height: 0.8rem;
    float: left;
  }
  .movie-list .movie-img img{
    width: 100%;
    height: 100%;
  }
  .movie-list .movie-title{
    float: left;
    width: 5.0rem;
    margin-left: 0.6rem;
    border-bottom: 1px #ccc solid;
  }
  .movie-list .movie-title .movie-des{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .loading{
    position: fixed;
    bottom: 1rem;
    left: 3.75rem;
    margin-left: -16px;
  }
</style>
