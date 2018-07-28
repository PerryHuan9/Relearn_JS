

//1、Date.parse()解析时间
var date=new Date(Date.parse("7/19/2018"));
var date2=new Date("7/19/2018 22:52:50");
//以上两个是等价的，第二个内部会调用Date.parse();
console.info("parse:"+date.toString());
console.info("parse2:"+date2.toString());

//2、Date.UTC() 解析时间的另一种方式,设置的时间是0时区的时间
//其参数分别是年份、基于0（1月）的月份、天数、时、分秒、毫秒
//只有前两个参数为必须的，日数不传则为1，其它为0
const d=new Date(Date.UTC(2018,6));
const d2=new Date(Date.UTC(2018,6,19,21,33,55));
console.info("UTC:"+d.toString());
console.info("UTC:"+d2.toString());
console.info(new Date().toString())

var da=new Date(2018,6,19,22,50);
console.info(da.toString());
console.info(new Date(2018,6,19).toString());

//Ecma5 增加了Date.now()用于分析代码
//对于不支持Date.now()的情况，可以使用+号将new Date()转为字符串
console.info("++++++++++++++++++++");
console.info(Date.now());
console.info(+new Date());

//valueOf()方法返回毫秒数
console.info(new Date().getUTCHours());
console.info(new Date().getHours());
console.info(new Date().getTimezoneOffset());
































