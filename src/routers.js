import HomePage from './components/Home.vue'
import AboutPage from './components/About.vue'
import {createRouter,createWebHashHistory} from 'vue-router'
import BlogPage from './components/Blog.vue'
import ContactPage from './components/Contact.vue'
import ProfPage from './components/Portfolio.vue'
import ServicePage from "./components/Services";

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
    }
]

const router = createRouter({
    history: createWebHashHistory(), //hash mode for vue js routing
    routes
})

export default router;