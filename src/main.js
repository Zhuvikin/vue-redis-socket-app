import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'
import Vuex from 'vuex'
import createStore from './store'
import createRouter from './routes'
import { SERVER_URI } from './constants'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(new VueSocketIO({connection: SERVER_URI}))
Vue.config.productionTip = false

new Vue({
    router: createRouter(),
    store: createStore(),
    render: h => h(App),
}).$mount('#app')
