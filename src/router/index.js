import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'

import Admin from '../pages/Admin/Admin'
import SellerDashBoard from '../pages/Admin/SellerDashBoard/SellerDashBoard'

import Sellers from '../pages/Admin/Sellers/Sellers'
import SellerList from '../pages/Admin/Sellers/SellerList/SellerList'
import RegisterSeller from '../pages/Admin/Sellers/RegisterSeller/RegisterSeller'

import Products from '../pages/Admin/Products/Products'
import ProductList from '../pages/Admin/Products/ProductList/ProductList'
import RegisterProduct from '../pages/Admin/Products/RegisterProduct/RegisterProduct'

import Orders from '../pages/Admin/Orders/Orders'
import OrderList from '../pages/Admin/Orders/OrderList/OrderList'
import DetailOrder from '../pages/Admin/Orders/DetailOrder/DetailOrder'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [

    // 로그인
    {
      path: '/',
      name: 'Login',
      component: Login
    },

    // 회원가입
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },

    // 어드민 내부
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,

      children: [
        // 셀러 대쉬보드
        {
          path: 'sellerdashboard',
          name: 'SellerDashBoard',
          component: SellerDashBoard
        },

        // 회원관리
        {
          path: 'sellers',
          name: 'Sellers',
          component: Sellers,

          children: [
            // 회원관리 > 셀러계정관리
            {
              path: '',
              name: 'SellerList',
              component: SellerList
            },
            // 회원관리 > 회원등록
            {
              path: 'registerseller',
              name: 'RegisterSeller',
              component: RegisterSeller
            },
            // 회원관리 > 회원수정
            {
              path: ':sellerNo',
              name: 'ModifySeller',
              component: RegisterSeller,
              props: true
            },
          ]
        },

        // 상품관리
        {
          path: 'products',
          name: 'Products',
          component: Products,
          children: [
            // 상품관리 > 상품관리
            {
              path: '',
              name: 'ProductList',
              component: ProductList
            },
            // 상품관리 > 상품등록
            {
              path: 'registerproduct',
              name: 'RegisterProduct',
              component: RegisterProduct
            },
            // 상품관리 > 상품수정
            {
              path: ':productNo',
              name: 'RegisterProduct',
              component: RegisterProduct
            },
          ],
        },

        // 주문관리
        {
          path: 'orders',
          name: 'Orders',
          component: Orders,
          children: [
            //  주문관리 > 상품준비 관리
            {
              path: 'readyproduct',
              name: 'Readyproduct',
              props: (route) => ({ status_id: 1 }),
              component: OrderList
            },
            // 주문관리 > 배송중 관리
            {
              path: 'deliverproduct',
              name: 'DeliverProduct',
              props: (route) => ({ status_id: 2 }),
              component: OrderList
            },
            // 주문관리 > 배송완료 관리
            {
              path: 'arriveproduct',
              name: 'ArriveProduct',
              props: (route) => ({ status_id: 3 }),
              component: OrderList,
            },
            // 주문관리 > 구매확정 관리
            {
              path: 'confirmProduct',
              name: 'ConfirmProduct',
              props: (route) => ({ status_id: 4 }),
              component: OrderList
            },
            // 주문관리 > 주문 상세페이지
            {
              path: ':detailNo',
              name: 'Detail',
              component: DetailOrder,
              props: true
            },
          ]
        },
      ]
    }
  ]
})
