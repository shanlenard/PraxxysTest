import { createRouter, createWebHistory } from '@ionic/vue-router';
import OrderView from '@/views/OrderView.vue';
import OrderDetailsView from '@/views/OrderDetailsView.vue';
import HomeView from '@/views/HomeView.vue';

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
    path: '/orderdetails',
    name: 'orderdetails',
    component: OrderDetailsView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
