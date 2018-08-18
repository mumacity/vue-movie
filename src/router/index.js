import Vue from 'vue';
import Router from 'vue-router';
import Movie from '@/components/movie/Movie';
import MovieTop250 from '@/components/movie/MovieTop250';
import MovieHot from '@/components/movie/MovieHot';
import MovieComing from '@/components/movie/MovieComing';
import Music from '@/components/music/Music';
import Book from '@/components/book/Book';
import Photo from '@/components/photo/Photo';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/movie/top250'
    },
    {
      path: '/movie',
      redirect: '/movie/top250'
    },
    {
      path: '/',
      name: 'Movie',
      component: Movie,
      children: [
        {
          path: '/movie/top250',
          name: 'MovieTop250',
          component: MovieTop250
        },
        {
          path: '/movie/hot',
          name: 'MovieHot',
          component: MovieHot
        },
        {
          path: '/movie/coming',
          name: 'MovieComing',
          component: MovieComing
        }
      ]
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/photo',
      name: 'Photo',
      component: Photo
    }
  ]
});
