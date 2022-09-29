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

### fs 文件系统模块

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

- 参数1：**必选**参数，需要指定一个**文件路径的字符串**，表示文件的存放路径。
- 参数2：**必选**参数，表示要写入的内容。
- 参数3：可选参数，表示以什么格式写入文件内容，默认值是 utf8。
- 参数4：**必选**参数，文件写入完成后的回调函数。

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

### path 路径模块

3.1 什么是 path 路径模块

**path 模块**是 Node.js 官方提供的、用来**处理路径**的模块。它提供了一系列的方法和属性，用来满足用户对路径的处理 需求。

例如：

- path.join() 方法，用来将**多个路径片段拼接成一个完整的路径字符串**
- path.basename() 方法，用来从路径字符串中，将文件名解析出来

如果要在 JavaScript 代码中，使用 path 模块来处理路径，则需要使用如下的方式先导入它：

````
const path = require('path')
````



#### 3.2 路径拼接

1. path.join() 的语法格式

使用 path.join() 方法，可以把多个路径片段拼接为完整的路径字符串，语法格式如下：

````
path.join([...paths])
````

参数解读:

- ...paths <string> 路径片段的序列
- 返回值: <string>

2. path.join() 的代码示例

使用 path.join() 方法，可以把多个路径片段拼接为完整的路径字符串：

````
// 注意：../ 会抵消前面的路径
const pathStr = path.join('/a', '/b/c', '../', './d', 'e')
console.log(pathStr)  // 输出 \a\b\d\e
````

> 注意：**今后凡是涉及到路径拼接的操作，都要使用 path.join() 方法进行处理**。不要直接使用 + 进行字符串的拼接。

#### 3.3 获取路径中的文件名

1. path.basename() 的语法格式

使用 path.basename() 方法，可以获取路径中的最后一部分，经常通过这个方法获取路径中的文件名，语法格式如下：

````
path.basename(path[, ext])
````

参数解读：

- path <string> 必选参数，表示一个路径的字符串
- ext <string> 可选参数，表示文件扩展名
- 返回：<string> 表示路径中的最后一部分

2. path.basename() 的代码示例

使用 path.basename() 方法，可以从一个文件路径中，获取到文件的名称部分：

````
const path = require('path')

// 定义文件的存放路径
const fpath = '/a/b/c/index.html'

const fullName = path.basename(fpath)
console.log(fullName)			// 输出 index.html

const nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt)			// 输出 index
````

3.4 获取路径中的文件扩展名

1. path.extname() 的语法格式

使用 path.extname() 方法，可以获取路径中的扩展名部分，语法格式如下：

````
path.extname(path)
````

参数解读:

- path <string>必选参数，表示一个路径的字符串
- 返回: <string> 返回得到的扩展名字符串

2. path.extname() 的代码示例

使用 path.extname() 方法，可以获取路径中的扩展名部分：

````
const fpath = '/a/b/c/index.html'

const fext = path.extname(fpath)
console.log(fext)     // 输出 .html
````

### http 模块

4.1 什么是 http 模块

回顾:什么是**客户端**、什么是**服务器**? 在网络节点中，负责消费资源的电脑，叫做客户端;**负责对外提供网络资源**的电脑，叫做服务器。

**http 模块**是 Node.js 官方提供的、用来**创建 web 服务器**的模块。通过 http 模块提供的 http.createServer() 方法，就 能方便的把一台普通的电脑，变成一台 Web 服务器，从而对外提供 Web 资源服务。

如果要希望使用 http 模块创建 Web 服务器，则需要先导入它:

````
const http = require('http')
````

4.2 进一步理解 http 模块的作用

服务器和普通电脑的**区别**在于，服务器上安装了 web 服务器软件，例如:IIS、Apache 等。通过安装这些服务器软件， 就能把一台普通的电脑变成一台 web 服务器。

在 Node.js 中，我们不需要使用 IIS、Apache 等这些第三方 web 服务器软件。因为我们可以基于 Node.js 提供的 http 模块，**通过几行简单的代码，就能轻松的手写一个服务器软件**，从而对外提供 web 服务。

4.3 服务器相关的概念

1. IP 地址

**IP** **地址**就是互联网上每台计算机的唯一地址，因此 IP 地址具有唯一性。如果把“个人电脑”比作“一台电话”，那么“IP地 址”就相当于“电话号码”，只有在知道对方 IP 地址的前提下，才能与对应的电脑之间进行数据通信。

IP 地址的格式:通常用“点分十进制”表示成(a.b.c.d)的形式，其中，a,b,c,d 都是 0~255 之间的十进制整数。例如:用 点分十进表示的 IP地址(192.168.1.1)

注意:

（1）**互联网中每台 Web 服务器，都有自己的 IP 地址**，例如:大家可以在 Windows 的终端中运行 ping www.baidu.com 命 令，即可查看到百度服务器的 IP 地址。

（2）在开发期间，自己的电脑既是一台服务器，也是一个客户端，为了方便测试，可以在自己的浏览器中输入 127.0.0.1 这个 IP 地址，就能把自己的电脑当做一台服务器进行访问了。

