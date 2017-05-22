<template>
  <div id="addcarsure">
       <div class="addcar">
        <!-- 标题 -->
        <div class="addtitle">
          <span></span>
           新增保单
          <span>X</span>
        </div>
        <!-- 单证信息 -->
        <div class="single">
          <div class="single_mes">单证信息</div>
          <div class="single_first clear">
           <div class="clear">
            <label><span style="text-align:right">投保印刷号</span></label>
            <input type="" name="" class="common_in"/>
          </div>
          <div>
           <label>发票印刷号</label>
           <input type="" name="" class="common_in"/>
         </div>
         <div>
           <label>保险卡印刷号</label>
           <input type="" name="">
         </div>
         <div>
           <label>交强标志印刷号</label>
           <input type="" name="">
         </div>
       </div>
        </div>
        <!-- 保单信息 -->
        <div class="surecode_message">
        <div class="sure_mes">保单信息</div>
         <div class="sure_first clear">
           <div>
            <label>投保单号</label>
            <input type="" name="" class="common_in"/>
          </div>
          <div>
           <label>投保日期</label>
           <input type="" name="" class="common_in"/>
         </div>
         <div>
           <label>所属保险公司</label>
           <input type="" name="">
         </div>
         <div>
           <label>所属营业部</label>
           <input type="" name="">
         </div>
       </div>
            <div class="sure_first clear">
           <div>
            <label>保单号</label>
            <input type="" name="" class="common_in"/>
          </div>
          <div>
           <label>出单日期</label>
           <input type="" name="" class="common_in"/>
         </div>
         <div>
           <label>起始日期</label>
           <input type="" name="">
         </div>
         <div>
           <label>终止日期</label>
           <input type="" name="">
         </div>
       </div>
            <div class="sure_first clear">
           <div>
            <label>投保区域</label>
            <input type="" name="" class="common_in"/>
          </div>
          <div>
           <label>保单主状态</label>
           <input type="" name="" class="common_in"/>
         </div>
         <div>
           <label>来源</label>
           <input type="" name="">
         </div>
         <div>
           <label>经办人姓名</label>
           <input type="" name="">
         </div>
       </div>
        </div>
        <!-- 投保人信息 -->
        <div class="sureperson_message">
          <div class="sureperson_mes">投保人信息</div>
          <div class="sureperson_first clear">
           <div>
            <label>保单号</label>
            <input type="" name="" class="common_in"/>
          </div>
          <div>
           <label>出单日期</label>
           <input type="" name="" class="common_in"/>
         </div>
         <div>
           <label>起始日期</label>
           <input type="" name="">
         </div>
         <div>
           <label>终止日期</label>
           <input type="" name="">
         </div>
       </div>
        </div>
        <!-- 被保人信息 -->
        <div class="passperson_message">
          <div class="passperson_mes">被保人信息</div>
          <div class="passperson_first clear">
          <h5>
            同投保人
            <input type="checkbox" name="" class="checkput"/>
          </h5>
            <div>
            <label>被保人姓名</label>
            <input type="" name="" class="common_in"/>
          </div>
          <div>
           <label>证件类型</label>
           <input type="" name="" class="common_in"/>
         </div>
         <div>
           <label>证件号码</label>
           <input type="" name="">
         </div>
         <div>
           <label>手机号码</label>
           <input type="" name="">
         </div>
          <div>
            <label>固定电话</label>
            <input type="" name="" class="common_in"/>
          </div>
          <div>
           <label>邮编</label>
           <input type="" name="" class="common_in"/>
         </div>
         <div>
           <label>通讯地址</label>
           <input type="" name="">
         </div>
       </div>
        </div>
        <!-- 产品信息 -->
        <div class="product_message">
          <div class="product_mes">产品信息</div>
          <div class="product_first clear">
            <div>
             <label>产品</label>
             <input type="" name="">
           </div>
            <div>
             <label>保费</label>
             <input type="" name="">
           </div>
            <div>
             <label>车船费</label>
             <input type="" name="">
           </div>
          <div>
             <label>印花费</label>
             <input type="" name="">
           </div>
          </div>
        </div>
        <!-- 车辆信息 -->
        <div class="product_car_message">
        <div class="product_car_mes">产品信息</div>
        <div class="product_car_first clear">
          <h5>
            同投保人
            <input type="checkbox" name="" class="checkput"/>
          </h5>
          <div>
           <label>车主</label>
           <input type="" name="">
         </div>
         <div>
           <label>证件类型</label>
           <input type="" name="">
         </div>
         <div>
           <label>证件号码</label>
           <input type="" name="">
         </div>
         <div>
           <label>车牌号码</label>
           <input type="" name="">
         </div>
        <div>
           <label>车牌种类</label>
           <input type="" name="">
         </div>
        <div>
           <label>使用性质</label>
           <input type="" name="">
         </div>
        <div>
           <label>座位数</label>
           <input type="" name="">
         </div>
        <div>
           <label>是否新车</label>
           <input type="" name="">
         </div>
        <div>
           <label>是否转续保</label>
           <select>
             <option>转保</option>
             <option>续保</option>
           </select>
         </div>
        <div>
           <label>出险次数</label>
           <input type="" name="">
         </div>
        <div>
           <label>赔款金额</label>
           <input type="" name="">
         </div>
         <div>
         <label>VIN号</label>
           <input type="" name="">
         </div>
        <div>
         <label>发动机号</label>
           <input type="" name="">
         </div>
        <div>
         <label>车架号</label>
           <input type="" name="">
         </div>
         <div>
            <label>车牌型号</label>
             <input type="" name="" placeholder="车系+型号">
        </div>
        <div>
        <label>吨位数</label>
          <input type="" name="" placeholder="千克">
        </div>
        <div>
        <label>排量</label>
          <input type="" name="" placeholder="L">
        </div>
        <div>
        <label>初登日期</label>
          <input type="" name="">
        </div>
        <div>
        <label>生产日期</label>
          <input type="" name="">
        </div>
        <div>
        <label>新车购置价</label>
          <input type="" name="" placeholder="万元">
        </div>
        <div>
        <label>购置日期</label>
          <input type="" name="" >
        </div>
        <div>
        <label>年审到期日</label>
          <input type="" name="" >
        </div>
        <div>
          <label>使用年限</label>
          <input type="" name="" >
        </div>
        <div>
          <label>实际价值</label>
          <input type="" name="" placeholder="万元" >
        </div>
        <div>
          <label>是否港澳车</label>
          <select>
            <option>是</option>
            <option>否</option>
          </select>
        </div>
        <div>
          <label>港澳车牌号码</label>
          <input type="" name="">
        </div>
        <div>
          <label>行驶里程</label>
          <input type="" name="" placeholder="公里">
        </div>
        <div>
        <label>安全配置</label>
          <input type="" name="">
        </div>
       </div>
        </div>
      </div>
  </div>
</template>




<script type="text/javascript">
  import './AddsureComponent.scss';
  export default {
    data: function() {
      return {

      }
    },
    methods:{
      // //菜单显示和隐藏
      // childCheck: function childCheck(index) {
      //   this.i = index;
      // },
      // index_business: function() {
      //   this.menus = [
      //     { name: '协议管理', child: [{ child_name: '协议定义（私有）', link: 'private' }, { child_name: '协议定义（平台）', link: 'public' }, { child_name: '费率设置', link: "rateSet" }, { child_name: '费率审核', link: 'rateAudit' }] },
      //     { name: '投保管理', child: [{ child_name: '车车险保单管理', link: 'carsure' },{ child_name: '保单审核', link: 'carsurecheck' }] }
      //   ]
      // }
    }
  }
</script>









