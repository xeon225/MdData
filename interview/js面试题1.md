1、js 的数据类型有哪些，值是如何存储

基本数据类型，Number	String	Boolean	null 	undefined	Symbol	Bigint

引用数据类型，Object

基本数据类型，基本存储在栈（stack）中，占据空间小，大小固定，属于被频繁使用数据，所以放入栈中存储

引用数据类型，同时存储在栈（stack）和堆（heap）中，占据空间大，大小不固定。引用数据类型在栈中存储了指针，该指针指向堆中实体的起始地址。

2、js 的数据类型的转换有那些

三种，分别是：

转换为布尔值（调用 Boolean()方法）
转换为数字（调用 Number()、parseInt()和 parseFloat()方法）
转换为字符串（调用.toString()或者 String()方法）

注：null 和 undefined 没有 .toString 方法

3、如何去判断 js 数据类型

typeof 只能判断基本数据类型，对于引用数据类型，一律返回 object。
在 js 中，数组是一种特殊的对象类型，因此 typeof 判断数组，返回的是 object

instanceof来判断，它不能检测基本数据类型，它是用来判断一个实例是否属于某种类型，使用它的方式可以用
A instanceof B ，如果 A 是 B 的实例，则返回 true，否则返回 false

constructor 来判断，除了 undefined 和 null 之外，其它类型都可以通过 constructor 来判断，但是如果声明了一个构造函数，并且把它的原型指向改变了，这种情况下，constructor 也不能准确的判断

Object.prototype.toString，判断一个对象只属于某种内置类型，但是不能准确的判断一个实例是否属于某种类型。
原因是因为实例对象可能会自定义 toString 方法，把这个方法给覆盖掉，我们可以通过函数 .call()方法，可以在任意值上调用这个方法，帮助我们判断这个值的类型。

4、介绍 js 有哪些内置对象

全局变量值 NaN	undefind
全局函数	parerInt()	parseFloat()
构造函数	Date	Object
还有数学计算的单体内置对象 Math 对象

5、javascript 创建对象的几种方式

（1）工厂模式
（2）构造函数	new()
（3）原型模式	prototype
（4）构造函数和原型模式组合
（5）动态原型模式
（6）寄生框选函数模式

6、js 获取原型的方法

````
p.proto
p.coustructor.prototype
Object.getPrototypeOf
````

7、什么是闭包，为什么要用它

说白了就是函数嵌套函数，内部函数能够访问外部函数的变量，且在外部被执行，就产生了闭包

（1）创建私有变量，避免全局变量的污染
（2）可以使已经运行结束的函数中的变量对象继续留在内存中，因为闭包函数保留了这个变量对象的引用，所以这个变量对象不会被回收

8、三种事件模型是什么

**事件**是用户操作网页时发生的交互动作或者网页本身的一些操作，现代浏览器一共有三种事件模型

DOM0级模型
IE 事件模型
DOM2 级事件模型

9、哪些操作会造成内存泄漏

（1）意外的全局变量：第一种情况是我们由于使用未声明的变量，而意外的创建了一个全局变量，而使这个变量一直留在内存中无法被回收
（2）被遗忘的计时器或回调函数：设置了 setInterval 定时器，而忘记取消它
（3）脱离 DOM 的引用：获取一个 DOM 元素的引用，而后面这个元素被删除，由于一直保留了对这个元素的引用，所以它也无法被回收
（4）闭包：不合理的使用闭包，从而导致某些变量一直被留在内存当中

10、javascript 中 this 的指向

（1）普通函数调用
这个情况没特殊意外，就是指向全局对象 windows

（2）对象函数调用
这个相信不难理解，就是哪个函数调用，this 指向哪里

（3）构造函数调用
构造函数返回对象的 this

> 在构造函数里面返回一个对象，会直接返回这个对象，而不是执行构造函数后创建的对象

（4）apply 和 call 调用
apply 和 call 简单来说就是会改变传入函数的 this。

（5）箭头函数调用
箭头函数里面，没有 `this` ，箭头函数里面的 `this` 是继承外面的环境。

11、解释一下原型链

