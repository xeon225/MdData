## object 方法

### 属性划分

#### 原型属性

````
const obj = Object.create({
	bar: 'bar'
})
````

#### 对象自身可枚举属性

````
obj.foo = 'foo'
````

#### 对象自身不可枚举属性

````
Object.defineProperty(obj, 'name', {
	enumerable: false,
	value: 'kingx'
})
````

#### Symbol 属性

````
obj[Symbol('age')] = 'age'
````

### 判断属性是否可枚举

#### Object.getOwnPropertyDescriptor()  

````
Object.getOwnPropertyDescriptor(obj, 'foo')
````

#### Object.prototype.propertyIsEnumerable

````
obj.propertyIsEnumerable('foo')		// true
````

### 遍历对象

#### for...in

````
for (var k in obj) {
	console.log(k)
}
// foo
// bar
````

属性顺序
1、对于大于等于0的整数，会按照大小进行排序，对于小数和负数会当做字符串处理
2、对于 String 类型，按照定义的顺序进行输出
3、Symbol 属性会过滤掉，不会进行输出

> 通过.hasOwnProperty 方法过滤原型链上的方法

#### Object.keys()

````
Object.keys(obj).forEach(item => {
	console.log(item);
})
// foo
````

属性顺序
1、对于大于等于0的整数，会按照大小进行排序，对于小数和负数会当做字符串处理
2、对于 String 类型，按照定义的顺序进行输出
3、Symbol 属性会过滤掉，不会进行输出

#### Object.getOwnPropertyNames()

````
Object.getOwnPropertyNames(obj).forEach(item => {
	console.log(item);
})
// foo
// name

````

#### Object.getOwnPropertySymbols()

````
Object.getOwnPropertySymbols(obj).forEach(item => {
	console.log(item);
})
//Symbol(age)
````

#### Reflect.ownKeys()

````
Reflect.ownKeys(obj).forEach(item => {
	console.log(item);
})
// foo
// name
// Symbol(age)
````

| 方法                               | 基本属性 | 原型链 | 是否枚举 | Symbol |
| ---------------------------------- | -------- | ------ | -------- | ------ |
| for...in                           | 是       | 是     | 否       | 否     |
| Object.key()                       | 是       | 否     | 否       | 否     |
| Object.getOwnPropertyNames()       | 是       | 否     | 是       | 否     |
| Object.getOwnPropertySymbols() ES6 | 否       | 否     | 否       | 是     |
| Reflect.ownKeys() ES6              | 是       | 否     | 是       | 是     |

> 注意：类的内部所有定义的方法，都是不可枚举的。



#### Object.create

方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。

语法:Object.create(proto, [propertiesObject])

- proto：新创建对象的原型对象。
- propertiesObject：可选

````js
const oldObjectProto = Object.prototype				// 重新定义对象原型
const newObjectProto = Object.create(oldObjectProto)			// 创建新对象，原型指向 newObjectProto, 不会影响原型
````

