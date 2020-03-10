/**
 * 常用方法定义
 * 1 定义一些工具类的方法
 * 2 定义一些常用的方法
 */

let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

export default {
	//获取星期
	weekDays() {
		return weeks;
	},
	//存储对象
	getUserDefauls(val) {
		return sessionStorage.getItem(val);
	},
	//用户获取
	getUserInfo() {
		return localStorage.getItem('_user_info');
	},
	//用户
	setUserInfo(val) {
		localStorage.setItem('_user_info', val);
	},
  //cookie
  setUserCookie(val) {
  	localStorage.setItem('_cookie', val);
  },
  //cookie获取
  getUserCookie() {
  	return localStorage.getItem('_cookie');
  },
	//验证用户是否登录
	isLogin() {
		if ( !this.getUsernamePassword()) {
			return false;
		} else {
			return true;
		}
	},
	//清除登录信息
	clearLoinInfo() {
    localStorage.removeItem('UsernamePassword');
		localStorage.removeItem('_user_info');
		localStorage.removeItem('_cookie');
	},
  //格式化日期时间
 formatDate(sDate){
	var result;
　　var sdate = new Date(sDate);
　　var now = new Date();
　　var days = now.getTime() - sdate.getTime();
　　var day = days / (1000 * 60 * 60 * 24);
    if(day<=1 && sdate.getDate()==now.getDate()){
      result=sdate.getHours()+":"+sdate.getMinutes();
    }else{
      result=(sdate.getMonth()+1)+"月"+sdate.getDate()+"日";
    }
	　　return result;
	},
  DateFormat(date,fmt) {
      var o = {
          "M+": date.getMonth() + 1, //月份
          "d+": date.getDate(), //日
          "H+": date.getHours(), //小时
          "m+": date.getMinutes(), //分
          "s+": date.getSeconds(), //秒
          "q+": Math.floor((date.getMonth() + 3) / 3), //季度
          "S": date.getMilliseconds() //毫秒
      };
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      return fmt;
  },
  //保存用户登录
  saveUsernamePassword(obj){
    localStorage.setItem('UsernamePassword', JSON.stringify(obj));
  },
  //获取用户登录
  getUsernamePassword(){
    return localStorage.getItem('UsernamePassword');
  },

  // 设置min-height
	cliHeight(e) {
		var h = document.documentElement.clientHeight || document.body.clientHeight;
		// document.getElementsByTagName('html')[0].style.minHeight = h + 'px';
		document.getElementsByClassName(e)[0].style.minHeight = h + 'px';
	},

	// 把光标放到最后面
	setTextLast(i) {
		if(i.setSelectionRange){//火狐
			i.setSelectionRange(i.value.length, i.value.length); 
			i.focus();
		}else if(i.createTextRange){//ie
			let rtextRange =i.createTextRange();
			rtextRange.moveStart('character',i.value.length);
			rtextRange.collapse(true);
			rtextRange.select();
		}
	}
}
