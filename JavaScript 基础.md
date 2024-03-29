# JavaScript

## 数据类型

| 类型      | 定义                                                 |
| --------- | ---------------------------------------------------- |
| Undefined | 这个值未定义，没有被声明。                           |
| Null      | 这个值是空对象指针，返回Object。                     |
| Boolean   | 这个值是布尔值，true false                           |
| Number    | 这个值是数值                                         |
| String    | 这个值是字符串                                       |
| Object    | 这个值是对象或null，Object类型是所有它的实例的基础。 |

#### Number

| 属性         | 方法                                                         |
| ------------ | ------------------------------------------------------------ |
| Number()     | 转换规则如下：<br />如果是Boolean值，true和false将分别被转换为1和0<br />如果是数字值，只是简单的传入和返回<br />如果是null值，返回0<br />如果是undefined，返回NaN<br />如果是字符串，如果包含数字转换为数字，如果为空转换为0，如果是对象，则调用对象的valueOf() |
| parseInt()   | 函数在转换字符串时，更多的是看其是否符合数值模式。它会忽略字符串前面的空格，直至找到第一个非空格字符。<br />如果第一个字符不是数字字符或者负号，就会返回NaN。 |
| parseFloat() | 与parseInt()一样，区别是从第一个字符（位置0）开始解析每个字符。而且也是一直解析到字符串末尾，或者解析到遇见一个无效的浮点数字字符为止。 |

#### String

| 属性       | 方法                                                         |
| ---------- | ------------------------------------------------------------ |
| toString() | 数值、布尔值、对象和字符串值（没错，每个字符串也都有一个toString()方法，该方法返回字符串的一个副本）都有toString()方法。但null和undefined值没有这个方法。<br />如果值是null，则返回"null"；<br />如果值是undefined，则返回"undefined"。 |

#### Object

| 属性                 | 方法                                                         |
| -------------------- | ------------------------------------------------------------ |
| Constructor          | 保存着用于创建当前对象的函数。构造函数（constructor）就是Object()。 |
| hasOwnProperty       |                                                              |
| isPrototypeOf        | 用于检查传入的对象是否是另一个对象的原形。                   |
| propertyIsEnumerable |                                                              |
| toLocaleString()     | 返回对象的字符串表示，该字符串与执行环境的地区对应。         |
| toString()           | 返回对象的字符串表示。                                       |
| valueOf()            | 返回对象的字符串、数值或布尔值表示。通常与toString()方法的返回值相同。 |

## 操作符

| 类型       | 定义                                                         |
| ---------- | ------------------------------------------------------------ |
| 一元操作符 | 只能操作一个值的操作符叫做一元操作符。<br />后置递增和递减，前置递增和递减 ++ -- |
| 位操作符   | 位操作符用于在最基本的层次上，即按内存中表示数值的位来操作数值。 |
| 布尔操作符 | 布尔操作符一共有3个：非（NOT）、与（AND）和或（OR）。        |
| 乘性操作符 | 乘法、除法和取余      *、/、%                                |
| 加性操作符 | 加法和减法这两个加性操作符应该说是编程语言中最简单的算术操作符了。+、- |
| 关系操作符 | 小于（<）、大于（>）、小于等于（<=）和大于等于（>=）这几个关系操作符用于对两个值进行比较，比较的规则与我们在数学课上所学的一样。 |
| 相等操作符 | ==、!=、===、!==<br />相等操作符由两个等于号（==）表示，如果两个操作数相等，则返回true。<br />而不相等操作符由叹号后跟等于号（!=）表示，如果两个操作数不相等，则返回true。<br />全等和不全等操作符与相等和不相等操作符没有什么区别。全等操作符由3个等于号（===）表示，它只在两个操作数未经转换就相等的情况下返回true。<br />不全等操作符由一个叹号后跟两个等于号（!==）表示，它在两个操作数未经转换就不相等的情况下返回true。 |
| 条件操作符 | boolean ? true : false                                       |
| 赋值操作符 | 简单的赋值操作符由等于号（=）表示，其作用就是把右侧的值赋给左侧的变量。<br />var num = 10<br /> *=、/=、%=、+=、-=等 |
| 逗号操作符 | 使用逗号操作符可以在一条语句中执行多个操作。                 |

## 语句

| 名称                      | 定义                                                         |
| ------------------------- | ------------------------------------------------------------ |
| if语句                    | if（条件）语句1 else 语句2                                   |
| do-while语句              | do 语句 while (表达式)<br />是一种后测试循环语句，即只有在循环体中的代码执行之后，才会测试出口条件。<br />先执行循环语句，再判断条件。 |
| while语句                 | while（表达式）语句<br />属于前测试循环语句，与do-while相反，在循环的代码被执行之前，先对条件判断。 |
| for语句                   | for (初始值; 表达式; 循环后表达式;) 语句<br />for语句也是一种前测试循环语句 |
| for-in语句                | for（属性 in 表达式）语句<br/>是一种精准的迭代语句，可以用来枚举对象的属性。 |
| label语句                 | label: 语句<br />使用label语句可以在代码中添加标签，以便将来使用。 |
| break和<br />continue语句 | break和continue语句用于在循环中精确地控制代码的执行。<br />其中，break语句会立即退出循环，强制继续执行循环后面的语句。<br />而continue语句虽然也是立即退出循环，但退出循环后会从循环的顶部继续执行。 |

