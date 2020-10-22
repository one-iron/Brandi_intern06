import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Orders from '../pages/Orders/Orders'
import ArriveProduct from '../pages/Orders/ArriveProduct/ArriveProduct'
import ConfirmProduct from '../pages/Orders/ConfirmProduct/ConfirmProduct'
import DeliverProduct from '../pages/Orders/DeliverProduct/DeliverProduct'
import ReadyProduct from '../pages/Orders/ReadyProduct/ReadyProduct'
import DetailOrder from '../pages/Orders/DetailOrder/DetailOrder'
import SellerList from '../pages/Seller/SellerList/SellerList'
// import SellerList from '../pages/Seller/SellerList/SellerList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders,
      children: [
        // 배송완료 관리
        {
          path: '/arriveproduct',
          name: 'ArriveProduct',
          component: ArriveProduct
        },
        // 구매확정 관리
        {
          path: '/confirmProduct',
          name: 'ConfirmProduct',
          component: ConfirmProduct
        },
        // 배송중 관리
        {
          path: '/deliverproduct',
          name: 'DeliverProduct',
          component: DeliverProduct
        },
        // 주문 상세페이지
        {
          path: '/detail/:detailNo',
          name: 'Detail',
          component: DetailOrder
        },
        // 상품준비 관리
        {
          path: '/readyProduct',
          name: 'ReadyProduct',
          component: ReadyProduct
        },
      ]
    },
    {
      // 셀러 관리
      path: '/sellers',
      children: [
        // 리스트
        {
          path: '',
          name: 'SellerList',
          component: SellerList
        },
        // 상세 (수정)
        {
          path: '/:no',
          name: 'ReadyProduct',
          component: ReadyProduct
        },
        // 둥록
        {
          path: '/regist',
          name: 'RegisterSeller',
          component: RegisterSeller
        }
      ]
    }
  ]
})