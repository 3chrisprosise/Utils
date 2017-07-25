/**
 * Created by root on 17-7-25.
 */
// alert(location.href);
//alert(window.confirm('sure'));
//alert(navigator.appName);
// alert(navigator.appCodeName);
// alert(navigator.appVersion);
// alert(navigator.cookieEnabled); // 检查浏览器是否禁用cookie

// getPosition = {
//      options : {
//         enableHighAccuracy: true,
//         timeout: 5000,
//         maximumAge: 0
//     },
//
//     success :function success(pos) {
//         var crd = pos.coords;
//         console.log('Your current position is:');
//         console.log('Latitude : ' + crd.latitude);
//         console.log('Longitude: ' + crd.longitude);
//         console.log('More or less ' + crd.accuracy + ' meters.');
//     },
//
//     error :function error(err) {
//         console.warn('ERROR(' + err.code + '): ' + err.message);
//     },
//
//     func: navigator.geolocation.getCurrentPosition(success, error, options)
// }; //获取简单的定位信息并输出在控制台上

//输出显示信息
// alert(screen.availHeight);
// alert(screen.colorDepth);

//获取语言编码
//alert(navigator.language);

//获取系统
//alert(navigator.platform);

//是否启用java
//alert(navigator.javaEnabled());

//字符串的操作

var str = 'http://127.0.0.1:8000/all/testjs';
// //后向前索引
// var lastindex = str.lastIndexOf('/');
// alert(lastindex);

// //前索引
// var indexofstr = str.indexOf('/');
// alert(indexofstr);

//指定索引
// var substring = str.substring(0, 3);
// alert(substring);

// //字符串大小写切换
// var upper = str.toUpperCase();
// alert(upper);
// var lower = str.toLowerCase();
// alert(lower);

// //查找替换 一个
// var change = str.replace('/', '\\');
// alert(change);

//数字操作
var num = 3.141592653589;

// //取整
// alert(Math.ceil(num));//上取整
// alert(Math.floor(num));//下取整
// alert(Math.round(num));//近似

// //随即数
// num = Math.random();//[0,1)范围的随机数
// alert(num);

