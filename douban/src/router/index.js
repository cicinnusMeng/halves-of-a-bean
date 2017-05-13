import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/home'
import move from '@/components/page/move'
import squad from '@/components/page/squad'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/move',
        name: 'move',
        component: move
    }, {
        path: '/squad',
        name: 'squad',
        component: squad
    }]
})