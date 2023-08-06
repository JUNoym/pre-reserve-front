// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import UserLogin from '../components/UserLogin.vue'
import Signup from '../components/Signup.vue'


const routes = [
  {
    path: '/login',
    name: 'login',
    component: UserLogin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  // 他のルート設定もこちらに
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
