// 开始第一个Ajax,XMLHttpRequest()对于IE，只能支持IE7及其以上版本
var xhr = new XMLHttpRequest();
//open方法启动一个请求以备发送，并不会真正发送请求
//接收三个参数，第一个请求方法，post或get，第二个参数路径，填相对路径时会基于当前页面的路径，
// 第三个参数为是否为异步请求
xhr.open('get', 'https://jsonplaceholder.typicode.com/posts', false);
//send方法接收一个参数，为作为请求主体发送的数据
xhr.send(null);

//同步响应的请求如下处理
if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
    document.write(xhr.responseText);
} else {
    document.write("Request was unsuccessul :" + xhr.status);
}
//因为没有设置为异步请求，所以在接收请求后js代码才会往后执行
alert("结束");


//对于异步请求的处理方法
//对于异步请求，可检测readystate的值来确认活动进行的阶段，readystate有五个值，分别对应下列含义
//0-->未初始化。尚未调用open()方法
//1-->启动。已经调用open()方法，但还没有调用send方法
//2-->发送。已经调用send()方法，但还没有收到响应
//3-->接收。已经接收到部分响应数据
//4-->完成。已经接收全部响应数据，而且已经可以再客户端使用
//而且readystate的值改变时都会回调onreadystatechange方法

var xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange = function () {
    console.info(xhr2.readyState);
    if (xhr2.readyState == 4) {
        if ((xhr2.status >= 200 && xhr2.status < 300) || xhr2.status == 304) {
            // console.info(xhr2.getResponseHeader("Host"));
            console.info(xhr2.getAllResponseHeaders());
            console.info(xhr2.responseText);
        } else {
            console.info("Request is failed :" + xhr2.status);
        }
    }
};
xhr2.open("get", 'https://jsonplaceholder.typicode.com/posts', true);
xhr2.send(null);
alert("异步执行");
//在接收到响应之前还可以调用abort()方法来取消异步请求
// xhr2.abort();

//上述代码利用DOM0级方法为XHR对象添加事件处理程序,原因是并非所有的浏览器都支持DOM2级













































