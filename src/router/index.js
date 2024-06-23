import { createRouter, createWebHistory } from '@ionic/vue-router';
import OrderView from '@/views/OrderView.vue';
import OrderDetailsView from '@/views/OrderDetailsView.vue';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/order',
    name: 'order',
    component: OrderView
  },
  {
    path: '/orderdetails/:id',
    name: 'orderdetails',
    component: OrderDetailsView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
