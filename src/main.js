import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import 'amfe-flexible/index'
import '@/common/css/index.less'

const app = createApp(App).use(router)

app.mount('#app')
