import Vue from 'vue'
import Router from 'vue-router'
import Table from '@/components/table'
import moment from 'moment'
import VueResource from 'vue-resource'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Table',
      component: Table
    }
  ]
})
