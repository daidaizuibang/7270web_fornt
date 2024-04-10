import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/booking/:id/update',
      name: 'update-booking',
      component: () => import('../views/BookingView.vue')
    },
    {
      path: '/booking/create',
      name: 'booking-create',
      component: () => import('../views/BookingView.vue')
    },
    {
      path: '/booking/:id',
      name: 'view-booking',
      component: () => import('../views/BookingView.vue')
    },
    {
      path: '/bookings',
      name: 'view-bookings',
      component: () => import('../views/BookingsView.vue')
    },
    {
      path: '/charts',
      name: 'charts',
      component: () => import('../views/ChartsView.vue')
    },
    {
      path: '/charts',
      name: 'charts',
      component: () => import('../views/ChartsView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/users/bookings',
      name: 'users',
      component: () => import('../views/UsersView.vue')
    }
   

  ]
})

export default router
