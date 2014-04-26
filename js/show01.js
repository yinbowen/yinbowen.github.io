// JavaScript Document
window.onload=function(){
	var aDiv=document.getElementsByClassName("pic");
	var aDesc=document.getElementsByClassName("desc");
	//alert(aDiv.length);
	//alert(aDesc.length);
	for(var i=0;i<aDiv.length;i++){
		aDesc[i].onmouseover=function(){
		   startMove(this,{marginTop:-80});
		   };
	    aDesc[i].onmouseout=function(){
		   startMove(this,{marginTop:-40})
		};
	};
	for(var i=0;i<aDiv.length;i++){
		aDiv[i].onmouseover=function(){
	
		   startMove(this.childNodes[1],{marginTop:-80});
		   };
	    aDiv[i].onmouseout=function(){
		   startMove(this.childNodes[1],{marginTop:-40})
		};
	};
};