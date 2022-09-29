# array

## 增

#### 1、push（改）

> 1、它是将新增的元素添加到数组的尾部
> 2、它会改变原数组
> 3、并且返回的值为新数组的长度

````js
var arr=[1,2,3]
var newarr = arr.push(4)
console.log(arr);  //[1,2,3,4]
console.log(newarr);//4
````

#### 2、unshift

> 1、它是将新增的元素添加到数组的头部
> 2、它会改变原数组
> 3、并且返回的值为新数组的长度

````js
var arr=[1,2,3]
var newarr = arr.unshift(4)
console.log(arr);//[4,1,2,3]
console.log(newarr);//4
````

#### 3、splice

> 重量级的人物来了，它不仅可以添加元素，删除，还可以替换，我们先来说它的添加用法
> 1、可以添加元素至任意位置
> 2、它会改变原数组
> 3、参数1为你要添加的位置start的index（会添加到这个的前面），参数2为0，参数为你要添加的元素（是添加元素时各个参数代表的意义哦！！）
> 4、不返回

```js
var arr=[1,2,3]
var newarr = arr.splice(0,0,1)
console.log(arr);//[1,1,2,3]
console.log(newarr);//[]
```

#### 4、concat

> 这个方法常常用了拼接数组
> 1、这个方法不会改变原数组

```js
var arr=[1,2,3,2,9]
var newarr = arr.concat(1,2)
console.log(arr);//[1,2,3,2,9]
console.log(newarr);//[1,2,3,2,9,1,2]

var arr2=[1,0]
var newarr2 = arr.concat(arr2)
console.log(newarr2);//[1,2,3,2,9,1,0]
```

## 删

#### 1、pop

> 1、删除尾部的元素
> 2、改变原数组
> 3、返回的是删除的那个元素

```js
var arr=[1,2,3]
var newarr = arr.pop()
console.log(arr);//[1,2]
console.log(newarr);//3
```

#### 2、shift

> 1、删除的是头部元素
> 2、改变原数组
> 3、返回的是被删除的那个元素

````js
var arr=[1,2,3]
var newarr = arr.shift()
console.log(arr);//[2,3]
console.log(newarr);1
````

#### 3、splice

> 老盆友又见了，这次来看下删除的用法 注意点
> 1、删除任意位置的元素
> 2、改变元素组
> 3、返回的是删除元素数组（你没看错是数组！！）
> 4、参数1：为从哪开始删start的index，参数2：删除几个元素

```js
var arr=[1,2,3]
var newarr = arr.splice(0,1)
console.log(arr);//[2,3]
console.log(newarr);[1]
```

## 改

#### 1.splice

注意点1：改任意位置的元素
 注意点2：改变原数组
 注意点3：返回的新数组为替换下来的元素
 注意点4：参数1：如上，参数2：删除几个，参数3：要填上去的元素

```js
var arr=[1,2,3]
var newarr = arr.splice(0,1,4)
console.log(arr);//[4,2,3]
console.log(newarr);//[1]
```

## 查

#### 1、indexOf

> 1、传入的为你要查找的元素，找到返回该元素在数组中的索引，没找到返回-1

```js
var arr=[1,2,3]
var newarr = arr.indexOf(1)
console.log(newarr);// 0
```

#### 2、includes

> 1、传入你要查找的元素，返回true/false

```js
var arr=[1,2,3]
var newarr = arr.includes(1)
console.log(newarr);//true
```

#### 3、find

> 1、传入的是一个函数，返回第一个匹配的元素

```js
var arr=[1,2,3,2,9]
var newarr = arr.find((item,index)=>{
    return item>2
})
console.log(newarr);//3
```

## 排序

#### 1、sort

> 1、将原数组排序

```js
var arr=[1,2,3,2,9]
arr.sort()
console.log(arr);//[1,2,2,3,9]
```

也可以自定义

```js
var arr=[1,2,3,2,9]
//e1表示前一个元素，e2表示后一个元素
arr.sort((e1,e2)=>{
    return e1-e2
})
console.log(arr);//[1,2,2,3,9]
```

