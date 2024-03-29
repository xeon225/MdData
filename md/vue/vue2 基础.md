# VUE

## 学习目标

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

（1）同步任务由JavaScript主线程次序执行
（2）异步任务**委托给**宿主环境执行
（3）已完成的异步任务**对应的回调函数**，会被加入到任务队列中等待执行
（4）JavaScript主线程的**执行栈**被清空后，会读取任务队列中的回调函数，次序执行
（5）**JavaScript主线程不断重复上面的第4步**

4、EventLoop的基本概念

**JavaScript主线程从"任务队列"中读取异步任务的回调函数，放在执行栈中依次执行**。这个过程是循环不断的，所以整个的这种运行机制又称为**EventLoop**（事件循环）

### 宏任务和微任务

1、什么是宏任务和微任务

JavaScript把异步任务又做了进一步的划分，异步任务又分为两类，分别是：

（1）宏任务（macrotask）

- 异步Ajax请求

- setTimeout、setInterval

- 文件操作

- 其它宏任务

（2）微任务（microtask）

- Promise.then、.catch和.finally

- process.nextTick

- 其它微任务

```mermaid
graph TD
A(JS任务) --> B
A -->C

B(同步任务<br>非耗时任务)
C(异步任务<br>耗时任务)
C --> D
C --> E

D(宏任务<br>异步Ajax setTimeout setInterval 文件操作等)
E(微任务<br>Promise.then Promise.catch Promise.finally等)
```

2、宏任务和微任务的执行顺序

```mermaid
graph LR;

a-->b
b-->c
c-->d
c--无-->e
d-->e
e-->a



a(宏任务)
b(执行结束)
c{有微任务?}
d(执行所有微任务)
e(执行下一个<br>宏任务)
```

每一个宏任务执行完之后，都会检查是否存在待执行的微任务，如果有，则执行完所有微任务之后，再继续执行下一个宏任务。

### 接口案例
1、案例需求
基于MySQL数据库 + Express 对外提供用户列表的API接口服务。用到的技术点如下：

- 第三方包express和mysql2

- ES6模块化

- Promise

- async/await

2、主要的实现步骤
（1）搭建项目的基本结构
（2）创建基本的服务器
（3）创建db数据库操作模块
（4）创建user_ctrl业务模块
（5）创建user_router路由模块

3、搭建项目的基本结构

（1）启用ES6模块化支持

- package.json中声明"type": "module"

（2）安装第三方依赖包
- 运行npm install express@4.17.1 mysql2@2.2.5

4、创建基本的服务器

````
import express from 'express'
const app = express()
app.listen(80, ()=> {
    console.log('server running at http://127.0.0.1')
})
````

5、创建db数据库操作模块

````
import mysql from 'mysql2'
const pool = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    deatabase: 'my_db_01',	//请填写要操作的数据库的名称
    user: 'root',
    password: 'admin123'
})
export default pool.promise()
````

6、创建user_ctrl模块

````
import db from '../db/index.js'
//使用ES6的按需导出语法，将getAllUser 方法导出去
export async function getAllUser(req, res) {
    const result = await db.query('select * from ev_users')
    res.send({
        status: 0,
        message: '获取用户列表数据成功',
        data: roms
    })
}
````

7、创建user_router模块

````
import express from "express";
// 从 user_ctrl.js 模块中按需导入 getAllUser 函数
import { getAllUser } from "../controller/user_ctrl.js";

// 创建路由对象
const router = new express.Router()
// 挂载路由规则
router.get('/user', getAllUser)

// 使用 ES6 的默认导出语法，将路由对象共享出去
export default router
````

8、导入并挂载路由模块

````
import express from 'express'
// 1、使用默认导入语法，导入路由对象
import userRouter from './router/user_router.js'
const app = express()

// 2、挂载用户路由模块
app.use('/api', userRouter)

app.listen(80, ()=> {
    console.log('server running at http://127.0.0.1')
})
````

9、使用try...catch捕获异常

````
export async function getAllUser(req, res) {
	// 使用 try...catch 捕获 Promise 异步任务中产生的异常错误，并在 catch 块中进行处理
	try {
		// ev_users 表中没有 xxx 字段，所以此 SQL 语句会"执行异常"
		const [rows] = await db.query('select * from ev_users')
		res.send({ status: 0, message: '获取用户列表数据成功!', data: rows})
	} catch (e) {
		res.send({ status: 1, message: '获取用户列表数据失败!', data: e.message})
	}
}
````

### 总结

（1）能够知道如何**使用ES6的模块化语法**
- 默认导出与默认导入，按需导出与按需导入

（2）能够知道如何**使用Promise解决回调地狱问题**

- promise.**then**()、promise.**catch**()

（3）能够使用**async/await**简化Promise的调用

- 方法中用到了await，则方法需要被async修饰

（4）能够说出什么是EventLoop

- **EventLoop示意图**

（5）能够说出宏任务和微任务的执行顺序

- 在执行下一个宏任务之前，**先检查是否有待执行的微任务**

## Vue 基础

### 前端工程化

1、 小白眼中的前端开发 vs 实现的前端开发

小白眼中：网上搜代码下载自己用

实现的前端开发

- **模块化** (js 的模块化、css 的模块化、资源的模块化)
- **组件化** (复用现有的 UI 结构、样式、行为)
- **规范化** (目录结构的划分、编码规范化、接口规范化、文档规范化、 Git 分支管理) 
- **自动化** (自动化构建、自动部署、自动化测试)

2、什么是前端工程化

前端工程化指的是：在**企业级的前端项目开发**中，把前端开发所需的工具、技术、流程、经验等进行规范化、 标准化。

企业中的 Vue 项目和 React 项目，都是基于**工程化的方式**进行开发的。 

好处:前端开发**自成体系**，有一套**标准的开发方案和流程**。

3、前端工程化的解决方案

