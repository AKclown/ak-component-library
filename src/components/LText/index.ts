import { App } from 'vue'
import LText from './LText.vue'
// Vue组件其实就是一个object，在这个object实现install方法
LText.install = (app: App) => {
  app.component(LText.name, LText)
}

export default LText