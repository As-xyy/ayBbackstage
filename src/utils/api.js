//引进vue
import Vue from 'vue';
//引进resource插件并定义城对象
import VueResource from 'vue-resource'
//安装定义好 的  resource 插件
Vue.use(VueResource)
Vue.http.options.emulateJSON = true
Vue.http.options.emulateHTTP = true
//定义从 uitl引进的GetQueryString方法
// var GetQueryString = require('../components/uitl.js').GetQueryString

//定义数据接口
//测试接口
const API_ROOT = 'http://120.76.99.130/openapi'
// 正式接口
// const API_ROOT = 'https://bmp.aoyunsoft.com/openapi'

//var alert = require('mint-ui').MessageBox
//var Indicator = require('mint-ui').Indicator

//Vue.http.interceptors.push(function (request, next) {
//
//  request.params.token = window.localStorage.token
//
//
//// 加载logding
//      Indicator.open({
//          text: '加载中...',
//          spinnerType: 'fading-circle'
//      });
//
//  next(function (response) {
//
//      Indicator.close();
//
//  });
//
//});
//定义API对象装装接口字符
const API = {
    // 查询可用的协议
    agreement:API_ROOT + '/protocol/queryVailProtocol?access_token',

    // 查询协议费率
    rate:API_ROOT + '/policy/protocolProductRate/queryRateByFactor?access_token'


}
//将对象方法裸露出来
module.exports = {
    findAgreement,
    findRate

}

// 查询可用的协议
function findAgreement(startDate, insComCode,partnerId,insuredArea) {
    return Vue.http.post(API.agreement, {
        //定义对象拿到参数
        params: {
            startDate: startDate, //需查询的日期
            insComCode: insComCode, // 保险公司编号
            partnerId:partnerId, //合作伙伴ID
            insuredArea:insuredArea //投保区域
        }
    })
}

//查询费用协议费率
function findRate(protocolId, productId,applyDate,starLevel,seatNo,newFlag,turnRenew,useProperty,carType,accTimes) {
    return Vue.http.post(API.rate, {
        "protocolId": "65435665465678",
        "productId": "76567876546724350",
        "applyDate": "2017-05-03"
    }
        //定义对象拿到参数
//      params: {
//          protocolId: protocolId, //协议ID
//          productId: productId, // 产品ID
//          applyDate:applyDate, //查询日期
//          starLevel:starLevel, //营业部等级
//          seatNo:seatNo,//核定座位数
//          newFlag:newFlag,//是否新车
//          turnRenew:,turnRenew,//转续保
//          useProperty:useProperty,//使用性质
//          carType:carType,//汽车种类
//          accTimes:accTimes//出险次数
//      }
    )
}

