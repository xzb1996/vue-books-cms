import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'
Vue.use(VueRouter)

/**
 * hidden 判断是否隐藏列表
 * leaf 判断是否是叶子节点
 */

const routes = [
  {
    path: '/',
    redirect: '/login',
    hidden: true
  },
  {
    path: '/login',
    component: () => import("@/views/login"),
    name: "login",
    hidden: true
  },
  {
    path: '/home',
    component: Layout,
    leaf: true,
    children: [
      {
        path: '',
        component: () => import('@/views/home'),
        name: 'home',
        meta: {
          icon:'el-icon-s-home',
          title: "首页"
        }
      }
    ]
  },
  {
    path: '/menu',
    component: Layout,
    meta: {
      icon:'el-icon-menu',
      title: "测试菜单"
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/menu/menu1'),
        name: 'menu1',
        meta: {
          title: "菜单1"
        }
      },
      {
        path: 'menu2',
        component: () => import('@/views/menu/menu2'),
        name: 'menu2',
        meta: {
          title: "菜单2"
        }
      }
    ]
  },
  {
    path: '/library-manage',
    component: Layout,
    meta: {
      icon:'el-icon-notebook-2',
      title: "图书管理"
    },
    children: [
      {
        path: 'books-record',
        component: () => import('@/views/library-manage/books-record'),
        name: 'booksRecord',
        meta: {
          title: "图书档案"
        }
      },
      {
        path: 'readers-record',
        component: () => import('@/views/library-manage/readers-record'),
        name: 'readersRecord',
        meta: {
          title: "借书日志"
        }
      }
    ]
  },
  {
    path: '/personal-center',
    component: Layout,
    leaf: true,
    children: [
      {
        path: '',
        component: () => import('@/views/personal-center'),
        name: 'personalCenter',
        meta: {
          icon:'el-icon-user-solid',
          title: "个人中心"
        }
      }
    ]
  },
  {
    path: '/js-test',
    component: Layout,
    meta: {
      icon:'el-icon-star-on',
      title: "js练习"
    },
    children: [
      {
        path: 'random-name',
        component: () => import('@/views/js-test/random-name'),
        name: 'randomName',
        meta: {
          title: "随机人名"
        }
      }
    ]
  }
]

export default new VueRouter({
  routes
})