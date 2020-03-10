/**
 *      过滤器
 *    1 转换后台返回的状态码
 *    2 转换时间类型格式
 */


/**  判读是否为空
 * @param {Object} val
 */


let serverTags = ['退役安置','优抚褒奖','就业创业','思想权益','军休服务','烈士纪念馆']
const isNullOrEmpty = function (val) {
  if (val == null || val == "" || typeof(val) == undefined) {
    return true;
  } else {
    return false;
  }
}
/**
 * 转换时间格式
 */
const timeFormat = (value, format) => {
  let date = new Date(value);
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  let h = date.getHours();
  let min = date.getMinutes();
  let s = date.getSeconds();
  let result = "";
  if (format == undefined) {
    result = `${y}-${m < 10 ? "0" + m : m}-${d < 10 ? "0" + d : d} ${
      h < 10 ? "0" + h : h
      }:${min < 10 ? "0" + min : min}:${s < 10 ? "0" + s : s}`;
  }
  if (format == "yyyy-mm-dd") {
    result = `${y}-${m < 10 ? "0" + m : m}-${d < 10 ? "0" + d : d}`;
  }
  if (format == "yyyy-mm") {
    result = `${y}-${m < 10 ? "0" + m : m}`;
  }
  if (format == "mm-dd") {
    result = ` ${mm < 10 ? "0" + mm : mm}:${ddmin < 10 ? "0" + dd : dd}`;
  }
  if (format == "hh:mm") {
    result = ` ${h < 10 ? "0" + h : h}:${min < 10 ? "0" + min : min}`;
  }
  if (format == "yyyy") {
    result = `${y}`;
  }
  return result;
};

/**
 * 手机号实现掩码
 */
const phoneMask = function (val) {
  if (val) {
    return val.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
  }
  return val;
}
/**
 * 首页服务标签转换
 */
const serverTag = function (val){
	return serverTags[val]
}
export {
  isNullOrEmpty,
  timeFormat,
  phoneMask,
  serverTag
}
