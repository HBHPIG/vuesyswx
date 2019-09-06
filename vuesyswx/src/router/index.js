import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: "*",
      redirect: "/"
    },
    {
      path: '/login',
      redirect: '/index'
    },
    {
      path: '/login/login',
      component: resolve => require(['../views/login/login.vue'], resolve) //登录
    }
   /* { path: '/login', component: _import('login/login'), name: 'login', meta: { title: '登录' } }*/
  ]
})

router.beforeEach((to, from, next) => {
  /*next({
      path: '/login',
      query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
  })*/
  next();
})

export default router;