每一函数有一个 prototype 的属性，当他作为构造函数的时候，它实例化出来的函数会有一个`_proto_`的属性，当访问一个对象的某个属性或者方法的时候，会现在这个对象自身查找，如果没有找到，则会去它的`_proto_`隐式原型上查找，也就是它构造函数的 prototype，如果还没有找到就会再在构造函数的 prototype 的`_proto_`中查找，如果找到著返回 undefined，这个链式查找的过程，我们称为原型链。

12、深拷贝、浅拷贝、以及如何实现

深拷贝和浅拷贝都是对复杂类型来说的，深拷贝式是层层拷贝，浅拷贝是只拷贝一层

浅拷贝：使用 Object.assign 只拷贝地址，它是将数据中的所有数据引用下来，指向同一个存放地址，拷贝后的数据修改后，会影响到原数据中的对象数据。

深拷贝：JSON.parse(JSON.Stringify(...))，递归拷贝每一层拷贝，将数据中的所有数据都拷贝下来，对拷贝后的数据进行修改，不会影响到原数据。

可以使用 for in、扩展运算符...、递归等递归函数实现深拷贝

递归：递归就是一个函数调用其本身，通过栈来实现。每执行一个函数，就新建一个函数栈

13、DOM事件流和事件托

（1）捕获阶段：在事件冒泡的模型中，捕获阶段不会响应任何事件。

（2）目标阶段：指事件响应到触发事件的最底层元素上

（3）冒泡阶段：事件的触发响应会从最底层目标一层层地向外到最外层（根节点），事件代理即是利用事件冒泡的机制把里层所需要响应的事件绑定到外层

14、ajax是什么，以及如何去创建它

ajax就是用来实现客户端与服务器端的异步通信效果，实现页面的局部刷新，标准浏览器是通过XMLHttpRequest，IE浏览器则是通过ActiveXObject来实现异步通信的效果

创建Ajax：

（1）创建 XMLHttpRequest 对象，也就是创建一个异步调用对象

（2）创建一个新的 HTTP 请求，并指定该请求的方法、URL 及验证信息

（3）设置响应 HTTP 请求状态变化的函数

（4）发送 HTTP 请求

（5）获取异步调用返回的数据

（6）使用 JS 和 DOM 实现局部刷新

15、什么是跨域？jsonp的原理？以及怎么实现

跨域：是浏览器对js实施的安全限制。

16、防抖和节流

防抖：事件被调用后，在执行之前无论被调用多少次都会从头开始计时
节流：不管事件被调用多少次，总是按规定时间间隔执行

````
// 防抖
function debounce(fn, time) {
    var timer;
    return function() {
    	if(timer) {
            clearTimeout(timer)
        	timer = null
    	}
         timer = setTimeout(() => {
            clearTimeout(timer)
            timer = null
            fn()
        }, time)
    }
}

// 节流
function throttle(fn, time) {
    var timer;
    return function() {
        if (timer) return
        timer = setTimeout(() => {
            clearTimeout(timer)
            timer = null
            fn()
        }, time)
    }
}
````

17、同步和异步的区别，分别列举一个同步和异步的例子

同步会阻塞代码，但是异步不会，alert是同步，setTimeout是异步 

前端使用异步的场景

（1）定时任务：setTimeout，setInterval

（2）网络请求：ajax请求，动态img加载

（3）事件绑定

18、描述new一个对象的过程

（1）创建一个新对象

（2）this指向这个新对象

（3）执行代码给this赋值

（4）return this（本身会执行return）

19、全局函数eval()有什么作用

eval()只有一个参数，如果传入的参数不是字符串，它直接返回这个参数。

20、原生对象和宿主对象

- 原生对象是ECMAScript规定的对象，所有内置对象都是原生对象，比如Array，Date，RegExp等
- 宿主对象是宿主环境比如浏览器规定的对象，用于完善是ECMAScript的执行环境，比如Document，Location，Navigator等

21、get和post有什么区别

都是HTTP协议中的请求方法。底层实现都是基于TCP/ip协议。

22、什么是变量声明提升

