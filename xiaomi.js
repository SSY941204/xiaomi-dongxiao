window.onload = function(){

{
	function jiadian(now){
		let wenzi = now.querySelectorAll(".jiadian-top-right .wenzi")
		let bottom = now.querySelectorAll(".jiadian-bottom") 
		wenzi.forEach(function(val,index){
			val.onmouseover = function(){
				for(i = 0;i < wenzi.length;i++){
					wenzi[i].classList.remove("active");
					bottom[i].style.display = "none";
				}
				val.classList.add("active");
				bottom[index].style.display = "block";
			}
		})
	}
		let jiadians = document.querySelectorAll("#jiadian");
		for(i = 0; i < jiadians.length ; i ++){
			jiadian(jiadians[i])
		}
		


		let images = document.querySelectorAll(".bannerbox li");
		let dots = document.querySelectorAll(".bannerdot .dot");
		dots.forEach(function(val,index){
			val.onclick = function(){
				for(i = 0; i < dots.length; i++){
					dots[i].classList.remove("active");
					images[i].classList.remove("active")
				}
				val.classList.add("active")
				images[index].classList.add("active")
				now = index;
			}
		})
		let now = 0;
		function fn(fangxiang="r"){
			if(fangxiang == "r"){
				now ++;
				if(now == dots.length){
				now = 0;
				}
			}else if(fangxiang == "l"){
				now --;
				if(now == -1){
					now = dots.length-1;
				}
			}
			for(let i = 0; i <dots.length; i++){
				dots[i].classList.remove("active");
				images[i].classList.remove("active");
			}
			dots[now].classList.add("active");
			images[now].classList.add("active");
		}
		let st =setInterval(fn,1500);

		let bannerObj = document.querySelector(".bannerbox")
		bannerObj.onmouseover = function(){
			clearInterval(st);
		}
		bannerObj.onmouseout = function(){
			st = setInterval(fn,2000)
		}

		let right = document.querySelector(".lunbojian-right");
		let left = document.querySelector(".lunbojian-left");
		right.onclick = function(){
			fn("r")
		}
		left.onclick = function(){
			fn("l")
		}
	}


{
	let anniuL = document.querySelector(".left1");
	let anniuR = document.querySelector(".right1");
	let boxs = document.querySelector(".boxs");
	let anniu = document.querySelector(".danping-anniu")
	anniuL.onclick = left;
	function left(){
		anniuL.classList.add("active");
		anniuR.classList.remove("active");
		boxs.style.marginLeft = "0"
		num = 0;
	}
	anniuR.onclick = right;
	function right(){
		anniuL.classList.remove("active");
		anniuR.classList.add("active");
		boxs.style.marginLeft = "-1226px"
		num = 1;
	}
	let num = 0;
	let st = setInterval(fn,2000)
	function fn(){
		num++;
		if(num%2 == 0){
			left()
		}else{
			right()
		}
	}
	anniu.onmouseover = function(){
		clearInterval(st);
	}
	anniu.onmouseout = function(){
		st = setInterval(fn,2000)
	}


}


{
	let bottoms = document.querySelectorAll(".all-bottom .kuai");
	for(i=0 ; i<bottoms.length;i ++){
		bottomFn(bottoms[i]);
	}

	function bottomFn(parent){
		let dots = parent.querySelectorAll(".dian .dian1");
		let longkuai = parent.querySelector(".longkuai");
		let leftarrow = parent.querySelector(".pre");
		let rightarrow = parent.querySelector(".next")
		console.log(rightarrow)
		dots.forEach(function(val,index){
			val.onclick = function(){
				for(i = 0; i < dots.length ;i++){
					dots[i].classList.remove("active");
				}
				dots[index].classList.add("active");
				longkuai.style.marginLeft = -296*index+"px"
				now = index
			}
		})
		leftarrow.onclick = function(){
			onclickFn("l");
		}
		rightarrow.onclick = function(){
			onclickFn();
		}
		let now = 0;
		function onclickFn(dianji="r"){
			if(dianji === "l"){
				now--;
				if(now === -1){
					now = 0;
				}
				for(let i = 0 ; i < dots.length; i ++){
					dots[i].classList.remove("active");
				}
				dots[now].classList.add("active");
				longkuai.style.marginLeft = -296*now+"px"
			}else if(dianji === "r"){
				now++;
				if(now === dots.length){
					now = dots.length-1
				}
				for(let i = 0 ; i < dots.length; i ++){
					dots[i].classList.remove("active");
				}
				dots[now].classList.add("active");
				longkuai.style.marginLeft = -296*now+"px"
			}
			
		}
	}

}


// 头部
{
	let gwc1 = document.querySelector("#nav .gwckuang");
	let gwc2 = document.querySelector("#head .gouwuche");
	gwc2.onmouseover = function(){
		gwc1.classList.add("active");
	}
	gwc2.onmouseout = function(){
		gwc1.classList.remove("active");
	}
	


}


}
