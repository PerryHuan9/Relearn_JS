//有关post和get请求的说明

//1、get请求可以将参数附加到路径后面，但参数名和值必须经过encodeURLComponent()方法编码后才能追加
//可以使用以下方法追加
function  addURLParam(url,name,value) {
    url+=url.indexOf("?")==-1?"?":"&";
    url+=encodeURIComponent(name)+"="+encodeURIComponent(value);
    return url;
}



























