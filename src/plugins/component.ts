import { App } from 'vue'


import { ElButton, ElNotification, ElIcon, } from 'element-plus'

const ElementPlusComponents = [
    ElButton,
    ElIcon
]

const ElementPlusMethods:any = {
    ElNotification: ElNotification
}


export const installComponent = (app:App) => {
    for (const item of ElementPlusComponents) {
        app.component(item.name, item)
      }
} 

export const installMethods = (app:App) => {
    for (const item in ElementPlusMethods) {
        let name = `$${item}`
        app.config.globalProperties[name] = ElementPlusMethods[item]
    }
}