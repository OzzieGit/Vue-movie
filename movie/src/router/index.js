import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/page/movie'
import MovieList from '@/page/movieList'
import Search from '@/page/search'
import SearchList from '@/page/searchList'
import Details from '@/page/details'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'Movie',
      component: Movie
    },{
      path: '/MovieList',
      name: 'MovieList',
      component: MovieList
    },{
      path: '/Search',
      name: 'Search',
      component: Search
    },{
      path: '/SearchList',
      name: 'SearchList',
      component: SearchList
    },{
      path: '/Details',
      name: 'Details',
      component: Details
    }
  ]
})
