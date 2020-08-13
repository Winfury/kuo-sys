import { defineConfig } from 'umi';
export default defineConfig({
  layout: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    // {
    //   name: '登录',
    //   path: '/userlogin',
    //   component: './UserLogin',
    // },
    {
      name: '订单',
      path: '/order-list',
      component: './OrderList',
    },
    {
      name: '门店管理',
      path: '/store-mng',
      component: './StoreMng',
    },
    {
      name: '服务管理',
      path: '/service-mng',
      component: './ServiceMng',
    },
    {
      path: '/',
      component: '@/pages/index',
    },
  ],
  dva: {
    immer: true,
    hmr: false,
  },
});
