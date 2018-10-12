$(function(){
	new Swiper ('.swiper-container', {
	    loop: true,
		autoplay: {
			disableOnInteraction: false,
		},
	    // 濡傛灉闇€瑕佸垎椤靛櫒
	    pagination: {
	      el: '.swiper-pagination',
	    },
	    
	    // 濡傛灉闇€瑕佸墠杩涘悗閫€鎸夐挳
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },
	    
	    // 濡傛灉闇€瑕佹粴鍔ㄦ潯
	    scrollbar: {
	      el: '.swiper-scrollbar',
	    },
	  })  



	$('.mian .left li').eq(1).removeClass('xianshi')
	$('.mian .right li').click(function(e) {
		$(this).addClass("cur").siblings().removeClass("cur")
		$('.mian .left li').eq($(this).index()).addClass("xianshi").siblings().removeClass("xianshi")
			new Swiper ('.swiper-container.swiper-container03', {
	    loop: true,
		autoplay: {
			disableOnInteraction: false,
		},
	    // 濡傛灉闇€瑕佸垎椤靛櫒
	    pagination: {
	      el: '.swiper-pagination.swiper-container03',
	    },
	    
	    // 濡傛灉闇€瑕佸墠杩涘悗閫€鎸夐挳
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },
	    
	    // 濡傛灉闇€瑕佹粴鍔ㄦ潯
	    scrollbar: {
	      el: '.swiper-scrollbar',
	    },
	  })  

	});
	
	
})   

;(function(){	

	var num = 0;
	$(".icon .left").click(function(){	
		num++;
		if(num>6){num=0}
		$(".slipe .slipe_in").stop().animate({marginLeft:-469*num+"px"},500);
		})
		
	$(".icon .right").click(function(){	
		num--;
		if(num<0){num=6}
		$(".slipe .slipe_in").stop().animate({marginLeft:-469*num+"px"},500);
		})

})();
;(function(){
	$(".app_all .txt li").click(function(){
		var index = $(this).index();
		$(this).addClass("cur").siblings().removeClass("cur");	
		$(".app_bo").eq(index).addClass("active").siblings().removeClass("active");	
	});	
})();
;(function(){
	$(".nav_in ul li").click(function(){
		var index = $(this).index();
		$(this).addClass("cur").siblings().removeClass("cur");	
	});	
})();

//app1
;(function(){	

	var num = 0;
		
	var timer = null;	
	
	var len = $(".app_bo1 ul li").length;
	
	function autoplay(){	
	
		timer = setInterval(function(){
		
			num++;	
				
			if(num>len-1){num = 0}
						
			$(".app_bo1 .app_in ul").animate({"margin-left":-350*num+"px"});		
				
			$(".app_bo1 .title li").eq(num).addClass("cur").siblings().removeClass("cur");
			
			
		},2000);			
	}	
	
	autoplay();
		
	$(".app_bo1").hover(function(e) {
		
		clearInterval(timer);
        
    },function(e) {
		
		autoplay();
        
    });	
	
})();	
//app2
;(function(){	

	var num = 0;
		
	var timer = null;	
	
	var len = $(".app_bo2 ul li").length;
	
	function autoplay(){	
	
		timer = setInterval(function(){
		
			num++;	
				
			if(num>len-1){num = 0}
						
			$(".app_bo2 .app_in ul").animate({"margin-left":-350*num+"px"});		
				
			$(".app_bo2 .title li").eq(num).addClass("cur").siblings().removeClass("cur");
			
			
		},2000);			
	}	
	
	autoplay();
		
	$(".app_bo2").hover(function(e) {
		
		clearInterval(timer);
        
    },function(e) {
		
		autoplay();
        
    });	
	
})();	
//nav切换至相应页面
;(function(){	
	$(".nav_in ul li:eq(0)").click(function(){	
		$("html,body").animate({scrollTop:0});
	});
	$(".nav_in ul li:eq(1)").click(function(){	
		$("html,body").animate({scrollTop:1100});
	});
	$(".nav_in ul li:eq(2)").click(function(){	
		$("html,body").animate({scrollTop:1860});
	});
	$(".nav_in ul li:eq(3)").click(function(){	
		$("html,body").animate({scrollTop:2720});

	});
	$(".nav_in ul li:eq(4)").click(function(){	
		$("html,body").animate({scrollTop:3580});
	});
	$(".nav_in ul li:eq(5)").click(function(){	
		$("html,body").animate({scrollTop:4400});
	});
	$(".nav_in ul li:eq(6)").click(function(){	
		$("html,body").animate({scrollTop:5700});
	});
})();

//返回顶部
$(function(){
        //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
        $(function () {
            $(window).scroll(function(){
                if ($(window).scrollTop()>100){
                    $("#toTop").fadeIn(1500);
                }
                else
                {
                    $("#toTop").fadeOut(1500);
                }
            });
            //当点击跳转链接后，回到页面顶部位置
            $("#toTop").click(function(){
                $('body,html').animate({scrollTop:0},1000);
                return false;
            });
        });
    });
