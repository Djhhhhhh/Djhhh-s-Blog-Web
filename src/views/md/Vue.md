[Vue概念

​		Vue是用于构建用户界面的渐进式框架。

#### 构建用户界面

​	基于数据渲染出用户看到的页面。

#### 渐进式

​	循序渐进。

​	声明式渲染 => 组件系统 => 客户端路由VueRouter => 大规模状态管理Vuex => 构建工具Webpack/Vite

​	Vue的两种使用方式：

```js
	1.	Vue核心包开发：局部模块开发。
	2.	Vue核心包&Vue插件 工程化开发：整站开发。
```

#### 框架

​	是一套完整的项目解决方案。

​	优点：大大提升开发效率。

## 创建一个Vue实例

#### 流程

​	构建用户界面=>创建vue实例初始化渲染=>核心步骤：

​		1.准备容器。

​		2.引包-开发版本/生产版本。

​		3.创建Vue实例 new Vue()。

​		4.指定配置项=>渲染数据=>el指定挂载点+data提供数据。

#### 语法

~~~js
const app=new Vue({
            el:'.app',
            data:{
                msg:'hellow 黑马',
                count: 666,
                nickname:'oo'
            }
	})
~~~



## 	插值表达式

​	是vue的一种模板语法。

#### 作用

​	利用表达式进行插值，渲染到页面中。

​	表达式：是可以给被求值的代码，js引擎会将其计算出一个结果。

#### 语法

~~~js
{{表达式}}
~~~

#### 注意

​	1.使用的数据必须存在(data)

​	2.支持的是表达式，而非语句，比如：if for...

​	3.不能在标签属性中使用{{}}插值。

## 		Vue响应式特性

​	数据改变了，视图会自动更新。

​	聚焦于数据=>数据驱动视图

​	使用Vue开发，关注业务的核心逻辑，根据业务修改数据即可。

#### 访问数据

~~~js
"实例.属性名"
~~~

#### 修改数据

~~~~js
 "实例.属性名" = "值"
~~~~

## method方法

​	methods方法写在Vue元素中，用于封装方法函数。 

​	访问用this就行，this指向当前实例。

## Vue指令

​	Vue会根据不同的指令，针对标签实现不同的功能。

#### 指令

​	带有v-前缀的特殊标签属性。	

#### v-html

​	作用：设置元素的innerHTML

​	语法：

~~~js
v-html="表达式"
~~~

#### v-show

​	作用：用于控制元素的显示隐藏。

​	原理：是在css上加上display：none

​	使用场景：频繁切换显示隐藏的场景。

​	语法：

~~~js
v-show="表达式" 表达式值true显示 false隐藏
~~~

#### v-if

​	作用：控制元素显示隐藏（条件渲染）。

​	原理：根据判断条件，控制元素的创建和移除。

​	使用场景：要么显示，要么隐藏，不频繁切换的场景。

​	语法：

~~~js
v-if="表达式" 表达式值true显示 false隐藏
~~~

#### v-else和v-else-if

​	作用：辅助v-if进行判断渲染

​	注意：要紧挨着v-if使用。

​	语法：

~~~js
v-else v-else-if="表达式"
~~~

#### v-on

​	作用：注册事件 = 添加监听 + 提供处理逻辑

​	技巧：v-on:可以用@代替。

​	语法：

~~~js
v-on:事件名="内联元素"
v-on:事件名="methods中的函数名"
@事件名="内联元素"
@事件名="methods中的函数名"
~~~

#### v-on调用传参

​	语法：

~~~js
@click="fn(参数1，参数2...)"
~~~

#### v-bind

​	作用：动态设置html的标签属性。

​	语法：

~~~js
v-bind:属性="属性值"
~~~

​	简写：

~~~js
:属性="属性值"
~~~

#### v-for

​	作用：基于数据循环，多次渲染整个元素。

​	语法：

~~~js
v-for="(item,index) in 数组"
//item 每一项 index 下标
~~~

#### v-for中的key

​	作用：给列表项添加唯一标识。便于vue进行列表项的正确排序服用。

​	语法：

~~~js
:key="唯一标识"
~~~

​	注意点:

​		1.key的值只能是字符串或数字类型。

​		2.key的值必须具有唯一性。

​		3.推荐使用id作为key（唯一），不推荐使用index作为key（会变化，不对应）

#### v-model

​	作用：给表单元素使用，双向数据绑定=>可以快速获取或设置表单内容。

​		1.数据变化=>视图自动更新。

​		2.视图变化=>数据自动更新。

​	语法：

~~~js
v-model="变量"
~~~

## 指令的修饰符

​	通过'.'指明一些指令后缀，不同后缀封装了不同的处理操作=>简化代码

#### 分类

##### 	1.按键修饰符

​		@keyup.enter    键盘回车监听

##### 	2.v-model修饰符 

​		 v-model.trim 去除首尾空格  

​		v-model.number 转数字

##### 	3.事件修饰符   

​		@事件名.stop 阻止冒泡   

​		@事件名.prevent  阻止默认行为

##  v-bind对于样式控制的增强

​	Vue扩展了v-bind的语法，可以针对class类名和style行内样式进行控制。

#### 操作class

​	语法：	

~~~vue
:class="对象/数组"
~~~

​	1.对象：键就是类名，值是布尔值。如果值为true有这个类，否则没有。

~~~vue
<div class="box" :class="{类名1:布尔值,类名2:布尔值}"></div>
~~~

​	2.数组：数组中的所有类，都会添加到盒子上，本质上就是一个class列表。

~~~vue
<div class="box" :class="[类名1，类名2，类名3]"></div>
~~~

#### 操作style行内样式

​	语法：

~~~vue
<div class="box" :style="{css属性名1:'css属性值',css属性名2:'css属性值'}"></div>
~~~

​	使用场景：

​		某个具体属性的动态设置。

## v-model应用于其他表单元素

​	常见的表单元素都可以用v-model绑定关联=>快速设置获取或设置表单元素的值。

​	它会根据控件类型自动选取正确的方法来更新元素。

#### 分类

​	输入框 input:text    =>    value

​	文本域 textarea      => value 

​	复选框input:checkbox =>checked

​	单选框input:radio =>check 

​	下拉菜单 select =>value 

​	.......

## 计算属性

​	基于现有的数据，计算出的新属性。依赖的数据变化，自动重新计算。

#### 简写语法

​	1.声明computed配置项中，一个计算属性对应一个函数。

​	2.使用起来和普通属性一样使用{{计算属性名}}

~~~js
computed:{
	计算属性名(){
		基于现有数据，编写求值逻辑。
		return 结果
	}
},
~~~

​	计算属性内部可以通过this访问到app实例。

#### 与methods方法区别

​	computed计算属性：

​	作用：封装一段对于数据的处理，求得一个结果。

​	methods方法：

​	作用：给实例提供一个方法，调用以处理业务逻辑。

#### 缓存特性

​	计算属性会对计算出来的结果缓存，再次使用直接读取缓存，依赖项变化了，会自动重新计算，并再次缓存。

#### 完整写法

~~~js
computed:{
	计算属性名:{
		get(){
			一段代码逻辑（计算逻辑）
			return 结果
		}，
		set(修改的值){
			一段代码逻辑（修改逻辑）
		}
	}
}
~~~

## watch侦听器(监视器)

​	监听数据变化，执行一些业务逻辑或异步操作。

#### 简写语法

~~~js
watch:{
	//该方法会在数据变化时触发执行
	数据属性名 (newValue,oldValue){
		//一些业务逻辑或异步操作
	},
     //newValue是信值 oldValue是老值 一般忽略不写
	'对象.属性名'(newValue,oldValue){
		//一些业务逻辑或异步操作
	}
}
~~~

#### 完整写法

​	1.deep:true 对复杂类型深度监视

​	2.immediate:true 初始化立即执行一次handler方法

~~~js
data:{
    obj:{
        word:'',
        lang:''
    },
},
watch:{
    数据属性名:{
        deep:true,
        handler(newValue){
            console,log(newValue)
        }
    }
}
~~~

## Vue生命周期

​	一个Vue实例从创建到销毁的整个过程。

#### 四个生命阶段

​	1.创建      数据的响应式处理                (发送初始化渲染请求)

​	2.挂载      渲染模板								(等挂载结束后可以操作dom)

​	3.更新      修改数据，更新视图          

​	4.销毁	   销毁实例

#### 声明周期函数(钩子函数)

###### 	1.beforeCreate

~~~js
beforeCreate(){
	console.log(beforeCreate   响应式数据准备好之前)
}
~~~

###### 	2.created 

~~~js
created(){
	console.log(created   响应式数据准备好之后)
}
~~~

###### 	3.beforeMount

~~~js
beforeMount(){
	console.log(beforeMount  模板渲染之前)
}
~~~

###### 	4.mounted

~~~js
mounted(){
	console.log(mounted  模板渲染之后)
}
~~~

###### 	5.beforeUpdate

~~~js
beforeUpdate(){
	console.log(beforeUpdate 数据修改了，视图还没更新)
}
~~~

###### 	6.updated

~~~js
updated(){
	console.log(updated  数据修改了，视图已经更新)
}
~~~

###### 	7.beforDestroy

~~~js
beforDestroy(){
	console.log(beforDestroy  卸载前)
}
~~~

###### 	8.destroyed

~~~js
destroyed(){
	console.log(destroyed   卸载后)
}
~~~

## 工程化开发

开发vue的两种方式：

​	1.核心包传统开发模式：基于html/css/js文件，直接引入核心包，开发Vue。

​	2.工程化开发模式：基于构建工具（例如：webpack）的环境中开发Vue。

## 脚手架VueClI

​	Vue ClI是Vue官方提供的一个全局命令工具。

​	可以帮助我们快速创建一个开发Vue项目的标准化基础架子。[集成了webpack配置]

#### 好处：

​	1.开箱即用。

​	2.内置babel等工具。

​	3.标准化。

#### 使用步骤

​	1.全局安装：yarn global add @vue/cli  或   npm i @vue/cli -g

​	2.查看Vue坂本：vue --version

​	3.创建项目架子：vue create project-name(项目名--不能用中文)

​	4.启动项目：yarn serve 或 npm run serve (找package.json)

## 	脚手架目录文件介绍

#### Vue-DEMO  

##### 	node_modules

​	//第三方文件夹。

##### 	public

​	//放html文件的地方。

###### 		favicon.ico

​		//网站图标。

###### 		index.html

​		//index.html模板文件。

##### 	src

​	//源代码目录 =>以后写代码的文件夹。

###### 		assets

​		//静态资源目录 =>用于存放图片，字体等。

###### 		components

​		//组件目录  => 存放通用组件。

###### 		App.vue

​		//App根组件  =>  项目运行看到的内容就在这里编写。

###### 		main.js

​		//入口文件 => 打包或运行，第一个执行的文件。

##### 	.gitignore

​	//git忽视文件。

##### 	babel.config.js

​	//babel配置文件。

##### 	jsconfig.json

​	//js配置文件。

##### 	package.json

​	//项目配置文件 =>包含项目名，版本号，scripts，依赖包等。

##### 	README.md

​	//项目说明文档。

##### 	vue.config.js

​	//vue-cli配制文件。

##### 	yarn.lock	

​	//yarn锁文件，由yarn自动生成的，锁定安装版本。

## 组件化

​	一个页面可以拆分为一个个组件，每个组件有着组件自己独立的结构，样式，行为。

​	好处：便于维护，利于复用 => 提升开发效率。

#### 组件分类

​	普通组件

​	根组件：整个应有最上层的组件，包裹所有普通小组件。

#### App.vue文件（单文件组件）

​	三部分组成：1.template 结构

​							2.script js逻辑

​							3.style：样式 （可支持less，需要装包）

## 普通组件的注册使用

#### 注册组件的两种方式

​	1.局部注册：只能在注册的组件内使用。

​		创建.vue文件=>在使用的组件内导入并注册

​	2.全局注册：所有组件内都能使用。

​		创建.vue文件=>main.js中进行全局注册

## 组件三部分注意点

#### 结构

​	只能有一个根元素。

#### 样式

​	全局样式（默认）：影响所有组件。

​	局部样式：scoped下样式，只作用于当前组件。

#### 逻辑

​	el根实例独有，data是一个函数其他配置项一致。

## 组件样式冲突scoped

​	默认情况：写在组件中的样式会全局生效=>因此很容易造成多个组件之间的样式冲突问题。

#### 全局样式

​	默认组件中的样式会作用到全局。

#### 局部样式

​	可以给组件加上scoped属性，可以让样式只作用于当前组件。

​	原理：给当前组件模板内的所有元素都添加上一个自定义属性，data-v-hash值 ，利用哈希值可以区分不同组件。

​				css选择器后边，被自动处理，添加上了属性选择器。

## data

​	一个组件的data选项必须是一个函数。=>保证每个组件实例，维护独立的一份数据对象。

​	每次创建新的组件实例都会新执行一次data函数，得到一个新对象。

#### 语法

~~~js
data(){
	return {
		count:100
	}
},
~~~

## 组件通信

​	组件通信值得是组件与组件之间的数据传递。

​	组件的数据是独立的，无法直接访问其他组件的数据。

​	想用其他组件的数据=>组件通信。

#### 组件关系

​	1.父子关系

​	2.非父子关系

#### 组件通信解决方案

​	1.父子关系

​		props和$emit

​		父组件通过props将数据传递给子组件。

​		子组件通过$emit通知父组件修改更新。

​	2.非父子关系

​		provide&inject和eventbus

​	3.通用解决方案:

​		Vuex

## prop

​	组件上注册的一些自定义属性。

#### 作用

​	向子组件传递数据。

#### 流程

​	1.在父组件中提供一些数据。

​	2.给当前组件以添加属性的方式传值。

​	3.子组件内部用prop进行接受。

​	4.渲染界面。

#### 特点

​	可以传递任意数量的prop

​	可以传递任意类型的prop

## props校验

​	为组件的prop指定验证要求，不符合要求，控制台就会有错误提示=>帮助开发者，快速发现错误。

#### 语法

​	1.类型校验

~~~js
props:{
	校验的属性名:类型
},
~~~

​	2.非空校验

​	3.默认值

​	4.自定义校验

~~~js
props:{
	校验的属性名:{
		type: 类型,
		required: true,  //是否必填
		default: 默认值,  //默认值
		validator(value){   //自定义校验逻辑
			return 是否通过校验
		}
	}
}
~~~

## prop&data区别

#### 共同点

​	都可以给组件提供数据。

#### 区别

​	data的数据是自己的=>随便改。

​	prop的数据是外部的=>不能随便该，要遵循单向数据流。

#### 单向数据流

​	父级prop的数据更新，会向下流动，影响子组件。这个数据流动是单向的。

## v-model原理

​	v-model的本质是一个语法糖。

​	例如应用在输入框上，就是value属性和input属性的合写。

#### 作用

​	提供数据的双向绑定。

​	1.数据变化=>视图自动更新。 :value

​	2.视图变化=>数据自动更新。 @input

#### 注意

​	$event用于在模板中，获取事件的形参。

## 表单类组件封装

#### 核心步骤

​	1.父传子：数据应该是父组件props传递过来的，v-model拆解绑定数据。

​	2.子传父：监听输入，子传父传值给父组件修改。

##### 子组件封装

~~~vue
<select :value="cityId" @change="handleChange">...</select>
props:{
    city:String
},
methods:{
    handleChange(e){
        this.$emit('事件名',e.target.value)
    }
}
~~~

##### 父组件使用

~~~vue
<BaseSelect :cityId="selectId" @事件名="selecteId=$event"/>
~~~

#### 代码简化

​	1.子组件中：props通过value接收，事件触发input

​	2.父组件中：v-model给组件直接绑数据。

##### 子组件封装

~~~vue
<select :value="cityId" @change="handleChange">...</select>
props:{
    city:String
},
methods:{
    handleChange(e){
        this.$emit('input',e.target.value)
    }
}
~~~

##### 父组件使用

~~~vue
<BaseSelect v-model="selectId"/>
~~~

## .sync修饰符

​	可以实现子组件与父组件数据的双向绑定，简化代码。

#### 特点

​	prop属性名，可以自定义，非固定value。

#### 场景

​	封装弹框类的基础组件，visible属性true显示，false 隐藏

##### 	父组件使用

~~~js
<BaseDialog :visible.sync="isShow" />
------------------------------------------------------
<BaseDialog 
	:visible="isShow"
	@update:visible="isShow=$event"
/>
~~~

​	本质：就是:属性名和@updat：属性名合写。

##### 	子组件封装

~~~js
props:{
	visible:Boolean
},
this.$emit('update:visible',false)
~~~

## ref和$refs

​	利用ref和$refs可以获取dom元素，或组件实例。

#### 获取dom元素

​	1.目标标签添加ref属性

~~~html
<div ref="chartRef">我是渲染的图表</div>
~~~

​	2.恰当时机获取目标标签  通过this.$refs.charRef

~~~js
mounted(){
	console.log(this.$refs.charRef)
},
~~~

#### 获取组件实例

​	1.目标组件 添加ref属性

~~~js
<BaseForm ref="chartRef">我是渲染的图表</BaseForm>
~~~

​	2.恰当时机获取目标组件  通过this.$refs.charRef

~~~js
this.$refs.baseForm.组件方法()
~~~

## $nextTick

​	等Dom更新后，才触发执行此方法里的函数体。

​	用于解决dom异步问题。 

#### 语法

~~~js
this.$nextTick(函数体)
~~~

## 自定义指令

​	自己定义的指令，可以封装一些dom操作，扩展额外功能。

#### 全局注册

~~~vue
Vue.directive('指令名',{
	"inserted"(el){
		//可对el标扩展额外功能
		el.focus()
	}
})
~~~

#### 局部注册

~~~vue
directives:{
	"指令名":{
		inserted(){
			//可对el标扩展额外功能
			el.focus()
		}
	}
}
~~~

#### 使用

~~~html
<input v-指令名 type="text">
~~~

## 自定义指令-指令的值

​	在绑定指令时，可以通过等号的形式为指令绑定具体的参数值。

#### 语法

~~~js
<div v-color="color">我是内容</div>
~~~

​	通过binding.value可以拿到指令值，指令值修改会触发updata函数。

~~~vue
directives:{
	color:{
		inserted(el,binding){
			el.style.color=binding.value
		},
		updata(el,binding){
			el.style,color=binding.value
		}
	}
}
~~~

## 默认插槽

​	让组件内部的一些结构支持自定义。

#### 语法

​	1.组件内需要定制的结构部分，用<slot></slot>占位。

​	2.使用组件时，<MyDialog></MyDialog>标签内部，传入结构替换slot。

​	3.在<slot>标签内防止内容，作为默认显示内容。

## 具名插槽

​	一个组件内有多处结构，需要外部传入标签，进行定制。

#### 语法

​	1.多个slot使用name属性区分名字。

​	2.template配合v-slot:名字来分发对应标签。

​	3.v-slot:可简化成#插槽名。

## 作用域插槽

​	定义slot插槽的同时，是可以传值的。给插槽上可以绑定数据，将来使用组件时可以用。

​	注：不属于插槽分类。

#### 语法

​	1.给slot标签，以添加属性的方式传值。

​	2.所有添加的属性，都会被收集到一个对象中。

​	3.在tempalte中，通过'#插槽名="obj"'接收，默认插槽名为default。

## 单页应用名程序

​	SPA-Single Page Application

​	所有功能在一个html页面上实现。

#### 单页与多页面比较

​	开发分类	实现方式	页面性能	开发效率	用户体验	学习成本	首页加载	SEO

​	单页			一个html	按需更新	高				非常好		高				慢				差

​	多页			多个html	整页更新	中等			一般			中等			快 				优



## 路由

​	是一种映射关系。

​	生活中的路由：设备和ip的映射关系。

​	Vue中路由：路径和组件的映射关系。

## VueRouter

​	修改地址栏路径设，切换显示匹配的组件。

#### 步骤

​	1.下载

~~~js
yarn add vue-router@3.6.5
//233  vue2 下载 VueRouter2.x Vuex2.x
//344  vue3 下载 VueRouter3.x Vuex3.x
~~~

​	2.引入

~~~js
import VueRouter from 'vue-router'
~~~

​	3.安装注册。

~~~js
Vue.use(VueRouter)   //插件初始化
~~~

​	4.创建路由对象。

~~~js
const router = new VueRouter()
~~~

​	5.注入，将路由对象注入到new Vue实例中，建立关联。

~~~js
new Vue({
	render: h=>h(App),
	router
}).$mount('#app')
~~~

#### 核心步骤

​	6.创建需要的组件（views目录），配置路由规则。

~~~js
const router = new VueRouter({
	routes:[
		{path:'路径1',component:组件1},
		{path:'路径2',component:组件2},
	]
})
~~~

​	7.配置导航，配置路由出口（路径匹配的组件显示的位置）。

~~~html
<div class="">
    <a href="#/路径1"></a>
    <a href="#/路径2"></a>
</div>
<div>
    <router-view>组件显示位置</router-view>
</div>
~~~

## 组件分类

​	页面组件和服用组件。

#### 意义

​	分开来更易维护。

#### 页面组件

​	src/views文件

​	页面展示-配合路由用。

#### 复用组件

​	src/components文件

​	展示数据-常用于复合。

## 路由模块封装

​	创建一个router  /index.js文件 

​	将路由创建封装起来。

#### 好处

​	拆分模块，利于维护。

## 声明式导航

​	事项导航高亮效果。

​	vue-router提供了一个全局组件router-link（取代a标签）

#### 语法

~~~html
<a href=""></a>
//等价
<vue-router to=""></vue-router>
~~~

注意：能跳转，配置to属性指定路径（必须）。本质还是a标签，to无需#` `

​			默认提供高亮，可以直接设置高亮样式。

#### 两个类名

	1. router-link-active 模糊匹配  (常用)
	1. router-link-exact-active 精准匹配

#### 自定义高亮类名

~~~js
const router = new VueRouter({
	routes:[...]
	linkActiveClass:"类名1",
	linkExactActiveClass:"类名2",
})
~~~

#### 跳转传参

​	在跳转路由时，进行传值。

​	1.查询参数传参。

~~~js
//传递
to="/path?参数名=值"
//接受
this.$route.query.参数名
~~~

​	2.动态路由传参。

~~~js
//配置动态路由
const router = new VueRouter({
    routes:[
        ...,
        {
        	path:'/search/:words'.
        	component:Search
        }
    ]
})
//配置导航链接
to="/path/参数值"
//获取动态路由参数
this.$route.params.参数名
//获取查询参数
this.$route.query.参数名
~~~

​	3.两种传参方式的区别

​		第一种个适合传多个参数，第二种简洁优雅，传单个参数时比较方便。

​	4.注意：/search/:words表示，必须要传参数。如果不传参数，也希望匹配，可以在words后面加个？ 

## Vue路由-重定向

​	重定向->匹配path后，强制跳转path路径。

#### 语法

~~~js
{
	path:匹配路径,
	redirect:重定向到的路径
}
~~~

## Vue路由-404

​	当路径找不到匹配时，给个提示页面。

#### 语法

~~~vue
//放在路径最后面
{path:"*",component:任意路径}
~~~

## Vue路由-模式设置

​	hash路由（默认模式）

​	history路由（常用）

#### 语法

~~~js
const router = new VueRouter({
	routs,
	mode:"history"
})
~~~

## 编程式导航

​	点击按钮完成跳转。

#### path路径跳转

~~~js
this.$router.push('路由路径?参数名=参数值')
//动态路由传参
this.$router.path('路由路径/${this.inpValue}')
this.$router.push({
	path:'路由路径'
    query:{
    	参数名1:'参数值1'，
    	参数名2:'参数值2'
	}
})
~~~

​	query传参

#### name命名路由跳转

​	适用于path路径长的场景。

~~~js
//查询参数
this.$router.push({
	name:'路由名'
    query:{
    	参数名1:'参数值1'，
    	参数名2:'参数值2'
	}
})
{name:'路由名',path:'/path/xxx',component:XXX}，
//动态路由传参
this.$router.push({
	name:'路由名'
    params:{
    	参数名1:'参数值1'，
    	参数名2:'参数值2'
	}
})
~~~

## 组件缓存

​	路由跳转后，组件被销毁了，返回回来的组件又被重建了，所以数据重新被加载了。

#### 解决方案

​	利用keep-alive将组件缓存下来。

#### keep-alive

​	是Vue的内置组件，当他包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。

​	keep-alive是一个抽象组件：它自身不会渲染成一个DOM元素，也不会出现在父组件链中。

#### keep-alive的优点

​	在组件切换过程中把切换出去的组件保留在内存中，防止重复渲染DOM。

​	以减少加载时间及性能消耗，提高用户体验性。

#### keep-alive的三个属性

​	1.include：组件名数组，只有匹配的组件会被缓存。

​	2.exclude：组件名数组，任何匹配的组件都不会被缓存。

​	3.max：最多可以缓存多少组件实例。

## 自定义创建项目

​	基于VueCli自定义创建项目架子。

#### 步骤

​	1.安装脚手架。

​	2.创建项目。

​	3.选择自定义。

​	4.Babel/Router/CSS/Linter

​	5.Vue2.x

​	6.VueRouter hash模式

​	7.CSS预处理 less

​	8.ESlint：Standard&Lint on Save

​	9.配置文件 dedicated config files

## ESlint代码规范

​	一套写代码的约定规则。例如："赋值符号的左右是否需要空格".....

#### 两种解决方案

​	1.手动修正

​		根据错误提示一步一步修正。

​		根据错误代码去[ESlint规则表]中查找具体含义。

​	2.自动修正

​		通过ESlint插件。

## Vuex

​	vuex是一个vue的状态管理工具，状态就是数据。

​	帮助我们管理vue通用的数据（多组件共享的数据）。

#### 场景

​	1.某个状态在很多个组件来使用（个人信息）

​	2.多个组件共同维护一份数据（购物车）

#### 优势

​	1.共同维护一份数据，数据集中化管理。

​	2.响应式变化。

​	3.操作简洁（Vuex提供了一些辅助函数）

## 构建Vuex环境

#### 步骤

​	1.安装vuex。

​		yarn add vuex@3

​	2.新建vuex模块文件。

​		新建store/index.js专门存放vuex

​	3.创建仓库。

​		Vue.use(Vuex)

​		创建仓库new Vuex.Store()

​	4.main.js导入挂载。

​		在main.js中导入挂载到Vue实例上。

## state状态

#### 提供数据

​	State提供唯一的公共数据源，所有共享的数据都要统一放到Store中的State中存储。

​	在state对象中可以添加我们要共享的数据。

~~~js
//创建仓库
const store = new Vuex.Stroe({
	//state状态，及数据，类似于vue组件中的data
	//区别:
	//1.data是组件自己的数据。
	//2.state是所有组件共享的数据。
	state:{
		count:101
	}
})
~~~

#### 使用数据

​	1.通过store直接访问

~~~~js
//获取store
//1.this.$store
//2.import导入store
//模块中
{{ $store.state.xxx }}
//组件逻辑中
this.$store.state.xxx
//JS逻辑中
store.state.xxx
~~~~

​	2.通过辅助函数

​	mapState是个辅助函数，帮助我们把store中的数据自动映射到组件的计算属性中。

~~~js
//导入mapState
import{mapState}from'vuex'
//数组方式引入state
mapState(['count'])
//展开运算符映射
computed：{
    ...mapState(['count'])
}
~~~

## mutations

​	只能通过mutations的操作来修改state数据。

#### 流程

​	1.定义mutatios对象，对象中存放修改state的方法。

~~~js
const store = new Vuex.Store({
	state:{
		count:0
	},
	mutations:{
		addCount(state){
			state.count+=1
		}
	}
})
~~~

​	2.组件中提交调用mutations

~~~js
this.$store.commit('addCount')
~~~

####  传参语法

​	1.提供带参的函数(带参数-提交载荷payload)

~~~
const store = new Vuex.Store({
	state:{
		count:0
	},
	mutations:{
		addCount(state,n){
			state.count+=1
		}
	}
})
~~~

​	2.组件中提交调用mutations

~~~js
this.$store.commit('xxx',参数)
~~~

​	注意：参数只能有一个，若要传递多个参数，可以封装为一个对象。

## mapMutations

​	mapMutations和mapState很相似，他是把位于mutations的方法提取出来，映射到组件methods中。

#### 语法

~~~js
import {mapMutations} from 'vuex'
methods:{
	...mapMutations(['subCount'])
    //...为展开运算符
}
this.subCount(10)//调用
~~~

## actions

​	mutations必须是同步的(便于检测数据变化，记录调试)

#### 语法

​	1.提供action方法

~~~js
actions:{
	setAsyncCount(context,num){
        //模拟异步操作 以后大部分是发送请求
		setTimeout(()=>{
			context.commit('changeCount',num)
		},1000)
	}
}
~~~

​	2.页面中调用dispatch调用

~~~js
this.$store.dispatch('setAsyncCount',200)
~~~

## mapActions

​	他是把位于actions的方法提取出来，映射到组件methods中。

#### 语法

~~~js
import {mapActions} from 'vuex'
methods:{
	...mapActions(['setAsyncCount'])
    //...为展开运算符
}
this.setAsyncCount(10)//调用
~~~

## getters

​	类似计算属性。

​	除了state之外，有时我们还需要从state中派生出一些状态，这些状态是依赖state的，此时会用到getters。

#### 语法

​	1.定义getters

~~~js
getters:{
	//注意:
	//getters函数的第一个参数是state
	//getters函数必须要哟返回值
	filterlist(state){
		return state.list.filter(item=>item>5)
	}
}
~~~

​	2.访问getters

~~~js
//1.通过store访问getters
{{this.store.getters.filter}}
//2.通过辅助函数mapGetters映射
computed:{
    ...mapGetters(['filterlist'])
}
{{filterlist}}
~~~

## 模块module

​	由于Vuex使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store对象就有可能变得相当臃肿。（当项目变得越来越大的时候，Vuex会变得愈来愈额难以维护）

#### 模块拆分

​	在store下新建一个modules模块，并在里面创建所需的模块。

~~~js
modules：{
	//将所需的文件挂载
}
~~~

#### 访问模块中的state、

​	尽管已经分了模块了，但子模块的状态，还是会挂到根级别的state中，属性名就是模块名。

#### 使用模块中的数据

​	1.直接通过模块名访问$store.state.模块名.xxx。

​	2.通过mapState映射。

​		默认根级别的映射

~~~js
mapState(['xxx'])
~~~

​		子模块的映射

~~~js
mapState('模块名',['xxx'])  //需要开启命名空间
~~~

​	注：开启命名空间就是在导入的时候添加

~~~js
namespaced:true
~~~

#### 使用模块中getters的数据

​	1.直接通过模块名访问

~~~js
$store.getters['模块名/xxx']
~~~

​	2.通过mapGetters映射

~~~js
//默认根级别的映射
mapGetters(['xxx'])
//子模块的映射
mapGetters('模块名',['xxx']) //需要开启命名空间
~~~

#### 使用模块中mutation的数据

​	1.直接通过store调用

~~~
$store.commit('模块名/xxx',额外参数)
~~~

​	2.通过mapMutations映射

~~~js
//默认根级别的映射
mapMutations(['xxx'])
//子模块的映射
mapMutations('模块名',['xxx']) //需要开启命名空间
~~~

#### 使用模块中actions的数据

​	1.直接通过store调用

~~~
$store.dispatch('模块名/xxx',额外参数)
~~~

​	2.通过mapMutations映射

~~~js
//默认根级别的映射
mapActions(['xxx'])
//子模块的映射
mapActions('模块名',['xxx']) //需要开启命名空间
~~~

## vant组件库

​	第三方Vue组件库vant-ui

#### 使用方法

​	通过vant官方网站查询。

## 移动端适配

​	基于postcss插件，实现项目vw适配。

#### 流程

​	1.安装插件

~~~js
yarn add postcss-px-to-viewport@1.1.1 -D
~~~

​	2.根据根目录新建postcss.config.js文件，填入配置

~~~js
module.exports={
	plugins:{
		'postcss-px-to-viewport':{
			//标准屏宽度
			viewportWidth:375
		}
	}
}
~~~

## Vue3

#### 相较于Vue2的好处

​	1.更容易维护。

​	2.更快的速度。

​	3.更小的体积。

​	4.更优的数据响应式。

## 搭建Vue3项目

​	create-vue是官方新的脚手架工具，底层切换到了vite（下一代构建工具），为开发提供急速响应。

#### 流程

​	1.安装16.0及以上版本的Node.js

​	2.创建一个Vue应用

~~~js
npm init vue@latest
//这一指令将会安装并执行create-vue
~~~

​	3.启动文件

~~~
npm run dev
~~~



## 项目中关键文件

#### vite.config.js 

​	项目的配置文件 基于vite的配置。

#### package.json

​	项目包文件 核心依赖变成了Vue3.x和vite

#### main.js

​	入口文件 createApp函数创建应用实例

#### app.vue

​	根组件 SFC单文件script-template-style

​	变化：脚本script和模板template顺序调整，模板template不在要求唯一根元素，脚本script添加setup标识支持组合式api

#### index.html

​	单页入口 提供id为app提供挂载点

## 组合式API

#### setup选项

​		setup钩子函数，运行在beforecreate之前。

​		setup函数中获取不到this。

​		setup函数中可以写数据，函数，但是如果要使用必须return。

​		语法糖写法：将setup写在script标签中。可以简化代码，无需return。

#### reactive()

​	接受对象数据类型的参数传入并返回一个响应式对象。

~~~html
<script setup>
//导入
import{reactive} from 'vue'
//执行函数 传入参数 变量接受
const state = reactive(对象类型数据)
</script>
~~~

​	1.从vue包中导入

​	2.执行函数并传入类型为对象的初始值，并使用变量接受返回值。

#### ref()

​	接受简单类型或者对象类型的数据传入并返回一个响应式的对象。

~~~html
<script setup>
//导入
import{ref} from 'vue'
//执行函数 传入参数 变量接受
const state = ref(简单数据类型或者复杂类型数据)
</script>
~~~

​	本质：是在原有传入数据的基础上，外层包了一层对象，包成了复杂数据类型。

​	底层：包成复杂类型后，再借助reactive实现响应式。

​	注意：访问数据 需要通过 .value访问

#### computed

​	计算属性基本思想与vue2的完全一致，组合式API下的计算属性只是修改了写法。

~~~html
<script setup>
//导入
import{computed} from 'vue'
//执行函数 传入参数 变量接受
const computedState = computed(()=>{
	return 基于响应式数据做计算之后的值
})
</script>
~~~

#### watch

​	监听一个或多个数据的变化，数据变化式执行回调函数。

~~~js
//1.immediate(立即执行)
//在侦听器创建时立即触发回调，响应式数据变化之后继续执行回调。
//2.deep(深度监听)
~~~

​	1.监听单个数据

~~~html
<script setup>
//导入
import{watch,ref} from 'vue'
//调用watch监听变化
watch(ref对象,(newValue,oldValue)=>{
	console.log('count发生了变化，老值为${oldValue}，最新值为${newValue}')
},{
    //若简单类型 可以直接监视
	immediate:true,
    //若为复杂类型 得加上deep
	deep：true
})
</script>
~~~

​	2.精确监听对象的莫个属性

~~~html
watch(()=>userInfo.value.age,(newValue,oldValue)=>{
	console.log('count发生了变化，老值为${oldValue}，最新值为${newValue}')	
})
~~~

#### 声明周期函数

​	1.setup

​	2.onBeforeMount

​	3.onMounted

​	4.onBeforeUpdate

​	5.onUpdated

​	6.onBeforeUnmount

​	7.onUnmounted

#### 父子通信

​	父传子

​	1.父组件给子组件绑定属性。

​	2.子组件内部通过props选项接受。

​	注意：需要借助"编译器宏"函数接受子组件传递的数据。---  defineProps

​	子传父

​	1.父组件中给子组件标签通过@绑定事件。

​	2.子组件内部通过emit方法触发事件。---- defineEmits

#### provid和inject

​	顶级组件向任意的底层组件传递数据和方法，实现跨层组件通信。

​	跨层级传递普通数据

~~~js
//顶层组件提供数据
provide('key',顶层组件中的数据)
//底层组件获取数据
const message = inject('key')
~~~

​	跨层级传递响应式数据

~~~
//顶层组件提供数据
provide('key',ref对象)
//底层组件获取数据
const message = inject('key')
~~~

​	跨层级传递方法

~~~js
const setCount=()=>{
	//方法
}
//顶层组件提供数据
provide('key',setCount)
//底层组件获取数据
const message = inject('key')
~~~

​	底层通知顶层

~~~js
//顶层提供一个方法
provide('state-fn',changeState)
//底层进行调用
inject('state-fn')->changeState()
~~~



## 模板引用

​	通过ref标识获取真实的dom对象或者组件实例对象。

#### 使用方法

~~~html
<script setup>
	import{ref} from 'vue'
	const h1Ref=ref(null)
</script>
<template>
	<h1 ref="h1Ref">我是dom标签</h1>
</template>
~~~

​	1.调用ref函数生成一个ref对象。

​	2.通过ref标识绑定ref对象到标签。

​	默认情况下在<script setup>语法糖下组件内部的属性和方法是不开放给组件访问的。

​	可以通过defineExpose编译宏指定哪些属性和方法允许访问。

## defineOptions

​	主要用于定义Options API选项。

​	可以用defineOptions定义任意的选项，props,emits,expose,slots除外（因为这些可以使用definexxx来做到）。

## 	defineModel

​	用于接受双向绑定的数据，实现双向绑定。

## Pinia

​	是vue最新的状态管理工具，是Vuex的替代品。

#### 优点 

​	1.提供更加简单的API。

​	2.提供复合，组合式风格的API。

​	3.去掉modules的概念，每个store都是一个独立的模块。

​	4.配合TypeScript更加友好，提供可靠的类型推断。

#### 添加流程

​	1.使用Vite创建一个空的Vue3项目

~~~
npm create vue@latest
~~~

​	2.按照官方文档安装pinia到项目中

#### 基本语法

~~~js
import { defineStore } from 'pinia'
// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useAlertsStore = defineStore('alerts', {
  // 其他配置...
})
~~~

## action异步实现

​	异步action函数的写法和组件中获取异步数据的写法完全一致。

## Pinia持久化插件

#### 步骤

​	1.安装插件

~~~
npm i pinia-plugin-peristedstate
~~~

​	2.main.js使用

~~~
import persist from 'pinia-plugin-peristedstate'
...
app.use(createPinia().use(persist))
~~~

​	3.store仓库中，persist：true开启
