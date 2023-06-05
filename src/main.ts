import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import App from './App.vue'

import { installIcon } from './plugins/icon'
import { installComponent, installMethods } from './plugins/component'


const app = createApp(App)
installMethods(app)
installComponent(app)
installIcon(app)



app.mount('#app')
