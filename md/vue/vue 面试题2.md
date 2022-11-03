## 面试题2

#### Vue2 生命周期有哪些

**1、有哪些生命周期**

系统自带：8个，beforeCreate、created、beforeMount、mounted、beforeUpdate、updated、beforeDestroy、destroyed

**2、一旦进入到页面或者组件，会执行哪些生命周期，顺序**

| 进入页面或组件有那些生命周期 | 是否有$el | 是否有$data |
| ---------------------------- | --------- | ----------- |
| beforeCreate                 | undefined | undefined   |
| created                      | undefined | 有          |
| beforeMount                  | undefined | 有          |
| mounted                      | 有        | 有          |

3、如果加入了 keep-alive 会多两个生命周期

activated、deactivated（进入与离开）

**如果加入了 keep-alive，第一次进入组件会执行哪些生命周期**

先执行beforeCreate、created、beforeMount、mounted，再执行 activated

**如果加入了 keep-alive，第二次或者第 N 次进入组件会执行哪些生命周期**

只执行一个生命周期：activated

#### keep-alive 的了解

1、是什么
Vue 系统自带的一个组件，功能：是来缓存组件的。作用：===> 提升性能

2、使用场景
就是来缓存组件，提升项目的性能。具体实现比如：首页进入到详情页，如果用户在首页每次点击都是相同的，那么详情页就没必要请求 N 次了，直接缓存起来就可以了，当然如果点击的不是同一个，那么就直接请求。

#### v-if 与 v-show 区别

**1、展示形式不同**
v-if 是 创建一个 dom 节点
v-show 与 css display:none 一样

**2、使用场景不同**
初次加载 v-if 要比 v-show 好，页面不会做加载 dom。

#### scoped原理

```
1. 作用：让样式在本组件中生效，不影响其他组件。
2. 原理：给节点新增自定义属性，然后css根据属性选择器添加样式。
```

#### props 和 data 优先级谁高

1、props
2、methods
3、data
4、computed
5、watch

#### Vue 的代理
