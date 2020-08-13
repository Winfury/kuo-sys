import { defineConfig } from 'umi';
export default defineConfig({
  layout: {},
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'KuoKuo',
  routes: [
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
      name: '个人中心',
      path: '/accountcenter',
      component: './AccountCenter',
    },
    {
      path: '/',
      component: '@/pages/index',
    },
    {
      name: '登录',
      path: '/userlogin',
      component: './UserLogin',
    },
  ],
  dva: {
    immer: true,
    hmr: false,
  },
});
