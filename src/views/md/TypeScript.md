## TypeScript

​	TypeScript 是 JavaScript 的一个超集，支持 ECMAScript 6 标准。TypeScript 由微软开发的自由和开源的编程语言。TypeScript 设计目标是开发大型应用，它可以编译成纯 JavaScript，编译出来的 JavaScript 可以运行在任何浏览器上。

#### 静态与动态编程语言

​	从编程语言的动静来区分的化，TypeScript属于静态编程语言，JS属于动态编程语言。

​	区别在于：动态编程语言等到执行代码的时候才开始做类型检查，而静态编程语言会在编译器就执行类型形检查。

## 安装TS工具包

#### 安装命令

~~~cmd
npm i -g typescript
~~~

## 运行TS代码

​	要注意，由ts编译的js文件时，代码中便不具有类型信息了。

#### 流程

~~~cmd
//1.创建.ts文件
//2.将ts文件编译为js
tsc 01.ts
//3.执行js文件
node 01.js
~~~

## 简化运行ts的步骤

​	每次修改代码后，都要重复执行两次命令，太繁琐。

#### 方式

​	使用ts-node包，在node.js下直接执行JS代码。

#### 安装

~~~cmd
npm i -g ts-node
~~~

#### 使用方式

~~~cmd
ts-node 01.ts
~~~

## TS常用类型

#### 类型注解

~~~ts
let age : number = 18
~~~

代码中的:number就是类型注解，为变量添加类型约束。

#### 常用类型概述

1.JS已有类型：原始类型：number string boolean null undefined symbol

​			   对象类型：object

2.TS新增类型：联合类型，自定义类型，接口，元组，字面量类型，枚举，void，any等。

#### 原始类型

~~~ts
let age : number = 18
let myname : string = "djh"
let loading : boolean = true 
let a : null = null
let b : undefined =undefined 
let s : symbol = Symbol()
~~~

#### 数组类型

基本写法

~~~ts
let numbers : number[] = [1,2,3]
let strings : Array<string> = ['a','b','c']
~~~

要求数组中有多种不同类型的元素

~~~ts
let arr: (number|string)[] = [1,'a',2,'b']
~~~

| (竖线)在ts中叫做联合类型。

#### 自定义类型

type 作为关键字来创建类型别名

~~~ts
type CustArray = (number|string)
~~~

#### 函数类型

1.单独指定参数和返回值的类型

~~~ts
function add(num1: number,num2: number): number {
	return num1+num2
}
const add = (num1: number,num2: number): number => {
    return num1+num2
}
~~~

2.同时指定参数和返回值的类型

~~~ts
const add : (num1: number,num2: number) => number = (num1,num2) =>  {
    return num1+num2
}
~~~

3.如果函数没返回值，应该为void

4.在使用函数实现某个功能的时候，参数可传可不传。这种情况下就要用到可选参数了。

~~~ts
function mySlice(start?: number,end? :number ): void {
	console.log(start,end)
}
~~~

注意：可选参数只能在参数列表的最后。

#### 对象类型

js中的对象是由属性和方法构成的。

第一个大括号内为属性和方法的类型，第二个大括号为对象内容。

~~~ts
let person: {
	name:string
	age:number
	sayHi():void
    sayGreet: () => void
} = {
	name:'Djh',
	age:20,
	sayHi(){
		console.log("HI!")
	}
    sayGreet: () => {
        console.log("Greet!")
    }
}
~~~

对象的属性也是可选的，也可以用？来标注。

#### 接口类型

当一个对象呗多次使用使，使用接口类型，以此提高代码的复用性。

~~~ts
interface IPerson {
	name:string
	age:number
	sayHi:()=>void
}
let person: IPerson = {
	name:'Djh',
	age:20,
	sayHi(){
		console.log("HI!")
	}
}
~~~

解释 1.使用interface关键字来声明接口。

​	 2.接口名称，可以是任意合法的变量名称。

​	 3.声明接口后，直接使用接口名称作为变量的类型。

​	 4.因为每一行只有一个属性类型，因此，属性类型后没有(;)

对比接口与自定义类型

相同点：都可以给对象指定类型

不同点：接口只能为对象指定类型。类型别名，不仅可以为对象指定类型，实际上可以为任意类型指定别名

#### 接口继承

如果两个接口之间存在相同的属性或方法，看可以将公共的属性抽离出来，通过继承来实现复用。

~~~ts
interface Point2D {x:number; y:number}
interface Point3D extends Point2D { z:number }
~~~

1.使用extends关键字实现接口继承

2.继承后，Point3D就有了Point2D的所有属性和方法

#### 元组类型

元组类型是另一种类型的数组，它确切的知道有多少个元素。

~~~ts
let position: [number,number] = [1,2]
~~~

#### 类型推论

在TS中，某些没有明确指出类型的地方，TS的类型推论机制会帮助提供类型。

换句话说：由于类型推论的存在，这些地方，类型注释可以忽略不写。

发生类型推论的两种常见场景：1声明变量并初始化时 2.决定函数返回值时

#### 类型断言

有时候你会比TS更加明确一个值的类型，此时，可以用类型断言来指定更具体的类型。

~~~ts
const aLink = document.getElementById('link') as HTMLAnchorElement
~~~

1.使用as关键字实现类型断言

2.关键字as后面的类型是一个更加具体的类型

3.通过该操作aLink的类型变得更加具体，这样就可以访问a标签特有的属性或方法

~~~ts
const aLink = <HTMLAnchorElement>document.getElementById('link') 
~~~

该方法不常用 知道即可。

#### 字面量类型

