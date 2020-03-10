//接口
import {
	ApiIp
} from "@/config";
const userlogin = `${ApiIp}` + "/app/userlogin" //用户登陆接口
const userlogout = `${ApiIp}` + "/app/userlogout" //用户退出登录接口
const userregist = `${ApiIp}` + "/app/userregist" //用户注册接口
const sendSms = `${ApiIp}` + "/app/sendSms" //发送短信接口
const getuserinfo = `${ApiIp}` + "/appori/getuserinfo"//用户基本信息
const editUserInfo = `${ApiIp}` + "/appori/editUserInfo"//编辑用户基本信息
const changePassword= `${ApiIp}` + "/appori/changePassword"//修改用户密码
const changeMobile= `${ApiIp}` + "/appori/changeMobile"//修改用户手机号码
const getDealList= `${ApiIp}` + "/appori/getDealList"//结算清单列表
const getClueList = `${ApiIp}` + "/appreporter/getClueList"//线索列表
const getClueTypeList = `${ApiIp}` + "/appreporter/getClueTypeList"//线索类型列表
const addClue = `${ApiIp}` + "/appreporter/addClue"//添加线索
const editClue = `${ApiIp}` + "/appreporter/editClue"//编辑线索
const delClue = `${ApiIp}` + "/appreporter/delClue"//删除线索
const applyInvest = `${ApiIp}` + "/appreporter/applyInvest"//申请调查
const getInvestById = `${ApiIp}` + "/appinvestigater/getInvestById"//根据ID获取调查信息
const addInvest = `${ApiIp}` + "/appinvestigater/addInvest"//添加调查信息
const editInvest = `${ApiIp}` + "/appinvestigater/editInvest"//编辑调查信息
const delInvest = `${ApiIp}` + "/appinvestigater/delInvest"//删除调查信息
const getTCaseList = `${ApiIp}` + "/applawyer/getTCaseList"//案件列表
const getCaseTypeList = `${ApiIp}` + "/applawyer/getCaseTypeList"//案件类型列表
const getCaseRangeList = `${ApiIp}` + "/applawyer/getCaseRangeList"//案件范围列表
const addTCase = `${ApiIp}` + "/applawyer/addTCase"//添加案件
const editTCase = `${ApiIp}` + "/applawyer/editTCase"//编辑案件
const delTCase = `${ApiIp}` + "/applawyer/delTCase"//删除案件
const brandGetClueList = `${ApiIp}` + "/appbrand/getClueList"//品牌商获取线索列表

export default {
	userlogin,
  userlogout,
  userregist,
  sendSms,
  getuserinfo,
  editUserInfo,
  changePassword,
  changeMobile,
  getDealList,
  getClueList,
  getClueTypeList,
  addClue,
  editClue,
  delClue,
  applyInvest,
  getInvestById,
  addInvest,
  editInvest,
  delInvest,
  getTCaseList,
  getCaseTypeList,
  getCaseRangeList,
  addTCase,
  editTCase,
  delTCase,
  brandGetClueList
}
