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
// var num = 3.141592653589;
//
// // //取整
// // alert(Math.ceil(num));//上取整
// // alert(Math.floor(num));//下取整
// // alert(Math.round(num));//近似
//
// // //随即数
// // num = Math.random();//[0,1)范围的随机数
// // alert(num);
// // $(document).ready(function () {
// //     alert("ok")
// // });
// function say(age, gender){console.log("My name is " + this.name + ",I'm a " + age + " years old " + gender + ".")}
//
//
// say.apply({name:"cup"}, [12, "boy"])  ;         //打印结果为 My name is cup,I'm a 12 years old boy.
// // this.name = "cup", age = 12, gender = "boy"  作为第二个参数的数组中的元素都是函数say的参数，按顺序依次对应
//
// say.call({name:"cup"}, 12, "boy")       ;         //打印结果为 My name is cup,I'm a 12 years old boy.
// this.name = "cup", age = 12, gender = "boy"  从第二个参数起的参数都是函数say的参数，按顺序依次对应
//apply 和call 的参数传递方式不同

// //创建数组
//
// var colors = new Array('WHITE', 'BLUE', 'YELLOW');
// alert(colors.length);

//
// //替换内容
// var el = document.getElementById('text');
// el.textContent ='Chris';

// //创建函数并执行
// function changecontent() {
//     var el = document.getElementById('text');
//     el.textContent = 'Chris';
//     alert(el.textContent);
// }
// changecontent();

// //立即调用函数 函数后紧跟括号，创建变量时未声明var 则变量被看作全局变量
// var el = (
//   function () {
//       var t = document.getElementById('text');
//       t.textContent = 'Chris';
//       alert('HA HA HA HA ')
//   }()
// );



// // 对象的创建 注意最后的分号
// var hotel = {
//     name: 'hotel',
//     rooms: 50,
//     roomType: ['small', 'middle', 'large'],
//     sayHello: function () {
//         alert('Hello');
//     }
// };

// hotel.toSource(); //返回对象的结构
// // hotel.sayHello();
// alert(hotel.name);
// alert(hotel['name']);
// //两种访问属性的方法
//
// // delete hotel.name; // 删除对象属性


// //构造函数
// function Hotel(name, rooms, booked){
//     this.name = name;
//     this.rooms = rooms;
//     this.booked = booked;
//     this.sayHello = function () {
//         alert('Hello');
//     }
// }
//
// var ahotel = new Hotel(2,3,4);
// var bhotel = new Hotel(7,8,9);
// ahotel.sayHello = function () {
//     alert('wow');
// };//更改对象中的方法
// ahotel.sayname = function () {
//     alert(this.name);
// };
// ahotel.sayname();//添加属性或者方法
// ahotel.sayHello();
// bhotel.sayHello();

// var str = 'This is a String ';
// //转换小写
// str = str.toLowerCase();
// //转换大写
// str = str.toUpperCase();
// //去除首尾空格
// str = str.trim();

//javascript 的数据类型
// var str = 'Hello world'; // String 类型
// var num = 233333; // Number类型
// var male = true; // boolean 类型
// var notKnow ; // Undefined 类型
// var t = null; //null 类型
//
// function t() {
//     alert('Hellow')
//
// }
//
// var array = ['one','two','three']; //  数组和函数被看作对象类型object

// 全局对象 Math

// var num = 233.233;
// var x = 2;
// var y = 3;
// num = Math.abs(num); // 绝对值
// num = Math.acos(num); //返回 反余弦值
// num = Math.asin(num); // 返回 反正弦值
//
// num = Math.atan2(x,y); // x轴到xy点的角度
//
// num = Math.ceil(num); // 向上舍入
//
// num = Math.max(x,y); // x,y 最大值
// num = Math.min(x,y); // x,y 最小值
// num = Math.round(num); // 四舍五入近似
// num = Math.floor(num); //下舍入
// num = Math.sqrt(num); // 求平方根



// javascript 对象
function Robot(Name){
    this.name  = Name;
    this.say = function () {
        console.log(this.name)
    }
}

Robot.prototype.age = 24;

