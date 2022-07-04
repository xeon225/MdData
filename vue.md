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

4、基于Promise封装读取文件的方法

方法的封装要求：
（1）方法的名称要定义为getFile
（2）方法接收一个形参fpath，表示要读取的文件的路径
（3）方法的返回值为Promise实例对象

````
function getFile(fpath) {
	return new Promise()
}
````

4.2、创建具体的异步操作

````
function getFile(fpath) {
	return new Promise(function() {
		fs.readFile(fpath, 'utf-8', (err, dataStr) => {})
	})
}
````

4.3、获取.then的两个实参

通过.then()指定的成功和失败的回调函数，可以在function的形参中进行接收。

````
function getFile(fpath) {
	return new Promise(function(resolve, reject) {
		fs.readFile(fpath, 'utf-8', (err, dataStr) => {})
	})
}
getFile('./路径').then(成功的回调函数，失败的回调函数)
````

4.4、调用resolve和reject回调函数

Promise**异步操作的结果**，可以调用**resolve**或**reject**回调函数进行处理。

````
function getFile(fpath) {
	return new Promise(function(resolve, reject) {
		fs.readFile(fpath, 'utf-8', (err, dataStr) => {
    	if (err) return reject(err)
      resolve(dataStr)
    })
	})
}
getFile('./路径').then((r1) => {console.log(r1)}).catch(err => console.log(err.message))
````

### async/await

1、什么是async/await
**async/await**是**ES8**引入的新语法，用来简化Promise异步操作。在这之前，只能通过**链式.then()的方式**处理Promise异步操作。

2、async/await的基本使用

````
import thenFs from 'then-fs'

async function getAllFile() {
    const r1 = await thenFs.readFile('./files/01.txt', 'utf-8')
    console.log(r1)
}
getAllFile()		//不加async/await得到的是Promise的实例
````

3、async/await的**使用注意事项**

（1）如果在function中使用了await，则function**必须**被async修饰
（2）在async方法中，**第一个await之前的代码会同步执行**，await之后的代码会异步执行

### EventLoop

1、JavaScript是单线程的语言
JavaScript是一门单线程执行的编程语言。也就是说，同一时间只能做一件事情。

> 单线程执行任务队列的问题：
> 如果**前一个任务非常耗时**，则后续的任务就不得不一直等待，从而导致**程序假死**的问题。

2、同步任务和异步任务
为了防止某个**耗时任务**导致程序假死的问题，JavaScript把待执行的任务分为了两类：
（1）**同步任务**（synchronous）

- 又叫做**非耗时任务**，指的是在主线程上排队执行的那些任务

- 只有前一个任务执行完毕，才能执行后一个任务

（2）异步任务（asynchronous）

- 又叫做**耗时任务**，异步任务由JavaScript**委托给**宿主环境进行执行。
- 当异步任务执行完成后，会**通知JavaScript主线程**执行异步任务的**回调函数**。

3、同步任务和异步任务的执行过程