2. 域名和域名服务器
尽管 IP 地址能够唯一地标记网络上的计算机，但IP地址是一长串数字，不直观，而且不便于记忆，于是人们又发明了另一套

字符型的地址方案，即所谓的**域名(Domain Name)地址**。

IP地址和域名是一一对应的关系，这份对应关系存放在一种叫做**域名服务器**(DNS，Domain name server)的电脑中。使用者 只需通过好记的域名访问对应的服务器即可，对应的转换工作由域名服务器实现。因此，**域名服务器就是提供** **IP** **地址和域名 之间的转换服务的服务器**。

注意:
（1）单纯使用 IP 地址，互联网中的电脑也能够正常工作。但是有了域名的加持，能让互联网的世界变得更加方便。
（2）在开发测试期间，127.0.0.1 对应的域名是 localhost，它们都代表我们自己的这台电脑，在使用效果上没有任何区别。

3. 端口号

计算机中的端口号，就好像是现实生活中的门牌号一样。通过门牌号，外卖小哥可以在整栋大楼众多的房间中，准确把外卖 送到你的手中。

同样的道理，在一台电脑中，可以运行成百上千个 web 服务。每个 web 服务都对应一个唯一的端口号。客户端发送过来的 网络请求，通过端口号，可以被准确地交给**对应的 web 服务**进行处理。

#### 4.4 创建最基本的 web 服务器

1. 创建 web 服务器的基本步骤

（1）导入 http 模块
（2）创建 web 服务器实例
（3）为服务器实例绑定 **request** 事件，**监听客户端的请求**
（4）启动服务器

- 步骤1 - 导入 http 模块

如果希望在自己的电脑上创建一个 web 服务器，从而对外提供 web 服务，则需要导入 http 模块:

````
const http = require('http')
````

- 步骤2 - 创建 web 服务器实例

调用 http.createServer() 方法，即可快速创建一个 web 服务器实例:

````
const server = http.createServer()
````

- 步骤3 - 为服务器实例绑定 request 事件

为服务器实例绑定 request 事件，即可监听客户端发送过来的网络请求:

````
server.on('request', (req, res) => {
	// 只要有客户端来请求我们自己的服务器，就会触发 request 事件，从而调用这个事件处理函数
	console.log('Someone visit our web server')
})
````

- 步骤4 - 启动服务器

调用服务器实例的 .listen() 方法，即可启动当前的 web 服务器实例:

````
server.listen(80, ()=> {
	console.log('http server running at http://127.0.0.1')
})
````

3. req 请求对象

只要服务器接收到了客户端的请求，就会调用通过 server.on() 为服务器绑定的 request 事件处理函数。 如果想在事件处理函数中，访问与客户端相关的**数据**或**属性**，可以使用如下的方式:

````
server.on('request', (req) => {
	const str = `url is ${req.url}`
})
````

4. res 响应对象

在服务器的 request 事件处理函数中，如果想访问与服务器相关的**数据**或**属性**，可以使用如下的方式:

````
server.on('request', (req, res) => {
	const str = `url is ${req.url}`
	res.end(str)
})
````

5. 解决中文乱码问题

当调用 res.end() 方法，向客户端发送中文内容的时候，会出现乱码问题，此时，需要手动设置内容的编码格式:

````
server.on('request', (req, res) => {
	const str = `url is ${req.url}`
	res.setHeader('Content-Type', 'text/html; charset=utf-8')
	res.end(str)
})
````

4.5 根据不同的 url 响应不同的 html 内容

1. 核心实现步骤

（1）获取**请求的 url 地址**
（2）设置**默认的响应内容**为 404 Not found
（3）判断用户请求的是否为 **/** 或 **/index.html** 首页
（4）判断用户请求的是否为 **/about.html** 关于页面
（5）设置 **Content-Type 响应头**，防止中文乱码
（6）使用 **res.end()** 把内容响应给客户端

2. 动态响应内容

````
server.on('request', (req, res) => {
  // （1）获取**请求的 url 地址**
  const url = req.url
  // （2）设置**默认的响应内容**为 404 Not found
  let content = '404 Not found!'
  // （3）判断用户请求的是否为 **/** 或 **/index.html** 首页
  // （4）判断用户请求的是否为 **/about.html** 关于页面
  if (url === '/' || url === '/index.html') {
    content = '<h1>首页</h1>'
  } else if (url === '/about.html') {
    content = '<h1>关于页面</h1>'
  }
  // （5）设置 **Content-Type 响应头**，防止中文乱码
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  // （6）使用 **res.end()** 把内容响应给客户端
  res.end(content)
})
````

## 模块化

### 模块化的基本概念

1.1什么是模块化

**模块化**是指解决一个复杂问题时，自顶向下逐层把系统划分成若干模块的过程。对于整个系统来说，模块是可组 合、分解和更换的单元。

2. 编程领域中的模块化

编程领域中的模块化，就是**遵守固定的规则**，把一个大文件拆成独立并互相依赖的多个小模块。

把代码进行模块化拆分的好处:

（1）提高了代码的**复用性**
（2）提高了代码的**可维护性**
（3）可以实现**按需加载**

**1.2** **模块化规范**

