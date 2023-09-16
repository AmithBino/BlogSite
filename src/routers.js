import HomePage from './components/Home.vue'
import AboutPage from './components/About.vue'
import {createRouter,createWebHashHistory} from 'vue-router'
import BlogPage from './components/Blog.vue'
import ContactPage from './components/Contact.vue'
import ProfPage from './components/Portfolio.vue'
import ServicePage from "./components/Services";
import WorkPage from "./components/Work.vue";
import BlogDetail from "./components/BlogDetails.vue";

const routes=[
    {
        name:'HomePage',
        component : HomePage,
        path:'/'
    },
    {
        name:'AboutPage',
        component: AboutPage,
        path:'/about'
    },
    {
        name:'BlogPage',
        component: BlogPage,
        path: '/blog'
    },
    {
        name:'ContactPage',
        component: ContactPage,
        path: '/contact'
    },
    {
        name:'ProfPage',
        component: ProfPage,
        path: '/portfolio'
    },
    {
        name:'ServicePage',
        component:ServicePage,
        path: '/services'
    },
    {
        name:'WorkPage',
        component:WorkPage,
        path: '/portfolio/work'
    },
    {
        name:'BlogDetail',
        component:BlogDetail,
        path:'/blog/blogdetail'
    }
]

const router = createRouter({
    history: createWebHashHistory(), 
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else if (to.hash) {
            return { el: to.hash, behavior: 'smooth' };
        } else {
            return { top: 0, behavior: 'smooth' };
        }
    }
})

export default router;