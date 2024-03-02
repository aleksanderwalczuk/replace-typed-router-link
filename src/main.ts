import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import AppLink from './components/AppLink.vue';
import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from 'vue-router/auto';

const history = import.meta.env.SSR
  ? createMemoryHistory(import.meta.env.BASE_URL)
  : createWebHistory(import.meta.env.BASE_URL);

const router = createRouter({
  history,
});

router.beforeEach((route) => {
  console.log(route.meta);
});

createApp(App).use(router).mount('#app');
