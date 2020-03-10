import {ApiIp} from "@/config";
import { MessageBox } from 'mint-ui';
function HttpAjax(){
  this.httpUrl=""; //后台URI接口地址
  return this;
}

HttpAjax.prototype = {
	xhrFields: {
	        withCredentials: true
      },
      
  /**
   * init方法初始化fetch请求
   * @param opts 为fetch请求方法配置参数
   */
  "init": async function(opts){
    return new Promise((resolve,reject)=>{
      fetch(this.httpUrl,opts).then((response)=>{
         response.json().then((data)=>{
           console.log(data);
           if (data.RT_F=='10') {
            MessageBox.confirm('请重新登录？').then(action => {
              if (action == 'confirm') {//确认的回调
                window.location.href = '/'     
                }
            });
           }
           resolve(data);
         }).catch((err)=>{
           console.warn("error:"+err);
           reject(err);
         });
       }).catch((err)=>{
         console.warn(err);
         reject(err);
       });
    });
  },
  /**
   * default默认请求方式：POST请求
   * @param urlStr 请求接口地址
   * @param sendData 请求参数
   */
  "default": async function(urlStr,sendData){
    this.httpUrl=`${ApiIp}/${urlStr}`;
    const opts={
      method: 'POST',
      headers: {
          'Accept':'application/json',
          'Content-Type':'application/json',  
      },
      body: JSON.stringify(sendData)
    };
    return this.init(opts);
  },
  /**
   * 使用get请求方式：GET请求，将请求参数通过ObjtoUrl方法实现url后接形式
   * @param urlStr 请求接口地址
   * @param sendData 请求参数
   */
  "get": async function (urlStr,sendData){
      this.httpUrl=`${ApiIp}/${urlStr}`;
    if(sendData){
      this.httpUrl+=`?${ObjToUrl(sendData)}`;
    }
    const opts={
      method: 'GET'
    };
    return this.init(opts);
  },
  /**
   * 使用post请求方式：POST请求，后台坑逼有时候POST请求内容类型可能
   * 会使用x-www-form-urlencoded、form-data、json其中的一种，好南啊！！！
   * @param urlStr 请求接口地址
   * @param sendData 请求参数
   * @param urlencoded true表示开启ContentType: application/x-www-form-urlencoded
   */
  "post": async function (urlStr,sendData,urlencoded = false){
    this.httpUrl=`${ApiIp}/${urlStr}`;
    let headers={
      'Content-Type':'application/json;charset=UTF-8',
	  'appType':'app'
    },body=null;
    if(urlencoded){
      headers={
        'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
      };
      body=ObjToUrl(sendData);
    }
    if(sendData instanceof FormData){
      body=sendData;
    }else{
      body=JSON.stringify(sendData);
    }
    const opts={
      method: 'POST',
      headers: headers,
      body: body
    };
    return this.init(opts);
  }
}

//JSON转URL格式
function ObjToUrl(obj){
  if(obj instanceof Object){
    const keys=Object.keys(obj);
    let url_str='';
    keys.forEach((item)=>{
      url_str+=`&${item}=${obj[item]}`;
    });
    return url_str.substr(1,);
  }
}
  


export const FetchHttp = new HttpAjax();