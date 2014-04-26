// JavaScript Document  控制主页面的动态效果
//大品牌展示区（焦点图）
  $(function(){
$("ul.tab").tabs(".banner .pan > a", {effect:'fade',rotate: true, tabs:"li"}).slideshow({next:".arr_r",prev:".arr_l",autoplay:true,autopause:true,interval:3500});
})

window.onload=function(){
	
	var aDivL=document.getElementsByClassName("left_sort");
    var aDivD=document.getElementsByClassName("lsd"); 
	for(var i=0;i<aDivL.length;i++){
		aDivD[i].onmouseover=function (){
		    this.style.visibility="visible";
		} 
		aDivD[i].onmouseout=function (){
		    this.style.visibility="hidden";
		} 
	};
	aDivL[0].onmouseover=function (){
		    aDivD[0].style.visibility="visible";
		} 
	aDivL[0].onmouseout=function (){
		    aDivD[0].style.visibility="hidden";
		} 
	aDivL[1].onmouseover=function (){
		    aDivD[1].style.visibility="visible";
		} 
	aDivL[1].onmouseout=function (){
		    aDivD[1].style.visibility="hidden";
		}
	aDivL[2].onmouseover=function (){
		    aDivD[2].style.visibility="visible";
		} 
	aDivL[2].onmouseout=function (){
		    aDivD[2].style.visibility="hidden";
		}
	aDivL[3].onmouseover=function (){
		    aDivD[3].style.visibility="visible";
		} 
	aDivL[3].onmouseout=function (){
		    aDivD[3].style.visibility="hidden";
		}
	aDivL[4].onmouseover=function (){
		    aDivD[4].style.visibility="visible";
		} 
	aDivL[4].onmouseout=function (){
		    aDivD[4].style.visibility="hidden";
		}
	aDivL[5].onmouseover=function (){
		    aDivD[5].style.visibility="visible";
		} 
	aDivL[5].onmouseout=function (){
		    aDivD[5].style.visibility="hidden";
		} 
	aDivL[6].onmouseover=function (){
		    aDivD[6].style.visibility="visible";
		} 
	aDivL[6].onmouseout=function (){
		    aDivD[6].style.visibility="hidden";
		}
	aDivL[7].onmouseover=function (){
		    aDivD[7].style.visibility="visible";
		} 
	aDivL[7].onmouseout=function (){
		    aDivD[7].style.visibility="hidden";
		}
	aDivL[8].onmouseover=function (){
		    aDivD[8].style.visibility="visible";
		} 
	aDivL[8].onmouseout=function (){
		    aDivD[8].style.visibility="hidden";
		}
	aDivL[9].onmouseover=function (){
		    aDivD[9].style.visibility="visible";
		} 
	aDivL[9].onmouseout=function (){
		    aDivD[9].style.visibility="hidden";
		}
}