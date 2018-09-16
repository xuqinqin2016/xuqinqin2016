// JavaScript Document

$(function(){
	
	;(function(){	
		var mySwiper = new Swiper ('.all', {
			direction: 'vertical',//垂直
			loop: true, //无缝
			effect : 'slide', //slide cube coverflow  flip
			mousewheel: true, //鼠标中键（滚轮）
			keyboard : true, //键盘 上下左右    
			pagination: {
			  el: '.swiper-pagination',
			  clickable :true,
			},
			on:{
			  init: function(){
				swiperAnimateCache(this); //隐藏动画元素 
				swiperAnimate(this); //初始化完成开始动画
			  }, 
			  slideChangeTransitionEnd: function(){ 
				swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
			  } 
			}
		  }) 
	})();
	
	$('.bannerbox_in').bomb();
	
	;(function(){
	// icon展示调用
	lc_lightbox('.elem', {
		wrap_class: 'lcl_fade_oc',
		gallery : true,	
		thumb_attr: 'data-lcl-thumb', 
		
		skin: 'minimal',
		radius: 0,
		padding	: 0,
		border_w: 0,
	});	
})();

	;(function(){	
		var mySwiper = new Swiper ('.app', {
			loop: true, //无缝
			autoplay: {
				disableOnInteraction: false,
			},
			coverflowEffect: {
				stretch: 0,
			},
			effect : 'coverflow', //slide  coverflow cube flip
			slidesPerView: 5,
			// 如果需要前进后退按钮
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			}
		  })        

	})();
	
	//音乐控制
	;(function(){
		$('.audio').click(function(e) {
			//判断音乐播放状态 如果默认不播放,让它播放
			if($('audio').get(0).paused == true){	
				$(this).css('animation-play-state','running')
				$('audio').get(0).play()
			}else{	
				$(this).css('animation-play-state','paused')
				$('audio').get(0).pause()
			}
		});
	})();
	//第一屏paopao
	;(function(){
		var canvas = document.getElementById("canvas");
		var context = canvas.getContext("2d");				
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;		
		var colors = ['#69d2e7','#b3bff7','#ffee91','#2db5e4','#7bb4e3','#bdf6fd','#f38630']
		var balls = [];
		var timer = null;
		var btn = true;
		/**
		* 一个气泡
		*var ball = {	
		*	x:x轴坐标
		*	y:y轴坐标
		*	r:初始半径
		*	color:颜色
		*	vx:x轴速度
		*	vy:y轴速度
		}
		*/
		//画圆函数
		function draw(ball){
			context.beginPath();
			context.arc(ball.x,ball.y,ball.r,0,Math.PI*2);
			context.fillStyle = ball.color;
			context.globalCompositeOperation = "lighter";//多个气泡叠加高亮
			context.fill();
		}		
		canvas.onmousemove = function(ev){
			//创建气泡
			for(var i = 0;i<2;i++){
				var ball = {
					x:rnd(-5,5)+ev.clientX,
					y:rnd(-5,5)+ev.clientY,
					r:rnd(10,45),
					color:colors[rnd(0,colors.length-1)],
					vx:Math.random()-0.5,
					vy:Math.random()-0.5					
				}							
				balls.push(ball);
				//判断ball数量，减少耗电脑性能,气泡最多的数量200个，并将旧的删除
				if(balls.length>200){
					balls.shift();
				}
			}
		}
		//绘制气泡		
		if(btn){
			clearInterval(timer);
			timer = setInterval(
			function(){
				drawball()
			},30)
			btn = false;
		}				
		function drawball(){
			context.clearRect(0,0,canvas.width,canvas.height)
			for (var i = 0 ;i<balls.length;i++){
				balls[i].x += balls[i].vx*8;//泡泡的分散
				balls[i].y += balls[i].vy*8;
				balls[i].r *= 0.94;
				draw(balls[i])
				//小小的删除不显示
				if(balls[i].r<1){	
					balls.splice(i,1)
				}
			}
			if(balls.length<0){
				clearInterval(timer);
				btn = true;
			}
		}	
		//随机函数
		function rnd(min,max){
			return Math.round(Math.random()*(max-min)+min);
		}		
	})();
	
	//vue控制class
	;(function(){
			var vm = new Vue({
				el:'#app',
				data:{
					active:true
				},
				methods:{
					qie(){
						this.active = !this.active;
					}
				}
			})
	
	
	
	})();

	
})



