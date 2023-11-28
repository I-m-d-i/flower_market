import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/product/:id',
        name: 'CardPage',
        component: () => import('@/views/CardPage.vue') ,
    },
    {
        path: '/basket',
        name: 'Basket',
        component: () => import('@/views/Basket.vue')
    },
    {
        path: '/payment',
        name: 'PaymentPage',
        component: () => import('@/views/PaymentPage.vue')
    }

]

const router = createRouter({
    scrollBehavior(to,from,savedPosition) {
        if (savedPosition && to.name === 'home') {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    history: createWebHashHistory(),
    routes
})

export default router
