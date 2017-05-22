
<template>
  <div id="carsure">
    <div id="car_sure_top">
      <div class="find">
        <span>查询条件</span>
      </div>
      <div id="car_sure_middle">
        <div class="middle_first">
         <div>
          <label>投保单号</label>
          <input type="" name="" class="common_in"/>
        </div>
        <div>
         <label>保单号</label>
         <input type="" name="" class="common_in"/>
       </div>
       <div>
         <label>所属保险公司</label>
         <select>
           <option>1</option>
           <option>2</option>
         </select>
       </div>
       <div>
         <label>投保人姓名</label>
         <input type="" name="">
       </div>
       </div>
         <div class="middle_two">
         <div>
          <label>主被保人姓名</label>
          <input type="" name="" class="common_in"/>
         </div>
         <div>
         <label>保单主状态</label>
         <select>
           <option>1</option>
           <option>2</option>
         </select>
         </div>
         <div class="btn_c">
          <button class="findbtn">查询</button>
          <button class="searchbtn">搜索</button>
          <button class="newbtn">新建保单</button>
         </div>
         <div>
           <button class="copybtn">复制选中保单</button>
         </div>
        </div>
      </div>
    </div>
    <table class="table table-striped table-hover table-bordered table-condensed " >
       <thead>
        <tr>
          <th></th>
          <th>保单号</th>
          <th>所属保险公司</th>
          <th>所属营业部</th>
          <th>保单类型</th>
          <th>来源</th>
          <th>投保人姓名</th>
          <th>主被保人姓名</th>
          <th>保单主状态</th>
          <th>保费</th>
          <th>投保日期</th>
          <th>出单日期</th>
          <th>操作</th>
          <th>123</th>
          </tr>
       </thead>
       <tbody>
         <tr>
           <th class="check">
             <input type="radio" name="">
           </th>
           <td>1</td>
           <td>2</td>
           <td>3</td>
           <td>4</td>
           <td>5</td>
           <td>正常</td>
           <td>2017-05-09 08:54:28</td>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
           <td class="dobtn">
             <a href="javascript:void(0)">删除</a>
             <a href="javascript:void(0)">编辑</a>
           </td>
         </tr>
       </tbody>
     </table>
  </div>
</template>




<script type="text/javascript">
  import './CarsureComponent.scss';
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