**模块化规范**就是对代码进行模块化的拆分与组合时，需要遵守的那些规则。

例如:

- 使用什么样的语法格式来引用模块
- 在模块中使用什么样的语法格式向外暴露成员

**模块化规范的好处**:大家都遵守同样的模块化规范写代码，降低了沟通的成本，极大方便了各个模块之间的相互调用， 利人利己。

### Node.js 中模块化

#### 2.1 Node.js 中模块的分类

Node.js 中根据模块来源的不同，将模块分为了 3 大类，分别是:

- **内置模块**(内置模块是由 Node.js 官方提供的，例如 fs、path、http 等)
- **自定义模块**(用户创建的每个 .js 文件，都是自定义模块)
- **第三方模块**(由第三方开发出来的模块，并非官方提供的内置模块，也不是用户创建的自定义模块，使用前需要先下载)

#### 2.2 加载模块
使用强大的 require() 方法，可以加载需要的内置模块、用户自定义模块、第三方模块进行使用。例如:

````
// 1. 加载内置的 fs 模块
const fs = require('fs')

// 2. 加载用户的自定义模块
const custom = require('./custom.js')

// 3. 加载第三方模块
const moment = require('moment')
````

> 注意:使用 require() 方法加载其它模块时，会执行被加载模块中的代码。

2.3 Node.js 中的模块作用域 1. 什么是模块作用域

和**函数作用域**类似，在自定义模块中定义的变量、方法等成员，**只能在当前模块内被访问**，这种模块级别的访问限制，叫做**模块作用域**。

2. 模块作用域的好处

防止了全局变量污染的问题

#### 2.4 向外共享模块作用域中的成员

1. **module** 对象

在每个 .js 自定义模块中都有一个 module 对象，它里面**存储了和当前模块有关的信息**，打印如下:

2. **module.exports** 对象

在自定义模块中，可以使用 module.exports 对象，将模块内的成员共享出去，供外界使用。 外界用 **require() 方法**导入自定义模块时，得到的就是 module.exports 所指向的对象。

3. 共享成员时的注意点

使用 require() 方法导入模块时，导入的结果，**永远以** **module.exports** **指向的对象为准**。

> require 与 module.exports 一起使用，才能共享

4. exports 对象

由于 module.exports 单词写起来比较复杂，为了简化向外共享成员的代码，Node 提供了 exports 对象。**默认情况下，exports 和 module.exports 指向同一个对象**。最终共享的结果，还是以 module.exports 指向的对象为准。

**4. exports** **和** **module.exports** **的使用误区**

时刻谨记，require() 模块时，得到的永远是 **module.exports** 指向的对象:

> 注意:为了防止混乱，建议大家不要在同一个模块中同时使用 exports 和 module.exports

2.5 Node.js 中的模块化规范

Node.js 遵循了 CommonJS 模块化规范，CommonJS 规定了**模块的特性**和**各模块之间如何相互依赖**。

CommonJS 规定:
（1）每个模块内部，**module 变量**代表当前模块。
（2）module 变量是一个对象，它的 exports 属性(即 **module.exports**)**是对外的接口**。
（3）加载某个模块，其实是加载该模块的 module.exports 属性。**require() 方法用于加载模块**。

### npm与包

3.1 包

1. 什么是包

Node.js 中的**第三方模块**又叫做**包**。
就像电脑和计算机指的是相同的东西，第三方模块和包指的是同一个概念，只不过叫法不同。

2. 包的来源

不同于 Node.js 中的内置模块与自定义模块，包是由第三方个人或团队开发出来的，免费供所有人使用。 

> **注意**:Node.js 中的包都是免费且开源的，不需要付费即可免费下载使用。

3. 为什么需要包

由于 Node.js 的内置模块仅提供了一些底层的 API，导致在基于内置模块进行项目开发的时，效率很低。 **包是基于内置模块封装出来的**，提供了更高级、更方便的 API，**极大的提高了开发效率**。 **包**和内置模块之间的关系，类似于 **jQuery** 和 浏览器内置 API 之间的关系。

4. 从哪里下载包

国外有一家 IT 公司，叫做 **npm, Inc.** 这家公司旗下有一个非常著名的网站: https://www.npmjs.com/ ，它是**全球最 大的包共享平台**，你可以从这个网站上搜索到任何你需要的包，只要你有足够的耐心!

到目前位置，全球约 1100 多万的开发人员，通过这个包共享平台，开发并共享了超过 120 多万个包 供我们使用。 **npm, Inc.** **公司**提供了一个地址为 https://registry.npmjs.org/ 的服务器，来对外共享所有的包，我们可以从这个服务器上下载自己所需要的包。

5. 如何下载包

**npm, Inc.** **公司**提供了一个包管理工具，我们可以使用这个包管理工具，从 https://registry.npmjs.org/ 服务器把需要 的包下载到本地使用。

这个包管理工具的名字叫做 Node Package Manager(简称 npm 包管理工具)，这个包管理工具随着 Node.js 的安 装包一起被安装到了用户的电脑上。

大家可以在终端中执行 **npm -v** 命令，来查看自己电脑上所安装的 npm 包管理工具的版本号:

