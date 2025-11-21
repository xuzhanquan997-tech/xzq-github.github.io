import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './style.css'

// 路由配置 - 完整版
const routes = [
  {
    path: '/',
    component: () => import('./components/Layout-final.vue'),
    children: [
      {
        path: '',
        redirect: '/dashboard'
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('./views/Dashboard-minimal.vue'),
        meta: { title: '首页' }
      },
      // 日常管理
      {
        path: '/daily',
        name: 'Daily',
        component: () => import('./views/Daily.vue'),
        meta: { title: '日常管理' }
      },
      // 套餐管理
      {
        path: '/packages',
        name: 'Packages',
        component: () => import('./views/Packages.vue'),
        meta: { title: '套餐管理' }
      },
      // 会员管理
      {
        path: '/members',
        name: 'Members',
        component: () => import('./views/Members.vue'),
        meta: { title: '会员管理' }
      },
      // 商品管理
      {
        path: '/products',
        name: 'Products',
        component: () => import('./views/Products.vue'),
        meta: { title: '商品管理' }
      },
      // 营销管理
      {
        path: '/marketing',
        name: 'Marketing',
        component: () => import('./views/Marketing.vue'),
        meta: { title: '营销管理' }
      },
      // 设备管理
      {
        path: '/equipment',
        name: 'Equipment',
        component: () => import('./views/Equipment.vue'),
        meta: { title: '设备管理' }
      },
      // 氛围管理
      {
        path: '/atmosphere',
        name: 'Atmosphere',
        component: () => import('./views/Atmosphere.vue'),
        meta: { title: '氛围管理' }
      },
      // 台球管理
      {
        path: '/billiards',
        name: 'Billiards',
        component: () => import('./views/Billiards.vue'),
        meta: { title: '台球管理' }
      },
      // 线上管理
      {
        path: '/online',
        name: 'Online',
        component: () => import('./views/Online.vue'),
        meta: { title: '线上管理' }
      },
      // 报表管理
      {
        path: '/reports',
        name: 'Reports',
        component: () => import('./views/Reports.vue'),
        meta: { title: '报表管理' }
      },
      // 员工管理
      {
        path: '/staff',
        name: 'Staff',
        component: () => import('./views/Staff.vue'),
        meta: { title: '员工管理' }
      },
      // 职位权限
      {
        path: '/positions',
        name: 'Positions',
        component: () => import('./views/Positions.vue'),
        meta: { title: '职位权限' }
      },
      // 风控设置
      {
        path: '/risk-control',
        name: 'RiskControl',
        component: () => import('./views/RiskControl.vue'),
        meta: { title: '风控设置' }
      },
      // 异常记录
      {
        path: '/exceptions',
        name: 'Exceptions',
        component: () => import('./views/Exceptions.vue'),
        meta: { title: '异常记录' }
      },
      // 导出中心
      {
        path: '/export-center',
        name: 'ExportCenter',
        component: () => import('./views/ExportCenter.vue'),
        meta: { title: '导出中心' }
      },
      // 系统日志
      {
        path: '/system-logs',
        name: 'SystemLogs',
        component: () => import('./views/SystemLogs.vue'),
        meta: { title: '系统日志' }
      },
      // 回收站
      {
        path: '/recycle',
        name: 'Recycle',
        component: () => import('./views/Recycle.vue'),
        meta: { title: '回收站' }
      },
      // 财务设置
      {
        path: '/finance-settings',
        name: 'FinanceSettings',
        component: () => import('./views/FinanceSettings.vue'),
        meta: { title: '财务设置' }
      },
      // 消息管理
      {
        path: '/message-management',
        name: 'MessageManagement',
        component: () => import('./views/MessageManagement.vue'),
        meta: { title: '消息管理' }
      },
      // 支付商户
      {
        path: '/payment-merchants',
        name: 'PaymentMerchants',
        component: () => import('./views/PaymentMerchants.vue'),
        meta: { title: '支付商户' }
      },
      // 更多设置
      {
        path: '/more-settings',
        name: 'MoreSettings',
        component: () => import('./views/MoreSettings.vue'),
        meta: { title: '更多设置' }
      },
      // 数据管理
      {
        path: '/data-management',
        name: 'DataManagement',
        component: () => import('./views/DataManagement.vue'),
        meta: { title: '数据管理' }
      },
      // 开放平台
      {
        path: '/open-platform',
        name: 'OpenPlatform',
        component: () => import('./views/OpenPlatform.vue'),
        meta: { title: '开放平台' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')