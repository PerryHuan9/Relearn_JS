//1、创建数组的方法

//创建一个长度为3的数组
var ary1 = new Array(3);
alert(ary1.length);
//创建具有三个元素的数组
var ary2 = new Array(4, "ab", "你好");
alert(ary2.length);

//不用new创建数组
var ary3 = Array(3);
console.info("3length:" + ary3.length);
var ary4 = Array(23, "ad", "hello word")
console.info("4length:" + ary4.length);

//字面量方法创建数组，其不会调用构造方法，Firefox3及之前版本除外
var ary5 = [1, "ad", "你是谁"];
console.info("5length:" + ary5.length);
var ary6 = [];
//IE8及其以前版本对字面量数组最后一个逗号的解析会多一个元素
var ary7 = ["ada", "ad", 1221,];//不建议这样做，有可能创建3或4个元素的数组


//访问数组中的元素
console.info(ary7[0]);
ary7[4] = "end";
console.info(ary7[3]);
console.info(ary7.toString());
ary7.length = 3;
console.info(ary7[3]);
//在数组末尾添加元素
ary7[ary7.length] = "天有多高，我有多远";
console.info(ary7.toString());


console.info(typeof ary7);
//判别变量是否为数组
console.info(ary7 instanceof Array);
//使用ECMA5新加的方法判别数组，只有IE9+,Firefox4+，Safari 5+，Chrome和Opera 10.5+支持
console.info(Array.isArray(ary7));

//toLocaleString方法可以将Date对象转为当地时间的字符串
ary7.toLocaleString();

//join方法改变数组分隔符

console.info(ary7.join("||"));
console.info(ary7);
console.info(ary7.join("??"));


//2、栈方法操作数组，后进先出
//push方法在数组最后添加任意数量的元素
var count = ary7.push("我是格鲁特", new Date(), true, null, undefined);
console.info("新数组的长度：" + count);
console.info(ary7.toLocaleString());
//弹出最后的元素
var ele = ary7.pop();
console.info(ele);

//3、队列方法，栈方法结合新进先出可实现像队列一样操作数组
//在数组前面插入任意个数的元素
var count2 = ary7.unshift("adnjad", 62312, Array("你好啊", Date()));
console.info("unshift操作后数组的长度：" + count2);
console.info(ary7.toString());
//在数组前面弹出一个元素
var ele2 = ary7.shift();
console.info(ele2);


//4、排序方法：reverse和sort进行重排序
var array = Array(12, 433, 8, 234, 23, 99, 888);
console.info(array.toString());
array.reverse();
console.info(array.toString());
array.sort();//字符串升序
console.info(array.toString());

//自定义排序
function compare(value1, value2) {
    return value1 - value2;
}

function reverseCompare(val1, val2) {
    return val2 - val1;
}

console.info(array.sort(compare));
console.info(array.sort(reverseCompare));


//5、操作方法
//数组的拼接及增加元素 concat
var array3 = [12, Date(), "你好啊", 55, 88, new Object, null, true, undefined, 88, 22];
console.info("array3的长度：" + array3.length);
var newArray = array3.concat(12, 34, [12, "新插入的", "最后一个"]);
console.info("新的开始：" + array3);
console.info(newArray.toString());

//slice 用于剪切数组，返回被剪切的部分，原数组不变
const newA2 = array3.slice(1, 4);//返回index为1-3的元素
console.info("\n" + newA2);
console.info("原数组：" + array3);
const newA3 = array3.slice(3);//返回index为3及之后所有元素
console.info(newA3.toLocaleString());
const newA4 = array3.slice(-3, -1);//返回index为length-3到length-1的元素
console.info(newA4.toLocaleString());

