# VUE

### ES6模块化

1、node.js中如何实现模块化

node.js遵循了CommonJS的模块化规范。其中：

（1）导入其它模块使用require()方法
（2）模块对外共享成员使用module.exports对象

模块化的好处：
大家都遵守同样的模块化规范写代码，**降低了沟通的成本，极大方便了各个模块之间的相互调用**，利人利己。

2、前端模块化规范的分类

在ES6模块化规范诞生之前，JavaScript社区已经尝试并提出AMD，CMD，CommonJS等模块化规范。

但是，这些由社区提出的模块化标准，还是存在一定的差异性与局限性、并不是浏览器与服务器通用的模块化标准

（1）AMD和CMD适用于浏览器端的JavaScript模块化
（2）CommonJS适用于服务器端的JavaScript模块化

3、ES6模块化规范

定义：
（1）每个js文件都是一个独立的模块
（2）导入其它模块成员使用import关键字
（3）向外共享模块成员使用export关键字

4、在node.js中体验ES6模块化

node.js中默认仅支持CommonJS模块化规范，若想基于node.js体验与学习ES6的模块化语法，可以按照如下两个步骤进行配置：
（1）安装v14.15.1以上版本的node.js
（2）在package.json的根节点中添加"type": "module"节点

5、ES6模块化的基本语法
（1）默认导出与默认导入
（2）按需导出与按需导入
（3）直接导入并执行模块中的代码

​	5.1、默认导出
​	export default 默认导出的成员

````
let n1 = 10
function fn() {}
export default {
	n1,
	show
}
````

​	默认导入
​	import 接收名称 from '模块路径/模块标识符'

````
import a1 from './路径'
````

​	注意事项

​	默认导出
​	每个模块中，只允许使用唯一的一次export default，否则会人报错

​	默认导入
​	接收名称，只要是合法的成员名称

5.2、按需导出

按需导出的语法：export按需导出的成员

````
export let a1 = 'aaa'
export function say() {}
````

````
import {a1, say} form './路径'
````

按需导出与按需导入的注意事项
（1）每个模块中可以使用**多次**按需导出
（2）按需**导入的成员名称**必须和**按需导出的名称**保持一致
（3）按需导入时，可以使用**as关键字**进行生命名
（4）按需导入可以和默认导入一起使用

5.3、直接导入并执行模块中的代码
如果只想单纯地执行某个模块中的代码，并不需要得到模块中向外共享的成员。此时，可以直接导入并执行模块代码

````
console.log(1)
````

````
import './路径'
````
### Promise

1、回调地狱
多层回调函数的相互嵌套，就形成了回调地狱

缺点：

代码耦合性太强，牵一发而动全身，难以维护
大量冗余的代码相互嵌套，代码的可读性变差

为了解决回调地狱的问题，ES6中新增了Promise的概念

1.2、Promise的基本概念

（1）Promise是一个构造函数
	我们可以创建Promise的实例 const p = new Promise()
	new 出来的Promise实例对象，代表一个异步操作
（2）Promise.prototype上包含一个.then()方法
	每一次new Promise()构造函数得到的实例对象
	都可以通过原型链的方式访问到.then()方法，例p.then()
（3）.then()方法用来预先指定成功和失败的回调函数
	p.then(成功的回调函数，失败的回调函数)
	p.then(result =>, error=>{})
	调用.then()方法时，成功的回调函数都是必选的、失败的回调函数是可选的

2、基于回调函数按顺序读取文件的内容

3.1、基于then-fs读取文件内容

调用then-fs提供的readFile()方法，可以异步地读取文件的内容，它的返回值是Promise的实例对象。因些可以调用.then()方法为每个Promise异步操作指定成功和失败之后的回调函数

````
import thenFs from 'then-fs'
````

**3.2、.then()方法的特性**

如果上一个.then()方法中**返回了一个新的Promise实例对象**，则可以通过下一个.then()继续进行处理。通过.then()方法的**链式调用**，就解决了回调地狱的问题。

3.3、基于Promise按顺序读取文件的内容

**Promise支持链式调用**

3.4、通过.catch捕获错误

**3.5、Promise.all()方法**

Promise.all()方法会发起并行的Promise异步操作，等所有的异步操作全部结束后才会执行下一步的.then操作（等待机制）。示例代码如下：

````
const promiseArr = [
    thenFs.readFile('./files/01.txt', 'utf-8'),
    thenFs.readFile('./files/02.txt', 'utf-8'),
    thenFs.readFile('./files/03.txt', 'utf-8')
]
Promise.all(promiseArr).then(result => {
    console.log(result);			//  [ '111', '222', '333' ]
})
````

**3.6、Promise.race()方法**

Promise.race()方法会发起并行的Promise异步操作，只要任何一个异步操作完成 ，就立即执行下一步的.then操作（赛跑机制）。示例代码如下：

````
const promiseArr = [
    thenFs.readFile('./files/01.txt', 'utf-8'),
    thenFs.readFile('./files/02.txt', 'utf-8'),
    thenFs.readFile('./files/03.txt', 'utf-8')
]
Promise.race(promiseArr).then(result => {
    console.log(result);			//  111或222或333
})
````

