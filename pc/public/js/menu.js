// 产品图导航显示与隐藏
(function($){
	$.fn.LvshouSider = function(options){
		    
			var opts = $.extend({},$.fn.LvshouSider.defaults,options);
		    var base = this;
			var bNone = true;
			var Z_MenuList = $('.Z_MenuList',base);
			var Z_SubList = $('.Z_SubList',base);
			var isIE = $.browser.msie;
	        var isIE6 = isIE && ($.browser.version == '6.0');
		   function isNone(){
			   var timer 
			   if($('.Z_SubList').is(":visible")==false){
				   bNone = true;
				   clearInterval(timer);
			   }
			   else{
				    bNone = false;
			   }
			   timer = setTimeout(function(){isNone();},10);
			   }
			isNone();
			$('.Z_MenuList >ul >li').hover(function(e,index){
			        
                    var thisLi = this;
					var timeOut = setTimeout(function() {
				         showSubList(thisLi);
			            },10);
						
						$(Z_SubList).hover(function() {
							clearTimeout(timeOut);
						},function() {
                            setTimeout(function(){
								hideSubList(thisLi);
								},10);

						});
				},function(e,index){
					    var thisLi = this;
					    var timeOut = setTimeout(function(){
			                   hideSubList(thisLi);
			                }, 10);
			
						$(Z_SubList).hover(function() {
							clearTimeout(timeOut);

						},function() {
							
								setTimeout(function(){
								hideSubList(thisLi);
								},10);
							
						});
					});
				
			function showSubList(thisLi) {
                $(thisLi).addClass('curr');

				var thisIndex = $(Z_MenuList).find('li').index($(thisLi));
	
				var subExList = $(Z_SubList).find('div');
				var subViewHeight = 0;
				subViewHeight = $(Z_SubList).find('div').eq(thisIndex).attr('rel');
				if(thisIndex > subExList.length - 1) return;
				
				var winHeight = $(window).height();
				var subTop = $(thisLi).offset().top - $(window).scrollTop();
				var subBottom = winHeight - subTop - subViewHeight;
				var absTop = $(thisLi).offset().top-opts.fTop+40;
				var absLeft =200;
   			 
			   if(subBottom < 0) {
					absTop = absTop + subBottom;
				}


				$(subExList).each(function(index) {
					if(index == thisIndex) {
						$(this).show();
					} else {
						$(this).hide();
					}
				});
				
				if(bNone){
					$(Z_SubList).css({
						'top':absTop,
						'left':200,
						'opacity':0.6
						});
						bNone=false;
					}
				$(Z_SubList).show();
				$(Z_SubList).stop().animate({
						left: absLeft,
						opacity: 1
						}, 100);
				setTimeout(function(){
					
					$(Z_SubList).stop().animate({
						
						top: absTop
						
						}, 100);
					},300);

newLoadLazyImg();
		};
		
		function hideSubList(thisLi) {
			$(Z_SubList).hide();
			$(thisLi).removeClass('curr');
		};
	
		};
		// var top = 0;
	// $.fn.LvshouSider.defaults={
	// 	//fTop: 180 // 
	// 	fTop: $(".qy_head").offset().top+$(".qy_head").height()
        
	// 	}
})(jQuery);

$(function(){
	$('#Z_TypeList').LvshouSider();
	$('#qy5 #Z_TypeList').hover(function(){
		cover=$(this).hasClass("hover");
		$(this).addClass('hover').children('.Z_MenuList').show();
		},function(){
		if(cover){
			$(this).children(".Z_MenuList").hide();
		}else{
			$(this).removeClass('hover').children('.Z_MenuList').hide();
		 }
	 });
});

function newLoadLazyImg() {
    $(".qy_menu").trigger("scroll");
}

var number=12; //瀹氫箟鏉＄洰鏁�

function LMYC() {
var lbmc;
    for (i=1;i<=number;i++) {
        lbmc = eval('LM' + i);
        lbmc.style.display = 'none';
    }
}
 
function ShowFLT(i) {
    lbmc = eval('LM' + i);
    if (lbmc.style.display == 'none') {
        LMYC();
        lbmc.style.display = '';
    }
    else {
        lbmc.style.display = 'none';
    }
}