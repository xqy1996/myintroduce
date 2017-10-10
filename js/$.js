// JavaScript Document


function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
		}
	else{
		return getComputedStyle(obj)[attr];
		}
}
function doMove(obj,attr,spe,index,endfn){
	spe =parseInt(getStyle(obj,attr))<index?spe:-spe;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
var speed=parseInt(getStyle(obj,attr))+spe;
if(speed>index&&spe>0){
	speed=index;
	}
if(speed<index&&spe<0){
	speed=index;
	}
obj.style[attr]=speed+'px';
if(speed==index){
	clearInterval(obj.timer);
	if(endfn){
		endfn();
		}
	}},30)
}
function shake(obj,attr,endFn){
	var pos=parseInt(getStyle(obj,attr));
	var arr=[];
	var num=0;
	
	for(var i=20;i>0;i=i-2){
		arr.push(i,-i);
		}
		arr.push(0)
		clearInterval(obj.shaketimer);
		obj.shaketimer=setInterval(function(){
			obj.style[attr]=pos+arr[num]+'px';
			num++;
			if(num===arr.length){
				clearInterval(obj.shaketimer);
				endFn&&endFn();
				}
			},50)
	}
function changeopacity(obj,changeopa,index,endfn){
	

	
     changeopa=parseInt(getStyle(obj,'opacity'))<index?changeopa:-changeopa;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
	var opa=parseFloat(getStyle(obj,'opacity'))+changeopa;;	
	if(opa>index&&changeopa>0){
	opa=index;
	}
    if(opa<index&&changeopa<0){
	opa=index;
	}
	obj.style.opacity=opa
			
		if(opa==index){
			clearInterval(obj.timer);
			if(endfn){
				endfn();
				}
			}	},50)
		
	}