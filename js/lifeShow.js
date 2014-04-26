// JavaScript Document 控制生活页面的动态效果。

window.onload=function(){
	var aDiv=document.getElementsByClassName("div");
	
	for(var i=0;i<aDiv.length;i++){
		aDiv[i].onmouseover=function (){
			this.childNodes[2].style.visibility="visible";
			this.childNodes[1].childNodes[0].style.visibility="visible";
			}
		aDiv[i].onmouseout=function (){
			this.childNodes[2].style.visibility="hidden";
			this.childNodes[1].childNodes[0].style.visibility="hidden";
			}
		};
	
}
