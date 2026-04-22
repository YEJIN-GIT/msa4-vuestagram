import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './routes/router.js';
import { createPinia } from 'pinia';

createApp(App)
.use(router)
.use(createPinia()) // 피니아 등록
.mount('#app');