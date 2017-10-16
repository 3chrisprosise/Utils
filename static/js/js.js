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



// // javascript 对象
// function Robot(Name){
//     this.name  = Name;
//     this.say = function () {
//         console.log(this.name)
//     }
// }
//
// Robot.prototype.age = 24;  //更改了原对象的属性值


// // 数组 堆性质的表现 后进先出
// var color = new Array();
// var count = color.push("red","green");
//
//
// count = color.push("black");
// alert(count); //3
// var item = color.pop();
//
// alert(item); //2
//
// alert(color.length);
//

// 数组 栈 性质的表现    先进先出


// var color = new Array();
// var count = color.unshift("red","green");  //
// alert(count);
//
// count = color.unshift("black");
// alert(count); //3
// var item = color.pop();
//
// alert(item); //2
//
// alert(color.length);

// var value = [1,2,3,4,5,6];
// value.reverse();
// alert(value);   //  内容倒置


// // 自定排序方式
// function compare(val1,val2) {
//     if(val1 < val2){
//         return -1;
//     }else if(val2 < val1){
//         return 1;
//     }else return 0;
// }
// var values = [0,1,5,10,15,3,6,2];
// values.sort(compare); // 传入之前定义的函数 注意之前函数值的返回值，代表了不同的排序方式
// alert(values);

// var colors = ["red", "black", "green"];
// var colrs2 = colors.concat(["yellow"], ["black","brown"]);  //  复制并且新加入了值
// alert(colrs2);

// var colors = ["red", "black", "green", "yellow","black","brown" ];
// var color2 = colors.slice(1);  // 1- end 位置
// var color3 = colors.slice(1,4); // 1-3  不包括4
// alert(color2);
// alert(color3);

// 使用splice 插入 项
// var colors = ["red", "black", "green", "yellow","black","brown" ];
// var color2 = colors.splice(0,2);  // 删除数组的前两项，不包含2 ，返回值为删除的项
// alert(colors);
// var color3 = colors.splice(0,2,"bbb","cccc"); // 将删除的两项进行了替换
// alert(colors);
// var color4 = colors.splice(2,0,"zzz","zzzz");  // splice第一个参数为开始位置，第二个参数为删除数量，剩下的参数为插入项
//
// alert(colors);

// 位置方法， indexOf 和lastindexOf

// var url = 'http://127.0.0.1:8000/all/testjs';
// alert(url.lastIndexOf('/')); // 从末尾开始查询
// alert(url.indexOf('/')); // 从开头开始查询
// //  字符串被看作是一个数组

// 数组迭代方法


// var arr = new Array();
// arr = [1,2,3,4,5,6,7,8,9,10];
// var result = arr.every(function (t, number, ts) { return t>2; }) ;
// result = arr.some(function (t, number, ts) { return t>2; }) ;
// result = arr.filter(function (t) {
//      return t > 5;
//  });  // 这里返回的是满足条件的元素组成的新的数组
// result = arr.map(function (t) {
//     return t+3;  //  返回对每个元素进行操作后的新的数组
// });
// alert(result);

// var arr = new Array();
// arr = [1,2,3,4,5,6,7,8,9,10];
// var sum = arr.reduce(function (p1, p2, number, ts) { return p1+p2; });
// alert(sum);


// 使用 call() 或者 apply() 函数来扩充作用域
// // apply 与call 的区别就在apply的参数有数组传递
// function sum(num1,num2) {
//     return num1 + num2;
// }
// function callsun(num1,num2) {
//     return sum.call(this,num1,num2); // 这里的this 为什么是必须的？ call(thisObj，Object)， call 的传参方式为逗号逐个传入，首先要
//     //指定
// }
// alert(callsun(10,10));

// window.color = "red";
// var o = { color: "blue"};
// function sayColor() {
//     alert(this.color);
//
// }
// var saycolor = sayColor.bind(o);
// saycolor();

// 使用  instanceof 判断数据类型
// a = true;
// var b = new Boolean(true);
// alert(b.valueOf());
// alert(b instanceof Boolean);
// alert(typeof a );
//  // 直接赋值与通过对象赋值效果不同,对象本身的值 与对象valueOf 的值不同

// var numberObject  = new Number(5000000000);
// // alert(numberObject.toString(8));
// // alert(numberObject.toString(2));
// // alert(numberObject.toString(16)); // 进制转换
//
// alert(numberObject.toFixed(20)); // 最多保存20 位 小数

// 字符串拼接
// var str1 = "Hello";
// var str2 = "World";
// var str3 = str2.concat(str1);
// alert(str3);// 此时的str1 和str2 并没有改变

// var stringValue = "Hello World";
// // alert(stringValue.slice(3,7)); // slice 与 substring 返回都是两个索引值之间的字符串
// // alert(stringValue.substring(3,7)); // 参数中如果包换负数值，则会被转换为0 仅仅是这个函数
// // alert(stringValue.substr(3,7));  // 第二个参数指定返回的字符个数
//
// // 位置索引
// alert(stringValue.indexOf("W"));
// alert(stringValue.lastIndexOf("l"));

// var stringValue = "            Hello World    ";
// var newstr = stringValue.trim();
// alert(newstr); //删除字符串前后的空格
// newstr = stringValue.toUpperCase(); // 转换为大写
// alert(newstr);
// newstr = stringValue.toLowerCase();
// alert(newstr);
// newstr = stringValue.toLocaleLowerCase();
// alert(newstr);
// newstr = stringValue.toLocaleUpperCase();  // 在土耳其或者一些特殊国家的使用
// alert(newstr);

// var text = "cat,bat,sat,fat";
// // var pattern = /.at/;
// // var mathes = text.match(pattern);  // 返回匹配的第一个字符串
// // alert(mathes[0]);
// var result = text.replace(/at/g, 'ont');  // js 中的正则表达式与普通的正则表达式稍有不同
// alert(result);

//  javascript 正则表达式匹配训练

// i  大小写不敏感
// var str1 = "Hello World";
// str1 = str1.replace(/hello/i, "Chris");
// alert(str1);

// g  全局匹配
var str1 = "Hello World";
str1 = str1.replace(/l/g,"nn");
alert(str1);