#### 2、reverse

> 1、将原数组倒序

```js
var arr=[1,2,3,2,9]
arr.reverse()
console.log(arr);//[9, 2, 3, 2, 1]
```

## 转换

#### 1、join

> 1、将数组转化为字符串，不改变原数组

```js
var arr=[1,2,3,2,9]
var newarr= arr.join(',')
console.log(newarr);//1,2,3,2,9
console.log(arr);//[1,2,3,2,9]
```

## 迭代（遍历）

#### 1、some

注意点：将数组每一项传入函数中，如果有一个符合添加就返回true

```js
var arr=[1,2,3,2,9]
var newarr= arr.some((item,index)=>{
    return item>2
})
console.log(newarr);//true
```

#### 2、every

注意点：将数组每一项传入一个函数，如果每一项都符合条件才返回true

```js
var arr=[1,2,3,2,9]
var newarr= arr.every((item,index)=>{
    return item>2
})
console.log(newarr);//false
```

#### 3、forEach

注意点1：forEach(function(){},obj)方法仅仅是一种快速迭代数组的方式，首先会遍历数组的每一个元素传入到函数中
 注意点2：该方法不需要返回值
 注意地3：参数二为this指向

```js
var arr=[1,2,3,2,9]
var newarr= arr.forEach(element => {
    console.log(element);
})
console.log(newarr);//undefined
复制代码
```

#### 4、map

注意点1:提供的是一种映射函数,将数组的每一项传入到函数
 注意点2：元素会经过函数中的指令进行各种变换，生成新的元素，并且将新的元素返回
 注定点3：最终会将返回的所有元素形成一个新的数组，该数组就是map()最终返回的值

```js
var arr=[1,2,3,2,9]
var newarr= arr.map(element => {
    return element*2
})
console.log(newarr);//[2, 4, 6, 4, 18]
复制代码
```

#### 5、reduce

arr.reduce(callback, initialValue)
callback（一个在数组中每一项上调用的函数，接受四个函数分别为：
previousValue（上一次调用回调函数时的返回值，或者初始值）
currentValue（当前正在处理的数组元素）
currentIndex（当前正在处理的数组元素下标）
array（调用reduce()方法的数组）
initialValue（可选的初始值。作为第一次调用回调函数时传给previousValue的值）

reduce应用：1.做累加2.数组扁平化3.属性对object分类4.数组去重等等

## 总结

| 基本方法 | 功能     | 原数组 | 返回                             |
| -------- | -------- | ------ | -------------------------------- |
| push     | 增       | 改     | 长度                             |
| unshift  | 增       | 改     | 长度                             |
| splice   | 增       | 改     | null                             |
|          | 删       | 改     | 被删除的元素，类型为数组         |
|          | 改       | 改     | 被替换下来的元素，类型为数组     |
| slice    | 删（截） | 不改   | 被删除（截取）的元素，类型为数组 |
| concat   | 拼接     | 不改   | 新数组                           |
| pop      | 删       | 改     | 被删除的元素                     |
| shift    | 删       | 改     | 被删除的元素                     |
| indexOf  | 查       | 不改   | 0/-1                             |
| includes | 查       | 不改   | true/false                       |
| find     | 查       | 不改   | 第一个匹配的元素                 |
| sort     | 排序     | 改     | 升序后的数组                     |
| reverse  | 排序     | 改     | 倒序后的数组                     |
| join     | 转换     | 不改   | 字符串                           |


| 迭代（遍历）方法 | 功能                                         | 原数组 | 返回       |
| ---------------- | -------------------------------------------- | ------ | ---------- |
| some             | 有一项符合函数条件，即返回 true              | 不改   | true/false |
| every            | 所有项符合函数条件，即返回 true              | 不改   | true/false |
| forEach          | 数组每一个元素传入函数                       | 不改   | undefined  |
| map              | 映射，数组的每一项传入到函数                 | 不改   | 新数组     |
| reduce           | 累加、数组扁平化、属性对object分类、数组去重 | 不改   | 新数组     |
