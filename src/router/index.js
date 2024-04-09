import {createRouter, createWebHashHistory} from 'vue-router'
// import store from "@/store";

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
    },
    {
        path: '/profile',
        name: 'ProfilePage',
        component: () => import('@/views/ProfilePage.vue'),
    },
    {
        path: '/profile/notifications',
        name: 'Настройка уведомлений',
        component: () => import('@/views/NotificationsPage.vue'),
    },
    {
        path: '/profile/editName',
        name: 'Редактировать имя',
        component: () => import('@/views/EditNamePage.vue'),
    }

]

const router = createRouter({
    scrollBehavior(to,from,savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        } else {
            return { x: 0, y: 0 };
        }
    },
    history: createWebHashHistory(),
    routes
})

router.beforeEach( (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        next()
    }
    next()
})

export default router
