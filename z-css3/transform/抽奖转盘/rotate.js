
//重新封装alert  参数text；要弹出的内容
window.alert=function(text,fn){
	var w=140,h=90;
	var _width=document.documentElement.clientWidth||document.body.clientWidth;
	var thisalert=new Dialog({
		  content:text,
		  class:"a",
	      title:"中奖提示",
	      width:w,
	      height:h,
	      top:280,
	      left:(_width-w)/2,
	      drag:true,
	      deleteCallback:fn
	});
	thisalert.show();
}

document.querySelector(".btn").onclick=function(){
	var panziBox=document.querySelector(".panzi-box");
	//恢复原状后去掉类名
	panziBox.className="panzi-box";//去掉类名active
	var num=Math.floor(Math.random()*7);//永远抽不到 7  龙潭大峡谷 ,抽中概率为 0
	var a=Math.floor(Math.random()*10000);//随机数
	console.log(num+" "+a);
	var sum=2;//代表最终的num值
    if(num==a){
    	sum=a;
    } 
    if(num==2||num==6){
    	sum=num;
    }
	switch(sum){
		case 0: num=0;break;//num为0时   抽中龙门石窟   抽中概率为七万分子一
		case 1: num=1;break;//num为1时   抽中丽景门     抽中概率为七万分子一
		case 2: num=2;break;//未中
		case 3: num=3;break;//num为3时   抽中天子驾六   抽中概率为七万分子一
		case 4: num=4;break;//num为4时   抽中白马寺      抽中概率为七万分子一
		case 5: num=5;break;//num为5时   抽中博物馆     抽中概率为七万分子一
		case 6: num=6;break;//未中
		default:num=6;//未中
	}
	var total=-3600+(-num*45);
	panziBox.style.transform="rotate("+total+"deg)";
	setTimeout(function(){
		//num为2或6时   抽中谢谢参与
		if(num==2||num==6){//抽中概率为三分之一
			alert("很遗憾，您未中奖，换个姿势再来一次!",goBack)
		}else{
			alert("恭喜您中奖，奖品三个工作日内发放!",goBack);
		}
	},10000);
	function goBack(){
		//恢复原状
		panziBox.className="panzi-box active";//添加类名active
		panziBox.style.transform="rotate(0deg)";
	}
}




















