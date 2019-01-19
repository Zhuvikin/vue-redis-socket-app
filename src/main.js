import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Logs from './components/Logs'
import Data from './components/Data'
import AddData from './components/AddData'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
    {path: '*', redirect: '/addData'},
    {path: '/logs', component: Logs},
    {path: '/data', component: Data},
    {path: '/addData', component: AddData},
]

const router = new VueRouter({
    routes,
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
