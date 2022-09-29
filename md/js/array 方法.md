# array 方法

## 归类

| 应用分类       | 方法                                                         |
| -------------- | ------------------------------------------------------------ |
| 转字符串       | join (split toString)                                        |
| 堆栈方法       | .push	.pop	.unshift	.shift                          |
| 排序           | .reverse	.sort	随机乱序（自己封装）                    |
| 创建数组       | Array   Array.fill   Array.from   Array.of                   |
| 拼接           | .concat	展开运算符 ...                                    |
| 删改           | .slice	.splice                                            |
| 数组索引       | .includes	.indexOf   .lastIndexOf	Array.includes()   .find   .findIndex |
| 类数组转真数组 | .slice	Array.from	展开运算符 ...                       |
| ES6 数组方法   | Array.keys()   Array.values()   Array.entries()              |
| 遍历方法       | .forEach   .map   .reduce   .reduceRight   .some   .every   .filter |

## 方法介绍

### 1、转字符串方法

toString join => str.split

join() 数组中的所元素转换一个字符串，默认使用逗号作为分隔符

````
var arr = [1,2,3];
console.log(arr.join())			// 1,2,3
console.log(arr.join('-'))	// 1-2-3
console.log(arr)						// [1, 2, 3] (原数组不变)
````

split() 用于将一个字符串分隔成多个字符串数组（不算）

````
let str = 'a.b.c.d'
str.split('.')			// [a,b,c,d]
str.split('.', 1)		// [a]
````

### 2、堆栈方法

push() 返回值 => 从组数末尾添加元素，并返回新的数组长度。 

````
var arr = ['a','b','c']
var item = arr.push('d')							// ['a','b','c','d']
console.log(item)						// 4 
console.log(arr)						// ['a','b','c','d']
````

> 1、新增的元素添加到数组的尾部
> 2、会改变原数组



pop() => 删除数组最后一个元素，并返回删除的元素

````
var arr = ['a','b','c']
var item = arr.pop()						// 'c'
console.log(arr)								// ['a','b']
````

unshift() => 向数组的开头添加一个或更多元素，并返回新的数组长度。 

````
var arr = ['a','b','c']
var item = arr.unshift('d')
console.log(item)						// 4
console.log(arr)						// ['d','a','b','c']
````

shift() => 删除数组第一个元素，并返回删除的元素

````
var arr = ['a','b','c']
var item = arr.shift()
console.log(item)						// 'a'
console.log(arr)						// ['b','c']
````

### 3、排序方法（升降倒乱）

sort() 方法用于对数组的元素进行排序。默认排序顺序为按字母或数字升序

````
var arr = [3,1,4,5,2]
// 默认升序
console.log(arr.sort())							// [1, 2, 3, 4, 5]
// 降序
console.log(arr.sort((a,b) => b - a))		// [5, 4, 3, 2, 1]
console.log(arr.sort((a,b) => b - a) === arr) // 重新排序之后的原数组
````

reverse() 用于颠倒数组中元素的顺序

````
var arr = ['a','b','c','d']
console.log(arr.reverse())						// ['d', 'c', 'b', 'a']
console.log(arr.reverse() === arr)		// true 返回值是倒序之后的原数组
````

乱序 arr.sort(compate) 看例子

### 4、数组拼接方法

concat() 用于连接两个或多个数组。返回一个新数组。不改变原组数。es5 目前使用少。不能拼多维数组

````
var arr = [1,2]
var arr2 = arr.concat(3,4)
console.log(arr2)											// [1,2,3,4]
console.log(arr)											// [1,2]
console.log(arr.concat(3,[4,5]))			// [1,2,3,4,5]

````

Es6 展开运算符拼接数组

````
var arr1 = [1,2]
var arr2 = [3,4]
var arr3 = [5,6]
const arrResult = [...ar1,...arr2,...arr3]	// [1, 2, 3, 4, 5, 6]
````

### 5、删改方法

slice() 返回从原数组中指定开始下标到结束下标之间的项组成的新数组。不改变原数组。

返回一个新数组，字符串变成一个新数组

````
var arr = [1,3,5,7,9,11]
var arr2 = arr.slice(1)
console.log(arr2)						// [3, 5, 7, 9, 11] 
console.log(arr)						// [1,3,5,7,9,11] (原数组没变)
console.log(arr.slice())		// [1,3,5,7,9,11]	无参数，复制了原数组
console.log(arr.slice(2,4))		// [5,7]	中间截取
console.log(arr.slice(4,2))		// []			起点大于终点
console.log(arr.slice(-2))		// [9, 11]  倒数两个
console.log(arr.slice(-2,-1))	// [9]		倒数第二个
````