3.2 npm 初体验

（1）创建格式化时间的自定义模块
（2）定义格式化时间的方法
（3）创建补零函数
（4）从自定义模块中导出格式化时间的函数
（5）**导入格式化时间的自定义模块**
（6）**调用格式化时间的函数**

2. 格式化时间的高级做法

（1）**使用 npm 包管理工具，在项目中安装格式化时间的包 moment**
（2）使用 require() 导入格式化时间的包
（3）参考 moment 的官方 API 文档对时间进行格式化

3. 在项目中安装包的命令

如果想在项目中安装指定名称的包，需要运行如下的命令:

````
npm install 包的完整名称
````

上述的装包命令，可以简写成如下格式:

````
npm i 完整的包名称
````

4. 初次装包后多了哪些文件

初次装包完成后，在项目文件夹下多一个叫做 **node_modules** 的文件夹和 **package-lock.json** 的配置文件。

其中:
 **node_modules** 文件夹用来**存放所有已安装到项目中的包**。require() 导入第三方包时，就是从这个目录中查找并加载包。 **package-lock.json** 配置文件用来**记录 node_modules 目录下的每一个包的下载信息**，例如包的名字、版本号、下载地址等。

注意:程序员不要手动修改 node_modules 或 package-lock.json 文件中的任何代码，npm 包管理工具会自动维护它们。

5. 安装指定版本的包

默认情况下，使用 npm install 命令安装包的时候，**会自动安装最新版本的包**。如果需要安装指定版本的包，可以在包 名之后，通过 **@ 符号**指定具体的版本，例如:

````
npm i moment@2.22.2
````

6. 包的语义化版本规范

包的版本号是以“点分十进制”形式进行定义的，总共有三位数字，例如 **2.24.0**
其中每一位数字所代表的的含义如下:
第1位数字:大版本
第2位数字:功能版本
第3位数字:Bug修复版本

**版本号提升的规则**:只要前面的版本号增长了，则后面的版本号归零。

3.3 包管理配置文件

npm 规定，在项目根目录中，**必须**提供一个叫做 **package.json** 的包管理配置文件。用来记录与项目有关的一些配置 信息。例如:

- 项目的名称、版本号、描述等
- 项目中都用到了哪些包
- 哪些包只在**开发期间**会用到
- 那些包在**开发**和**部署**时都需要用到

1. 多人协作的问题

2. 如何记录项目中安装了哪些包

在**项目根目录**中，创建一个叫做 **package.json** 的配置文件，即可用来记录项目中安装了哪些包。从而方便剔除 node_modules 目录之后，在团队成员之间共享项目的源代码。

> **注意**:今后在项目开发中，一定要把 node_modules 文件夹，添加到 .gitignore 忽略文件中。

3. 快速创建 package.json

npm 包管理工具提供了一个**快捷命令**，可以在**执行命令时所处的目录中**，快速创建 package.json 这个包管理 配置文件:

````
npm init -y
````

注意:
 1 上述命令**只能在英文的目录下成功运行**!所以，项目文件夹的名称一定要使用英文命名，**不要使用中文，不能出现空格**。 2 运行 npm install 命令安装包的时候，npm 包管理工具会自动把**包的名称**和**版本号**，记录到 package.json 中。

4. dependencies 节点

package.json 文件中，有一个 **dependencies** 节点，专门用来记录您使用 npm install 命令安装了哪些包。

5. 一次性安装所有的包

当我们拿到一个剔除了 node_modules 的项目之后，需要先把所有的包下载到项目中，才能将项目运行起来。 否则会报类似于下面的错误:

可以运行 npm install 命令(或 npm i)一次性安装所有的依赖包:

````
npm install
npm i
````

6. 卸载包

可以运行 **npm uninstall** 命令，来卸载指定的包:

````
npm uninstall 包名称
````

注意:npm uninstall 命令执行成功后，会把卸载的包，自动从 package.json 的 dependencies 中移除掉。

7. devDependencies 节点

如果某些包**只在项目开发阶段**会用到，在**项目上线之后不会用到**，则建议把这些包记录到 devDependencies 节点中。 与之对应的，如果某些包在开发和项目上线之后都需要用到，则建议把这些包记录到 dependencies 节点中。

您可以使用如下的命令，将包记录到 devDependencies 节点中:

````
npm i 包名 -D
npm install 包名 --save-dev
````

3.4 解决下包速度慢的问题 1. 为什么下包速度慢

在使用 npm 下包的时候，默认从国外的 https://registry.npmjs.org/ 服务器进行下载，此时，网络数据的传输需要经 过漫长的海底光缆，因此下包速度会很慢。

扩展阅读 - 海底光缆:

- https://baike.baidu.com/item/%E6%B5%B7%E5%BA%95%E5%85%89%E7%BC%86/4107830
- https://baike.baidu.com/item/%E4%B8%AD%E7%BE%8E%E6%B5%B7%E5%BA%95%E5%85%89%E7%BC% 86/10520363
- https://baike.baidu.com/item/APG/23647721?fr=aladdin

2. 淘宝 NPM 镜像服务器

3. 切换 npm 的下包镜像源