通过var声明的变量会被提升到作用域的顶端。不仅仅是变量，函数声明也一样会被提升。当同一个作用域内同时出现变量和函数声明提升时，变量仍然在函数前面

23、请指出document.onload和document.ready两个事件的区别

页面加载完成有两种事件，一是ready，表示文档结构已经加载完成（不包含图片等非文字媒体文件），二是onload，指示页面包含图片等文件在内的所有元素都加载完成。

24、jsonp的工作原理，以及它为什么不是真正的AJAX

25、通过new创建一个对象的时候，构造函数内部有哪些改变

````

````

- 创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型
- 属性和方法被加入到 this 引用的对象中
- 新创建的对象由 this 所引用，并用最后隐式的返回 this

26、箭头函数与普通函数的区别

- 箭头函数是匿名函数，不能作为构造函数，不能使用new
- 箭头函数不绑定arguments，取而代之用rest参数...解决
- 箭头函数不绑定this，会捕获其所在的上下文的this值，作为自己的this值
- 箭头函数通过call()或apply()方法调用一个函数时，只传入了一个参数，对this并没有影响
- 箭头函数没有原型属性

27、说一下js继承

Es5中的继承有：

（1）原型继承：父类的实例作为子类的原型
（2）借用构造函数继承：在子类中适用call方法，调用父类的方法，并将父类的this改为子类的this
（3）组合继承：既可以调用父类实例的属性又能调用父类原型的属性

ES6有class继承：
（1）class就相当于Es5中的构造函数
（2）class中定义的方法签后不能加function ,全部定义在class的prototype属性中
（3）class只能定义方法，不能定义定义对象变量等
（4）class默认为严格模式
（5）在子类中，调用extends方法，可以调用父类的属性，用eat调用父类的方法

28、JS 中的主要有哪几类错误

有三类的错误

加载时错误、运行时错误、逻辑错误

29、JS中如何将页面重定向到另一个页面

location.href：window.location.href = "https://www.onlineinterviewquesttions.com/"

location.replace：window.location.replace("https://www.onlineinterviewquesttions.com/;")

30、JS中的Array.splice()和Array.slice()方法有什么区别

slice和splice虽然都是对于数组对象进行截取，但是二者还是存在明显区别，函数参数上slice和splice第一个参数都是截取开始位置，slice第二个参数是截取的结束位置（不包含），而splice第二个参数（表示这个从开始位置截取的长度），slice不会对原数组产生变化，而splice会直播剔除原数组中的截取数据

31、undefined、null 和 undeclared 有什么区别

- null 表示“没有对象”，即该处不应该有值，转为数值时为0。
- undefined表示“缺少值”，就是此处应该有一个值，但是还没有定义
- undeclared表示语法错误，没有申明直接使用，js无法找到对应的上下文

32、JS中的高阶函数

高阶函数是JS函数式编程的最佳特性。它是以函数为参数并返回函数作为结果的函数。一些内置的高阶函数是map、filter、reduce等等

33、如何区分声明函数和表达式函数

````
// 声明函数
function hello() {
    return "HELLO"
}
// 表达式函数
var h1 = function hello() {
    return "HELLO"
}
````

34、什么是宏任务和微任务，两者有什么区别

宏任务：setTimeout、setInterval、ajax、DOM事件

微任务：promise、async/await

微任务执行时机要比宏任务早

宏任务：DOM渲染后触发，如setTimeout

微任务：DOM渲染前触发，如promise

35、promise有哪三种状态？如何变化

promise有三种状态：pending、resolved、rejected

pending -> resolved、pending -> rejected 变化是不可逆的状态的表现

pending状态，不会触发 then 和 catch

resolved状态，会触发后续的 then 回调函数

rejected状态，会触发后续的 catch 回调函数

36、async/await

async/await 是同步语法，解决异步回调 callback hell 问题，promise then catch 链式调用，但也是基于回调函数的。

async/await 和 promise 的关系：async/await 是解决异步回调的，但和 promise 并不互斥，两者相辅相成。
执行 async 函数，返回的是 promise 对象
await 相当于 promise 的 then
try...catch 可捕获异常，代替了 promise 的 catch



