对于用const所修饰的变量名，它的修饰类型变为它的值。

~~~ts
const str = 'hello ts'
//str的类型为'hello ts'
~~~

使用场景：字面量类型配合联合类型一起使用，用来表示一组明确的可选值列表。

~~~ts
let fx=(zou: 'up'|'down'|'left'|'right')=>{
	console.log(zou)
}
fx('left')
~~~

#### 枚举类型

定义一组命名常量。他描述一个值，该值可以是这些命名常量中的一个。

~~~ts
enum Direction {up,down,letf,right}
let fx=(zou: Direction)=>{
	console.log(zou)
}
fx(Direction.up)
~~~

1.使用enum关键字定义枚举。

2.约定枚举名称，枚举中的值以大写字母开头。

3.枚举最终的多个值之间通过(，)隔开。

4.定义好枚举后，直接使用枚举名称作为类型注释。

注：枚举成员的数值默认从0开始递增。如果枚举成员的值初始化为字符串，则枚举中的每个成员必须有初始值。

#### typeof操作符

在TS中提供了typeof，可以在类型上下文中引用变量或属性的类型（类型查询）。

使用场景：根据已有变量的值，获取该值的类型，来简化类型书写。

~~~ts
let p = {a:1,b:2}
function formatPoint(point: typeof p){}
formatPoint({a:1,b:2})
~~~

## TS高级类型

#### class类

~~~ts
class Person{}
const p = new Person() 
~~~

1.根据TS中的类型推断，可以知道Person类的实例对象p的类型是Person

2.TS中的class，不仅提供了class的语法功能，也作为一种类型存在。

##### 封装

构造函数：construct做为构造函数关键字。

1.成员需要初始化，使用this关键字访问成员。

2.需要为构造函数指定类型注解，否则会被隐式推断为any。

~~~ts
class Person{
	age:number
	gender: string
	construct(age:number,gender:string){
		this.age=age
		this.gender=gender
	}
}
~~~

##### 继承

~~~c++
class Animal{
	speak():void{}
}
class Cat extends Animal {
}
~~~

##### 多态

~~~ts
class Animal{
	speak():void{}
}
class Cat extends Animal {
}
class Dog extends Animal {
}
const dog:Animal = new Dog('k')
const cat:Animal = new Cat('Tom')
~~~

##### 抽象类

~~~ts
abstract class Animal {  //abstract作为关键字
    name:string
    constructor(name:string) {
        this.name=name
    }
    abstract say():void
}
~~~

#### interface接口

​	形状(对一类十五描述他的形状)，函数，类，对象。

##### 对象接口

~~~ts
interface Person {  //定义对象接口
    name:string,
    age:number
}
const obj:Person={  //接口值必须匹配
    name:"DJh",
    age:23
}
console.log(obj)
~~~

##### 可选/只读/任意属性

~~~ts
interface Person {
    readonly name:string,  //只读属性
    age:number,
    career?:string,  //可选属性
    [propName:string]:string|number|undefined  //任意属性
}
~~~

##### 描述函数

~~~ts
interface ISum {
    (x:number,y:number):number
}
const isum:ISum = (x,y)=>{
    return x+y
}
~~~

##### 可索引类型

~~~ts
interface ISum {
    [propName:number]:string
}
const obj:ISum=['1','2','3']
~~~

#### 类与接口的关系

##### 类实现接口

​	描述一类事物的行为。

~~~ts
interface Iwake {
    wakeUp():void
}
class Alarm implements Iwake {  //implements作为实现接口关键字 后面可以写多个接口
    wakeUp(): void {
        
    }
}
~~~

##### 接口继承接

~~~ts
interface Iwake extends Imusic{
    wakeUp():void
}
~~~

#### 泛型

类似于模板。

~~~ts
function print<T>(arg:T):T{
    console.log(arg)
    return arg
}
print<string>('JJJJJ')
~~~

##### 泛型约束函数

~~~ts
interface Iprint<T>{
    (arg:T):T
}
const p11:Iprint<number> = (arg)=>arg
~~~

##### 泛型约束类

~~~ts
class Stack<T> {
    private data : T[]=[]
    push(item:T){
        this.data.push(item)
    }
    pop():T|undefined {
        return this.data.pop()
    }
}
~~~

##### 泛型约束接口

~~~ts
interface ILength{
    length:number 
}
function logLength<T extends ILength>(arg: T): T{
    console.log(arg.length)
    return arg
}
~~~

#### 交叉类型

~~~ts
interface Ibasic{
    name:string,
    age:number,
}
type Student = Ibasic & {
    study_direction:'web'|'java'
}
type Teacher = Ibasic & {
    teachingAge: number 
}
~~~

#### 联合类型

~~~ts
let a:number| string = 1
let b:'a'|'b'='a'
class Coke{
    eat(){}
}
class Duck{
    eat(){}
}
function getEat(per:Coke|Duck){
    per.eat()
}
~~~

#### 索引操作符

~~~ts
interface Person {
    name:string,
    age:number 
}
let k:keyof Person
k= 'age'
console.log(k)
//或者
let k:Person["name"]
~~~

#### 映射类型

~~~ts
type P1=Readonly<Person>  //映射为只读
type P2=Partial<Person>  //映射为可选
type P3=Pick<Person,'age'>  //提取
type P4=Record<'bj'|'sj'>  //构建新类型
~~~

#### 条件类型

~~~ts
Excluede<T,U>  // 从T中剔除U
Extract<T,U>  //从T中提取U
NonNullable<T>  //剔除null和undefined
ReturnType<T>  //获取函数返回值类型
Paramters<T>   //获取函数参数的类型
~~~