console.info("+++++++++++++++++++++++++++++++++++++++");
//splice用于删除、替换和插入，第一个参数为操作的起始位置，第二个参数为删除的个数
var array8 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const ele23 = array8.splice(9);//返回index为9及之后所有元素，原数组为index为9之前的元素
console.info(ele23);
console.info(array8);
//插入元素
const move = array8.splice(4, 0, "字符串", "字符串2", ["字符串数组", 12, "字符串数组2"]);
console.info("被移除的元素：" + move);
console.info(array8.toLocaleString());
//替换元素
const move2 = array8.splice(2, 2, "新插入", "新插入2", "新插入3");
console.info(move2.toString());
console.info(array8.toString());

//6、位置方法：indexOf()和lastIndexOf()分别从前面和从后面开始查找对应元素并返回索引
var num = [0, 1, 2, 3, 4, 5, 6, 7, 4, 0, 6, 3];
const forwarIndex = num.indexOf(4);//4
const lastIndex = num.lastIndexOf(4);//9
console.info("从前往后查找：" + forwarIndex);
console.info("从后往前查找：" + lastIndex);
//对于对象
var persion = {name: "perry"};
var oa = [{name: "perry"}];
var oa2 = [persion];
console.info("查找对象:" + oa.indexOf(persion));//-1
console.info("查找对象:" + oa2.indexOf(persion));//0
persion.age = 22;
console.info("查找已改变的对象：" + oa2.indexOf(persion));//0
//说明，对于对象的查找是对比对象的地址，并不比较该对象是否改变


//7、迭代方法 5个迭代方法every() some() filter() forEach() map(),
// 每个函数都接收一个函数（另外一个可选表示运行该函数的作用域对象，影响this值），
// 该函数参数接收三个参数，item，index，array

//every和some都对每一项执行一个函数，every只有每一项都返回true才会返回true，而some只要有一项返回true则返回true
var sz = [2, 5, 8, 9, 23, 324, 534, 23, 88];
const everyResult = sz.every(
    function (item, index, array) {
        return item > 100;
    });//true
const everyResult2 = sz.every(
    function () {
        return arguments[0] > 1;
    });//true

const someResult = sz.some(
    function (item, index, array) {
        return item > 100;

    });//true
console.info("数组：" + sz);
console.info("everyResult:" + everyResult);
console.info("everyResult2:" + everyResult2);
console.info("someResult:" + someResult);

//forEach对函数的每一项执行一个操作，没有返回值，相当于遍历
var fe = [1, 2, 5, 8, 4, 32, 56];
console.info("\n原数组：" + fe);
fe.forEach(
    function (item, index, array) {
        array[index] = item * 10;//注意js中参数采用值传递，但对象值传递也会被改变
    }
);
console.info("执行forEach后的数组：" + fe);

//filter()用于过滤不符合条件的元素，即返回执行操作返回true的元素，原数组不变
var f = [12, 34, 564, 675, 34, 354, 652, 2345, 354, 2342];
const filterResult = f.filter(
    function (item, index, array) {
        return item > 100;
    }
);
console.info("filter后的结果：" + filterResult);
console.info("原数组：" + f);

//map() 对数组每一项运行函数并将返回的结果作为返回数组的值，原数组不变
var m = [1, 4, 6, 4, 23, 54];
const mapResult = m.map(
    function (item, idex, array) {
        return item * 10;
    }
);
console.info("map后的数组：" + mapResult);
console.info("原数组：" + m);


//8、缩小方法 reduce()和reduceRight(),一个从左边开始计算，一个从右边开始计算
//这两个方法接收两个参数，传入函数和初始缩小值(可选)
//对于传入的函数，有四个参数，第一个参数为上一次执行后的值，第二个为当前项的值，第三个为索引，最后一个为数组
var r = [1, 32, 345, 4, 3, 2];
const sum = r.reduce(
    function (pre, cur, index, array) {
        console.info("上一次计算的值：" + pre + ",当前值：" + cur);
        return pre + cur;
    }
);//387
console.info("用reduce来进行求和操作:" + sum);
const sum2 = r.reduceRight(
    function (pre, cur, index, array) {
        console.info("上一次计算的值：" + pre + ",当前值：" + cur);
        return pre + cur;
    }
);//387
console.info("用reduceRight来进行求和操作:" + sum2);





































































































