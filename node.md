# node.js

## 初识 Node.js

### 1 Node.js 简介

#### 1. 什么是 Node.js

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境

#### 2. Node.js 中的  JavaScript 运行环境

（1）浏览器是 JavaScript 的前端运行环境
（2）Node.js 是 JavaScript 的后端运行环境
（3）Node.js 中无法调用 DOM 和 BOM 等浏览器内置 API

#### 3. Node.js 可以做什么

Node.js 作为一个 JavaScript 的运行环境，仅仅提供了基础的功能和 API。然而，基于 Node.js 提供的这些基础能，很多强大 的工具和框架如雨后春笋，层出不穷，所以学会了 Node.js ，可以让前端程序员胜任更多的工作和岗位:

（1）基于 Express 框架(http://www.expressjs.com.cn/)，可以快速构建 Web 应用
（2）基于 Electron 框架(https://electronjs.org/)，可以构建跨平台的桌面应用
（3）基于 restify 框架(http://restify.com/)，可以快速构建 API 接口项目
（4）读写和操作数据库、创建实用的命令行工具辅助前端开发、etc...

> 总之：Node.js 是大前端时代的“大宝剑”，有了 Node.js 这个超级 buff 的加持，前端程序员的行业竞争力会越来越强!

#### 3. Node.js 怎么学

浏览器中的 JavaScript 学习路径:
 JavaScript 基础语法 + 浏览器内置 API(DOM + BOM) + 第三方库(jQuery、art-template 等)

Node.js 的学习路径:
JavaScript 基础语法 + **Node.js 内置 API 模块**(fs、path、http等) + **第三方 API 模块**(express、mysql 等)

## fs 文件系统模块

#### 1. 什么是 fs 文件系统模块

**fs 模块**是 Node.js 官方提供的、用来操作文件的模块。它提供了一系列的方法和属性，用来满足用户对文件的操作需求。 例如：

- fs.readFile() 方法，用来**读取**指定文件中的内容
- fs.writeFile() 方法，用来向指定的文件中**写入**内容

如果要在 JavaScript 代码中，使用 fs 模块来操作文件，则需要使用如下的方式先导入它：

````
const fs = require('fs')
````

#### 2. 读取指定文件中的内容

1. fs.readFile() 的语法格式

使用 fs.readFile() 方法，可以读取指定文件中的内容，语法格式如下：

````
fs.readFile(path[, options], callback)
````

参数解读:

- 参数1：**必选**参数，字符串，表示文件的路径。
- 参数2：可选参数，表示以什么**编码格式**来读取文件。
- 参数3：**必选**参数，文件读取完成后，通过回调函数拿到读取的结果。

2. fs.readFile() 的示例代码

以 utf8 的编码格式，读取指定文件的内容，并打印 err 和 dataStr 的值：

````
const fs = require('fs')
fs.readFile('./files/11.txt', 'utf8', function(err, dataStr) {
	console.log(err) 
	console.log('------')
	console.log(dataStr)
})
````

3. 判断文件是否读取成功

可以判断 err 对象是否为 null，从而知晓文件读取的结果:

````
const fs = require('fs')
fs.readFile('./files/11.txt', 'utf8', function(err, dataStr) {
	if (err) {
		return console.log('文件读取失败！' + err.message)
	}
	console.log('文件读取成功，内容是：' + result)
})
````

#### 3. 向指定的文件中写入内容

1. fs.writeFile() 的语法格式

使用 fs.writeFile() 方法，可以向指定的文件中写入内容，语法格式如下：

````
fs.writeFile(file, data[, options], callback)
````

参数解读：

- 参数1：必选参数，需要指定一个文件路径的字符串，表示文件的存放路径。
- 参数2：必选参数，表示要写入的内容。
- 参数3：可选参数，表示以什么格式写入文件内容，默认值是 utf8。
- 参数4：必选参数，文件写入完成后的回调函数。

2. fs.writeFile() 的示例代码

向指定的文件路径中，写入文件内容:

````
const fs = require('fs')
fs.writeFile('./files/2.txt', 'Hello Node.js', function(err) {
	console.log(err)
})
````

3. 判断文件是否写入成功

可以判断 err 对象是否为 null，从而知晓文件写入的结果:

````
const fs = require('fs')
fs.writeFile('./files/2.txt', 'Hello Node.js', function(err) {
	if (err) {
		return console.log('文件写入失败！' + err.message)
	}
	console.log('文件写入成功！')
})
````

4. fs 模块 - 路径动态拼接的问题

在使用 fs 模块操作文件时，如果提供的操作路径是以 ./ 或 ../ 开头的**相对路径**时，很容易出现路径动态拼接错误的问题。 原因:代码在运行的时候，**会以执行 node 命令时所处的目录**，动态拼接出被操作文件的完整路径。
解决方案:在使用 fs 模块操作文件时，**直接提供完整的路径**，不要提供 ./ 或 ../ 开头的相对路径，从而防止路径动态拼接的问题。

````
// __dirname 表示当前文件所处的目录
fs.readFile(__dirname + '/files/1.txt', ...)
````









## path 路径模块





## http 模块





