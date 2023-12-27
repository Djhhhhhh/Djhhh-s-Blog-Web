## Ajax定义

​	AJAX = 异步 JavaScript 和 XML。AJAX 是一种用于创建快速动态网页的技术。通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

## axios库

#### 语法

1.引入axios.js

2.使用axios函数

​	传入配置对象，再使用.then回调函数接收结果，并作后续处理。

~~~js
axios({
	url:'目标资源地址'
}).then((result)=>{
	//对服务器返回的数据进行后续处理
})
~~~

## 认识url

#### 定义

​	URL 代表着是统一资源定位符（Uniform Resource Locator）。URL 无非就是一个给定的独特资源在 Web 上的地址。理论上说，每个有效的 URL 都指向一个唯一的资源。这个资源可以是一个 HTML 页面，一个 CSS 文档，一幅图像，等等。

#### URL的组成

​	例如：

~~~
http://hmajax.itheima.net/api/province
~~~

​	http::// ————协议     规定浏览器和服务器之间传输数据的格式

​	hmajax.itheima.net———域名   (必须)标记服务器在互联网中的方位

​	/api/province————资源路径    标识了资源在服务器下的位置

## 查询参数

#### URL查询参数

​	浏览器提供服务器的额外信息，让服务器返回浏览器想要的数据。

​	语法

~~~
http://xxxx.com/xxx/xxx?参数名1=值1&参数名2=值2
~~~

#### axios-查询参数

​	语法

~~~js
axios({
	url='目标资源地址'
    params:{
    	参数名:值
	}
}).then(result=>{
    //对服务器返回的数据进行后续处理
})
~~~

## 常用的请求方法

#### 请求方法

​	对服务器资源，要执行的操作

| 请求方法 |       操作       |
| -------- | :--------------: |
| GET      |     获取数据     |
| POST     |     提交数据     |
| PUT      | 修改数据（全部） |
| DELETE   |     删除数据     |
| PATCH    | 修改数据（部分） |
|          |                  |

#### 数据提交

​	当数据需要在服务器上保存

#### axios请求配置

​	url———请求的url地址

​	method————请求的方法

​	data————提交数据

~~~js
axios({
	url='目标资源地址'
    method:'请求方法'   //默认值为get
    data:{
    	参数名:值
	}
}).then(result=>{
    //对服务器返回的数据进行后续处理
})
~~~

## axios错误处理

#### 场景

​	再次注册相同的账号，会遇到报错信息。

#### 处理

​	用更直观的方式给普通用户展示错误信息。

#### 语法

~~~js
axios({
	//请求选项
}).then(result=>{
	//处理数据
}).catch(error=>{
	//处理错误
})
~~~

## HTTP协议-请求报文

#### HTTP协议

​	规定了浏览器发送及服务器返回内容的格式。

#### 请求报文

​	浏览器按照HTTP协议要求的格式发送给服务器的内容。

#### 请求报文的组成部分

​	1.请求行：请求方法，url，协议。

​	2.请求头：以键值对的格式携带的附加信息，比如：Content-Type。

​	3.空行：分隔请求头，空行之后是发送服务器的资源。

​	4.请求体：发送的资源。

#### 通过请求报文进行错误排查

​	看报文——>改代码

## HTTP协议-响应报文

#### HTTP协议

​	规定了浏览器发送及服务器返回内容的格式。

#### 响应报文

​	1.响应行（状态行）：协议，HTTP响应状态码，状态信息。

​	2.响应头：以键值对的格式携带的附加信息，比如：Content-Type

​	3.空行：分隔响应头，空行之后的是服务器返回的资源。

​	4.响应体：返回的资源。

#### HTTP响应状态码

| 状态码                | 说明       |
| --------------------- | ---------- |
| 1xx                   | 信息       |
| 2xx                   | 成功       |
| 3xx                   | 重定向消息 |
| 4xx                   | 客户端错误 |
| 5xx                   | 服务端错误 |
| 404(服务器找不到资源) |            |

## 接口文档

​	描述接口的文章。

#### 接口

​	使用AJAX和服务器通讯时，使用的URL，请求方法，以及参数。

##  form-serialize插件

​	快速收集表单元素的值。

#### 语法

