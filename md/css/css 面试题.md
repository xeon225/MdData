#### 1、如何避免外边距叠加

浮动元素不会与任何元素发生叠加，也包括它的子元素

````css
float: left
````

创建了BFC的元素(如浮动、overflow属性不为`visible`的元素)不会和它的子元素发生外边距叠加

````css
overflow: hidden;
````

绝对定位元素和其他任何元素之间不发生外边距叠加，也包括它的子元素

````css
position: absolute;
````

inline-block元素和其他任何元素之间不发生外边距叠加，也包括它的子元素

````css
display: inline-block
````

普通流中的块级元素的margin-bottom永远和它相邻的下一个块级元素的margin-top叠加，除非相邻的兄弟元素clear

普通流中的块级元素（没有border-top、没有padding-top）的margin-top和它的第一个普通流中的子元素（没有clear）发生margin-top叠加

普通流中的块级元素（height为auto、min-height为0、没有border-bottom、没有padding-bottom）和它的最后一个普通流中的子元素（没有自身发生margin叠加或clear）发生margin-bottom叠加

如果一个元素的min-height为0、没有border、没有padding、高度为0或者auto、不包含子元素，那么它自身的外边距会发生叠加

总结：修改元素**浮动、overflow、约定定位、行内块级**可以避免外边距叠加

#### 2、BFC到底是什么东西

`BFC` 全称：`Block Formatting Context`， 名为 "块级格式化上下文"。

`W3C`官方解释为：`BFC`它决定了元素如何对其内容进行定位，以及与其它元素的关系和相互作用，当涉及到可视化布局时，`Block Formatting Context`提供了一个环境，`HTML`在这个环境中按照一定的规则进行布局。

简单来说就是，`BFC`是一个完全独立的空间（布局环境），让空间里的子元素不会影响到外面的布局。那么怎么使用`BFC`呢，`BFC`可以看做是一个`CSS`元素属性

这里简单列举几个触发`BFC`使用的`CSS`属性

- overflow: hidden
- display: inline-block
- position: absolute
- position: fixed
- display: table-cell
- display: flex