下包的镜像源，指的就是下包的服务器地址。

````
// 通过 npm 包管理器，将 nrm 安装为全局可用的工具
npm i nrm -g
// 查看所有可用的镜像源
nrm ls
// 将下包的镜像源切换为 taobao 镜像
nrm use taobao
````

3.5 包的分类

使用 npm 包管理工具下载的包，共分为两大类，分别是:

- 项目包
- 全局包

1. 项目包

那些被安装到项目的 node_modules 目录中的包，都是项目包。

项目包又分为两类，分别是:

- **开发依赖包**(被记录到 devDependencies 节点中的包，只在开发期间会用到)
- **核心依赖包(**被记录到 dependencies 节点中的包，在开发期间和项目上线之后都会用到)

**2.** **全局包**

在执行 npm install 命令时，如果提供了 -g 参数，则会把包安装为全局包。 全局包会被安装到 C:\Users\用户目录\AppData\Roaming\npm\node_modules 目录下。

````
npm i 包名 -g
npm uninstall 包名 -g
````

注意:

（1）只有工具性质的包，才有全局安装的必要性。因为它们提供了好用的终端命令。
（2）判断某个包是否需要全局安装后才能使用，可以参考官方提供的使用说明即可。

3. i5ting_toc

i5ting_toc 是一个可以把 md 文档转为 html 页面的小工具，使用步骤如下:

````
// 将 i5ting_toc 安装为全局包
npm install -g i5ting_toc
// 调用 i5ting_toc，轻松实现 md 转 html 的功能
i5ting_toc -f 要转换的 md 文件路径 -o
````

3.6 规范的包结构

在清楚了包的概念、以及如何下载和使用包之后，接下来，我们深入了解一下包的内部结构。

一个规范的包，它的组成结构，必须符合以下 3 点要求:
（1）包必须以**单独的目录**而存在
（2）包的顶级目录下要必须包含 **package.json** 这个包管理配置文件
（3）package.json 中必须包含 **name**，**version**，**main** 这三个属性，分别代表包的名字、版本号、包的入口。

注意:以上 3 点要求是一个规范的包结构必须遵守的格式，关于更多的约束，可以参考如下网址:

https://yarnpkg.com/zh-Hans/docs/package-json

3.7 开发属于自己的包

1. 需要实现的功能

（1）**格式化日期**
（2）**转义** HTML 中的**特殊字符**
（3）**还原** HTML 中的**特殊字符**

````
const itheima = require('itehima-utils')

const dt = itheima.dateFormat(new Date())

console.log(dt)
````



````
const itheima = require('itehima-utils')

const htmlStr = '<h1 style="color: red;">你好！</h1>'

const str = itheima.htmlEscape(htmlStr)
````

2. 初始化包的基本结构

（1）新建 itheima-tools 文件夹，作为包的根目录

（2）在 itheima-tools 文件夹中，新建如下三个文件:

- package.json (包管理配置文件)
- index.js (包的入口文件) 
- README.md (包的说明文档)

3. 初始化 package.json

4. 在 index.js 中定义格式化时间的方法

````
function dateFormat(dtStr) {
  const dt = new Date(dtStr)

  const y = dt.getFullYear()
  const m = padZero(dt.getMonth())
  const d = padZero(dt.getDate())

  const hh = padZero(dt.getHours())
  const mm = padZero(dt.getMinutes())
  const ss = padZero(dt.getSeconds())

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}
````

   

5. 在 index.js 中定义转义 HTML 的方法

````
function htmlEscape(htmlStr) {
	return htmlStr.replace(/<|>|"|&/g, (match) => {
    switch (match) {
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '"':
        return '&quot;'
      case '&':
        return '&amp;'
    }
  })
}
````

6. 在 index.js 中定义还原 HTML 的方法

````
function htmlUnEscape(str) {
	return str.replace(/&lt;|&gt;|&qout;|&amp;/g, (match) => {
    switch (match) {
      case '&lt;':
        return '<'
      case '&gt;':
        return '>'
      case '&quot;':
        return '"'
      case '&amp;':
        return '&'
    }
  })
}
````

7. 将不同的功能进行模块化拆分

（1）将格式化时间的功能，拆分到 src -> **dateFormat.js** 中
（2）将处理 HTML 字符串的功能，拆分到 src -> **htmlEscape.js** 中
（3）在 index.js 中，导入两个模块，得到需要向外共享的方法
（4）在 index.js 中，使用 module.exports 把对应的方法共享出去

8. 编写包的说明文档

包根目录中的 **README.md** 文件，是**包的使用说明文档**。通过它，我们可以事先把包的使用说明，以 markdown 的 格式写出来，方便用户参考。

README 文件中具体写什么内容，没有强制性的要求;只要能够清晰地把包的作用、用法、注意事项等描述清楚即可。 我们所创建的这个包的 README.md 文档中，会包含以下 6 项内容:
 安装方式、导入方式、格式化时间、转义 HTML 中的特殊字符、还原 HTML 中的特殊字符、开源协议

3.8 发布包

1. 注册 npm 账号

