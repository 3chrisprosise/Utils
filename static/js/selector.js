/**
 * Created by chrisprosise on 17-8-31.
 */

//元素遍历

var items = document.getElementsByClassName('first_ul_li');
var itemlen = items.length;

// // 方法1 速度较慢
// var item = items.item(0);
// alert(itemlen);
// alert(item.tagName);

// //方法2 速度较快
// var item = items[0];
// alert(item.tagName);

// // 通过子节点选择父节点  parentNode
// var item = items[0];
// var parent = item.parentNode;
// alert(parent.tagName);

// //前一个或者后一个兄弟节点 前提是存在
// var item = document.getElementById('firstul_li_2');
// // alert(item.className);
// var nextbro = item.nextSibling.nextSibling; //标签之间的留白被当作一个节点处理
// alert(nextbro.id);
// var prebro = item.previousSibling.previousSibling;
// alert(prebro.id);


// // 最后或者第一个子节点
// var item = document.getElementById('firstlul');
// var firchild = item.firstChild.nextSibling;// 注意空白节点所在的位置
// var laschild = item.lastChild.previousSibling;
// alert(firchild.id);
// alert(laschild.id);

// //获取文本节点，可以根据nodeType是否为1 来判断是否为元素节点，否则跳过
// var item = document.getElementById('firstlul');
// var text = item.firstChild.nextSibling.firstChild.nodeValue;
// alert(text); //注意文本本身也是节点，同样和上层属于父子关系

