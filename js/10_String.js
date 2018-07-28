
//String()包装类型
//1、length在进行统计的时候，即使包含含多个字节的字符，其也算一个字符，比如中文在utf-8中4个字节编码，但统计中算一个字符
var str1="Hello word";
var str2="我已经准备好了，请开始吧";
console.info("str1的lendth："+str1.length);
console.info("str2 length:"+str2.length);

console.info("index:"+str1.charAt(4));//o
console.info("index:"+str1.charCodeAt(4));//111
console.info(str1[4]);//o

//2、concat(),用于拼接字符串，与“+”作用一样
// slice(),返回子字符串两个参数分别是开始和结束的位置，参数为负值时，进行字符长度加负值处理
// substr(),返回子字符串，第一个参数为开始位置，第二个参数为子字符串的长度，
// 第一个参数为负值时，进行字符串长度加负值处理，第二个参数为负值时，直接转为0
// substring()，返回子字符串，两个参数分别是开始和结束的位置，为负值时直接转为0
var str5="hello word";
console.info("str:"+str5);
console.info("slice(3):"+str5.slice(3));//lo word
console.info("slice(3,7):"+str5.slice(3,7));//lo w
console.info("slice(-3):"+str5.slice(-3));//ord
console.info("slice(3,-4):"+str5.slice(3,-4));//lo

console.info("substring(3):"+str5.substring(3));//lo word
console.info("substring(3,7):"+str5.substring(3,7));//lo w
console.info("substring(-3):"+str5.substring(-3));//hello word
console.info("substring(3,-4):"+str5.substring(3,-4));//hel

console.info("substr(3):"+str5.substr(3));//lo word
console.info("substr(3,7):"+str5.substr(3,7));//lo word
console.info("substr(-3):"+str5.substr(-3));//ord
console.info("substr(3,-4):"+str5.substr(3,-4));//""

//3、字符串位置方法indexOf()和lastIndexOf()其中indexOf从前往后开始搜索，lastIndexOf则从后往前开始搜索
//都接收两个参数，第一个参数为要搜索的字符串，第二个参数为搜索开始的位置
var str8="stearch string";
console.info("indexOf(st):"+str8.indexOf("st"));//0
console.info("indexOf(st,3):"+str8.indexOf("st",3));//8
console.info("lastIndexOf(st):"+str8.lastIndexOf("st"));//8
console.info("lastIndexOf(st,5):"+str8.lastIndexOf("st",5));//0

//把字符中所有的匹配项搜索出来
var str9="hello word ,you look beautiful";
var pos=str9.indexOf("o");
var positions=[];
while (pos>-1){
    positions.push(pos);
    pos=str9.indexOf("o",pos+1);
}
console.info("positions:"+positions.toString());//4,7,13,17,18

// 4、字符串大小写转换 toUpperCase(),toLocaleUpperCase()转为大写
//tpLowerCase(),toLocaleLowerCase() 转为小写
//其中toLocaleUpperCase()和toLocaleLowerCase()是针对特定地区的实现，少数语言会为Unicode大小写运用特殊的规则

var my="hello word";
var upperStr=my.toUpperCase();
var lowerStr=upperStr.toLowerCase();
console.info("大写："+upperStr);
console.info("小写："+lowerStr);















