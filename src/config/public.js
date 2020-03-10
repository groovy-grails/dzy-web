/**
 * Created by 123 on 2018/1/30.
 */
// new FastClick(document.body); //解决点击事件延迟问题

function fontSize(){
   var deviceWidth = document.documentElement.clientWidth;
	document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
}
fontSize();
$(window).bind("resize",function(){fontSize();});