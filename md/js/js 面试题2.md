#### 数组扁平化

flat 方法、利用正则、reduce 遍历、递归

````js
const arr = [1, [2, [3, [4, 5]]], 6];
// => [1, 2, 3, 4, 5, 6]
````

````js
const res1 = arr.flat(Infinity);
````

````js
const res2 = JSON.stringify(arr).replace(/\[|\]/g, '').split(',');
````

````js
const flatten = arr => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, [])
}
const res4 = flatten(arr);
````

````js
const res5 = [];
const fn = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      fn(arr[i]);
    } else {
      res5.push(arr[i]);
    }
  }
}
fn(arr);
````

#### 数组去重

set、两层 for 循环+splice、indexOf、includ、filter、map

````js
const res1 = Array.from(new Set(arr));
````

#### 类数组转化为数组

类数组是具有**length**属性，但不具有数组原型上的方法。常见的类数组有**arguments**、DOM操作方法返回的结果。

Array.from、扩展运算符、Array.prototype.slice.call()、concat

````js
Array.prototype.concat.apply([], document.querySelectorAll('div'));
````

#### debounce（防抖）

触发高频时间后n秒内函数只会执行一次,如果n秒内高频时间再次触发,则重新计算时间。

> 防抖常应用于用户进行搜索输入节约请求资源，`window`触发`resize`事件时进行防抖只触发一次。

#### throttle（节流）

高频时间触发,但n秒内只会执行一次,所以节流会稀释函数的执行频率。

> 节流常应用于鼠标不断点击触发、监听滚动事件。

#### 函数珂里化

指的是将一个接受多个参数的函数 变为 接受一个参数返回一个函数的固定形式，这样便于再次调用，例如f(1)(2)

#### instanceof

运算符用于检测构造函数的`prototype`属性是否出现在某个实例对象的原型链上。

#### Promise

Promise利用三大手段解决回调地狱：

1. 回调函数延迟绑定
2. 返回值穿透
3. 错误冒泡

#### JSONP

script标签不遵循同源协议，可以用来进行**跨域请求**，优点就是兼容性好但仅限于GET请求

#### 图片懒加载

可以给img标签统一自定义属性`data-src='default.png'`，当检测到图片出现在窗口之后再补充**src**属性，此时才会进行图片资源加载。

#### 滚动加载

原理就是监听页面滚动事件，**分析clientHeight**、**scrollTop**、**scrollHeight**三者的属性关系。

````js
window.addEventListener('scroll', function() {
  const clientHeight = document.documentElement.clientHeight;		// 可见区域高度
  const scrollTop = document.documentElement.scrollTop;					// 获取滚动条位置
  const scrollHeight = document.documentElement.scrollHeight;		// 获取文档实际高度
  if (clientHeight + scrollTop >= scrollHeight) {
    // 检测到滚动至页面底部，进行后续操作
    // ...
  }
}, false);
````

#### 渲染几万条数据不卡住页面

渲染大数据时，合理使用**createDocumentFragment**和**requestAnimationFrame**，将操作切分为一小段一小段执行。

#### 字符串解析问题

````js
var a = {
	b: 123,
	c: '456',
	e: '789',
}
var str=`a{a.b}aa{a.c}aa {a.d}aaaa`;
// => 'a123aa456aa {a.d}aaaa'
````

#### 类型转换

转Boolean

在条件判断时，除了 undefined， null， false， NaN， ''， 0， -0，其他所有值都转为 true，包括所有对象。

#### 原型

Object 是所有对象的爸爸，所有对象都可以通过 __proto__ 找到它

Function 是所有函数的爸爸，所有函数都可以通过 __proto__ 找到它

函数的 prototype 是一个对象

对象的 __proto__ 属性指向原型， __proto__ 将对象和原型连接起来组成了原型链

#### 循环中断

**for 循环**
brerk 退出循环
continue 退出当前循环，继续执行循环

> for 不能有 return

forEach

return 退出当前循环，继续执行循环
try catch 退出本次循环

````js
let arr = [1, 2, 3] 
try {
   arr.forEach(item => {
     if (item === 2) {
       throw('退出循环')
     }
     console.log(item)
   })
 } catch(e) {
   console.log(e,'e')
 }
// 1
// 退出循环
````



> forEach 不能有 brerk、continue

**总结**

允许使用`break` & `continue`，不使用`return`：

- for循环
- for...in（`break` & `continue`对遍历无影响）
- for...of
- while
- do...while

允许使用`return`，不使用`break` & `continue`：

- forEach
- Array.map
- for...in（node环境中允许使用，但对遍历无影响）

