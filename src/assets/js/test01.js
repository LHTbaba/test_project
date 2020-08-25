// 单例模式实现
// 使用构造函数的默认属性
// function A(name){
//   // 如果已存在对应的实例
//   if(typeof A.instance === 'object'){
//     return A.instance
//   }
//   this.name = name
//   A.instance =this
//   return this
// }
// var a1 = new A()
// var a2= new A()
// console.log(a1 === a2) // true

// 借助闭包
// var Head = (function () {
//   var HeadClass = function () {} // 声明HeadClass对象，无法在外部直接调用
//   var instance // 声明一个instance对象
//   return function () {
//     if (instance) { // 如果已存在 则返回instance
//       return instance
//     }
//     instance = new HeadClass() // 如果不存在 则new一个
//     return instance
//   }
// })()
// var a = Head()
// var b = new Head()
// console.log(a===b) // true
// var a = HeadClass(); // 报错,HeadClass is not defined

// 立即执行函数
var A
(function(name){
  var instance;
  A = function(name){
    if(instance){
      return instance
    }
    //赋值给私有变量
    instance = this
    //自身属性
    this.name = name
  }
}())
A.prototype.pro1 = "from protptype1"
var a1 = new A('a1')
A.prototype.pro2 = "from protptype2" 
var a2 = new A('a2')

console.log(a1.name)//a1
console.log(a1.pro1)//from protptype1
console.log(a1.pro2)//from protptype2
console.log(a2.pro1)//from protptype1
console.log(a2.pro2)//from protptype2
console.log(a2.name)