import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import config from "@/config";
import Router from "vue-router"
import main from "@/layout/main";
import Home from "@/views/Home";
import Categorias from "@/views/Categorias";
import Categoria from "@/views/Categoria";
import Post from "@/views/Post";
import axios from 'axios';
import Login from "@/views/Login";

axios.defaults.baseURL = config.url;

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: config.url,
    routes: [{
        component: main,
        path: '/',
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/',
                name: 'auth',
                component: Login
            },
            {
                path: '/categoria/:id',
                name: 'categoria',
                component: Categoria
            },
            {
                path: '/categorias',
                name: 'categorias',
                component: Categorias
            },
            {
                path: '/post/:id',
                name: 'post',
                component: Post
            }
        ]
    }]
})


new Vue({
    render: h => h(App),
    router,
    axios
}).$mount('#app')
