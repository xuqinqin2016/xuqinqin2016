// JavaScript Document


//tipbar_txt 
;(function(){
		//头部导航栏下拉
	function header_xiala (a,b){
		var oli02 = document.getElementById(a)
		var oul02 = document.getElementById(b)
		
		oli02.onmouseover = function(){	
			oli02.style.backgroundImage = 'url(../images/header_up.png)'
		}
		oli02.onmouseover = function(){	
			oul02.style.display = 'block'
		}
		oli02.onmouseout = function(){	
			oul02.style.display = 'none'
		}
		}
	header_xiala ('li02','ul02')
	header_xiala ('li03','ul03')
	header_xiala ('li04','ul04')
	header_xiala ('li05','ul05')
	header_xiala ('li06','ul06')
	//头部导航栏下拉，完成
})();

;(function(){
	var otipbar_txt = document.getElementById('tipbar_txt')

	/*var user = otipbar_txt.value
	*/
	otipbar_txt.onfocus = function(){	
		if(otipbar_txt.value == '请输入搜索内容'){	
			otipbar_txt.value = ''
			otipbar_txt.style.color = '#333'
		}
	}
	
	otipbar_txt.onblur = function(){	
		if(otipbar_txt.value == ''){	
			otipbar_txt.value = '请输入搜索内容'
			otipbar_txt.style.color = '#999'
		}
	}
	//tipbar_txt 完成
})();

;(function(){
	$(function(){	
	$('.news_list .down ol li').click(function(e) {
        $(this).addClass('cur').siblings().removeClass('cur')
    });
})
})();

//v-for vue.jss,开始
;(function(){
	var vm = new Vue({
	el:'#app',
	data:{
		lis:[
			{
				title:"横栏镇女企业家协会成立大会",
				txt:'2018年7月7日晚，中山市横栏镇女企业家协会成立大会在横栏镇美京大酒店隆重举行。镇党委书记、人大主席劳国南，党委副书记、镇长曹富全，中山市妇 联副主席刘浴平，镇商会会长何云峰，《中国灯饰报道》总编欧元春等领导应邀出席，与参加庆祝大会的各位代表共同见证着...',
				time:'2018-7-7',
				k:'成立 见证 颁授'
			},
			{
				title:"传统产业淘汰OR升级 古镇如何抉择？",
				txt:'随着经济的转型升级，传统的产业已渐渐不能适应新的环境，面临着淘汰或是转型升级的抉择，作为LED照明产业之都的中山、古镇又该如何抉择？中山之问创新命题“一镇一业”、“一村一品”曾是珠三角地区专业镇经济发展的生动写照。然而经过30多年的发展产业集聚程度较低...',
				time:'2018-7-7',
				k:'适应 转型 抉择'
			},
			{
				title:"LED已无技术门槛 古镇一条街全搞定",
				txt:'广东省的古镇，近年已发展为LED照明一条街。业界人士戏称，在古镇，LED封装元件便宜得像台北后火车站的亮片，秤斤论两卖，买完到隔壁还可找到打件、灯壳厂商。“LED已成没有门槛的电子元件，谁都可以做LED灯...',
				time:'2018-7-7',
				k:'照明之都 LED'
			},
			{
				title:"中山前10月灯饰出口逆势增34.6%",
				txt:'据中山日报报道，记者昨日从中山海关了解到，据海关统计，2015年1-10月，中山市外贸进出口降幅收窄，在当前经济下行压力加大和外贸低迷的形势下，中山市灯具、照明装置产品出口实现逆势大幅增长...',
				time:'2018-7-7',
				k:'逆势'
			}
		]
	}



	
	})
})();

;(function(){
	var vm = new Vue({
				el:'#app1',
				data:{
					timer:null,
					active:0,
					imgs:[
						'images/banner01.jpg',
						'images/banner02.jpg'
						]
				},
				methods:{
					right(){
						this.active++;//累加器生效
						/*if(this.active> this.imgs.length-1){
							this.active = 0;
						}*/
						//公式只能死背
						//索引值 =  （索引值+图片的张数）%图片的张数
						this.active = (this.active+this.imgs.length)%this.imgs.length
					},
					left(){
						this.active--;
						/*if(this.active<0){
							this.active = this.imgs.length-1
						}*/
						this.active = (this.active+this.imgs.length)%this.imgs.length
					},
					qie(index){
						this.active = index
					},
					stop(){
						clearInterval(this.timer)
					},
					play(){
						//this.right()
						var that = this;
						this.timer = setInterval(function(){
							that.right()
						},3000)
					}
				},
				mounted(){
					this.play()
				}
			})
})();