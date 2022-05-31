css
1、flex
flex-direction:row(默认)\column             //排列方向
flex-wrap:nowrap(默认)                      //是否换行
justify-content:flex-start(默认)            //对齐方向
align-items:flex-start(默认)                //上下垂直对齐

2、响应式布局
媒体查询布局
width:% 布局
vx/vh   布局
rem     布局
flex    弹性布局

3、块元素有哪些
div header footer nav article section footer body html
块元素和行内元素的区别和特点
块元素独占一行，默认上下排列
块元素可以设置宽高，填充，边距，边框
块元素可以包含(块元素和行内元素)

行内元素
span a strong p b i em
不能设置宽高
能和其它元素在同一行

行内块元素
img input
能和其它元素在同一行
能设置宽高

4、html5和css3的新特性
html5新增标签：语义化标签
header footer nav article section aside
新增媒体标签:
audio   video
绘图 canvas

css3新增
选择器
伪元素
盒模型flex
多列布局 column-count
媒体查询
透明度颜色
渐变
阴影
边框图片
背景大小
旋转    倾斜    位移    缩放    过渡    动画
倒影
文字装饰    文字溢出

5、css中有哪些属性是可以继承的
文字大小、字体、粗细、风格
文本缩进、对齐、行高、书写方向、颜色
表格属性、列表属性
光标属性

BFC
格式化上下文，盒模型布局的css渲染模式，指一个独立的渲染区域或一个隔离的独立窗口。

6、清浮云，最好的方法伪类
:after{
    content:'.';
    display:block;
    height:0;
    clear:both;
    overflow:hidden;
    visbility:hidden;
}