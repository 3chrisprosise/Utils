/**
 * Created by chrisprosise on 17-9-2.
 */

// 测试innerHtml  包含标签下的所有内容，包括子标签和文本
// var item = document.getElementById('first_ul');


//添加元素 createElement() 在DOM树下操作
//创建元素 createElement() 设置内容 createTexrNode()  添加到DOM中 appendChild()

// var newli = document.createElement('li');
// alert(newli.tagName);
// var newtext = document.createTextNode('FOUR');
// newli.appendChild(newtext);
// item.appendChild(newli);
// alert(item.innerHTML);

// //删除子节点 removeChild() 从父节点选取
// item.removeChild(newli);
// alert(item.innerHTML);

//更改属性值 getAttribute() hasAttribute() setAttribute removeAttribute()

// item.setAttribute('class','ok');
// alert(item.className);
// item.removeAttribute('class');
// alert(item.className);

//使用事件监听器，监听事件触发 element.addEventListener('event', function, false);
    //这里的true和false 定义了流的顺序，是从内到外还是从外到内false从内到外
//
// var item_div = document.getElementById("first_div");
// var item_ul = document.getElementById('first_ul');
// var item_li = document.getElementById('second_li');
//
// item_div.addEventListener('click',function (e) {
//     // alert(this.tagName);
//     alert(e.target.id);// e.target 细致划分了触发事件的元素
//     e.stopPropagation(); // 事件触发后停止传递
// }, true);
//
// item_ul.addEventListener('click', function (e) {
//     alert(this.tagName);
// },true);
//
// item_li.addEventListener('click', function (e) {
//     alert(e.target.tagName);
// },false);