（1）访问 https://www.npmjs.com/ 网站，点击 **sign up** 按钮，进入注册用户界面
（2）填写账号相关的信息:Full Name、**Public Email**、**Username**、**Password**
（3）点击 **Create an Account** 按钮，注册账号
（4）登录邮箱，**点击验证链接**，进行账号的验证

2. 登录 npm 账号

npm 账号注册完成后，可以在终端中执行 **npm login** 命令，依次输入用户名、密码、邮箱后，即可登录成功。

> 注意:在运行 npm login 命令之前，必须先把**下包的服务器**地址切换为 **npm 的官方服务器**。否则会导致发布包失败!

3. 把包发布到 npm 上

将终端切换到包的根目录之后，运行 **npm publish** 命令，即可将包发布到 npm 上(注意:**包名不能雷同**)。

4. 删除已发布的包

运行 n**pm unpublish 包名 --force** 命令，即可从 npm 删除已发布的包。

注意:
（1）npm unpublish 命令只能删除 **72 小时以内**发布的包
（2）npm unpublish 删除的包，在 **24 小时内**不允许重复发布
（3）发布包的时候要慎重，**尽量不要往 npm 上发布没有意义的包**!

### 模块的加载机制

4.1 优先从缓存中加载

**模块在第一次加载后会被缓存**。 这也意味着多次调用 require() 不会导致模块的代码被执行多次。 注意:不论是内置模块、用户自定义模块、还是第三方模块，它们都会优先从缓存中加载，从而提高模块的加载效率。

4.2 内置模块的加载机制

内置模块是由 Node.js 官方提供的模块，**内置模块的加载优先级最高**。
例如，require('fs') 始终返回内置的 fs 模块，即使在 node_modules 目录下有名字相同的包也叫做 fs。

4.3 自定义模块的加载机制

使用 require() 加载自定义模块时，必须指定以 ./ 或 ../ 开头的**路径标识符**。在加载自定义模块时，如果没有指定 ./ 或 ../ 这样的路径标识符，则 node 会把它当作内置模块或第三方模块进行加载。

同时，在使用 require() 导入自定义模块时，如果省略了文件的扩展名，则 Node.js 会**按顺序**分别尝试加载以下的文件:
（1）按照确切的文件名进行加载
（2）补全 **.js** 扩展名进行加载
（3）补全 **.json** 扩展名进行加载
（4）补全 **.node** 扩展名进行加载
（5）加载失败，终端报错

4.4 第三方模块的加载机制

如果传递给 require() 的模块标识符不是一个内置模块，也没有以 ‘./’ 或 ‘../’ 开头，则 Node.js 会从当前模块的父 目录开始，尝试从 /node_modules 文件夹中加载第三方模块。

**如果没有找到对应的第三方模块，则移动到再上一层父目录中，进行加载，直到文件系统的根目录。** 例如，假设在 'C:\Users\itheima\project\foo.js' 文件里调用了 require('tools')，则 Node.js 会按以下顺序查找:
（1）C:\Users\itheima\project\node_modules\tools
（2）C:\Users\itheima\node_modules\tools
（3）C:\Users\node_modules\tools
（4）C:\node_modules\tools

4.5 目录作为模块

当把目录作为模块标识符，传递给 require() 进行加载的时候，有三种加载方式:
（1）在被加载的目录下查找一个叫做 package.json 的文件，并寻找 main 属性，作为 require() 加载的入口
（2）如果目录里没有 package.json 文件，或者 main 入口不存在或无法解析，则 Node.js 将会试图加载目录下的 index.js 文件。
（3）如果以上两步都失败了，则 Node.js 会在终端打印错误消息，报告模块的缺失:Error: Cannot find module 'xxx'

## Express

### 初识 Express

1.1 Express 简介

1. 什么是 Express

官方给出的概念:Express 是基于 **Node.js 平台**，快速、开放、极简的 **Web 开发框架**。 
通俗的理解:Express 的作用和 Node.js 内置的 http 模块类似，**是专门用来创建 Web 服务器的**。 
**Express** **的本质**:就是一个 npm 上的第三方包，提供了快速创建 Web 服务器的便捷方法。

2. 进一步理解 Express

**思考**:不使用 Express 能否创建 Web 服务器?
**答案**:能，使用 Node.js 提供的原生 http 模块即可。

**思考**:既生瑜何生亮(有了 http 内置模块，为什么还有用 Express)?
**答案**:http 内置模块用起来很复杂，开发效率低;Express 是基于内置的 http 模块进一步封装出来的，能够极大的提高开发效率。

**思考**:http 内置模块与 Express 是什么关系?
**答案**:类似于浏览器中 Web API 和 jQuery 的关系。后者是基于前者进一步封装出来的。

3. Express 能做什么

对于前端程序员来说，最常见的两种服务器，分别是:

- Web 网站服务器:专门对外提供 Web 网页资源的服务器。

- API 接口服务器:专门对外提供 API 接口的服务器。

  使用 Express，我们可以方便、快速的创建 Web 网站的服务器或 API 接口的服务器。

1.2 Express 的基本使用

1. 安装

在项目所处的目录中，运行如下的终端命令，即可将 express 安装到项目中使用:

