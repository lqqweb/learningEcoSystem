//进度条
$(function(){
			$("#competePostNum").myProgress({speed: 100, percent: 60,width: "3.5rem",height: "0.2rem"});
			 $("#div1").myProgress({speed: 100, percent: 35,width: "3rem",height: "0.2rem"});
			 $("#div2").myProgress({speed: 100, percent: 82,width: "3rem",height: "0.2rem"});
			 $("#div3").myProgress({speed: 100, percent: 70,width: "3rem",height: "0.2rem"});
			 $("#div4").myProgress({speed: 100, percent: 75,width: "3rem",height: "0.2rem"});
			 $("#div5").myProgress({speed: 100, percent: 90,width: "3rem",height: "0.2rem"});
		})
//弹框事件
window.onload=function(){
	var list = document.querySelectorAll('.list');

	function accordion(e) {
	    e.stopPropagation();
	    if (this.classList.contains('active')) {
	        this.classList.remove('active');
	    } else
	    if (this.parentElement.parentElement.classList.contains('active')) {
	        this.classList.add('active');
	    } else
	    {
	        for (i = 0; i < list.length; i++) {
	            list[i].classList.remove('active');

	        }
	        this.classList.add('active');
	    }
	}
	for (i = 0; i < list.length; i++) {
	    list[i].addEventListener('click', accordion);
	}

}


// 点击目标岗位栏的箭头，展开所选目标岗位
$(function(){
	$(".arrowImg").click(function(){
		if($(".objectPostList").is(":hidden")){
			$(".objectPostList").show();
			$(".arrowImg").css("transform","rotate(90deg)");
		}else{
			$(".objectPostList").hide();
			$(".arrowImg").css("transform","rotate(360deg)");
		}
	})
})

// 目标岗位列表显示
$(function(){


	$(".objectPostList ul li").each(function(){
		$(this).click(function(){
			// $("ul>li>p").removeClass('addColor');
			
			$(this).addClass('addColor').siblings().removeClass('addColor');
			$(".selectImg1").attr("src","images/personCenter/start.png");
		})
	})
	$(".firstList").click(function(){
		$(".startImg").attr("src","images/personCenter/start.png");
		$(".selectImg1").attr("src","images/personCenter/select.png");
		$(".selectImg2").attr("src","images/personCenter/select.png");
		
	})
	$(".secondList").click(function(){
		$(".startImg").attr("src","images/personCenter/start.png");
		$(".selectImg1").attr("src","images/personCenter/select1.png");
		$(".selectImg2").attr("src","images/personCenter/select.png");
		
	})
	$(".threeList").click(function(){
		$(".startImg").attr("src","images/personCenter/start.png");
		$(".selectImg2").attr("src","images/personCenter/select1.png");
		$(".selectImg1").attr("src","images/personCenter/select.png");
		
	})


	
})



// 点击竞岗符合度，出现岗位胜任需求
$(function(){
	$(".infoImg").click(function(){
		$(".competeQualificationDetail").css("display","block");
	})
	$(".competeBg").click(function(){
		$(".competeQualificationDetail").css("display","none");
	})
})
//点击个人贡献出现详情
$(function(){
	$(".personContribute").click(function(){
		$(".personAchievementContentList").css("display","block");
	})
	$(".personAchievementBg").click(function(){
		$(".personAchievementContentList").css("display","none");
	})
})
//点击工作表现出现详情
$(function(){
	$(".taskPerformance").click(function(){
		$(".taskPerformanceContent").css("display","block");
	})
	$(".personAchievementBg").click(function(){
		$(".taskPerformanceContent").css("display","none");
	})
})

// 点击个人发展学习出现详情
$(function(){
	$(".developStudy").click(function(){
		$(".developStudyContent").css("display","block");
	})
	$(".personAchievementBg").click(function(){
		$(".developStudyContent").css("display","none");
	})
})
// 点击职业技能出现职业技能详情
$(function(){
	$(".professionSkill").click(function(){
		$(".vocationalSkillContent").css("display","block");
	})
	$(".personAchievementBg").click(function(){
		$(".vocationalSkillContent").css("display","none");
	})
})
// 职业技能详情页面进度条
$(function(){
	$("#skillValue").myProgress({speed: 100, percent: 30,width: "2.5rem",height: "0.2rem"});
	$("#dutyStudyMap1").myProgress({speed: 100, percent: 60,width: "2.5rem",height: "0.2rem"});
	$("#dutyStudyMap2").myProgress({speed: 100, percent: 50,width: "2.5rem",height: "0.2rem"});
	$("#dutyStudyMap3").myProgress({speed: 100, percent: 20,width: "2.5rem",height: "0.2rem"});

	// 晋升岗位任务
	$("#developStudyMap1").myProgress({speed: 100, percent: 30,width: "2.5rem",height: "0.2rem"});
	$("#developStudyMap2").myProgress({speed: 100, percent: 60,width: "2.5rem",height: "0.2rem"});
	$("#developStudyMap3").myProgress({speed: 100, percent: 50,width: "2.5rem",height: "0.2rem"});
	

})