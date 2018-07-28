//创造函数的三种方式
function add(a,b) {
    return a+b;
}

var add2=function (a,b) {
    return a+b;
}

var add3=new Function("a","b","return a+b");

alert(add3(12,45));


//函数内部的属性，有this和arguments，
//其中arguments是一个类数组的对象，储存传入函数的所有参数
//arguments有一个属性callee，其为一个指针，指向拥有这个arguments对象的函数
//下面通过一个迭代函数来对这个函数进行说明

function factorial(num) {
    if(num<=1){
        return num;
    }else {
        return num*factorial(num-1);
    }
}
alert("4! : "+factorial(4));
//以上这个函数不能修改函数名，结果会出错
var newName=factorial;
factorial=function(){
    return 0;
}
console.info("新方法："+newName(4));//0

//但使用callee就不会这样
function newFactorial(num ){
    if(num<=1){
        return num;
    }else {
        return num*arguments.callee(num-1);
    }
}
var newName2=newFactorial;
newFactorial=function () {
    return 0;
}

console.info("新方法2："+newName2(4));//24


//this对象指向当前的函数的执行环境

function sayName() {
    alert("Hello ! "+this.name);
}
var name="window";
var obj={name:"obj"};
obj.sayName=sayName;
sayName();
obj.sayName();


//3、函数的另一个属性caller,该属性保存着调用当前函数的函数的要引用
function outer() {
    inner();
}
function inner() {
    alert(inner.caller);
//    这里为了实现更松散的耦合,可改为
    alert(arguments.callee.caller);
}
outer();
// alert("在外部调用："+inner.caller);不可在外部调用caller

//函数供外部调用的外部属性有length和protype，
//length是储存着函数的参数的是长度，即需要传入几个参数
function zero() {
    alert("不传参");
}
function one(one) {
    alert("传入"+one+"个参数");
}
function two(one,two) {
    alert("传入"+two+"个参数");
}
console.info("长度0："+zero.length);
console.info("长度1："+one.length);
console.info("长度2："+two.length);


//protype有两个非继承的方法，call()和apply(),这两者除了传入的参数类型不一，其它的一样
//它们的第一个参数都是指定函数的执行环境，apply的第二个参数是参数，arguments对象或数组
//call方法的参数传递是逐一传递，必须一个一个地传

function sum(a,b) {
    return a+b;
}
function callSum(a,b,c) {
    return sum.call(this,a,b)+c;
}
function applySum(a,b,c) {
    return sum.apply(this,arguments)+c;
//    或者return sum.apply(this,[a,b])+c;
}
console.info("callSum:"+callSum(1,2,3));//6
console.info("applySum:"+applySum(1,2,3));//6

//call和apply的强大之处在于扩充函数的作用域

function  sayColor() {
    console.info("this.color:"+this.color);
}
color="red";
var colorObj={color:"blue"};
sayColor.call(this);//red
sayColor.apply(window);//red
sayColor.call(colorObj);//blue
//在上面的调用中，对象和函数解耦，不使用call或apply时，
// 要在函数中调用对象必须传入对象，使用call后直接就可以调用

//ECMA5的另一个方法是bind，它创建一个函数的实例，其this值会被绑定给一个对象
var myColor={color:"yello"};
var newSayColor=sayColor.bind(myColor);
newSayColor();//yello
sayColor();//red























































