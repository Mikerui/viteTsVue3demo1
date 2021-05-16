import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store' // 状态管理
import router, { setupRouter } from './router/index'

import { setupElement } from './libs/element'

const app = createApp(App)
setupStore(app) // 引入状态管理
setupRouter(app) // 引入路由
setupElement(app) // 引入elementUi-plus

router.isReady().then(() => {
    app.mount('#app')
})