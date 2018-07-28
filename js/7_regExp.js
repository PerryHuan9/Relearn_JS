//字面量式创建正则表达式
//var patt=/pattern/flag  其中pattern部分可以是任何简单或复杂的正则表达式，
// flag标志用来表明正则表达式的行为 有g、i、m三个值，
// g为全局，模式将被运用于所有字符串
//i为忽略大小写
//m多行模式，即在到达一行末尾时还会继续查找下一行

//匹配字符串中所有“at”的实例
var parttern1=/at/g;
var a= parttern1.test("atadknjakdatadnjadjat");
console.info(a);

//匹配bat或cat
var pattern2=/[bc]at/i;
var pattern3=new RegExp("[bc]at","i");
console.info(pattern2.test("ADNJKAskdjBat"));
console.info(pattern3.test("asdjkabBaTsdlm"));

var p=/\[bc\]at/i;
console.info("匹配[bc]at："+p.test("[bc]atadasdjiasd"));
var p2=new RegExp("\\[bc\\]at","i");
console.info("2匹配[bc]at："+p2.test("[bc]atadasdjiasd"));

var re=null,i;
for(i=0;i<3;i++){
    re=/cat/g;
    console.info(i +":"+ re.test("catladjkaa"));
}
for(i=0;i<3;i++){
    re=new RegExp("cat","g");
    console.info(i +":"+ re.test("catladjkaact"));
}
















































