#### 防抖函数

在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。

适用场景：

- 按钮提交场景：防止多次提交按钮，只执行最后提交的一次
- 服务端验证场景：表单验证需要服务端配合，只执行一段连续的输入事件的最后一次，还有搜索联想词功能类似

#### 节流函数

规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。

适用场景：

- 拖拽场景：固定时间内只执行一次，防止超高频次触发位置变动
- 缩放场景：监控浏览器resize
- 动画场景：避免短时间内多次触发动画引起性能问题

#### 递归函数

函数内部调用自己

应用场景：在一些数据结构中, 使用递归可以方便地帮助我们处理数据: 被用于处理包含有更小的子问题的一类问题

比如对 `DOM` 的操作处理: 对一个节点DOM 的子节点进行递归操作

#### 闭包函数

闭包就是能够读取其他函数内部变量的 函数(就是这个函数)。

应用场景：比如在开发中经常用到的, 就是把外部的this值赋值给闭包将要用到继承的变量: 让嵌套函数能够访问外部的 this 值

> 其实创建一个函数就创建了闭包...