早期的前端工程化解决方案:
- grunt( https://www.gruntjs.net/ )
- gulp( https://www.gulpjs.com.cn/ )

目前主流的前端工程化解决方案:
- webpack( https://www.webpackjs.com/ ) 
- parcel( https://zh.parceljs.org/ )

### webpack 的基本使用

1、什么是webpack

概念:webpack 是**前端项目工程化的具体解决方案**。 

主要功能:它提供了友好的**前端模块化开发**支持，以及**代码压缩混淆**、**处理浏览器端 JavaScript 的兼容性**、**性**
**能优化**等强大的功能。

好处:让程序员把**工作的重心**放到具体功能的实现上，提高了前端**开发效率**和项目的**可维护性**。 

> 注意:目前 Vue，React 等前端项目，基本上都是基于 webpack 进行工程化开发的。

2、创建列表隔行变色项目

1 新建项目空白目录，并运行 npm init –y 命令，初始化包管理配置文件 package.json 
2 新建 src 源代码目录
3 新建 src -> index.html 首页和 src -> index.js 脚本文件
4 初始化首页基本的结构
5 运行 npm install jquery –S 命令，安装 jQuery
6 通过 ES6 模块化的方式导入 jQuery，实现列表隔行变色效果

3、在项目中安装 webpack

在终端运行如下的命令，安装 webpack 相关的两个包：

npm install webpack@5.42.1 webpack-cli@4.7.2 -D

````
{
  "dependencies": {   // 项目开发与上线都需要的插件
  },
  "devDependencies": {    // 只在项目开发阶段需要的插件
  }
}
````

````
npm install --save-dev
npm install --save
npm install -D   //  --save-dev的缩写
npm install -S	 //	 --save的缩写
````

4、在项目中配置 webpack

（1）在项目根目录中，创建名为 webpack.config.js 的 webpack 配置文件，并初始化如下的基本配置:

（2）在 package.json 的 scripts 节点下，新增 dev 脚本如下:

（3）在终端中运行 npm run dev 命令，启动 webpack 进行项目的打包构建

4.1、mode的可选值

mode 节点的可选值有两个，分别是：

（1）development

- **开发环境**
- **不会**对打包生成的文件进行**代码压缩**和**性能优化**
- 打包**速度快**，适合在**开发阶段**使用

（2）production

- **生产环境**
- **会**对打包生成的文件进行**代码压缩**和**性能优化**
- 打包**速度很慢**，仅适合在项目**发布阶段**使用

4.2、webpack.config.js文件的作用

webpack.config.js 是 webpack 的配置文件。webpack 在真正开始打包构建之前，会先**读取这个配置文件**， 从而基于给定的配置，对项目进行打包。

注意:由于 webpack 是**基于 node.js 开发出来的**打包工具，因此在它的配置文件中，支持使用 node.js 相关 的语法和模块进行 webpack 的个性化配置。

4.3、webpack 中的默认约定
在 webpack 4.x 和 5.x 的版本中，有如下的默认约定：
（1）默认的打包入口文件为 **src** -> **index.js**
（2）默认的输出文件路径为 dist -> **main.js**
注意:可以在 **webpack.config.js** 中修改打包的默认约定

4.4、自定义打包的入口与出口

在 webpack.config.js 配置文件中，通过 entry 节点指定打包的入口。通过 output 节点指定打包的出口。 示例代码如下：

````
const path = require('path')    // 导入 node.js 中专门操作路径的模块

module.exports = {
    entry: path.join(__dirname, './src/index.js'),      // 打包入口文件的路径
    output: {
        path: path.join(__dirname, './dist'),       // 输出文件的存放路径
        filename: 'main.js'       // 输出文件的名称
    }
}
````

### webpack 中的插件

1、webpack 插件的作用
通过安装和配置第三方的插件，可以**拓展 webpack 的能力**，从而让 webpack **用起来更方便**。最常用的 webpack 插件有如下两个：
（1）**webpack-dev-server**

- 类似于 node.js 阶段用到的 nodemon 工具
- 每当修改了源代码，webpack 会自动进行项目的打包和构建

（2） **html-webpack-plugin**

- webpack 中的 HTML 插件(类似于一个模板引擎插件) 
- 可以通过此插件自定制 index.html 页面的内容

2、webpack-dev-server

**webpack-dev-server** 可以让 webpack **监听项目源代码的变化**，从而进行**自动打包构建。**

2.1、安装 webpack-dev-server

运行如下的命令，即可在项目中安装此插件：
npm install **webpack-dev-server**@3.11.2 -D

2.2、配置 webpack-dev-server

（1）修改 package.json -> scripts 中的 dev 命令如下:

````
  "scripts": {
    "dev": "webpack serve"		//script 节点下的脚本，可以通过 npm run 执行
  }
````

（2）再次运行 **npm run dev** 命令，重新进行项目的打包
（3）在浏览器中访问 http://localhost:8080 地址，查看自动打包效果

> 注意：webpack-dev-server 会启动一个**实时打包的 http 服务器**

2.3、打包生成的文件哪儿去了?
（1）不配置 webpack-dev-server 的情况下，webpack 打包生成的文件，会存放到**实际的物理磁盘**上 

- 严格遵守开发者在 webpack.config.js 中指定配置

- 根据 **output 节点**指定路径进行存放

（2）配置了 webpack-dev-server 之后，打包生成的文件**存放到了内存中** 

- 不再根据 output 节点指定的路径，存放到实际的物理磁盘上

- **提高了**实时打包输出的**性能**，因为内存比物理磁盘速度快很多

2.4、生成到内存中的文件该如何访问?

webpack-dev-server 生成到内存中的文件，默认**放到了项目的根目录中**，而且是**虚拟的**、**不可见的**。 

- 可以直接用 **/** 表示**项目根目录**，**后面跟上要访问的文件名称**，即可访问内存中的文件
- 例如 **/bundle.js** 就表示要访问 webpack-dev-server 生成到内存中的 bundle.js 文件

3、html-webpack-plugin

html-webpack-plugin 是 **webpack 中的 HTML 插件**，可以通过此插件**自定制** index.html **页面的内容**。
**需求**：通过 html-webpack-plugin 插件，将 src 目录下的 index.html 首页，**复制到项目根目录中一份!**

3.1、安装 html-webpack-plugin

运行如下的命令，即可在项目中安装此插件：

npm install **html-webpack-plugin**@5.3.2 -D

3.2、配置 html-webpack-plugin

````
// 1. 导入 html-webpack-plugin 插件，得到一个构造函数
const HtmlPlugin = require('html-webpack-plugin')

// 2. 创建 HTML 插件的实例对象
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',   // 指定原文件的存放路径
    filename: './index.html',   // 指定生成的文件的存放路径
})

module.exports = {
		mode: 'development',
    plugins: [htmlPlugin],  // 3. 通过 plugins 节点，使 htmlPlugin 插件生效
}
````
3.3、解惑 html-webpack-plugin

（1）通过 HTML 插件复制到项目根目录中的 index.html 页面，**也被放到了内存中**
（2）HTML 插件在生成的 index.html **页面**，**自动注入**了打包的 main.js 文件

4、devServer 节点
在 webpack.config.js 配置文件中，可以通过 **devServer** 节点对 webpack-dev-server 插件进行更多的配置， 示例代码如下：

````
devServer: {
	open: true, // 初次打包完成后，自动打开浏览器
	host: '127.0.0.1',  // 实时打包所使用的主机地址
	port: 8080,   // 实时打包所使用的端口号
}
````

> 注意:凡是修改了 webpack.config.js 配置文件，或修改了 package.json 配置文件，**必须重启实时打包的服务器**，否则最新的配置文件无法生效!

### webpack 中的loader
1、loade 概述

在实际开发过程中，webpack 默认只能打包处理以 .js 后缀名结尾的模块。其他**非 .js 后缀名结尾的模块**， webpack 默认处理不了，**需要调用 loader 加载器才可以正常打包**，否则会报错!

loader 加载器的作用：**协助 webpack 打包处理特定的文件模块**。比如: 
- css-loader 可以打包处理 .css 相关的文件
- less-loader 可以打包处理 .less 相关的文件
- babel-loader 可以打包处理 webpack 无法处理的高级 JS 语法

2、loader 的调用过程

```mermaid
graph LR
A --> B
B --> C
B --> D
C --> E
C --> F
D --> G
D --> H
E --> I
E --> J

A(将要被webpack打包<br>处理的文件模块)
B{是否为 js 模块}
C{是否配置了对应 loader}
D{是否包含高级 js 语法}
E{是否<br>配置了 babel}
F(webpack 进行处理)
G(调用 loader 处理)
H(报错)
I(调用 loader 处理)
J(报错)
```

3、打包处理 css 文件

（1）运行 npm i **style-loader@3.0.0 css-loader@5.2.6 -D** 命令，安装处理 css 文件的 loader
（2）在 webpack.config.js 的 **module** -> **rules** 数组中，添加 loader 规则如下：

````
module: {   // 所有第三方文件模块的匹配规则
    rules: [    // 文件后缀名的匹配规则
        { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
}
````

其中，**test** 表示匹配的**文件类型**， **use** 表示对应**要调用的 loader** 注意：

- use 数组中指定的 loader **顺序是固定的**
- 多个 loader 的调用顺序是：**从后往前调用**

> 1. webpack 默认只能打包处理 .js 结尾的文件，处理不了其它后缀的文件
> 2. 由于代码中包含了 **index.css** 这个文件，因此 webpack 默认处理不了
> 3. 当 webpack 发现某个处理不了的时候，会查找 **webpack.config.js** 这个配置文件，看 module.**rules** 数组中，是否配置了对应的 loader 加载器
> 4. webpack 是 index.css 这个文件，**先**转交给最后一个 loader 进行处理（先转交给 css-loader）
> 5. 当 css-loader 处理完毕之后，会把处理的结果，转交给下一个 loader（转交给 style-loader）
> 6. 当 style-loader 处理完毕之后，发现没有下一个 loader 了，于是就把处理的结果，转交给了 webpack
> 7. Webpack 把 style-loader 处理的结果，合并到 **/dist/main.js** 中，最终生成打包好的文件

4、打包处理 less 文件

（1）运行 npm i **less-loader@10.0.1 less@4.1.1** -D 命令
（2）在 webpack.config.js 的 **module** -> **rules** 数组中，添加 loader 规则如下：

````
module: {   // 所有第三方文件模块的匹配规则
		rules: [    // 文件后缀名的匹配规则
				{ test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }
		]
}
````

5、打包处理样式表中与 url 路径相关的文件

（1）运行 npm i **url-loader@4.1.1 file-loader@6.2.0** -D 命令
（2）在 webpack.config.js 的 **module** -> **rules** 数组中，添加 loader 规则如下：

````
module: {   // 所有第三方文件模块的匹配规则
    rules: [    // 文件后缀名的匹配规则
        { test: /\.jpg|png|gif$/, use: 'url-loader?limit=22229' }
    ]
}
````

其中 **?** 之后的是 **loader 的参数项**：
- limit 用来指定**图片的大小**，单位是字节（byte）
- 只有 **≤** limit 大小的图片，才会被转为 base64 格式的图片

6、打包处理 js 文件中的高级语法

webpack 只能打包处理**一部分**高级的 JavaScript 语法。对于那些 webpack 无法处理的高级 js 语法，需要借 助于 **babel-loader** 进行打包处理。例如 webpack 无法处理下面的 JavaScript 代码：

````
// 1、定义了名为 info 的装饰器
function info(target){
	// 2、为目标添加静态属性 info
	target.info = 'Person info'
}

// 3、为Person 类应用 info 装饰器
@info
class Person {}

// 4、打印 Person 的静态属性 info
console.log(Person.info)
````

6.1、安装 babel-loader 相关的包

运行如下的命令安装对应的依赖包:
npm i **babel-loader@8.2.2 @babel/core@7.14.6 @babel/plugin-proposal-decorators@7.14.5** -D

在 webpack.config.js 的 **module** -> **rules** 数组中，添加 loader 规则如下：

````
//  注意：必须使用 exclude 指定排除项：因为 node_modules 目录下的第三方包不需要被打包
{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
````

6.2、配置 babel-loader

在项目根目录下，创建名为 **babel.config.js** 的配置文件，定义 **Babel 的配置项**如下:

### 打包发布

1、为什么要打包发布

**项目开发完成之后**，需要使用 webpack **对项目进行打包发布**，主要原因有以下两点：
（1）开发环境下，打包生成的文件**存放于内存中**，无法获取到最终打包生成的文件
（2）开发环境下，打包生成的文件**不会进行代码压缩和性能优化**

**为了让项目能够在生产环境中高性能的运行**，因此需要对项目进行打包发布。

2、配置 webpack 的打包发布

在 **package.json** 文件的 **scripts** 节点下，新增 build 命令如下：

````
"scripts": {
  "dev": "webpack serve",		// 开发环境中，运行 dev 命令
  "build": "webpack --mode production"	// 项目发布时，运行 build 命令
}
````

**--model** 是一个参数项，用来指定 webpack 的**运行模式**。production 代表生产环境，会对打包生成的文件进行**代码压缩**和**性能优化**。

>通过 --model 指定的参数项，会**覆盖** webpack.config.js 中的 model 选项。

3、把 JavaScript 文件统一生成到 js 目录中
在 **webpack.config.js** 配置文件的 **output** 节点中，进行如下的配置:

````
output: {
	path: path.join(__dirname, './dist'),
	// 明确告诉 webpack 把生成的 main.js 文件存放到 dist 目录下的 js 子目录中
	filename: 'js/main.js'
},
````

4、把图片文件统一生成到 image 目录中
修改 webpack.config.js 中的 **url-loader** 配置项，新增 **outputPath** 选项即可指定图片文件的输出路径：

````
//  在配置 url-loader 的时候，多个参数之间，使用 & 符号进行分隔
//	明确指定把打包生成的图片文件，存储在 dist 目录下的 images 文件夹中
{ test: /\.jpg|png|gif$/, use: 'url-loader?limit=1000&outputPath=images' }
````

5、自动清理 dist 目录下的旧文件
为了在每次打包发布时**自动清理掉 dist 目录中的旧文件**，可以安装并配置 **clean-webpack-plugin** 插件：

````
// 1、安装清理 dist 目录的 webpack 插件
npm install clean-webpack-plugin@3.0.0 -D

// 2、按需导入插件，得到插件的构造函数之后，创建插件的实例对象
const { CleanWebpackPlugin } = require('cleanwebpackplugin')
const cleanPlugin = new CleanWebpackPlugin()

// 3、把创建的 cleanPlugin 插件实例对象，挂载到 plugins 节点中
plugins: [htmlPlugin, cleanPlugin],	//	挂载插件
````

### Source Map

1、生产环境遇到的问题

前端项目在投入生产环境之前，都需要对 JavaScript 源代码进行**压缩混淆**，从而减小文件的体积，提高文件的 加载效率。此时就不可避免的产生了另一个问题：

**对压缩混淆之后的代码除错（debug）**是一件极其困难的事情

- 变量被替换成**没有任何语义**的名称
- 空行和注释被剔除

2、什么是 Source Map

**Source Map 就是一个信息文件，里面储存着位置信息**。也就是说，Source Map 文件中存储着压缩混淆后的 代码，所对应的**转换前的位置**。
有了它，出错的时候，除错工具将**直接显示原始代码，而不是转换后的代码**，能够极大的方便后期的调试。

3、webpack **开发环境下的** Source Map

在**开发环境下**，webpack **默认启用了** Source Map 功能。当程序运行出错时，可以直接在控制台提示**错误行的位置**，并**定位到具体的源代码**

3.1、默认 Source Map 的问题

开发环境下默认生成的 Source Map，记录的是**生成后的代码的位置**。会导致**运行时报错的行数**与**源代码的行数**不一致的问题。

3.2、解决默认 Source Map 的问题

开发环境下，推荐在 **webpack.config.js** 中添加如下的配置，即可保证**运行时报错的行数**与**源代码的行数**保持一致：

````
module.exports = {
    mode: 'development',
    // eval-source-map 仅限在"开始模式"下使用，不建议在"生产模式"下使用
    // 此选项生成的 Source Map 能够保证"运行时报错的行数"与"源代码的行数"保持一致
    devtool: 'eval-source-map'
}
````

4、webpack **生产环境下的** Source Map

在**生产环境下**，如果**省略了 devtool 选项**，则最终生成的文件中**不包含 Source Map**。这能够**防止原始代码**通过 Source Map 的形式**暴露**给别有所图之人。

4.1、只定位行数不暴露源码

在生产环境下，如果**只想定位报错的具体行数**，且**不想暴露源码**。此时可以将 **devtool** 的值设置为 **nosources-source-map**。

4.2、定位行数且暴露源码

在生产环境下，如果**想在定位报错行数的同时，展示具体报错的源码**。此时可以将 **devtool** 的值设置为 **source-map**。
>采用此选项后:你应该将你的服务器配置为，**不允许普通用户访问 source map 文件**!

5、Source Map 的最佳实践

（1）开发环境下:
- 建议把 devtool 的值设置为 **eval-source-map**
- 好处:可以精准定位到具体的错误行

（2）生产环境下:
- 建议**关闭 Source Map** 或将 devtool 的值设置为 **nosources-source-map**
- 好处:防止源码泄露，提高网站的安全性

### 总结

（1）能够掌握 webpack 的基本使用
- 安装、**webpack.config.js**、修改打包入口

（2）了解常用的 plugin 的基本使用
- **webpack-dev-server**、html-webpack-plugin 

（3）了解常用的 loader 的基本使用
- loader 的作用、**loader 的调用过程**

（4）能够说出 Source Map 的作用
- 精准定位到**错误行**并**显示对应的源码**
- 方便开发者调试源码中的错误

## Vue 基础入门

### vue 简介

1、什么是 vue

官方给出的概念:Vue (读音 /vjuː/，类似于 view) 是一套**用于构建用户界面的**前端**框架**。

```mermaid
graph LR;

a--核心关键词-->b
b-->a




a((构建用户<br>界面))
b((框架))
```

（1）构建用户界面

- 用 vue 往 html 页面中填充数据，非常的方便

（2）框架

- 框架是一套**现成的解决方案**，程序员只能遵守**框架的规范**，去编写自己的业务功能！
- 要学习 vue，就是在学习 vue 框架中**规定的用法**！
- **vue 的指令，组件（是对 UI 结构的复用）、路由、Vuex**
- 只有把上面罗列的内容掌握以后，才有开发 vue 项目的能力！

2、vue 的特性

vue 框架的特性，主要体现在如下两方面：

（1）**数据驱动视图**

- 数据的变化**会驱动视图**自动更新
- 好处：程序员只管把数据维护好，那么页面结构会被 vue 自动渲染出来！

（2）**双向数据绑定**

> 在网页中，form表单负责**采集数据**

- js 数据的变化，会被自动渲染到页面上
- 页面上表单采集的数据发生变化的时候，会被 vue 自动猜获取到，并更新到 js 数据中

> 注意：数据驱动视图和双向数据绑定的底层原理是MVVM（Mode 数据源，View 视图，ViewModel 就是 vue 的实例）

2.1、数据驱动视图

在使用了 vue 的页面中，vue 会监听数据的变化，从而自动重新渲染页面的结构。示意图如下：

```mermaid
graph RL;


b--自动渲染-->a
c--变化-->b



a[页面结构]
b(vue<br>监听数据的变化)
c((页面所<br>依赖的数据))
```

>好处：当页面数据发生变化时，页面会自动重新渲染!
注意：数据驱动视图是**单向的数据绑定**。

2.2、双向数据绑定

在**填写表单**时，双向数据绑定可以辅助开发者在**不操作 DOM 的前提下**，**自动**把用户填写的内容同步到数据源 中。示意图如下：

```mermaid
graph RL;


b--自动渲染-->a
a--值发生变化-->b
c--变化-->b
b--自动同步-->c



a[页面结构]
b(vue)
c((页面所<br>依赖的数据))
```

> 好处：开发者不再需要手动操作 DOM 元素，来获取表单元素最新的值！

2.3、MVVM

**MVVM** 是 vue 实现**数据驱动视图**和**双向数据绑定**的核心原理。MVVM 指的是 **M**odel、**V**iew 和 **V**iewModel， 它把每个 HTML 页面都拆分成了这三个部分，如图所示：

![图片](./images/mvvm.jpg)

在 MVVM 概念中：
**Model** 表示当前页面渲染时所依赖的数据源。
**View** 表示当前页面所渲染的 DOM 结构。
**ViewModel** 表示 vue 的实例，它是 MVVM 的核心。

**2.4 MVVM** **的工作原理**

ViewModel 作为 MVVM 的核心，是它把当前页面的数据源(Model)和页面的结构(View)连接在了一起。

```mermaid
graph RL;


b--自动渲染-->a
a--监听DOM变化-->b
c--监听数据源变化-->b
b--自动同步-->c

a(View)
b(ViewModel)
c(Model)
```

当**数据源发生变化**时，会被 ViewModel 监听到，VM 会根据最新的数据源**自动更新**页面的结构
当**表单元素的值发生变化**时，也会被 VM 监听到，VM 会把变化过后最新的值**自动同步**到 Model 数据源中

3、vue 的版本

当前，vue 共有 3 个大版本，其中:

**2.x 版本的 vue 是目前企业级项目开发中的主流版本**

3.x 版本的 vue 于 2020-09-19 发布，生态还不完善，尚未在企业级项目开发中普及和推广 1.x 版本的 vue 几乎被淘汰，不再建议学习与使用

总结:

**3.x 版本的 vue 是未来企业级项目开发的趋势;**

2.x 版本的 vue 在未来(1 ~ 2年内)会被逐渐淘汰;

### vue 的基本使用

1、基本使用步骤

（1）导入 vue.js 的 script 脚本文件
（2）在页面中声明一个将要被 vue 所控制的 DOM 区域
（3）创建 vm 实例对象（vue 实例对象）

2、基本代码与 MVVM 的对应关系

### vue 的调试工具

1、安装 vue-devtools 调试工具

2、配置 Chrome 浏览器中的 vue-devtools

3、使用 vue-devtools 调试 vue 页面

在浏览器中**访问一个使用了 vue 的页面**，打开浏览器的**开发者工具**，**切换到 Vue 面板**，即可使用 vue-devtools 调试当前的页面。

### vue 的指令与过滤器

1、指令的概念

**指令（Directives）**是 vue 为开发者提供的**模板语法**，用于**辅助开发者渲染页面的基本结构**。

vue 中的指令**按照不同的用途**可以分为如下 6 大类：

（1）**内容渲染**指令
（2）**属性绑定**指令
（3）**事件绑定**指令
（4）**双向绑定**指令
（5）**条件渲染**指令
（6）**列表渲染**指令

> 注意：指令是 vue 开发中最基础、最常用、最简单的知识点。

1.1、内容渲染指令

内容渲染指令用来辅助开发者渲染 DOM 元素的文本内容。常用的内容渲染指令有如下 3 个：

- v-text
- {{ }}
- v-html

##### v-text

````
<!-- 把 username 对应的值，渲染到第一个 p 标签中 -->
<p v-text="username"></p>
<!-- 把 gender 对应的值，渲染到第二个 p 标签中 -->
<!-- 注意：第地一个 p 标签中，默认的文本"性别"会被 gender 的值覆盖掉 -->
<p v-text="gender">性别</p>
````

> 注意：v-text 指令的缺点会覆盖元素内默认的值

##### {{ }}语法

vue 提供的 {{ }} 语法，专门用来解决 v-text 会覆盖默认文本内容的问题。这种 {{ }} 语法的专业名称是**插值表达式**（英文名为:**Mustache**）。

````
<!-- 使用 {{ } 插值表达式，将对应的值渲染到元素的内容节点中 -->
<!-- 同时保留元素自身的默认值 -->
<p>姓名：{{username}}</p>
<p>性别：{{gender}}</p>
````

> 注意：相对于 v-text 指令来说，**插值表达式在开发中更常用一些**！因为它不会覆盖元素中默认的文本内容。

##### v-html

**v-text** 指令和**插值表达式**只能渲染**纯文本内容**。如果要把**包含 HTML 标签的字符串**渲染为页面的 HTML 元素， 则需要用到 v-html 这个指令： 

````
<!-- 假设 data 中定义了名为 info 的数据，数据的值为包含 html 标签的字符串 -->
<!-- '<h4 style='color: red;'>你好</h4>' -->

<p v-html="info"></p>
````

1.2、属性绑定指令

如果需要为**元素的属性**动态绑定**属性值**，则需要用到 **v-bind** 属性绑定指令。用法示例如下：

````
data: {
	tips: '请输入用户名'
}
<input type="text" v-bind:placeholder="tips">
````

> 注意：插值表达式只能用在**元素的内容**节点中，不能用在**元素的属性**节点中！

##### 属性绑定指令的简写形式

由于 **v-bind 指令**在开发中使用频率非常高，因此，vue 官方为其提供了**简写形式**（简写为英文的 **:** ）。

````
data: {
	tips: '请输入用户名'
}
<input type="text" :placeholder="tips">
````

##### 使用 Javascript 表达式

在 vue 提供的模板渲染语法中，除了支持**绑定简单的数据值**之外，还**支持 Javascript 表达式的运算**，例如：

````
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ tips.split('').reverse().join('') }}

<div v-bind:id="'list-' + id"></div>
````

> 在使用 v-bind 属性绑定期间，如果绑定内容需要进行动态拼接，则字符串的外面应该包裹单引号，例如：

1.3、事件绑定指令

vue 提供了 **v-on 事件绑定**指令，用来辅助程序员为 DOM 元素绑定事件监听。语法格式如下：

````
<p>count 的值为：{{count}}</p>
<!-- 语法格式为 v-on:事件名称="事件处理函数的名称" -->
<button v-on:click="addCount">+1</button>
````

注意:原生 DOM 对象有 **onclick、oninput、onkeyup** 等原生事件，替换为 vue 的事件绑定形式后， 
分别为：**v-on:click、v-on:input、v-on:keyup**

通过 v-on 绑定的事件处理函数，需要**在 methods 节点**中进行声明：

````
const vm = new Vue({
	el: "#app",
	data: {
		count: 0
		},
	methods: {          // v-on 绑定的事件处理函数，需要声明 methods 节点中
		addCount() {    // 事件处理函数的名字
			// this 表示当前 new 出来的 vm 实例对象
			// 通过 this 可以访问到 data 中的数据
			this.count += 1
		}
	}
})
````

##### 事件绑定的简写形式

由于 **v-on 指令**在开发中使用频率非常高，因此，vue 官方为其提供了**简写形式**（简写为英文的 **@** ）。

````
<!-- 简写形式，把 v-on 指令简写为 @ -->
<button @click="addCount">+1</button>
````

##### 绑定事件并传参

在使用 v-on 指令绑定事件时，可以使用 **( )** 进行传参，示例代码如下:

````

<button @click="addCount(2)">+1</button>

methods: {
	addCount(n) { 
		// 在形参处用 n 接收传递过来的参数值
		this.count += n
	}
}
````

##### 事件参数对象

在原生的 DOM 事件绑定中，可以在事件处理函数的形参处，接收事件参数对象 event。同理，在 **v-on 指令** (简写为 **@** )所绑定的事件处理函数中，**同样可以接收到事件参数对象 event**，示例代码如下：

````
<p>count 的值是：{{ count }}</p>
<button @click="add">+N</button>

methods: {
	add(e) {
		this.count += 1
		// 判断 this.count 的值是否为偶数
		if (this.count % 2 === 0) {
			// 偶数
			e.target.style.backgroundColor = 'red'
		} else {
			// 奇数
			e.target.style.backgroundColor = ''
		}
	}
}
````

##### $event

**$event** 是 vue 提供的**特殊变量**，用来表示**原生的事件参数对象 event**。$event 可以解决事件参数对象 event 被覆盖的问题。示例用法如下：

````
<p>count 的值是：{{ count }}</p>
<button @click="add(1, $event)">+N</button>

methods: {
	add(n, e) {
		this.count += 1
		// 判断 this.count 的值是否为偶数
		if (this.count % 2 === 0) {
			// 偶数
			e.target.style.backgroundColor = 'red'
		} else {
			// 奇数
			e.target.style.backgroundColor = ''
		}
	}
}
````

##### 事件修饰符

在事件处理函数中调用 **event.preventDefault()** 或 **event.stopPropagation()** 是非常常见的需求。因此， vue 提供了**事件修饰符**的概念，来辅助程序员更方便的**对事件的触发进行控制**。常用的 5 个事件修饰符如下：

| 事件修饰符   | 说明                                                         |
| ------------ | ------------------------------------------------------------ |
| **.pervent** | **阻止默认行为**（例如：阻止 a 连接的跳转，阻止表单的提交等） |
| **.stop**    | **阻止事件冒泡**                                             |
| .capture     | 以捕获模式触发当前的事件处理函数                             |
| .once        | 绑定的事件只触发1次                                          |
| .self        | 只有在 event.target是当前元素自身时触发事件处理函数          |

````
<!-- 触发 click 点击事件时，阻止 a 链接的默认跳转行为 -->
<a href="http://www.baidu.com" @click.pevent="show">跳转到百度首页</a>
<!-- 触发 click 点击事件时，阻止 button 按钮的默认冒泡行为 -->
<button @click.stop="xxx">按钮</button>
````

##### 按键修饰符

在监听**键盘事件**时，我们经常需要**判断详细的按键**。此时，可以为**键盘相关的事件**添加**按键修饰符**，例如：

````
<!-- 只有在 'key' 是 'Enter' 时调用 'vm.submit()' -->
<!-- 只有在 'key' 是 'Esc' 时调用 'vm.clearInput()' -->
<input type="text" @keyup.esc="clearInput" @keyup.enter="submit">
````

1.4、双向绑定指令

vue 提供了 **v-model 双向数据绑定**指令，用来辅助开发者在**不操作 DOM** 的前提下，**快速获取表单的数据**。

````
<input type="text" v-model="username">

<select v-model="city">
	<option value="">请选择城市</option>
	<option value="1">北京</option>
	<option value="2">上海</option>
	<option value="3">广州</option>
</select>
````

1、input 输入框

- type = "radio"
- type = "checkbox"
- type = "xxxx"

2、textarea

3、select

##### v-model 指令的修饰符

为了方便对用户输入的内容进行处理，vue 为 v-model 指令提供了 3 个修饰符，分别是：

| 修饰符  | 作用                           | 示例                           |
| ------- | ------------------------------ | ------------------------------ |
| .number | 自动将用户的输入值转为数值类型 | <input v-model.number="age" /> |
| .trim   | 自动过滤用户输入的首尾空白字符 | <input v-model.trim="age" />   |
| .lazy   | 在"change"时而非"input"时更新  | <input v-model.lazy="age" />   |

````
<input type="text" v-model.number="n1"> + 
<input type="text" v-model.number="n2"> = 
<span>{{ n1 + n2 }}</span>
````

1.5、条件渲染指令

**条件渲染指令**用来辅助开发者按需**控制 DOM 的显示与隐藏**。条件渲染指令有如下两个，分别是：

- v-if 的原理是：每次动态创建或移除元素，实现元素的显示和隐藏

  如果刚进入页面的时候，某些元素默认不需要被展示，而且后期这个元素很可能也不需要被展示出来，些时 v-if 性能更好

- v-show 的原理：动态为元素添加或移除 display: none 样式，来实现元素的显示和隐藏

  如果要频繁的切换元素的显示状态，用 v-show 性能更好

- 在实际开发中，绝大多数情况，不用考虑性能问题，直接使用 v-if 就好了

````
<p v-if="flag">这是一个 v-if 控制的元素</p>
<p v-show="flag">这是一个 v-show 控制的元素</p>
````

##### v-if 和 v-show 的区别

实现原理不同：

- v-if 指令会**动态地创建或移除 DOM 元素**，从而控制元素在页面上的显示与隐藏
- v-show 指令会动态为元素**添加或移除 style="display: none;" 样式**，从而控制元素的显示与隐藏

性能消耗不同：
**v-if** 有更高的**切换开销**，而 **v-show** 有更高的**初始渲染开销**。因此：

- 如果需要**非常频繁地切换**，则使用 v-show 较好
- 如果在**运行时条件很少改变**，则使用 v-if 较好

##### v-else

v-if 可以单独使用，或配合 v-else 指令一起使用:

> 注意：v-else 指令**必须配合** v-if 指令一起使用，否则它将不会被识别!

##### v-else-if

v-else-if 指令，顾名思义，充当 v-if 的“else-if 块”，可以连续使用：

> 注意：v-else-if 指令**必须配合** v-if 指令一起使用，否则它将不会被识别!

1.6、列表渲染指令

vue 提供了 **v-for** 列表渲染指令，用来辅助开发者**基于一个数组来循环渲染一个列表结构**。v-for 指令需要使 用 item in items 形式的特殊语法，其中:

- items 是**待循环的数组**
- item 是**被循环的每一项**

##### v-for 中的索引

v-for 指令还支持一个**可选的**第二个参数，即**当前项的索引**。语法格式为 **(item, index) in items**，示例代码如下:

> 注意：v-for 指令中的 item 项和 index 索引都是形参，可以根据需要进行重命名。例如 (user, i) in userlist

##### 使用 key 维护列表的状态

当**列表的数据变化**时，默认情况下，vue 会**尽可能的复用**已存在的 DOM 元素，从而**提升渲染的性能**。但这种默认的性能优化策略，会导致**有状态的列表无法被正确更新**。

为了给 vue 一个提示，以便它能跟踪每个节点的身份，从而在保证**有状态的列表被正确更新**的前提下，**提升渲染的性能**。此时，需要为每项提供一个**唯一的 key 属性**：

````
<ul>
	<!-- 官方建议：只要用到了 v-for 指令，那么一定要绑定一个 :key 属性 -->
	<!-- 加 key 属性的好处 -->
  <!-- 1、正确维护列表的状态 -->
  <!-- 2、复用现有的 DOM 元素，提升渲染的性能 -->
	<li v-for="(item, index) in list" :id="item.id">索引是：{{ index }}，姓名：{{ item.name }}</li>
</ul>
````

**key** **的注意事项**

（1）key 的值只能是**字符串**或**数字**类型
（2）key 的值**必须具有唯一性**即:key 的值不能重复)
（3）建议把**数据项 id 属性的值**作为 key 的值(因为 id 属性的值具有唯一性)
（4）使用 **index 的值**当作 key 的值**没有任何意义**（因为 index 的值不具有唯一性）
（5）建议使用 v-for 指令时**一定要指定 key 的值**（既提升性能、又防止列表状态紊乱）

2、过滤器

**过滤器**（**Filters**）是 vue 为开发者提供的功能，常用于**文本的格式化**。过滤器可以用在两个地方：**插值表达式** 和 **v-bind 属性绑定**。

过滤器应该被添加在 JavaScript 表达式的**尾部**，由“**管道符**”进行调用，示例代码如下：

### 总结

（1）能够知道 vue 的**基本使用步骤**

- 导入 vue.js 文件
- new Vue() 构造函数，得到 vm 实例对象
- 声明 el 和 data 数据节点
- MVVM 的对应关系

（2）掌握 vue 中常见**指令**的基本用法

- 插值表达式、v-bind、v-on、v-if 和 v-else

- v-for 和 :key、v-model

（3）掌握 vue 中**过滤器**的基本用法

- 全局过滤器 Vue.filter('过滤器名称', function) 
- 私有过滤器 filters 节点

##### 过滤器

**过滤器（Filters）**是 vue 为开发者提供的功能，常用于**文本的格式化**。过滤器可以用在两个地方：**插值表达式**和 **v-bind 属性绑定**。

过滤器应该被添加在 JavaScript 表达式的**尾部**，由“管道符”进行调用，示例代码如下：

（1）要定义到filters节点下，本质是一个函数

（2）在过滤器函数中，一定要有 return 值

（3）在过滤器的形参中，就可以获取到"管道符"前面待处理的那个值

（4）如果全局过滤器和私有过滤器名字一致，此时按照"就近原则"，调用的是"私有过滤器"

**私有过滤器和全局过滤器**

在 filters 节点下定义的过滤器，称为“**私有过滤器**”，因为它**只能在当前 vm 实例所控制的 el 区域内使用**。

如果希望**在多个 vue 实例之间共享过滤器**，则可以按照如下的格式定义**全局过滤器**：

````
filters: {
	// 注意：过渡器函数形参中的val，永远都是"管道符"前面的那个值
	capi(val) {
    	// 字符串有 charAt 方法，这个方法接收索引值，表示从字符串中把索引对应的字符，获取出来
    	const first = val.charAt(0)
    	// 字符串的 slice 方法，可以截取字符串，从指定索引往后截取
     	const other = val.slice(1)        
		// 强调：过滤器中，一定要有一个返回值
		return first + other
	}
}
````

````
Vue.filter('capi', function(str) {
    const first = str.charAt(0).toUpperCase()
	const other = str.slice(1)
	 return first + other
})
````

**连续调用多个过滤器**

过滤器可以**串联地**进行调用，例如：

````
<p>{{ message | filterA | filterB }}</p>
````

**过滤器传参**

过滤器的**本质**是 **JavaScript 函数**，因此可以接收参数，格式如下：

````
<p>{{ message | filterA(arg1, arg2) }}</p>
Vue.filter('filterA', (msg, arg1, arg2) => {
    //过渡器代码...
})
````

### 侦听器

1、什么是 watch 侦听器

**watch 侦听器**允许开发者监视数据的变化，从而**针对数据的变化做特定的操作**。
语法格式如下：

````
const vm = new Vue({
  el: '#app',
  data: {
    username: ''
  },
  // 所有的侦听器，都应该被定义到 watch 节点下
  watch: {
    // 侦听器本质上是一个函数，要监听哪个数据的变化，就把数据名作为方法名即可
    // 新值在前，旧值在后
		username(newVal, oldVal) {
			console.log(newVal, oldVal)
		}
	}
})
````

2、使用 watch 检测用户名是否可用

监听 username 值的变化，并使用 axios 发起 Ajax 请求，**检测当前输入的用户名是否可用**：

````
watch: {
	async username(newVal, oldVal) {
		if (newVal === '') return
    // 使用 axios 发起请求，判断用户名是否可用
    const { data: res } = await axios.get('https://www.escook.cn/api/finduser/' + newVal)
    console.log(res)
	}
}
````

3、immediate 选项

默认情况下，组件在初次加载完毕后不会调用 watch 侦听器。如果想让 watch 侦听器**立即被调用**，则需要使 用 **immediate** 选项。示例代码如下：

````
watch: {
	username() {
	  // handler 是固定写法，表示当 username 的值变化时，自动调用 handler 处理函数
		handler(newVal, oldVal) {
			console.log(newVal, oldVal)
		}
	},
	// 表示页面初次渲染好之后，就立即触发当前的 watch 侦听器
	immediate: true
}
````

4、deep 选项

如果 **watch 侦听的是一个对象**，如果**对象中的属性值发生了变化**，则**无法被监听到**。此时需要使用 **deep 选项**，代码示例如下：

````
data: {
  // 用户的信息对象
	info: {
		username: 'admin'
	}
},
watch: {
	info: {
		handler(newVal, oldVal) {
			console.log(newVal, oldVal)
		}
	},
	// 表示页面初次渲染好之后，就立即触发当前的 watch 侦听器
	deep: true
}

````



**5.** **监听对象单个属性的变化**

如果**只想监听对象中单个属性的变化**，则可以按照如下的方式定义 watch 侦听器：

````
data: {
  // 用户的信息对象
	info: {
		username: 'admin'
	}
},
watch: {
	'info.username' (newVal) {
		console.log(newVal)
	}
}


````

### 计算属性

1、什么是计算属性

计算属性指的是**通过一系列运算之后**，最终得到一个**属性值**。 这个**动态计算出来的属性值**可以被模板结构或 methods 方法使用。示例代码如下：

2、计算属性的特点

（1）虽然计算属性在**声明的时候**被定义为**方法**，但是计算属性的**本质是一个属性**
（2）计算属性会**缓存计算的结果**，只有计算属性**依赖的数据变化时**，才会重新进行运算

## axios

> axios 是一个专注于网络请求的库！



### axios 的基本使用

1、发起 GET 请求：

```js
axios({
  // 请求方式
  method: 'GET',
  // 请求的地址
  url: 'http://www.liulongbin.top:3006/api/getbooks',
  // URL 中的查询参数
  params: {
    id: 1
  }
}).then(function (result) {
  console.log(result)
})
```

2、发起 POST 请求：

```js
document.querySelector('#btnPost').addEventListener('click', async function () {
  // 如果调用某个方法的返回值是 Promise 实例，则前面可以添加 await！
  // await 只能用在被 async “修饰”的方法中
  const { data: res } = await axios({
    method: 'POST', 
    url: 'http://www.liulongbin.top:3006/api/post',
    data: {
      name: 'zs',
      age: 20
    }
  })

  console.log(res)
})
```

### vue-cli

1、什么是单页面应用程序

**单页面应用程序**（英文名:**S**ingle **P**age **A**pplication）简称 SPA，顾名 思义，指的是**一个 Web 网站中只有唯一的一个 HTML 页面**，所有的功能 与交互都在这唯一的一个页面内完成。

例如资料中的这个 Demo 项目：

css	images	js 	index.html

2、什么是 vue-cli

**vue-cli 是 Vue.js 开发的标准工具**。它简化了程序员基于 webpack 创建工程化的 Vue 项目的过程。 引用自 vue-cli 官网上的一句话:

程序员可以**专注在撰写应用上**，而不必**花好几天**去**纠结** webpack 配置的问题。 

中文官网：https://cli.vuejs.org/zh/

3、安装和使用

vue-cli 是 npm 上的一个**全局包**，**使用 npm install** 命令，即可方便的把它安装到自己的电脑上：
**npm install -g @vue/cli**

基于 vue-cli 快速生成工程化的 Vue 项目:

**vue create 项目的名称**

（1）Manually select features		// 手动选择功能

- Choose Vue version				 // 选择 vue 版本
- Babel                                       // 把Babel、ESlint 等插件的配置项，放到自己独立的配置文件中
- Css Pre-processors                 // css 预处理器

4、vue 项目的运行流程

在工程化的项目中，vue 要做的事情很单纯：通过 **main.js** 把 **App.vue** 渲染到 **index.html** 的指定区域中。

其中:
（1）**App.vue** 用来编写待渲染的**模板结构**
（2）**index.html** 中需要预留一个 **el 区域**
（3）**main.js** 把 App.vue 渲染到了 index.html 所预留的区域中

### vue 组件

1、什么是组件化开发

**组件化开发**指的是：根据**封装**的思想，**把页面上可重用的 UI 结构封装为组件**，从而方便项目的开发和维护。

2、vue 中的组件化开发

vue 是一个**支持组件化开发**的前端框架。
vue 中规定：**组件的后缀名**是 **.vue**。之前接触到的 App.vue 文件本质上就是一个 vue 的组件。

3、vue 组件的三个组成部分

每个 .vue 组件都由 3 部分构成，分别是：

- **template** -> 组件的**模板结构**
- **script** -> 组件的 **JavaScript 行为**
- **style** -> 组件的**样式**

其中，**每个组件中必须包含 template 模板结构**，而 **script** 行为和 **style 样式**是**可选的**组成部分。

> 组件是被UI结构的复用

3.1、template

vue 规定：每个组件对应的**模板结构**，需要定义到 **<template> 节点**中。

````
<template>
	<!-- 当前组件的 DOM 结构，需要定义到 template 标签的内部
</template>
````

注意：

- template 是 vue 提供的**容器标签**，只起到**包裹性质的作用**，它不会被渲染为真正的 DOM 元素
- template 中只能包含唯一的根节点

3.2、script

vue 规定:开发者可以在 <script> 节点中**封装组件的 JavaScript 业务逻辑**。 <script > 节点的基本结构如下：

````
<script>
// 今后，组件相关的 data 数据，methods 方法等。
// 都需要定义到 export default 所导出的对象中。
export default {}
</script>
````

.vue 组件中的 data 必须是函数

vue 规定:.vue 组件中的 data **必须是一个函数**，**不能**直接指向一个数据对象。 因此在组件中定义 data 数据节点时，下面的方式是**错误的**：

````
data: {		// 组件中，不能直接让 data 指向一个数据对象（会报错）
	count: 0
}
````

会导致**多个组件实例**共用**同一份数据**的问题，请参考官方给出的示例: https://cn.vuejs.org/v2/guide/components.html#data-必须是一个函数

3.3、style

vue 规定:组件内的 <style> 节点是**可选的**，开发者可以在 <style> 节点中**编写样式美化当前组件的 UI 结构**。 <script > 节点的基本结构如下：

````
<style>
h1 {
	font-weight: normal;
}
</style>
````

让 style 中支持 less 语法

在 <style> 标签上添加 **lang="less"** 属性，即可使用 less 语法编写组件的样式:

````
<style lang="less">
h1 {
	span {}
}
</style>
````

4、组件之间的**父子关系**

![图片](./images/component.png)

- 组件在被封装好之后，彼此之间是相互独立的，不存在父子关系
- 在使用组件的时候，根据彼此的嵌套关系，形成了父子关系、兄弟关系


4.1、使用组件的**三个步骤**

步骤3：以**标签形式**使用刚才注册的组件

步骤1：使用 import 语法**导入需要的组件**

步骤2：使用 **components** 节点注册组件

4.2、通过 components 注册的是私有子组件

例如：
在**组件 A** 的 components 节点下，注册了**组件 F**。
则组件 F 只能用在组件 A 中;不能被用在**组件 C** 中。

请大家思考两个问题:
（1）为什么 F 不能用在组件 C 中?
（2）怎样才能在组件 C 中使用 F?

4.3、注册全局组件
在 vue 项目的 **main.js** 入口文件中，通过 **Vue.component()** 方法，可以注册全局组件。示例代码如下：

````
// 导入需要被全局注册的那个组件
import Count from '@/components/Count.vue'

// 参数1：字符串格式，表示组件的"注册名称"
// 参数2：需要被全局注册的那个组件
Vue.component('MyCount', Count)
````

5、组件的 props

props 是组件的**自定义属性**，在**封装通用组件**的时候，合理地使用 props 可以极大的**提高组件的复用性**! 它的语法格式如下：

````
export default {
	// 组件的自定义属性
	props: ['自定义属性A', '自定义属性B', '自定义属性C...']
	
	// 组件的私有数据
	data() {
		return { }
	}
}
````

5.1、props 是只读的

vue 规定:组件中封装的自定义属性是**只读的**，程序员**不能直接修改** props 的值。否则会直接报错：

要想修改 props 的值，可以**把 props 的值转存到 data 中**，因为 data 中的数据都是可读可写的!

````
props: ['init'],
data() {
	return {
		count: this.init	// 把 this.init 的值转存到 count
	}
}
````

5.2、props 的 default 默认值
在声明自定义属性时，可以通过 **default** 来**定义属性的默认值**。示例代码如下：

````
export default {
	props: {
		inot: {
			// 用 default 属性定义属性的默认值
			default: 0
		}
	}
}
````

5.3、props 的 type 值类型
在声明自定义属性时，可以通过 **type** 来**定义属性的值类型**。示例代码如下：

````
export default {
	props: {
		inot: {
			// 用 default 属性定义属性的默认值
			default: 0,
			// 用 type 属性定义属性的值类型，
			// 如果传递过来的值不符合些类型，则会在终端报错
			type: Number
		}
	}
}
````

5.4、props 的 required 必填项

在声明自定义属性时，可以通过 required 选项，将属性设置为必填项，强制用户必须传递属性的值。示例代 码如下:

````
export default {
	props: {
		inot: {
			// 值类型为 Number 数字
			type: Number,
			// 必填项校验
			required: true
		}
	}
}
````

6、组件之间的样式冲突问题

默认情况下，**写在 .vue 组件中的样式会全局生效**，因此很容易造成**多个组件之间的样式冲突问题**。

导致组件之间样式冲突的根本原因是：

（1）单页面应用程序中，所有组件的 DOM 结构，都是基于**唯一的 index.html 页面**进行呈现的

（2）每个组件中的样式，都会**影响整个 index.html 页面**中的 DOM 元素

6.1、思考：如何解决组件样式冲突的问题

为每个组件分配唯一的自定义属性，在编写组件样式时，通过属性选择器来控制样式的作用域，示例代码如下：

````
<div class="container" data-v-001></div>

.container[data-v-001] {}
````

6.2 style 节点的 scoped 属性

为了提高开发效率和开发体验，vue 为 style 节点提供了 scoped 属性，从而防止组件之间的样式冲突问题：

````
<style scoped>
````

6.3、/deep/ 样式穿透

如果给当前组件的 style 节点添加了 scoped 属性，则**当前组件的样式对其子组件是不生效的**。如果想让某些样式对子组件生效，可以使用 **/deep/ 深度选择器**。

````
/deep/ .title{}
````

### 组件的生命周期

1、生命周期 & 生命周期函数

**生命周期**（Life Cycle）是指一个组件从**创建** -> **运行** -> **销毁**的整个阶段，**强调的是一个时间段**。

**生命周期函数**：是由 vue 框架提供的**内置函数**，会伴随着组件的生命周期，**自动按次序执行**。

> 注意：**生命周期**强调的是**时间段**，**生命周期函数**强调的是**时间点**。

2、组件生命周期函数的分类

分三个阶段：

（1）组件创建阶段

| 顺序 | 生命周期     | 作用                                                         |
| ---- | ------------ | ------------------------------------------------------------ |
| 1    | new Vue()    | 创建生命周期                                                 |
| 2    | beforeCreate | 刚开始创建之前<br />props/data/methods 都是不可用状态        |
| 3    | **created**  | 在内存里创建完毕<br />**props/data/methods 处于可用状态**<br />**可以发起 Ajax 请求拿数据**<br />**组件的模板结构尚未生成，不能操作 DOM** |
| 4    | beforeMount  | 在渲染组件之前<br />**html 结构已经在内存中**                |
| 5    | **mounted**  | 组件成功渲染到浏览器<br />**可以操作 DOM**                   |

（2）组件运行阶段

| 顺序 | 生命周期     | 作用                                         |
| ---- | ------------ | -------------------------------------------- |
| 1    | beforeUpdate | 组件更新之前<br />**数据更新，DOM 没有渲染** |
| 2    | **updated**  | 更新之后<br />**重新渲染 DOM**               |

> beforeUpdate和 updated 最少运行0次，最多无限次

（3）组件销毁阶段

| 顺序 | 生命周期      | 作用                                         |
| ---- | ------------- | -------------------------------------------- |
| 1    | beforeDestroy | 组件销毁之前<br />**将要销毁，组件正常工作** |
| 2    | Destroyed     | 销毁之后<br />**DOM 被移除**                 |

3、生命周期图示

![lifecycle](/Users/wanglei/workspace/xeon/MdData/images/lifecycle.png)

### 组件之间的数据共享

1、组件之间的关系

在项目开发中，组件之间的最常见的关系分为如下两种：

（1）父子关系
（2）兄弟关系

组件之间的关系

```mermaid
graph TB;


a((A))-->b
a((A))-->c
b((B))-->d
c((C))-->e((E))
c((C))-->f((F))
d((D))-->g((G))
d((D))-->h((H))
f((F))-->i((I))
f((F))-->j((J))
```

2、父子组件之间的数据共享

父子组件之间的数据共享又分为：

（1）**父 -> 子**共享数据
（2）**子 -> 父**共享数据

2.1、父组件向子组件共享数据

父组件向子组件共享数据需要使用**自定义属性**。示例代码如下：

````
<Son :msg="message" :user="userinfo"></Son>

data() {
	return {
		message: "hellow vue.js",
		userinfo: { name: 'xeon', age: 20}
	}
}
````

````
<p>{{ msg }}</p>
<p>{{ info }}</p>

props: ['msg', 'user']
````

2.2、子组件向父组件共享数据

子组件向父组件共享数据使用**自定义事件**。示例代码如下：

 ````
 // 字组件
 export default {
 	data() {
 		return { count: 0}
 	},
 	methods: {
 		add() {
 			this.count += 1
 			// 修改数据时，通过 $emit()触发自定义事件
 			this.$emit('numchange', this.count)
 		}
 	}
 }
 ````

````
// 父组件
<Son @numchang="getNewCount"></Son>
export default {
	data() {
		return { countFromSon: 0}
	},
	methods: {
		getNewCount(val) {
			this.countFromSon = val
		}
	}
}
````

3、兄弟组件之间的数据共享

在 **vue2.x** 中，兄弟组件之间数据共享的方案是 **EventBus**。

````
import bus from './eventBus.js’
export default { 
	data() {
		return {
			msg: 'hello vue.js'
		}
	},
	methods: { 
		sendMsg() {
			bus.$emit('share', this.msg)
		}
	}
}
//兄弟组件 A(数据发送方)
````

````
import Vue from 'vue'

// 向外共享 Vue 的实例对象
export default new Vue()

//eventBus.js
````

````
import bus from './eventBus.js'
export default {
	data() {
		return {
			msgFromLeft: ''
		}
	},
	created() {
		bus.$on('share', val => {
			this.msgFromLeft = val
		})
	}
}
// 兄弟组件 C(数据接收方)
````



**EventBus** **的使用步骤**

（1）创建 **eventBus.js** 模块，并向外共享一个 **Vue 的实例对象**
（2）在数据**发送方**，调用 **bus.$emit**('事件名称', 要发送的数据) 方法**触发自定义事件**
（3）在数据**接收方**，调用 **bus.$on**('事件名称', 事件处理函数) 方法**注册一个自定义事件**

### ref 引用

1、什么是 ref 引用

ref 用来辅助开发者在**不依赖于 jQuery 的情况下**，获取 DOM 元素或组件的引用。

````
每个 vue 的组件实例上，都包含一个 $refs 对象，里面存储着对应的 DOM 元素或组件的引用。默认情况下， 组件的 $refs 指向一个空对象。
````

2、使用 ref 引用 DOM 元素

如果想要使用 ref **引用页面上的 DOM 元素**，则可以按照如下的方式进行操作:

3、使用 ref 引用组件实例

如果想要使用 ref **引用页面上的组件实例**，则可以按照如下的方式进行操作:

4、控制文本框和按钮的按需切换

通过布尔值 inputVisible 来控制组件中的文本框与按钮的按需切换。示例代码如下:

5、让文本框自动获得焦点

当文本框展示出来之后，如果希望它立即获得焦点，则可以为其添加 ref 引用，并调用原生 DOM 对象的 **.focus()** 方法即可。示例代码如下:

6、this.$nextTick(cb) 方法

组件的 **$nextTick(cb)** 方法，会把 cb 回调**推迟到下一个 DOM 更新周期之后执行**。通俗的理解是：等组件的 DOM 更新完成之后，再执行 cb 回调函数。从而能保证 cb 回调函数可以操作到最新的 DOM 元素。

### 动态组件

1、什么是动态组件

动态组件指的是**动态切换组件的显示与隐藏**。

2、如何实现动态组件渲染

vue 提供了一个内置的 <component> 组件，专门用来实现动态组件的渲染。示例代码如下：

````
data() {
	// 1. 当前要渲染的组件名称
	return {comName: 'Left'}
}
<!-- 2. 通过 is 属性，动态指定要渲染的组件 -->
<component :is="comName"></component>
<!-- 3. 点击按钮，动态切换组件的名称 -->
<button @click="comName = 'Left'">展示 Left 组件</button>
<button @click="comName = 'Right'">展示 Right 组件</button>
````

3、使用 keep-alive 保持状态

默认情况下，切换动态组件时**无法保持组件的状态**。此时可以使用 vue 内置的 **<keep-alive>** 组件保持动态组 件的状态。示例代码如下：

````
<keep-alive>
	<component :is="comName"></component>
</keep-alive>
````

4、keep-alive 对应的生命周期函数

当组件被缓存时，会自动触发组件的 deactivated 生命周期函数。 当组件被激活时，会自动触发组件的 activated 生命周期函数。

5、keep-alive 的 include 属性
include 属性用来指定：只有**名称匹配的组件**会被缓存。多个组件名之间使用**英文的逗号**分隔：

````
<keep-alive include="MyLeft,MyRight">
	<component :is="comName"></component>
</keep-alive>
````

### 插槽

1、什么是插槽

**插槽**(**Slot**)是 vue 为**组件的封装者**提供的能力。允许开发者在封装组件时，把**不确定的**、**希望由用户指定的部分**定义为插槽。

可以把插槽认为是组件封装期间，为用户预留的**内容的占位符**。

2、体验插槽的基础用法

在封装组件时，可以通过 **<slot>** 元素**定义插槽**，从而**为用户预留内容占位符**。示例代码如下：

2.1、没有预留插槽的内容会被丢弃

如果在封装组件时**没有预留任何 <slot> 插槽**，则用户提供的任何**自定义内容**都**会被丢弃**。示例代码如下：

2.2、后备内容

封装组件时，可以为预留的 <slot> 插槽提供**后备内容**(默认内容)。如果组件的使用者没有为插槽提供任何 内容，则后备内容会生效。示例代码如下：

3、具名插槽

如果在封装组件时**需要预留多个插槽节点**，则需要为每个 <slot> 插槽指定**具体的 name 名称**。这种**带有具体名称的插槽**叫做“具名插槽”。示例代码如下：

3.1、为具名插槽提供内容

在向具名插槽提供内容的时候，我们可以在一个 **<template>** 元素上使用 **v-slot** 指令，并以 v-slot 的参数的 形式提供其名称。示例代码如下：

3.2、具名插槽的简写形式

跟 v-on 和 v-bind 一样，v-slot 也有缩写，即把参数之前的所有内容 (**v-slot:**) 替换为字符 **#**。例如 **v-slot:**header 可以被重写为 **#**header：

4、作用域插槽

在封装组件的过程中，可以为预留的 <slot> 插槽绑定 props 数据，这种**带有 props 数据的 <slot>** 叫做“**作用域插槽**”。示例代码如下：

4.1、使用作用域插槽

可以使用 **v-slot:** 的形式，接收作用域插槽对外提供的数据。示例代码如下：

4.2、解构插槽 Prop

作用域插槽对外提供的数据对象，可以使用**解构赋值**简化数据的接收过程。示例代码如下：

````
<slot v-for="item in list" msg="hello vue" :user="item">

<myTemp>
	<template #default="{msg, user}">
		<p>{{user.id}}</p>
		<p>{{user.name}}</p>
		<p>{{user.state}}</p>
	</template>
</myTemp>
````

### 自定义指令

1、什么是自定义指令

vue 官方提供了 v-text、v-for、v-model、v-if 等常用的指令。除此之外 vue 还允许开发者自定义指令。

2、自定义指令的分类

vue 中的自定义指令分为两类，分别是：

- 私有自定义指令
- 全局自定义指令

3、私有自定义指令

在每个 vue 组件中，可以在 **directives** 节点下声明**私有自定义指令**。示例代码如下：

````
directives: {
	color: {
		// 为绑定到的 HTML 元素设置红色的文字
		bind(el) {
			// 形参中的 el 是绑定了此指定的，原生的 DOM 对象
			el.style.color = 'red'
		}
	}
}
````

4、使用自定义指令

在使用自定义指令时，需要加上 **v-** 前缀。示例代码如下：

````
<h1 v-color>Hello Vue</h1>
````

5、为自定义指令动态绑定参数值

在 template 结构中**使用自定义指令**时，可以通过等号(**=**)的方式，为当前指令**动态绑定参数值**：

6、通过 **binding** 获取指令的参数值

在声明自定义指令时，可以通过形参中的**第二个参数**，来接收指令的参数值：

````
directives: {
	color: {
		// 为绑定到的 HTML 元素设置红色的文字
		bind(el, binding) {
			// 形参中的 el 是绑定了此指定的，原生的 DOM 对象
			el.style.color = binding.value
		}
	}
}
````

7、update 函数

bind 函数**只调用 1 次**：当指令第一次绑定到元素时调用，**当 DOM 更新时 bind 函数不会被触发**。 **update** 函数会在**每次 DOM 更新时**被调用。示例代码如下:

````
directives: {
	color: {
		// 当指令第一次被绑定到元素时被调用
		bind(el, binding) {
			el.style.color = binding.value
		},
		// 每次 DOM 更新时被调用
		update(el, binding) {
			el.style.color = binding.value
		}
	}
}
````

8、函数简写

如果 **bind** 和**update** 函数中的**逻辑完全相同**，则**对象格式**的自定义指令可以简写成**函数格式**：

````
directives: {
	// 在 insert 和 update 时，会触发相同的业务逻辑
	color(el, binding) {
		el.style.color = binding.value
	}
}
````

9、全局自定义指令

全局共享的自定义指令需要通过“**Vue.directive()**”进行声明，示例代码如下：

````
// 参数1：字符串，表示全局自定义指令的名字
// 参数2：对象，用来接收指令的参数值
Vue.directive('color', function(el, binding) {
	el.style.color = binding.value
})
````

## 路由

### 前端路由的概念与原理

1、什么是路由

路由(英文:router)就是**对应关系**。

3、SPA 与前端路由

SPA 指的是一个 web 网站只有唯一的一个 HTML 页面，**所有组件的展示与切换**都在这唯一的一个页面内完成。 此时，**不同组件之间的切换**需要通过**前端路由**来实现。

结论:在 SPA 项目中，**不同功能之间的切换**，要**依赖于前端路由**来完成!

4、什么是前端路由

通俗易懂的概念：**Hash 地址**与**组件**之间的**对应关系**。

5、前端路由的工作方式

（1）用户**点击**了页面上的**路由链接**
（2）导致了 **URL 地址栏**中的 **Hash 值**发生了变化
（3）**前端路由监听了到 Hash 地址的变化**
（4）前端路由把当前 **Hash 地址对应的组件**渲染都浏览器中

> 结论：前端路由，指的是 **Hash 地址**与**组件之间**的**对应关系**!

6、实现简易的前端路由

步骤1：通过 **<component>** 标签，结合 **comName** 动态渲染组件。示例代码如下:

步骤2：在 App.vue 组件中，为 **<a> 链接**添加对应的 **hash 值**：

步骤3：在 **created** 生命周期函数中，监听浏览器地址栏中 **hash 地址的变化**，动态切换要展示的组件的名称：

### vue-router 的基本使用

1、什么是 vue-router

**vue-router** 是 vue.js 官方给出的**路由解决方案**。它只能结合 vue 项目进行使用，能够轻松的管理 SPA 项目 中组件的切换。

vue-router 的官方文档地址:https://router.vuejs.org/zh/

2、vue-router 安装和配置的步骤

（1）安装 vue-router 包

（2）**创建路由模块**

（3）导入并挂载路由模块

（4）声明**路由链接**和**占位符**

2.1、在项目中安装 vue-router

在 vue2 的项目中，安装 vue-router 的命令如下：

````
npm i  vue-router@3.5.2 -S
````

2.2、创建路由模块

在 **src** 源代码目录下，新建 **router/index.js** 路由模块，并初始化如下的代码：

````
// 1. 导入 Vue 和 VueRouter 的包
import Vue from 'vue'
import VueRouter from 'vue-router'

// 2. 调用 vue.use() 函数，把 VueRouter 安装 Vue 的插件
Vue.use(VueRouter)

// 3. 创建路由的实例对象
const router = new VueRouter()

// 4. 向外共享路由的实例对象
export default router
````

2.3、导入并挂载路由模块

在 src/**main.js** 入口文件中，导入并挂载路由模块。示例代码如下：

````
// 1. 导入路由模块
import router from '@/router/index.js'

new Vue({
  render: h => h(App),
  // 2. 挂载路由模块
  router: router
}).$mount('#app')
````

2.4、声明**路由链接**和**占位符**
在 src/App.vue 组件中，使用 vue-router 提供的 **<router-link>** 和 **<router-view>** 声明路由链接和占位符：

````
<router-link to="#/home">首页</router-link>
<router-link to="#/movie">电影</router-link>
<router-link to="#/about">关于</router-link>
````



3、声明路由的匹配规则
在 src/router/index.js 路由模块中，通过 **routes 数组**声明路由的匹配规则。示例代码如下：

````
// 导入需要的组件
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/Movie.vue'

const router = new VueRouter({
  // routes 是一个数组，作用：定义 "hash 地址" 与 "组件" 之间的的对应关系
  routes: [
    // 默认 首页
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/movie', component: Movie },
    { path: '/about', component: About }
  ]
})
````

### vue-router 的常见用法

1、路由重定向

**路由重定向**指的是：用户在访问**地址 A** 的时候，**强制用户跳转**到地址 C ，从而展示特定的组件页面。 通过路由规则的 **redirect** 属性，指定一个新的路由地址，可以很方便地设置路由的重定向：

````
const router = new VueRouter({
  routes: [
    // 默认 首页
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home }
  ]
})
````

2、嵌套路由

通过路由实现**组件的嵌套展示**，叫做嵌套路由。

（1）模板内容中又有**子级路由链接**

（2）点击**子级路由链接**显示**子级模板内容**

3.1、声明子路由链接和子路由占位符

在 **About.vue** 组件中，声明  和 tab2 的**子路由链接**以及**子路由占位符**。示例代码如下：

````
<router-link to="/about/tab1">tab1</router-link>
<router-link to="/about/tab2">tab2</router-link>

<router-view></router-view>
````

3.2 通过 **children** 属性声明**子路由规则**

在 src/router/index.js 路由模块中，导入需要的组件，并使用 **children 属性**声明子路由规则：

4、动态路由匹配

思考:有如下 3 个路由链接：

````
<router-link to="/movie/1">电影1</router-link>
<router-link to="/movie/2">电影2</router-link>
<router-link to="/movie/3">电影3</router-link>

{ path: '/movie/1', component: Movie }
{ path: '/movie/2', component: Movie }
{ path: '/movie/3', component: Movie }

````

> 缺点：路由规则的**复用性差**

4.1、动态路由的概念

动态路由指的是:把 Hash 地址中**可变的部分**定义为**参数项**，从而**提高路由规则的复用性**。 在 vue-router 中使用**英文的冒号**(**:**)来定义路由的参数项。示例代码如下：

````
// 路由中的动态参数以：进行声明，冒号后面的是动态参数的名称
{ path: '/movie/:id', component: Movie }

// 将以下 3 个路由规则，合并成了一个，提高了路由规则的复用性
{ path: '/movie/1', component: Movie }
{ path: '/movie/2', component: Movie }
{ path: '/movie/3', component: Movie }
````

4.2、$route.params 参数对象

在**动态路由**渲染出来的组件中，可以使用 this.**$route.params** 对象访问到动态匹配的参数值。

````
this.$route.params.xxx
````

4.3、使用 props 接收路由参数

**为了简化路由参数的获取形式**，vue-router 允许在**路由规则**中**开启 props 传参**。示例代码如下：

````
{ path: '/movie/:id', component: Movie, props: true }

export default {
	props: ['id']
}
````

5、声明式导航 & 编程式导航

在浏览器中，**点击链接**实现导航的方式，叫做**声明式导航**。例如：

- 普通网页中点击 **<a> 链接**、vue 项目中点击 **<router-link>** 都属于声明式导航

在浏览器中，**调用 API 方法**实现导航的方式，叫做**编程式导航**。例如：

- 普通网页中调用 **location.href** 跳转到新页面的方式，属于编程式导航

5.1、vue-router 中的编程式导航 API

vue-router 提供了许多编程式导航的 API，其中最常用的导航 API 分别是：

（1）this.$router.**push**('hash 地址')

````
this.$router.push('/movie')
````

- 跳转到指定 hash 地址，并**增加**一条历史记录

（2）this.$router.**replace**('hash 地址')

````
this.$router.replace('/movie')
````

- 跳转到指定的hash地址，并**替换掉当前的**历史记录

（3）this.$router.**go**(数值 n)

````
this.$router.go(n)
````

- 实现导航历史前进、后退

> push 和 replace 的区别：
>
> - push 会**增加一条历史记录**
> - replace 不会增加历史记录，而是**替换掉当前的历史记录**

5.5、$router.go 的简化用法

在实际开发中，一般只会前进和后退一层页面。因此 vue-router 提供了如下两个便捷方法：

（1）$router.**back**()

- 在历史记录中，**后退**到上一个页面

（2）$router.**forward**()

- 在历史记录中，**前进**到下一个页面

6、导航守卫

**导航守卫**可以**控制路由的访问权限**。示意图如下：

6.1、全局前置守卫

每次发生路由的**导航跳转**时，都会触发**全局前置守卫**。因此，在全局前置守卫中，程序员可以对每个路由进行 **访问权限**的控制：

````
const router = new VueRouter({...})

// 全局前置守卫
router.beforeEach(fn)
````

6.2、守卫方法的 3 个形参

**全局前置守卫**的回调函数中接收 3 个形参，格式为：

````
const router = new VueRouter({...})

// 全局前置守卫
router.beforeEach((to, from, next) => {
	// to 是将要访问的路由的信息对象
	// from 是将要离开的路由的信息对象
	// next 是一个函数，调用 next() 表示放行，允许这次路由导航
})
````

6.3、next 函数的 3 种调用方式

参考示意图，分析 next 函数的 3 种调用方式最终导致的结果：

当前用户**拥有**后台主页的访问权限，直接放行：next()
当前用户**没有**后台主页的访问权限，**强制其跳转到登录页面**：next('**/login**')
当前用户**没有**后台主页的访问权限，**不允许跳转到后台主页**：next(**false**)

6.4、控制后台主页的访问权限

### 后台管理案例
