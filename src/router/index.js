// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import ImagePage from '../views/ImagePage.vue';

const routes = [
  { path: '/', component: App },
  { path: '/image-page', component: ImagePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