> [	)；左闭右开；两个参数：start，end(不写，默认到结尾)
>
> end 大于 start，返回空数组，start 为负数，从结尾开始截取

splice() 很强大的数组方法，它有很多种用法，可以实现删除、插入和替换，会改变原数组

````
var arr = [1,2,3,4,5]
console.log(arr.splice())			// []   不加参数，删除元素所组成的数组。返回了空数组
console.log(arr, arr.splice(4))		// [1,2,3,4][5]	只有一个参数返回所删除的元素，做截取操作，作用跟 slice 完全一样，区别于会改变原数组
console.log(arr, arr.splice(2,3))  // [1,2][3,4,5]两个参数，返回删除起始下标位置和要删除的个数。
console.log(arr, arr.splice(0,0,'a','b'))  // ['a','b',1,2,3,4,5][]两个参数，从0开始，删除0个，插入数据，返回空数据
````

> 第二个参数必须是数值 Number 作为有效值

### 6、数组索引方法

indexOf() 从数组的开头（位置 0）开始向后查找。

````
var arr = [1,2,3,4,5]
console.log(arr.indexOf(2))				// 1   数组2的下标是1
console.log(arr.indexOf(7))				// -1  如果此元素，就返回-1
````

lastIndexOf() 从数组的末尾开始向前查找

````
var arr = [1,2,3,4,5]
console.log(arr.lastIndexOf(2))				// 1   数组2的下标是1
console.log(arr.lastIndexOf(7))				// -1  如果此元素，就返回-1
````

### 7、ES6 数组的方法

.of() 创建数组，与Array 不同，行为统一

````
Array(5)					// [,,,,]
Array(5,6)				// [5,6]
Array.of(5)				// [5]
Array.of(5,6)			// [5,6]
// Array.of()始终坚定不移的给出几个参数就创建几个参数的数组，行为统一
````

.from() 类数组转换成真正的数组，参数为类数组

````
console.log(Array.from('12345'))				// ['1', '2', '3', '4', '5']
````

.keys() 用于返回新的数组迭代器

````
var arr = [ 'gfg', 'geeks', 'cse', 'geekpro' ]
console.log(arr)				// 0 1 2 3	索引值
````

.includes() 方法用来判断一个数组是否包含一个指定的值

````
var arr = [1,2,3,4,5]
arr.includes(2)				// true
arr.includes(6)				// false
````

.fill() 填充方法，能使用特定值填充数组中的一个或多个元素。当只是用一个参数时，该方法会用该参数的值填充整个数组。 会改变原数组

````
var arr = [1,2,3,4,5]
console.log(arr, arr.fill(6))  // [6, 6, 6, 6, 6][6, 6, 6, 6, 6]
````

.find() 返回匹配的值

````
var arr = [1,2,3,4,5]
console.log(arr.find(function(n){
	return n > 4
}));
// 5	返回第一个符合条件的成员
````

.findIndex() 返回匹配位置的索引

````
var arr = [1,2,3,4,5]
console.log(arr.find(function(n){
	return n > 4
}));
// 4	返回第一个符合条件的成员的索引
````



### 8、遍历方法

Array.keys() Array.values() Array.entries() 用于遍历数组。它们都返回一个遍历器对象，可以用for...of循环进行遍历

区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历

````
  var arr = [1,2,3,4,5]
  var obj = {
    a:1,b:2,c:3,d:4,e:5
  }
  for (var key of Object.keys(obj)){
    console.log(key);								// a b c d e
  }

  for (var value of Object.values(obj)){
    console.log(value);							// 1 2 3 4 5
  }

  for (var [key, value] of Object.entries(obj)){
    console.log(key, value);				// a 1  b 2  c 3  d 4  e 5
  }
  console.log(Object.keys(obj))			// ['a', 'b', 'c', 'd', 'e']
  console.log(Object.values(obj))		// [1, 2, 3, 4, 5]
  console.log(Object.entries(obj))  // [['a', 1],['b', 2],['c', 3],['d', 4],['e', 5]]
````

.forEach **没有返回值**。

````
var arr = [1,2,3,4]
arr.forEach(function(item, index, arr) {
	console.log(item, index, arr);
})
Array.prototype.forEach.call(arr,function(item, index, arr) {
	console.log(item, index, arr);
})
// 方法与原型一致
[...agr].forEach(item => console.log(item))
````

> 注意：
> 1、forEach 没有 return
> 2、第二个参数，改变 this。或者改成箭头函数
> 3、与 for 循环的区别，空数据跳过，无法正常跳出
> 4、类数组的调用方式

.map 返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

````
var arrs = [[4,5,6,7],
  [12,33,45,67],
  [123,345,456,678],
  [1234,2345,3456,5678]]
