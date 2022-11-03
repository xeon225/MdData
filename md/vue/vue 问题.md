#### 1、vue 的缓存

<keep-alive> 会缓存不活动的组件的状态

避免多次重复渲染降低性能

````
<keep-alive include="xxx" exclude="xxx">
	<router-view></router-view>
</keep-alive>
````

include 只缓存的组件 name

exclude 不会被缓存的组件 name

max 最多缓存的组件个数

router 结合路由缓存页面

````
{
  path: '/test_02',
  name: 'test_02',
  component: Test02,
  meta: {
  	keepAlive: true // 需要被缓存
  }
}

<keep-alive>
	<router-view v-if="$route.meta.keepAlive"></router-view>
</keep-alive>
````



#### 2、vue 传值

- 父子组件
  - `props`/`$emit`/`$parent`/`ref`/`$attrs`

props



- 兄弟组件
  - `$parent`/`$root`/`eventbus`/`vuex`
- 跨层级关系
  - `eventbus`/`vuex`/`provide`+`inject`

