
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import WebFont from 'webfontloader';





WebFont.load({ custom: { families: ["Poppins, Roboto"] } });
createApp(App).use(store).use(router).mount('#app')
