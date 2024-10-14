// 引入react核心库
import React from "react";
// 引入ReactDOM
import ReactDOM from "react-dom";
// 引入APP组件
import App from "./App";
// React18
import {createRoot} from "react-dom/client";


// 渲染App组件到页面
// ReactDOM.render(<App/>, document.getElementById("root"));
const root = createRoot(document.getElementById("root"))    // React18
root.render(<App/>);