import Vue from 'vue';
import App from './App.vue';

import router from './router'
import store from './store'

//Connect
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

//Styles
import { BootstrapVue } from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = true;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