````
npm i express@4.17.1
````

#### 创建基本的 Web 服务器

````
// 1. 导入 express
const express = require('express')
// 2. 创建 web 服务器
const app = express()
// 3. 启动 web 服务器
app.listen(80, () => {
  console.log('express server running at 127.0.0.1')
})
````

#### 监听 GET 请求

通过 app.get() 方法，可以监听客户端的 GET 请求，具体的语法格式如下:

````
app.get('/user', (req, res) => {...})
````

#### 监听 POST 请求

通过 app.post() 方法，可以监听客户端的 POST 请求，具体的语法格式如下:

````
app.post('/user', (req, res) => {...})
````

#### 把内容响应给客户端

通过 res.send() 方法，可以把处理好的内容，发送给客户端:

````
// 4. 监听客户端的 GET 和 POST 请求，并向客户端响应具体的内容
app.get('/user', (req, res) => {
  // 调用 express 提供的 res.send() 方法，向客户端响应一个 JSON 对象
  res.send({ name: 'xeon', age: 20, gender: '男'})
})

app.post('/user', (req, res) => {
  // 调用 express 提供的 res.send() 方法，向客户端响应一个 文本字符串
  res.send('请求成功')
})

````

#### 获取 URL 中携带的查询参数

通过 req.query 对象，可以访问到客户端通过查询字符串的形式，发送到服务器的参数:

````
app.get('/', (req, res) => {
  console.log(req.query)
  res.send(req.query)
})
````

#### 获取 URL 中的动态参数

通过 req.params 对象，可以访问到 URL 中，通过 **:** 匹配到的动态参数:

````
app.get('/user/:id/:username', (req, res) => {
  // req.params 是动态匹配到的 URL 参数，默认也是一个空对象
  console.log(req.params)
  res.send(req.params)
})

````

1.3 托管静态资源

1. express.static()

express 提供了一个非常好用的函数，叫做 express.static()，通过它，我们可以非常方便地创建一个静态资源服务器，

例如，通过如下代码就可以将 public 目录下的图片、CSS 文件、JavaScript 文件对外开放访问了:

````
app.use(express.static('pubilc'))
````

现在，你就可以访问 public 目录中的所有文件了: 

http://localhost:3000/images/bg.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/login.js 

> **注意:**Express 在指定的静态目录中查找文件，并对外提供资源的访问路径。因此，存放静态文件的目录名不会出现在 URL 中。

2. 托管多个静态资源目录

如果要托管多个静态资源目录，请多次调用 express.static() 函数:

````
app.use(express.static('pubilc'))
app.use(express.static('files'))
````

访问静态资源文件时，express.static() 函数会根据目录的添加顺序查找所需的文件。

3. 挂载路径前缀

如果希望在托管的静态资源访问路径之前，挂载路径前缀，则可以使用如下的方式:

````
app.use('/pubilc', express.static('files'))
````

现在，你就可以通过带有 /public 前缀地址来访问 public 目录中的文件了: 

http://localhost:3000/public/images/kitten.jpg
http://localhost:3000/public/css/style.css
http://localhost:3000/public/js/app.js

1.4 nodemon

1. 为什么要使用 nodemon

在编写调试 Node.js 项目的时候，如果修改了项目的代码，则需要频繁的手动 close 掉，然后再重新启动，非常繁琐。

