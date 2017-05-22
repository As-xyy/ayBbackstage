<template>
	<div id="agreement" class="agreement">
		<div id="car_sure_top">
			<div class="find">
				<span>查询条件</span>
			</div>
			<div id="car_sure_middle">
				<div class="middle_first clear">
					<div>
						<label>协议代码</label>
						<input type="" name="" class="common_in" />
					</div>
					<div>
						<label>协议名称</label>
						<input type="" name="" class="common_in" />
					</div>
					<div>
						<label>合作保险公司</label>
						<select>
							<option>1</option>
							<option>2</option>
						</select>
					</div>
					<div>
						<label>合作营业部</label>
						<input type="" name="">
					</div>
				</div>
			</div>
			<div class="btns">
				<button class="findbtn">查询</button>
				<button class="searchbtn">搜索</button>
			</div>

		</div>
		<table class="table table-striped table-hover table-bordered table-condensed">
			<thead>
				<tr>
								
					<th>No.	</th>
					<th>协议代码</th>
					<th>协议名称</th>
					<th>协议类型</th>
					<th>合作营业部</th>
					<th>合作保险公司</th>
					<th>所属渠道</th>
					<th>协议生效日期</th>
					<th>协议失效日期</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>2</td>
					<td>3</td>
					<td></td>
					<td></td>
					<td>正常</td>
					<td>2017-05-09 08:54:28</td>
					<td>2017-05-09 08:54:28</td>
					<td>2017-05-09 08:54:28</td>
					<td>
						<a href="javascript:void(0)">删除</a>
						<a href="javascript:void(0)">编辑</a>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
	import './privateAgreement.scss'
	module.exprots = {}
</script>