# 字符串方法

toString 有三个作用，返回一个字符串，检测对象的类型，返回该数字对应进制的字符串

````
var a = 10
var item = a.toString()			// '10'
var item2 = a.toString(2)		// '1010'
Object.prototype.toString.call(a)		// '[object Number]'
Object.prototype.toString.call({})		// '[object Object]'
Object.prototype.toString.call([])		// '[object Array]'
Object.prototype.toString.call(true)	// '[object Boolean]'
Object.prototype.toString.call(() => {})	// '[object Function]'
````

join() => 数组中的所元素转换一个字符串，默认使用逗号作为分隔符

````
var arr = [1,2,3];
console.log(arr.join())			// 1,2,3
console.log(arr.join('-'))	// 1-2-3
console.log(arr)						// [1, 2, 3] (原数组不变)
````

