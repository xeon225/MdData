## 常见数组面试题

#### 1. 数组去重

set

````
var arr=[1,2,3,2,9]
var newarr = [...new Set(arr)]
console.log(newarr);//[1, 2, 3, 9]
````

> ES6 set() 函数中会先调用对象的 **hash**() 方法，获取 hash 结果；
> 如果 hash 结果相同，用比较操作符 == （也就是调用函数 **eq**()）判断二者的值是否相等；
> 如果都相等，去重；否则，set() 认为二者不同，两个都保留到结果中

indexOf

````
var arr=[1,2,3,2,9]
var newArr = []
arr.forEach(item => {
	newArr.indexOf(item) === -1 && newArr.push(item)
})
console.log(newArr);
````

includes

````
var arr=[1,2,3,2,9]
var newArr = []
arr.forEach(item => {
	!newArr.includes(item) && newArr.push(item)
})
console.log(newArr);
````

reduce

````
var arr=[1,2,3,2,9]
var newArr = []
arr.sort().reduce((pre,value,index) => {
	if (pre[index-1] !== value) {
		newArr.push(value)
	}
	return newArr
}, [])
console.log(newArr);
````













### 案例

#### 倒序

````
var arr = [1,2,3,4,5]
arr.forEach((item,i) => {
	var n = arr.pop()
	arr.splice(i,0,n)
})
````

