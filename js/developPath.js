// 点击岗位查看对应岗位需求
$(function(){

	$("ul>li>p").each(function(){
		$("ul>li>p").removeClass('addColor');
		$(this).click(function(){
			// $("ul>li>p").removeClass('addColor');
			$(".postCondition").css("display","block");
			$(this).addClass('addColor').siblings().removeClass('addColor');
		})
	})
	// 点击背景关闭岗位需求页面
	$(".postConditionBg").click(function(){
		$(".postCondition").css("display","none");
		$("ul>li>p").removeClass('addColor');
	})

	// 点击设为目标时，岗位需求页面关闭
	$(".setObject").click(function(){
		$("ul>li>p").removeClass('addColor');
		$(".postCondition").css("display","none");
	})
})

//进度条
$(function(){
			$("#competePostNum").myProgress({speed: 100, percent: 60,width: "3.5rem",height: "0.2rem"});
			 $("#div1").myProgress({speed: 100, percent: 35,width: "3rem",height: "0.2rem"});
			 $("#div2").myProgress({speed: 100, percent: 82,width: "3rem",height: "0.2rem"});
			 $("#div3").myProgress({speed: 100, percent: 70,width: "3rem",height: "0.2rem"});
			 $("#div4").myProgress({speed: 100, percent: 75,width: "3rem",height: "0.2rem"});
			 $("#div5").myProgress({speed: 100, percent: 90,width: "3rem",height: "0.2rem"});
		})