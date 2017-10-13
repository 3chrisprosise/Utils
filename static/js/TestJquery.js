// $(document).ready(function (event) {
//     // alert(event.toString());
// });
// jQuery(function ($) {
//     alert("ok");
// });  //与 $(document).ready() 等价
//
//
// var p_indiv = $("div > p")[0].textContent;  // 返回一个索引列表
// alert(p_indiv);
//
// $("<input>",{
//     type:"text",
//     val:"text",
//     click:function () {
//         alert("ok");
//     }
// }).appendTo($("#p1")); // 追加元素

// 上面元素的 执行顺序有所不同！



// alert("ok");
// $.holdReady(true);
//
// $(document).ready(function () {
//     alert("ready")
// });
//
// $.holdReady(false);  // 可以用这种方法更改加载顺序

// each 方法可以便利dom对象

// $("input").each(function () {
//
//     this.value = "olk";
// });  //each 遍历对象  这里的this 指dom 对象

// var t = $("input").size();//这边不能正常调用？
// // var t = $("input").length; // length 可以正常调用
// console.log(t);
// alert(t);

// t = $("input").get(0); // get 获取DOM 元素 ，可以进行操作
// alert(t.value);

// var result = $('li').index(document.getElementById("foo"));
// // alert(result);  //返回在列表中的位置
// result = $('li').index($('#bar'));
// // alert(result);//返回在列表中的位置
//
// result = $('#bar').index('li');
// // alert(result);//返回bar 在li 中的位置，index 的使用灵活
//
// result  = $('#bar').index();
// alert(result);// 不传递参数，返回这个元素在同辈中的索引位置。
//
// $("#foo").data("key",'value');
// $("#foo").removeData("key"); // 在元素上以 data-key = value  的方式在标签上存储数据 , 或者移除数据



//queue 函数 queue(element,[queueName])  // 涉及到之前的动画效果的问题

$("#show").click(function () {
      var n = $("div").queue("fx");   // 默认队列名称为fx；
      $("span").text("Queue length is: " + n.length);
});

function runIt() {
      $("div").show("slow");
      $("div").animate({left:'+=200'},2000);
      $("div").slideToggle(1000);
      $("div").slideToggle("fast");
      $("div").animate({left:'-=200'},1500);
      $("div").hide("slow");
      $("div").show(1200);
      $("div").slideUp("normal", runIt);
}
runIt();


$(document.body).click(function () {
      $("div").show("slow");
      $("div").animate({left:'+=200'},2000);
      $("div").queue(function () {
          $(this).addClass("newcolor");
          $(this).dequeue();
      });
      $("div").animate({left:'-=200'},500);
      $("div").queue(function () {
          $(this).removeClass("newcolor");
          $(this).dequeue();
      });
      $("div").slideUp();
});

// $("form innput")  //  查找form 下的所有 input
// $("form > innput")  // 查找属于form 子元素的所有input
// $("form + innput")  // 查找紧跟在form后的input 元素
// $("form ~ input ")  // 查找与form 同级的所有input
// $("form:first")  // 获取第一个from

//$("form:not(form:first)")  // 除去后面查询到的元素，除了第一个form

$("tr:even").css("background", "black");  //返回索引为奇数的jquery元素
$("tr:odd").css("background", "red");  //返回索引为偶数的jquery元素
$("tr:eq(0)> td").get(0).textContent = " Hello";  // jquery 对象与dom 对象不同，需要转化后使用dom 属性
$("tr:gt(0) > td").get(0).textContent = 'World';  // gt  大于
$("tr:lt(2) > td").get(0).textContent = 'World';  // lt  小于
$("tr:last > td").get(0).textContent = 'Jquery';  // 选取最后一个
$("tr:animated")  // 匹配正在进行动画的元素

$("*:focus").tagName; // 暂时用不好

