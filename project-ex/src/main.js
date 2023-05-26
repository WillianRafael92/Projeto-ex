import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import axios from 'axios'
import VueTheMask from 'vue-the-mask'

createApp(App).use(VueTheMask).use(store).use(router).mount('#app')
