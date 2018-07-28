//测试基本包装类型 有Boolean，Number和String
//为了能像对象一样，让基本类型调用方法，js提供了基本包装类型
//在对基本类型进行对象操作时，如调用toString方法，在后台会自动创建其包装类型对象
//但在调用方法后便会将该实例销毁，下面测试一下
var str="Hello word";
str.color="red";
console.info(str.color);//undefine

//Object的构造函数能像工厂模式一样，根据传入的基本类型new出对应类型的包装对象
var obj=new Object(true);
console.info(obj instanceof Boolean);//true

//对于基本包装类型，直接调用Number（）是转型，而new Number()则是创建实例
var value="123";
var value2=Number(value);
var obj=new Number(value);
console.info("直接调用："+typeof  value2);//number
console.info("new出来："+typeof obj);//object



//Number()实例提供了三个格式化的方法，分别为 toFixed(),toExponential(),toPrecision(),其会返回格式化后的值
var num1=88.004;
var num2=88.005;
console.info("num1Fixed:"+num1.toFixed(2));//88.00
console.info("num2Fixed:"+num2.toFixed(2));//IE 88.01 Firefox 88.00
console.info("num1toEx"+num1.toExponential(1));//8.8e+1
var num3=99;
console.info(num3.toPrecision(1));//1e+2
console.info(num3.toPrecision(2));//99
console.info(num3.toPrecision(3));//99.0




























