~~~js
const form = document.querySelector('.example-form')
const data = serialize(form,{hash : true, empty : true }) 
~~~

​	form——要获取哪个表单的数据

​	hash——设置获取数据结构   true-JS对象   false-查询字符串

​	empty——设置是否获取空值   true-获取空值   false-不获取空值



## Bootstrap弹窗

​	离不开当前页面，显示单独信息，供用户操作。

#### 步骤

​	1.引入Bootstrap.js和Bootstrap.css。

​	2.准备弹框标签，确认结构。

​	3.通过自定义属性，控制弹窗的显示和隐藏。

#### 语法

~~~js
<button data-bs-toggle="modal" data-bs-target="css选择器">显示弹框</button>
<button data-bs-toggle="modal">Close</button>
~~~

##  图片上传

#### 步骤

​	1.获取图片文件对象。

​	2.使用FormData携带图片文件。

~~~js
const fd = new FormData()
fd.append(参数名,值)
~~~

​	3.提交表单数据到服务器，使用图片url网址

## AJAX原理-XMLHttpRequest

​	XMLHttpRequest（XHR）对象用于与服务器交互。通过 XMLHttpRequest 可以在不刷新页面的情况下请求特定 URL，获取数据。这允许网页在不影响用户操作的情况下，更新页面的局部内容。`XMLHttpRequest` 在 AJAX 编程中被大量使用。

#### axios和ajax的关系

​	axios内部采用XMR与服务器交互。

#### 使用步骤

​	1.创建xhr对象。

​	2.配置请求方法和请求url地址。

~~~js
const xhr = new XMLHttpRequest
xhr.open('请求方法'，'请求url网址')
xhr.addEventListener('loadend',()=>{
	//响应结果
	console.log(xhr.response)
})
~~~

## XMLHttpRequest-查询参数

​	浏览器提供服务器的额外信息，让服务器返回浏览器想要的数据。

#### 语法

~~~js
http://xxxx.com/xxx/xxx?参数名1=值1&参数名2=值2
~~~

## XMLHttpRequest-数据提交

​	通过xhr提交用户名和密码，完成注册功能。

#### 核心

​	请求头设置Content-Type :  application/json

​	请求体携带JSON字符串

~~~js
//告诉服务器我要传递的内容类型
xhr.setRequestHeader('Content-Type','application/json')
//准备将数据并转变为JSON字符串
const user = {username:'itheima001',password:'1111'}
const userStr = JSON.stringify(user)
xhr.send(userStr)
~~~

## Promise

​	`Promise` 对象表示异步操作最终的完成（或失败）以及其结果值。

#### 好处

​	1.逻辑更清楚。

​	2.了解axios函数内部的运行机制。

​	3.能解决回调函数地狱问题。

#### 语法

~~~js
//创建Promise对象
const p =new Promise ((resolve,reject)=>{
	//执行异步任务 并传递结果
    //成功调用resolve
    //失败调用reject
})	
	//接受结果
p.then(result=>{
	//成功
}).catch(error=>{
	//失败
})
~~~

#### Promise三种状态

​	了解Promise对象如何关联的处理函数，以及代码的执行顺序。

​	待定pending 已对现fulfilled 已拒绝rejected

## 同步代码与异步代码

​	同步代码：逐行执行，需原地等待结果后，才继续向下执行。

​	异步代码：调用后耗时，不阻塞代码继续执行（不必原地等待），在将来完成后触发一个回调函数。

#### JS中哪些是异步代码

​	1.setTimeout/setlnterval

​	2.事件

​	2.AJAX

## 回调函数地狱

​	情景：展示默认第一个省，第一个城市，第一个地区在下拉菜单中。

​	在回调函数中嵌套回调函数，一直嵌套下去就形成了回调函数地狱。

#### 缺点

​	可读性差，异常无法捕获，耦合性严重，牵一发而动全身。

## Promise-链式调用

​	用于解决回调函数地狱问题。

​	依靠then()方法会返回一个新生成的Promise对象特性，继续串联下一环任务，直到结束。

#### 做法

​	每个Promise对象管理一个异步任务，用then返回Promise对象，串联起来。

~~~js
axios({}).then(result=>{
	return axios({}).then(result=>{
       	 return axios({}).then(result=>{ 
		})
	})
})
~~~

## async函数和await函数

