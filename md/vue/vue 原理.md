## vue 原理

### 组件化

#### "很久以前"就有组件化

Asp jsp php 已经有组件化了

Nodejs 中也有类似的组件化

传统组件，只是静态渲染，更新还要依赖于操作 DOM

数据驱动视图 - Vue MVVM**（更加关心数据）**

#### MVVM

View 与 Model 通过 ViewModel 操作

ViewModel 监听事件，监听组件，vue 的事

数据驱动视图（MVVM， setState） 



### 响应式

组件 data 的数据一旦变化，立刻触发视图的更新

实现数据驱动视图的第一步

考察 Vue 的原理的第一题

#### 核心 API - Object.defineProperty

如何实现响应式

````js
const data = {}
const name = 'zs'
Object.defineProperty(data, "name", {
  get: function() {		// 获取数据
    console.log('get')
    return name
  },
  set: function() {		// 赋值数据
    console.log('set')
    name = newVal
  }
})

// 测试
console.log( data.name )		// get zs
data.name = 'ls'						// set
````

#### Object.definProperty 的一些缺点（Vue3.0 启动 Proxy）

1、深度监听，需要递归到底，一次性计算最大

2、无法监听新增属性/删除属性（Vue.set Vue.delete）

3、无法原生监听数组，需要特殊处理

#### 如何监听对象（深度监听），监听数组

````js
// 监听对象属性  可用在深度监听
function observer(target) {
  if (typeof target !== 'object' || target === null) {
    // 不是对象或数组
    return target
  }

  // 重新定义各个属性（for in 也可以遍历数组）
  for (let key in target) {
    defineReactive(target, key, target[key])
  }
}
````

> Proxy 兼容性不好，且无法 polyfill
>
> 定义 data 修改 data，更新视图

### vdom 和 diff

#### 技术背景
DOM 操作非常耗费性能
以前用 JQ，可以自行控制 DOM 操作的时机，手动调整
Vue 和 React 是数据驱动视图，如何有效控制 DOM 操作?

#### Vdom解决问题
有了一定复杂度，想减少计算次数比较难
能不能把计算，更多的转移为 JS 计算？因为 JS 执行速度很快
 vdom - 用 JS 模拟 DOM 结构，计算出最小的变更，操作 DOM

#### 用 JS 模拟 DOM 结构

````html
<div id="div1" class="container">
  <p>vdom</p>
  <ul style="font-size: 20px">
    <li>a</li>
  </ul>
</div>
````

````js
{
  tag: 'div',
  props: {
    className: 'container',
    id: 'div1'
  },
  children: [
    {
      tag: 'p',
      children: 'vdom'
    },
    {
			tag: 'ul',
      props: {
        style: 'font-size: 20px'
      }
      children: [
      	{
      		tag: 'li',
      		children: 'a'
    		}
      ]
    }
  ]
}
````

#### 通过 snabbdom 学习 vdom

简洁强大的 vdom 库，易学易用

#### vdom 总结

用 JS 模拟 DOM 结构（vnode）

新旧 vnode 对比，得出最小的更新范围，最后更新 DOM

数据驱动视图的模式下，有效控制 DOM 操作

#### diff算法

diff 算法是 vdom 中最核心，最关键的部分

diff 算法能在日常使用 vue React 中体现出来（如 key）

diff 算法是前端热门话题，面试"宠儿"

#### 树 diff 的时间复杂度 O(n)

只比较同一层级，不跨级比较

tag 不相同，则直接删掉重建，不再深度比较

tag 和 key，两者都相同，则认为是相同节点，不再深度比较

#### snabbdom - 源码解读

**h函数生成虚拟dom节点**

````js
const cnode = h('ul#list', {},[
  h('li.item',{},'第1项'),
  h('li.item',{},'第2项'),
  h('li.item',{},'第3项'),
])
// vnode 包含 sel, data, children, text, elm, key
````

**patch函数通过init函数创建出来，patch（oldVNode,VNode）,接收旧node，新node**

````js
path(container, cnode)		// 第一次渲染，vnode 更新到容器中，并创建空节点
path(vnode,newVnode)			// 用新的 vnode->更新老的vnode
通过 sameVnode 判断新旧 node 是否相同
	标签名与key相同：执行 patchVnode 函数，是同一节点，不做比较
  标签名与key相同：创建新的 dom 节点，移除老的 dom 元素
````

**patchVnode更新函数**

新vnode，无text,有children ==>用updateChildren更新
新vnode，有text,无children

**updateChildren函数**

使用sameVnode函数判断老、新开始

#### diff 总结

pathVnode
addVnodes removeVnodes
updateChildren（key 的重要性）

#### Vdom 和 diff - 总结

vdom 核心概念很重要：h、vnode、path、diff、key 等

vdom 存在的价值更加重要：数据驱动视图，控制 DOM 操作

### 模板编译

模板是 vue 开发中最常用的部分，即与使用相关联的原理

它不是 html，有指令，插值，js 表达式，到底是什么

面试不会直接问，但会通过“组件渲染和更新过程”考察

**vue template complier 将模板编译为 render 函数。执行 render 函数生成 vnode**

html 是标签语言，只有 js 才能实现判断，循环（图灵完备的）

因此，模板一定是转换为某种 js 代码，即编译模板


### 渲染过程





### 前端路由

**vue-router 原理**

vue-router 路由模式

````js
// 网页 url 组成部分
// http://127.0.0.1:8888/index.html?id=1&name=xeon#/user/reg
location.protocal		// 'http:'
location.hostname		// '127.0.0.1'
location.host				// '127.0.0.1:8888'
location.port				// '8888'
location.pathname		// 'index.html'
location.search			// '?id=1&name=xeon'
location.hash				// '#/user/reg'
````

hash 变化会触发网页跳转，即浏览器的前进，后退
hash 变化不会刷新页面，SPA必需的特点
hash 永远不会提交到 server端（前端自生自灭）

#### Vue原理-总结

