# vue3

## vue 单页面应用

#### 如何快速创建 vue 的 SPA 项目

vue 官方提供了**两种**快速创建工程化的 SPA 项目的方式：

（1）基于 **vite** 创建 SPA 项目
（2）基于 **vue-cli** 创建 SPA 项目

|                            |        vite        |        vue-cli         |
| :------------------------: | :----------------: | :--------------------: |
|      支持的 vue 版本       |   仅支持 vue3.x    |    支持 3.x 和 2.x     |
|      是否基于 webpack      |         否         |           是           |
|          运行速度          |         快         |          较慢          |
|         功能完整度         | 小而巧（逐渐完善） |         大而全         |
| 是否建议在企业级开发中使用 |     目前不建义     | 建议在企业级开发中使用 |

#### 1. 创建 vite 的项目

按照顺序执行如下的命令，即可基于 vite 创建 vue 3.x 的工程化项目：

````
npm init vite-app 项目名称
````

#### 3.3 在 main.js 中进行渲染

按照 vue 3.x 的标准用法，把 App.vue 中的模板内容渲染到 index.html 页面的 el 区域中：

````
// 1. 从 vue 中按需导入 createApp 函数
// createApp 函数的作用，创建 vue 的"单页面应用程序实例"
import { createApp } from 'vue'
// 2. 导入待渲染的 App 组件
import App from './App.vue'
import './index.css'

// 3. 调用 createApp() 函数，返回值是"单页面应用程序的实例"，用常量 spa_app 进行接收，
// 同时把 App 组件作为参数传给 createApp 函数，表示要把 App 渲染到 index.html 页面上
const spa_app = createApp(App)
// createApp(App).mount('#app')

// 4. 调用 spa_app 实例的 mount 方法，用来指定 vue 实际要控制的区域
spa_app.mount('#app')
````

## 组件的构成

#### 2.2 在 template 中定义根节点

在 vue 2.x 的版本中，<template> 节点内的 DOM 结构仅支持**单个**根节点：

````
<template>
	<div>
		<div></div>
	</div>
</template>
````

但是，在 vue 3.x 的版本中，<template> 中支持定义多个根节点：

````
<template>
	<div></div>
	<div></div>
	<div></div>
</template>
````



## axios

#### 1. 为什么要全局配置 axios

在实际项目开发中，几乎每个组件中都会用到 axios 发起数据请求。此时会遇到如下两个问题：

（1）每个组件中都需要**导入 axios** (代码臃肿)
（2）每次发请求都需要填写**完整的请求路径**(不利于后期的维护)

#### 2. 如何全局配置 axios

在 main.js 入口文件中，通过 app.config.globalProperties 全局挂载 axios，示例代码如下：

## vue-router的基本用法

#### 1. 什么是 vue-router

vue-router 是 vue.js 官方给出的路由解决方案。它只能结合 vue 项目进行使用，能够轻松的管理 SPA 项目 中组件的切换。

#### 2. vue-router 的版本

vue-router 目前有 3.x 的版本和 4.x 的版本。其中:

- vue-router 3.x 只能结合 **vue2** 进行使用
- vue-router 4.x 只能结合 **vue3** 进行使用

#### 3. vue-router 4.x 的基本使用步骤

（1）在项目中安装 vue-router
（2）定义路由组件
（3）声明**路由链接**和**占位符**
（4）创建**路由模块**
（5）**导入并挂载**路由模块

#### 3.1 在项目中安装 vue-router

在 vue3 的项目中，只能安装并使用 vue-router 4.x。安装的命令如下:

````
npm install vue-router@next -S
````

#### 3.4 创建路由模块

在项目中创建 router.js 路由模块，在其中按照如下 4 个步骤创建并得到路由的实例对象: （1）从 vue-router 中按需导入两个方法
（2）导入需要使用路由控制的组件
（3）创建路由实例对象
（4）向外共享路由实例对象
（5）在 main.js 中导入并挂载路由模块

#### 从 vue-router 中按需导入两个方法

````
import { createRouter, createWebHashHistory } from 'vue-router'
````

#### 创建路由实例对象