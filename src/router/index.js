import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

// import page
import LandingPage from '../views/LandingPage'

// import product
import ProductDetails from '../views/ProductDetails'

// import keranjang
import KeranjangPage from '../views/KeranjangPage'

// import keranjangkosong
import KeranjangKosong from '../views/KeranjangKosong'

// import checkout
import CheckoutPage from '../views/CheckoutPage'

// import checkouttwo
import CheckoutTwo from '../views/CheckoutTwo'

// import upload
import UploadPage from '../views/UploadPage'

// import success
import SuccessPage from '../views/SuccessPage'

// import listproduct
import ListProduct from '../views/ListProduct'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  // import path
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  // import product
  {
    path: '/ProductDetails',
    name: 'ProductDetails',
    component: ProductDetails
  },
  // import keranjang
  {
    path: '/KeranjangPage',
    name: 'KeranjangPage',
    component: KeranjangPage
  },
  // import keranjangkosong
  {
    path: '/KeranjangKosong',
    name: 'KeranjangKosong',
    component: KeranjangKosong
  },
  // import checkout
  {
    path: '/CheckoutPage',
    name: 'CheckoutPage',
    component: CheckoutPage
  },
  // import checkouttwo
  {
    path: '/CheckoutTwo',
    name: 'CheckoutTwo',
    component: CheckoutTwo
  },
  // import upload
  {
    path: '/UploadPage',
    name: 'UploadPage',
    component: UploadPage
  },
  // import success
  {
    path: '/SuccessPage',
    name: 'SuccessPage',
    component: SuccessPage
  },
  // import listproduct
  {
    path: '/ListProduct',
    name: 'ListProduct',
    component: ListProduct
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
