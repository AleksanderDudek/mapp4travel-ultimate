import Vue from 'vue';
import Router from 'vue-router';
import Countries from './components/Countries.vue';
import CountryDisplay from './components/CountryDisplay.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Countries,
    },
    {
      path: '/countries',
      name: 'countries',
      component: Countries,
    },
    {
      path: '/country/:name',
      name: 'Country',
      component: CountryDisplay,
    },
    {
      path: '/visited',
      name: 'visited',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "visited" */ './components/Visited.vue'),
    },
    {
      path: '/wantToVisit',
      name: 'wantToVisit',
      component: () => import(/* webpackChunkName: "wantToVisit" */ './components/WantToVisit.vue'),
    },
  ],
});
