import VueRouter from 'vue-router'
import Logs from './components/Logs'
import Data from './components/Data'
import AddData from './components/AddData'

const routes = [
    {path: '*', redirect: '/addData'},
    {path: '/logs', component: Logs},
    {path: '/data', component: Data},
    {path: '/addData', component: AddData},
]

export default () => new VueRouter({
    routes,
})