function test() {
 	var arr = ([...arguments].map((item) => Math.max(...item) ))
 	return arr
}
console.log(test(...arrs));
````

> 1、映射
> 2、第二个参数，改变 this。

.filter 数组中的每一项运行给定函数，返回满足过滤条件组成的数组。

````
var arr = [1,2,3,null,undefined,4,5,-1,0]
var arr1 = arr.filter(function(item, index, arr) {
	// return typeof(item) === 'number'		// 直接返回item，0就会做一次判断，转换为布尔值 false，如果对其干扰，把判断写在 return 后面，就相当于对这个判断进行了重写
	return item != undefined			// undefined == null
})
// [1, 2, 3, 4, 5, -1, 0]
````

> 注意：
> 1、默认过滤掉布尔值为 false，返回 true 的值

.some 返回布尔值，判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回 true。

````
var arr = [1,2,3,4,5]
var res = arr.some(function(item, index, arr){
	return item % 2 === 0
})
console.log(res);			// true
````

.every 返回布尔值 判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回 true。

````
var arr = [1,2,3,4,5]
var res = arr.some(function(item, index, arr){
	return item % 2 === 0
})
console.log(res);			// true
````

> .some  .every 区别：
> 用法一致，区别在返回 some 只要满足一项条件就返回 true。every 需要全部项满足才返回 true。

> .forEach  .map  .some  .every  .filter  这些方法里三个参数都一样
> item遍历的数组内容、index对应的数组索引、arr数组本身

遍历方法的区别

| 方法    | 区别                                                         |
| ------- | ------------------------------------------------------------ |
| forEach | 循环，为了**循环而循环**，不管返回值                         |
| map     | 映射，为了返回映射之后的数组，与原数组生产**映射的关系**，不管原数组有多少项，返回就有多少项 |
| filter  | 过滤，需要**过滤某一项或某几项**                             |
| some    | 判断，从参数来判断是否**有一项**满足条件，返回 true          |
| every   | 判断，从参数来判断是否**全部项**满足条件，返回 true          |

#### 9、迭代器方法（累加器）

.reduce 从数组的第一项开始，逐个遍历到最后。

.reduceRight 从数组的最后一项开始，向前遍历到第一项。

**这两个方法都会实现迭代数组的所有项(即累加器)，然后构建一个最终返回的值**。

````
var arr = [1,2,3,4,5]
var res = arr.reduce(function(prev, cur, index, arr){
	return prev + cur
})
console.log(res);				// 15
````

> 它能够返回一个具体的值
> 与 forEach 遍历相比，累加函数会多一个变量，reduce 会更简洁





### 例子

#### 数组随机数（乱序）

````
var arr = [1,2,3,4,5]
function compate() {
    return Math.random() - 0.5
}
arr.sort(compate)
````

#### 类数组转数组（ES5 与 ES6）

````
// ES5
var str = '123456'
console.log(Array.prototype.slice.call(str)) // ['1', '2', '3', '4', '5', '6']
````

````
function test() {
	 console.log(Array.prototype.slice.call(arguments))
}
test(1,2,3,4,5)				// [1, 2, 3, 4, 5]
````


> 类数组没有数组方法，需要转换一下。arguments和 DOM方法的返回结果，是类数组

````
// ES6
console.log(Array.from('12345'))			// [1, 2, 3, 4, 5]
console.log([...'12345'])							// [1, 2, 3, 4, 5] ... 是 Array.from 的封装
````



### 总结

对象无序，数组有序

| 不改变原数组      | 改变原数组 |
| ----------------- | ---------- |
| join              | push       |
| concat            | pop        |
| es6 展开运算符... | unshift    |
| slice             | shift      |
| indexOf           | sort       |
| lastIndexOf       | reverse    |
|                   | splice     |
|                   | fill       |









#### 数组添加 push、unshift

push与 unshift 都是添加数组，返回新长度，改变原数组

区别：

1、push 在数组尾部添加，unshift 在数组头部添加，

2、unshift 在尾部添加，会把已有的顶下去。push 在尾部添加不会改变顺序，性能更好，添加更快。

#### 数组排序 sort、reverse

相同点，都是排序之后返回原数组

#### 查找方法 indexOf、lastIndexOf、includes

区别：

indexOf，从左向右查找。lastIndexOf，从右向右查找。

includes 返回为布尔值

### 应用场景

#### 排序

.reverse	.sort	随机

#### 拼接

.concat	展开运算符 ...

#### 数组去重

.includes	.indexOf	.includes

#### 类数组转真数组

.slice	.from	... 

#### 累加器、二维变一维数组

.reduce    .reduceRIght