现在，我们可以使用 nodemon(https://www.npmjs.com/package/nodemon) 这个工具，它能够监听项目文件 的变动，当代码被修改后，nodemon 会自动帮我们重启项目，极大方便了开发和调试。

2. 安装 nodemon

在终端中，运行如下命令，即可将 nodemon 安装为全局可用的工具:

````
npm install -g nodemon
````

3. 使用 nodemon

当基于 Node.js 编写了一个网站应用的时候，传统的方式，是运行 node app.js 命令，来启动项目。这样做的坏处是:
代码被修改之后，需要手动重启项目。

现在，我们可以将 node 命令替换为 nodemon 命令，使用 nodemon app.js 来启动项目。这样做的好处是:代码 被修改之后，会被 nodemon 监听到，从而实现自动重启项目的效果。

````
nodemon app.js
````

### Express 路由

2.1 路由的概念

1. 什么是路由

广义上来讲，路由就是**映射关系**。

2. 现实生活中的路由

在这里，路由是按键与服务之间的**映射关系**

3. Express 中的路由

在 Express 中，路由指的是**客户端的请求**与**服务器处理函数**之间的映射关系。
Express 中的路由分 3 部分组成，分别是**请求的类型**、**请求的 URL 地址**、**处理函数**，格式如下:

4. Express 中的路由的例子

5. 路由的匹配过程

每当一个请求到达服务器之后，**需要先经过路由的匹配**，只有匹配成功之后，才会调用对应的处理函数。

在匹配时，会按照路由的顺序进行匹配，如果**请求类型**和**请求的 URL** 同时匹配成功，则 Express 会将这次请求，转 交给对应的 function 函数进行处理。

#### 2.2 路由的使用

1. 最简单的用法

在 Express 中使用路由最简单的方式，就是把路由挂载到 app 上，示例代码如下:

````
const express = require('express')
const app = express()

//挂载路由
app.get('/', (req, res) => { res.send('Hello World.') })
app.post('/', (req, res) => { res.send('Post Request.') })

// 启动 web 服务器
app.listen(80, () => { console.log('server running at http://127.0.0.1')})
````

2. 模块化路由

为了方便对路由进行模块化的管理，Express **不建议**将路由直接挂载到 app 上，而是推荐将路由抽离为单独的模块。 将路由抽离为单独模块的步骤如下:

（1）创建路由模块对应的 .js 文件
（2）调用 **express.Router()** 函数创建路由对象
（3）向路由对象上挂载具体的路由
（4）使用 **module.exports** 向外共享路由对象
（5）使用 **app.use()** 函数注册路由模块

3. 创建路由模块

````
// 这是路由模块
// 1. 导入 express
const express = require('express')
// 2. 创建路由对象
const router = express.Router()

// 3. 挂载具体的路由
router.get('/user/list', (req, res) => {
  res.send('Get user list')
})
router.post('/user/add', (req, res) => {
  res.send('Add new user')
})

// 4. 向外导出路由对象
module.exports = router
````

4. 注册路由模块

````
// 1. 导入路由模块
const router = require('router.js')
// 2. 注册路由模块
app.use(router)
````

5. 为路由模块添加前缀

类似于托管静态资源时，为静态资源统一挂载访问前缀一样，路由模块添加前缀的方式也非常简单:

````
// 1. 导入路由模块
const router = require('./04.router')
// 2. 注册路由模块，并添加统一的访问前缀 /api
app.use('/api', router)
````


### Express 中间件

3.1 中间件的概念

1. 什么是中间件

中间件(Middleware )，特指业务流程的中间**处理环节**。

2. 现实生活中的例子

在处理污水的时候，一般都要经过**三个处理环节**，从而保证处理过后的废水，达到排放标准。

处理污水的这三个中间处理环节，就可以叫做中间件。

3. Express 中间件的调用流程

当一个请求到达 Express 的服务器之后，可以连续调用多个中间件，从而对这次请求进行**预处理**。

4. Express** 中间件的格式

Express 的中间件，**本质**上就是一个 **function** **处理函数**，Express 中间件的格式如下:

> 注意:中间件函数的形参列表中，**必须包含 next 参数**。而路由处理函数中只包含 req 和 res。

5. next 函数的作用

**next** **函数**是实现多个中间件连续调用的关键，它表示把流转关系转交给下一个中间件或路由。

#### 3.2 Express 中间件的初体验

1. 定义中间件函数

可以通过如下的方式，定义一个最简单的中间件函数:

````
// 定义一个最简单的中间件函数
const mw = function(req, res, next) {
  console.log('这是最简单的中间件')
  // 把流转关系，转交给下一个中间件或路由
  next()
}
````

2. 全局生效的中间件

客户端发起的**任何请求**，到达服务器之后，**都会触发的中间件**，叫做全局生效的中间件。 通过调用 **app.use**(中间件函数)，即可定义一个**全局生效**的中间件，示例代码如下:

````
// 将 mw 注册为全局生效的中间件
app.use(mw)
````

3. 定义全局中间件的简化形式

````
app.use((req, res, next) => {
  console.log('这是最简单的中间件')
  next()
})
````

4. 中间件的作用

多个中间件之间，**共享同一份** **req** **和** **res**。基于这样的特性，我们可以在**上游**的中间件中，**统一**为 req 或 res 对象添加自定义的属性或方法，供**下游**的中间件或路由进行使用。

5. 定义多个全局中间件

可以使用 app.use() **连续定义多个**全局中间件。客户端请求到达服务器之后，会按照中间件定义的先后顺序依次进行 调用，示例代码如下:

````
app.use((req, res, next) => {
  console.log('调用第一个全局中间件');
  next()
})

app.use((req, res, next) => {
  console.log('调用第二个全局中间件');
  next()
})

app.get('/user', (req, res) => {
  res.send('user page')
})
````

6. 局部生效的中间件

**不使用** app.use() 定义的中间件，叫做**局部生效的中间件**，示例代码如下:

````
const mw1 = (req, res, next) => {
  console.log('调用局部生效的中间件');
  next()
}

app.get('/', mw1, (req, res) => {
  res.send('home page')
})

app.get('/user', (req, res) => {
  res.send('user page')
})
````

7. 定义多个局部中间件

可以在路由中，通过如下两种等价的方式，使用多个局部中间件:

````
app.get('/', mw1, mw2, (req, res) => {
  res.send('home page')
})
app.get('/', [mw1, mw2], (req, res) => {
  res.send('home page')
})
````

8. 了解中间件的5个使用注意事项

（1）一定要在**路由之前**注册中间件
（2）客户端发送过来的请求，**可以连续调用多个**中间件进行处理
（3）执行完中间件的业务代码之后，**不要忘记调用 next() 函数**
（4）为了**防止代码逻辑混乱**，调用 next() 函数后不要再写额外的代码
（5）连续调用多个中间件时，多个中间件之间，**共享** req 和 res 对象

3.3 



### 使用 Express 写接口



