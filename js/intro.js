// JavaScript Document
 var num=7;
   var myApp=angular.module('myApp',[]);
   myApp.controller('myController',['$scope','$compile',function($scope,$compile){
	     $scope.index=2;
	     $scope.person={
			   name:"徐钦扬",
			   sex:'男',
			   bir:'1996.7.31',
			   hk:'泸州',
			   loc:'成都',
			   jg:'四川',
			   tel:'13882710062',
			   stu:'本科',
			   col:'重庆邮电大学',	 
			   maj:'软件工程',
			   ema:'604888149@qq.com',
			   pag:'https://github.com/xqy1996',
			   xm:[{
			
			 time:'2016.7',
			 name:'物流管理系统',
			 intr:'使用html+css+js进行前端静态网页的开发,使用了MVC思想，第一次使用html+css+js进行项目的开发。'
			 },{
			 
			 time:'2017.7',
			 name:'购物网站',
			 intr:'对某购物网站进行开发，负责管理员模块的前端界面的开发，前端使用基于JQuery的easyui框架，与管理员模块后端Dao+Service+Controller层的开发，后端使用了Sping+SpingMVC+Mybaits框架。'
			 },{
			
			 time:'2017.8',
			 name:'球队管理网站',
			 intr:'负责前台页面的搭建与后台的登陆，前端界面使用Bootstrap与使用jquery的AJAX实现单一界面的应用程序，后端使用Sping+SpingMVC+Mybaits框架制作，数据展示，数据沟通的模块，在小组负责前端技术指导。'
			 }],
			 }
		 
		 $scope.skil='';
		$scope.addjl=function(){
			var obj={
				
				time:$scope.time,
				name:$scope.name,
				intr:$scope.intr
				}
		  $scope.person.xm.push(obj)
			/*$('#t2').append('<thead><tr><th>'+$scope.xm.time+'</th>'+
                      '<th colspan="2">'+$scope.xm.name+'</th></tr></thead>'+
                        '<tbody><tr><td></td><td colspan="2">'+$scope.xm.intr+'</td></tr></tbody>')*/
			} 
       $scope.addjn=function(){
		   num++;
		   $('#pdiv').append('<p>'+num+'、'+$scope.skil+'</p>');
		   }
		$scope.del=function(a){
			
			$scope.person.xm.splice(a,1)
			}	
	      
	   }])