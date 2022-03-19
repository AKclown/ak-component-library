import { App } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
const plugins = {
  install: (app: App) => {
    //  任何组件都可以访问到的全局property
    app.config.globalProperties.$echo = () => {
      console.log("a plugin");
    };
    app.component("hello-world", HelloWorld);
    app.provide("test", { message: "from plugin" });
  },
};

export default plugins;
