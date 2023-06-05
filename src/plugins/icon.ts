import { App } from 'vue'


import { Plus, PictureRounded } from '@element-plus/icons-vue'

const ElementPlusIconsVue = [
    Plus,
    PictureRounded
]


export const installIcon = (app:App) => {
    for (const item of ElementPlusIconsVue) {
        app.component(item.name, item)
      }
} 