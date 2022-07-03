## ES6

什么是es6，全称是ECMAScript，它是由ECMA国际标准化组织，制定的**一项脚本语言的标准化规范。**

#### let

1、ES6中新增的用于声明变量的关键字。

````
if (true) {
	let a = 10
}
````



> let声明的变量只在所处于的块级有效（块级作用域，{}产生的作用域）

2、不存在变量提升

````
console.log(a)				//a is not defined
let a = 10;				
````

3、暂时性死区

````
var num = 10
if (true) {
	console.log(num)			//num is not defined
	let num = 20
}
````

#### const

1、声明常量，常量就是值（内存地址）不能变化的量。

> 具有块级作用域，也不能变量提升

2、声明常量时必须赋值

3、常量赋值后，值不能修改。 

> 基本数据类型不可修改，复杂数据可修改值

````
const ary = [100, 200]
ary[0] = 'a'
ary[1] = 'b'
console.log(ary)						//['a', 'b']
ary = ['a', 'b']						//Assignment to constant variable
````

**let，const，var的区别**

|     var      |      let       |     const      |
| :----------: | :------------: | :------------: |
|  声明的变量  |   声明的变量   |   声明的常量   |
| 函数级作用域 |   块级作用域   |   块级作用域   |
|   变量提升   | 不存在变量提升 | 不存在变量提升 |
|   值可更改   |    值可更改    |   值不可更改   |


#### 解构赋值
**数组解构**

数组解构允许我们按照一一对应的关系从数组中提取值然后将值赋值给变量

**对象解构**

对象解构允许我们使用变量的名字匹配对象的属性，匹配成功将对象属性的值赋值给变量

````
let person = {name: 'zhangsan', age: 20}
let {name, age} = person
console.log(name)			//'zhangsan'
console.log(age)			//20
````

````
let {name: myName, age: myAge} = person			//myName myAge属于别名
console.log(myName)			//'zhangsan'
console.log(myAge)			//20
````

#### 箭头函数

ES6中新增的定义函数的方式：用来简化函数定义语法的

````
() => {}
const fn = () => {}
````

函数体中只有一句代码，且代码的执行结果就是返回值，可以省略大括号

````
function sum(num1, num2) {
	return num1 + num2
}
const sum = (num1, num2) => num1 + num2
````

如果形参只有一个，可以省略小括号

````
function fn(v) {
	return v
}
const fn = v => v
````

**箭头函数this指向**
箭头函数不绑定this，箭头函数没有自己的this关键字，如果在箭头函数中使用this。this关键字将指向箭头函数定义位置中的this

> 指向的是函数**作用域**定义位置的上下文this。	//块级作用域不行

#### 剩余参数

剩余参数语法允许我们将一个定数量的参数表示为一个数组

````
const sum = (...args) => {
    let total = 0
    args.forEach(item => total += item)
    return total
}
sum(10, 20)
sum(10, 20, 30)
````

> 箭头函数不支持arguments

#### Array的扩展方法

**合并数组**

````
let ary1 = [1, 2, 3]
let ary2 = [4, 5, 6]
let ary3 = [...ary1, ...ary2]
````

````
ary1.push(...ary2)
````

**Array.from方法**

伪数组转真数组

**find()方法**

找到第一个符合条件的数组成员，没有返回undefined

**findIndex()方法**

找到第一个符合条件的数组成员的位置，没有找到返回-1

**includes()方法**

表示某个数组是否包含给定的值，返回布尔值

#### String的扩展方法

**模板字符串**
模板字符串中可以解析变量

**startsWith()和endsWith()**

repeat()方法

将原字符重复n次，返回一个新字符串

#### Set数据结构

ES6提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。