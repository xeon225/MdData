## vue-router

#### vue-router是什么？有哪些组件？

- Vue Router 是 [Vue.js](https://link.juejin.cn/?target=http%3A%2F%2Fcn.vuejs.org%2F) 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。
- `<router-link>`和`<router-view>`和`<keep-alive>`

####  active-class 是哪个组件的属性？

active-class是router-link终端属性，用来做选中样式的切换，当router-link标签被点击时将会应用这个样式

#### 怎么定义vue-router的动态路由？怎么获取传过来的值？

动态路由的创建，主要是使用path属性过程中，使用动态路径参数，以冒号开头，如下：

````js
{
  path: '/details/:id'
  name: 'Details'
  components: Details
}
````


复制代码访问details目录下的所有文件，如果details/a，details/b等，都会映射到Details组件上。

当匹配到/details下的路由时，参数值会被设置到this.$route.params下，所以通过这个属性可以获取动态参数

````js
console.log(this.$route.params.id)
````



