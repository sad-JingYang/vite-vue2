import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = []

const router = new Router({
    routes,
    mode: 'history' // 使用 history 模式，需要后端配置支持
})

export default router
