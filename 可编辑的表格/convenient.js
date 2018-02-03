// 用insertAfter方法向一个元素后面插入元素
function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    // 如果最后的节点是目标元素，则直接添加
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement)
    }else{
        //如果不是，则插入在目标元素的下一个兄弟节点 的前面
        parent.insertBefore(newElement,targetElement.nextSibling)
    }
}
//为nodelist绑定事件
function bindEvent(nodelist,eventType,fn){
	// 所传参数为两个的情况
	if(arguments.length==2){
		fn=arguments[1];
		eventType="onclick";
	}
	// 所传参数为三的情况
	for(var i=0;i<nodelist.length;i++){
		nodelist[i][eventType]=fn;	
	}
}
// 选择器的选择
function getObj(selector){
	// 选择器为id
	if(selector[0]=="#"){
		var str=selector.slice(1);
		return document.getElementById(str);
	}
	// 选择器为类选择器
	if(selector[0]=="."){
		var str=selector.slice(1);
		return document.getElementsByClassName(str);
	}
	// 选择器为标签选择器
	if(selector[0]!=="#"&&selector[0]!=="."){
		return document.getElementsByTagName(selector);
	}
}
// 随机颜色的函数
