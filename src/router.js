import Vue from 'vue';
import Router from 'vue-router';
import store from "@/store";
Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('./views/Home/'),
        },
        {
            path: '/googleLogin',
            name: 'googleLogin',
            component: () => import('./views/GoogleLogin/'),
        },
        {
            path: '/sendEmail',
            name: 'sendEmail',
            component: () => import('./views/SendEmail/'),
        },
        {
            path: '/collapse',
            name: 'collapse',
            component: () => import('./views/Collapse/'),
        }
    ]
})

export default router;
