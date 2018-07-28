

//对于普通类型的复制，其会将其值复制过来，复制完成后，两个变量互相独立，互不影响
//对于引用类型的复制，只会将其指针复制，复制完成后，两个变量指向同一个对象，改变一个，另外一个随之改变

var a=888;
var b=a;
console.info("a:",a);
a=100;
console.info(b);
console.info(a);

//对象的复制
var obj=new Object();
obj.name="perry";
var obj2=obj;
obj2.age=22;
console.info(obj2.name);
console.info(obj.age);

//证明对象在函数中使用的是值传递
console.info("parameter++++++++++++++++++++++++++++++++++++++++")
function sayName(obj) {
    obj.name="perry";
    obj=new Object();//此时obj这个新对象已经成为函数内的一个局部变量，函数执行完后被销毁
    obj.name="ximon";
}
var persion=new Object();
sayName(persion);
console.info(persion.name);




























