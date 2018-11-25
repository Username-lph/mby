
function GetDateStr(AddDayCount){
	var dd = new Date();
	dd.setDate(dd.getDate()+AddDayCount);
	var y = dd.getFullYear();
	var m = dd.getMonth()+1;
	var d = dd.getDate();
	return "<span class=\"shipping-date fr\">"+y+"-"+m+"-"+d+"</span>";
}
var i=0;
for(i=0;i<40;i++){
	
	document.write('<div class="oneprice">')
	document.write(GetDateStr(-1));	

	var rand1=parseInt(Math.random()*40+1);	
	quotes=new Array
	quotes[1]='<h3 class="fl">张女士</h3>'
	quotes[2]='<h3 class="fl">刘小姐</h3>'
	quotes[3]='<h3 class="fl">周女士</h3>'
	quotes[4]='<h3 class="fl">吴女士</h3>'
	quotes[5]='<h3 class="fl">朱女士</h3>'
	quotes[6]='<h3 class="fl">陈女士</h3>'
	quotes[7]='<h3 class="fl">田小姐</h3>'
	quotes[8]='<h3 class="fl">钟小姐</h3>'
	quotes[9]='<h3 class="fl">马女士</h3>'
	quotes[10]='<h3 class="fl">韩小姐</h3>'
	quotes[11]='<h3 class="fl">顾先生</h3>'
	quotes[12]='<h3 class="fl">王女士</h3>'
	quotes[13]='<h3 class="fl">李小姐</h3>'
	quotes[14]='<h3 class="fl">卢女士</h3>'
	quotes[15]='<h3 class="fl">崔小姐</h3>'
	quotes[16]='<h3 class="fl">段先生</h3>'
	quotes[17]='<h3 class="fl">胡女士</h3>'
	quotes[18]='<h3 class="fl">潘小姐</h3>'
	quotes[19]='<h3 class="fl">陈女士</h3>'
	quotes[20]='<h3 class="fl">林小姐</h3>'
	quotes[21]='<h3 class="fl">代女士</h3>'
	quotes[23]='<h3 class="fl">赵小姐</h3>'	
	quotes[24]='<h3 class="fl">吴女士</h3>'	
	quotes[25]='<h3 class="fl">路女士</h3>'	
	quotes[26]='<h3 class="fl">鲁女士</h3>'	
	quotes[27]='<h3 class="fl">丽先生</h3>'	
	quotes[28]='<h3 class="fl">黄小姐</h3>'	
	quotes[29]='<h3 class="fl">夏小姐</h3>'	
	quotes[30]='<h3 class="fl">冯女士</h3>'	
	quotes[31]='<h3 class="fl">陈女士</h3>'	
	quotes[32]='<h3 class="fl">沈女士</h3>'	
	quotes[33]='<h3 class="fl">赵女士</h3>'	
	quotes[34]='<h3 class="fl">韦女士</h3>'	
	quotes[35]='<h3 class="fl">杨女士</h3>'	
	quotes[36]='<h3 class="fl">路女士</h3>'	
	quotes[37]='<h3 class="fl">韩小姐</h3>'	
	quotes[38]='<h3 class="fl">封女士</h3>'	
	quotes[39]='<h3 class="fl">王女士</h3>'	
	quotes[40]='<h3 class="fl">刘女士</h3>'	

	
	
	
	
	var quote=quotes[rand1]
	document.write(quote)
	document.write('<br>')
	
	var rand1=parseInt(Math.random()*40+1)
	quotes=new Array
	quotes[1]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 脸上皱纹少了，斑也淡了，皮肤有光泽了。服用了半年，现在走到哪都有人说我气色好、变年轻了</div>'
	quotes[2]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 确实不错，效果明显，好产品，比以前用过的一些护肤品都要好，期待把皱纹全部搞掉。</div>'
	quotes[3]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 给我妈买的，她用了一段时间，感觉挺不错了，脸上皱纹少多了</div>'
	quotes[4]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 绝对正品啊！！本人亲身验证。买的时候，总觉得不放心，怕是假货</div>'
	quotes[5]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 很贴心，发货很快哈，收到的东东包装的很好，使用说明，等等很齐全，期待它的效果啊，呵呵，感觉不错啊！。</div>'
	quotes[6]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 比起刚开始用那几天的效果好，现在一点细纹都没有了，嘴角纹也消失了，美美哒！，非常感谢！</div>'
	quotes[7]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 朋友介绍的，是正品，放心！</div>'
	quotes[8]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 才用一个礼拜，效果就出来了，脸上细纹变淡了，最开心的是，整个人感觉脱胎换骨了一般。</div>'
	quotes[9]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 确实不错，效果明显，好产品，比以前用过的化妆品，都要好，期待治好。</div>'
	quotes[10]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 不得不说，真的有效果，我刚开始没当回事，也怕希望越大失望越大，就三天打鱼两天晒网的用，但是……但是居然法令纹真的有变浅！后来坚持按时按点的使用，现在明显浅很多了。</div>'
	quotes[11]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 第二次光顾了，效果很好的，东西也是正品，赞！！</div>'
	quotes[12]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 这个很温和，滋润 用着有效果</div>'
	quotes[13]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 给我妈妈买的一共6盒，她用了后说效果不错，鱼尾纹有明显改善。快递也很给力</div>'
	quotes[14]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 是朋友在用，然后我蹭了她一次，觉得吸收挺好，而且她皮肤最近变好好，我就动心了，也买了。希望过一段时间美美哒</div>'
	quotes[15]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 吸收挺快的，没有刺鼻的味道，不错！</div>'
	quotes[16]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 用了一瓶，皮肤紧致了些，肤色提亮了，脸上皱纹也有所淡化， 在使用的过程中，希望坚持能有更好的效果</div>'
	quotes[17]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 真的不错，去皱纹很明显，很喜欢，</div>'
	quotes[18]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 看大家的反馈效果都挺不错的，就买来试试，才用了1瓶吧脸上的小细纹都没有了</div>'
	quotes[19]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 可以增加皮肤弹性、改善松弛与细纹效果真的很好哦，大爱</div>'
	quotes[20]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 物流超快，只是刚开始用，所以还不知道效果怎么样呢，如果好会追评</div>'
	quotes[21]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 宝贝收到了，在手上试了一下，滑滑的润润的，容易吸收，两瓶能用一段时间了，经常熬夜脸上长了皱纹，看了好多款，最终选了这款，好东西一定要分享。</div>'
	quotes[22]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 收到了，看着好大尚，期待使用效果</div>'
	quotes[23]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 价位合适，量还挺大的呢，皮肤松弛毛孔粗大都有效果</div>'
	quotes[24]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 突然发现自己脸很油腻，暗黄，还有细纹了。简直疯了。看完评价抱着试试心态买了两瓶。感觉用完以后脸很水嫩，最欣慰的是很紧致，慢慢看后面的效果吧</div>'
	quotes[25]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 生孩子，照顾孩子，真的非常累，老的非常快，女人应该都懂，朋友介绍这款抗皱膏已经用了很久了，每天都在坚持使用，就一直坚持使用到现在，我那严重的鱼尾纹和法令纹都淡化没了，肌肤也恢复了弹性，光滑了许多，非常的满意，让我变回年轻。</div>'
	quotes[26]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 去皱纹真的要有耐心，需要一段时间。这款抗皱膏坚持使用下去，去皱纹效果真心好</div>'
	quotes[27]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 买了好多次了，去皱纹的效果非常棒</div>'
	quotes[28]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 皮肤的效果确实好多了，又白又细嫩，颈部的皱纹也变浅了，特意用了看出效果以后才来评价，东西确实好。再来追加几瓶</div>'
	quotes[29]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 用了皮肤好了不止一个档次，滑滑嫩嫩的，让人感觉年轻不少呢，细纹都淡化了呢，关键物美价廉</div>'
	quotes[30]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 使用了好几天产品效果也非常好，每次用的时候按摩一下眼周，细小的鱼尾纹都看不到了，眉尾的斑也淡了，眼袋也不怎么明显了，好产品，值得拥有！</div>'
	quotes[31]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 效果很好，眼角纹好了许多光滑平整，全脸涂抹皮肤会有个紧致的明显效果， 有弹性，额头纹也能淡化，不过我本身额头纹少。</div>'
	quotes[32]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 皮肤从二十多岁就要开始保养，女人们不要错过和放弃美丽的机会！我算是老粉了，产品不错，但要保持哦！</div>'
	quotes[33]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 不是吹真的好用，主要是额头的细纹现在己经没有了</div>'
	quotes[34]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 鱼尾纹一笑起来就有，本人鱼尾纹比较严重一点，也是用过很多产品也没有好起来，朋友介绍买了俩个刚开始用，感觉用完是比较紧致</div>'
	quotes[35]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 收到就迫不及待用了一次试了一下，味道淡淡的挺好闻的，比较粘稠，但是吸收非常好，用完皮肤很光滑</div>'
	quotes[36]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 看中的是这个可以去皱纹抗衰老，挺好的，推荐</div>'
	quotes[37]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 用了之后皮肤紧致有弹性，每天都在坚持使用，去皱抗衰老效果特好。女人到了一定年龄不保养不行啊，朋友们都说越来越年轻了</div>'
	quotes[38]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 眼部有细纹和眼袋，一瓶快用完了，感觉淡了很多</div>'
	quotes[39]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 买来去皱纹的 包装挺精美的。</div>'
	quotes[40]='<div class="clear"><p class="ping"><span><img src="ping.png" alt=""></span> 现在眼部和面部细纹减轻好多，之前用过的产品都对我无效，没想到这款对我这么有帮助，谢谢</div>'

	var quote=quotes[rand1]
	document.write(quote)
	document.write('<br>');
	
	document.write('</div>')
}
/*///////////////////////////////////////// WFORDERJSEND /////////////////////////////////////////*/