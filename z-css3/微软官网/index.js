/*搜索框的显示与隐藏*/
document.querySelector(".pad-box .search").show=false;
document.querySelector(".pad-box .search").onclick=function(){
	if(!this.show){
		document.querySelector(".selectBox").style.display="block";
		this.show=true;
	}else{
		document.querySelector(".selectBox").style.display="none";
		this.show=false;
	}
}
/*垂直菜单栏的的显示与隐藏*/
document.querySelector(".pad-box .menu").show=false;
document.querySelector(".pad-box .menu").onclick=function(){
	if(!this.show){
		document.querySelector(".menu-col").className="menu-col show";
		this.show=true;
	}else{
		document.querySelector(".menu-col").className="menu-col";
		this.show=false;
	}
}






