​	async`和 `await` 关键字让我们可以用一种更简洁的方式写出基于 Promise 的异步行为，而无需刻意地链式调用 promise。

#### 语法

~~~js
//1.
async function getData(){
    //2.await等待Promise对象成功的结果
    const pobj = await axios({})
}
~~~

#### 错误捕捉

​	使用try-catch语句

~~~js
try{
	//要执行的代码
}catch (error){
	//error接受的是错误信息
	//try里代码，如果有错误直接进入这里执行。
}
~~~

## 事件循环

​	好处：掌握js代码执行顺序。

​	js为单线程，为了让耗时代码不阻塞其他代码执行，设计了事件循环模型。

​	执行代码和收集异步任务的模型，在调用栈空闲，反复调用任务队列里的回调函数的执行机制，就叫事件循环。

## 宏任务与微任务

​	宏任务：有浏览器环境执行的异步代码。

​	微任务：由JS引擎环境执行的异步代码。

#### 分类

| 任务                   | 执行所在环境 |
| ---------------------- | ------------ |
| JS脚本执行事件         | 浏览器       |
| setTimeout/setInterval | 浏览器       |
| AJAX请求完成事件       | 浏览器       |
| 用户交互事件           | 浏览器       |
| Promise对象.then()     | JS引擎       |
|                        |              |

## Promise.all静态方法

​	合并多个Promise对象，等待所有用时成功，做后续逻辑。

#### 语法

~~~js
const p = Promise.all([Promise对象,Promise对象,...])
p.then(result=>{
	//result结果：[Promise对象成功结果，Promise对象成功结果，...]                 
}).catcg(error=>{
    //第一个失败的Promise对象，抛出的异常。
})
~~~

## Node.js

​	简单的说 Node.js 就是运行在服务端的 JavaScript。

#### 作用

​	使用Node.js编写服务器端程序。

​	1.编写数据接口，提供网页资源浏览功能等等。

​	2.前端工程化。

#### 什么是前端工程化？

​	开发项目直到上线，过程种集成的所有工具和技术。

​	格式化工具 压缩工具 转换工具 打包工具 脚手架工具........

## fs模块-写入文件

​	fs模块：封装了与本机文件系统进行交互的方法/属性。

#### 语法

~~~js
const fs = require('fs')   //fs是模块标识符:模块的名字。
~~~

#### 写入文件

~~~js
fs.writeFile('文件路径','写入内容',err=>{
	//写入后的回调函数
})
~~~

#### 读取文件

~~~js
fs.readFile('文件路径',(err,data)=>{
	//读取后的回调函数
	//data是文件内容的Buffer数据流
})
~~~

#### 例子

~~~js
const fs = require('fs')
fs.writeFile('../text.txt','hellow node',(err)=>{
    if(err){
        console.log(err)
    }else {
        console.log('打印成功')
    }
})
fs.readFile('../text.txt',(err,data)=>{
    if(err){
        console.log(err)
    }else {
        console.log(data.toString())
        //.toString()函数可以将16进制数据流对象转换为字符串
    }
})
~~~

## path模块-路径处理

​	Node.js代码中，相对路径是根据终端所在路径来查找的，可能无法找到你想要找到的文件。

​	建议在Node.js中，使用绝对路径。

#### 语法

~~~js
__dirname内置变量(获取当前模块目录-绝对路径)
path.join()会使用特定于平台的分隔符作为界定符，拼接起来
~~~

## URL中的端口号

​	统一资源定位符，简称网址，用于访问服务器内的资源。

​	端口号：标记服务器里不同功能的服务程序。

​	端口号范围：0-65535之间任意整数。

​	http协议默认访问80端口。

#### 常用服务程序

​	web服务程序：用于提供网上信息浏览功能。

​	注意：0-1023和一些特定端口号被占用，我们自己编写服务器程序请避开使用。

## http模块-创建web服务

​	创建web服务程序并响应内容给浏览器。

#### 步骤

​		

​	2.监听request请求事件，设置响应头和响应体。

​	3.配置端口号并启动Web服务。

​	4.浏览器请求http://localhost:3000测试

​	注意：localhost固定表示本机域名。

~~~js
//1.加载http模块，创建web服务对象。
const http = require('http')
const server = http.createServer()
//监听request请求事件，设置响应头和响应体
server.on('request',(req,res)=>{
    //若有中文字符 则设置该编码模式
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    res.end('欢迎使用该服务')
})
//配置端口号
server.listen(3000,()=>{
    console.log('web服务启动了')
})
~~~

## Node.js模块化简介

​	在Node.js中，每个文件都视为一个单独的模块。

​	好处：提高代码复用性，按需加载，独立作用域。

​	概念：项目是由很多个模块文件组成的。

​	使用：需要标准语法导出导入进行使用。

#### CommonJ标准

​	需求：定义utils.js模块，封装基地址和求数组总和的函数。

1.导出：module.exports={}

~~~js
const baseURL = 'http://hmajax.itheima.net'
const getArraysum = arr => arr.reduce((sum,val)=>sum+=val,0)
module.exports={
	对外属性名1：baseURL
	对外属性名2：getArraySum
}
~~~

2.导入：require('模块名或路径')

~~~js
const obj = require('模块名或路径')
~~~

​	内置模块：直接写名字（例如：fs，path，http）

​	自定义模块：写模块文件路径（例如：./utils.js）

## ECMAScriprt-默认导出和导入

​	封装并导出基地址和求数组元素和的函数。

#### 默认使用标准

​	1.导出：

~~~js
export default{}
~~~

​	2.导入

~~~js
import 变量名 from '模块名或路径'
~~~

注意：Node.js默认支持CommonJS标准语法。

如需使用ECMAScript标准语法，在运行模块所在文件夹新建package.json文件，并设置{"tyep":"module}

## ECMAScriprt-命名导出和导入

​	封装并导出基地址和求数组元素和的函数。

#### 命名使用标准

​	1.导出

~~~js
export 修饰定义语句
~~~

​	2.导入

~~~js
import {同名变量} from '模块名或路径'
~~~

## 包的概念

 	将模块，代码，其他资料聚合成一个文件夹。

#### 包的分类

​	1.项目包：主要用于编写项目和业务逻辑。

​	2.软件包：封装工具和方法进行使用。

#### 要求

​	根目录下，必须有package.json文件（记录包的清单信息）

~~~json
{
	"name":"cz_utils",          软件包名称
	"versoin":"1.0.0",         软件包当前版本
	"description":"一个数组和字符串常用工具方法的包",   软件包简短描述
	"main":"index.js",  软件包入口点
	"author":"itheima"   软件包作者
	"license":"MIT"   软件包许可证
}
~~~

## npm-软件包管理器

​	Node.js下的仓库。

##### 使用

​	1.初始化清单文件：npm init-y （得到package.json文件，有则忽略此命令）

​	2.下载软件包：npm i 软件包名称

​	3.使用软件包。

## npm-安装所有依赖

​	安装当前项目所需要的软件包。

#### 方法

​	使用命令：npm i

​	用于下载package.json中记录的所有的软件包。

## npm-全局软件包nodemon

​	本地软件包：当前项目内使用，封装属性和方法，存在于node_modules

​	全局软件包：本机所有项目使用，封装命令和工具，存在于系统设置的位置。

#### 作用

​	代替node命令，检测代码更改，自动重启程序。

#### 使用

​	1.安装：npm i nodemon -g (-g代表全局环境中)

​	2.运行：nodemon待执行的目标js文件。

## Webpack

​	本质上，webpack 是一个用于现代 JavaScript 应用程序的 静态模块打包工具。当 webpack 处理应用程序时，它会在内部从一个或多个入口点构建一个 依赖图，然后将你项目中所需的每一个模块组合成一个或多个 bundles，它们均为静态资源，用于展示你的内容。

#### 静态模块：

​	指的是编写代码过程中的，html，css，js，图片等固定的文件。

#### 打包：

​	把静态模块内容，压缩，整合，转译等。（前端工程化）

​	把less/sass转成css代码。

​	把ES6+降级成ES5。

​	支持多种模块标准语法。

#### 使用Webpack 	

​	1.新建并初始化项目，编写业务源代码。

​	2.下载Webpack webpack -cli到当前项目中（独立版本），并配置局部自定义命令。

​	3.运行打包命令，自动产生dist分发文件夹（压缩和优化后，用于最终运行的代码）
