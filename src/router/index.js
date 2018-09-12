import Vue from 'vue';
import Router from 'vue-router';
import ConversionForm from '../components/conversion-form'
import About from '../components/about'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Calculator',
      component: ConversionForm
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
});
