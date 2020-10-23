import Vue from "vue";
import VueRouter from "vue-router";
import Profile from "../pages/Profile.vue"
import About from "../pages/About.vue"
import Home from "../pages/Home.vue"



Vue.use(VueRouter);


const routes = [{
        path: '/',
        component: Home,
        meta: {
            title: 'Home',

        }
    },
    {
        path: '/Profile',
        component: Profile,
        meta: {
            title: 'Profile',

        }
    },
    {
        path: '/About',
        component: About,
        meta: {
            title: 'About',

        }
    }
]
const router = new VueRouter({
    // short for `routes: routes`,
    mode: 'history',
    base: "/",
    routes,
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})
router.replace("/")

export default router;