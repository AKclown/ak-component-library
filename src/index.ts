import { App } from "vue";

import LText from "./components/LText";
import LImage from "./components/LImage";
import LShape from "./components/LShape";

const components = [LImage, LShape, LText];

// 全局导入 - 循环所有component
const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

// 按需引入
export { LImage, LShape, LText, install };
export default { install };
