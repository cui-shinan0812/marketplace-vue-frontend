import { createRouter, createWebHashHistory } from 'vue-router'
import Style from '@/views/StyleView.vue'
import Home from '@/views/HomeView.vue'

const routes = [
  {
    meta: {
      title: 'dashboard'
    },
    path: '/',
    name: 'dashboard',
    component: Home
  },
  
  {
    meta: {
      title: 'Tables'
    },
    path: '/products',
    name: 'tables',
    component: () => import('@/views/ProductsView.vue')
  },
  {
    meta: {
      title: 'Forms'
    },
    path: '/forms',
    name: 'forms',
    component: () => import('@/views/FormsView.vue')
  },
  {
    meta: {
      title: 'Profile'
    },
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/ProfileView.vue')
  },
  {
    meta: {
      title: 'Assistant'
    },
    path: '/assistant',
    name: 'assistant',
    component: () => import('@/views/AssistantView.vue')
  },
  {
    meta: {
      title: 'Company'
    },
    path: '/company',
    name: 'company',
    component: () => import('@/views/CompanyView.vue')
  },
  {
    meta: {
      title: 'Contacts'
    },
    path: '/contacts',
    name: 'contacts',
    component: () => import('@/views/ContactsView.vue')
  },
  {
    meta: {
      title: 'Contracts'
    },
    path: '/contracts',
    name: 'contracts',
    component: () => import('@/views/ContractsView.vue')
  },
  {
    meta: {
      title: 'Invoices'
    },
    path: '/invoices',
    name: 'invoices',
    component: () => import('@/views/InvociesView.vue')
  },
  {
    meta: {
      title: 'Settings'
    },
    path: '/settings',
    name: 'settings',
    component: () => import('@/views/SettingsView.vue')
  },
  {
    meta: {
      title: 'Quotations'
    },
    path: '/quotations',
    name: 'quotations',
    component: () => import('@/views/QuotationsView.vue')
  },
  {
    meta: {
      title: 'Ui'
    },
    path: '/ui',
    name: 'ui',
    component: () => import('@/views/UiView.vue')
  },
  {
    meta: {
      title: 'Responsive layout'
    },
    path: '/responsive',
    name: 'responsive',
    component: () => import('@/views/ResponsiveView.vue')
  },
  {
    meta: {
      title: 'Register'
    },
    path: '/register',
    name: 'register',
    component: () => import('@/views/RegisterView.vue')
  },
  {
    meta: {
      title: 'Login'
    },
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    meta: {
      title: 'Logout'
    },
    path: '/logout',
    name: 'logout',
    component: () => import('@/views/LogoutView.vue')
  },
  {
    meta: {
      title: 'Error'
    },
    path: '/error',
    name: 'error',
    component: () => import('@/views/ErrorView.vue')
  },
  {
    meta: {
      title: 'MarketPlaceHome'
    },
    path: '/MarketPlaceHome',
    name: 'MarketPlaceHome',
    component: () => import('@/views/MarketPlaceHome.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
