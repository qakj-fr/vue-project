<template>
	<div>
		<button class="btn btn-default" @click="addCheckCenter">
			<i class="glyphicon glyphicon-plus" ></i>&nbsp;添加商品
		</button>
	    <input type="text" placeholder="请输入查询客户的名字" style="border: 1px gray solid; width: 200px; height: 30px; margin-left: 450px;" v-model="searchName" >
	    <button class="btn btn-default" @click="getCheckCenterAndSupplierInfo" >
	   		<i class="glyphicon glyphicon-search"></i>&nbsp;搜索
	    </button>
		<table class="table table-hover">
          <thead>
            <tr>
              <th>供应商姓名</th>
              <th>供应商品</th>
              <th>生产日期</th>
              <th>保质期</th>
              <th>相关操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cCenter in checkcenter">
              <!--<td>{{cCenter.id}}</td>-->
              <td>{{cCenter.suppliername}}</td>
              <td>{{cCenter.commodityname}}</td>
              <td>{{cCenter.manufacturedate}}</td>
              <td>{{cCenter.expire}}</td>
              <td>
              	<a href="javascript:void(0)" ><i class="glyphicon glyphicon-wrench" </i></a>
                <a href="javascript:void(0)"  @click="delCheckCenter(cCenter.id)"><i class="glyphicon glyphicon-trash"></i></a>
              </td>
            </tr>
          </tbody>
        </table>
	</div>
</template>

<script>
	export default{
		data:function(){
			return {
				checkcenter:[],
				searchName:"",
			};
		},
		mounted:function(){
			this.getAllCheckCenter();
		},
		methods:{
			getAllCheckCenter:function(){
				var obj=this;
				$.ajax({
					type:"post",
					url:"http://localhost:8082/crm/checkCenterController/getAllCheckCenter",
					data:{time:new Date().getTime()},
					success:function(result){
						obj.checkcenter=result.data;
					},
					xhrFields: {
			            withCredentials: true
			        }
				});
			},
			delCheckCenter:function(id){
				var obj=this;
				alert(id);
				if(confirm("确定删除吗？")){
					$.ajax({
						type:"post",
						url:"http://localhost:8082/crm/checkCenterController/delete",
						data:{time:new Date().getTime(),id:id},
						success:function(result){
							if(result.code=="200"){
								alert(result.msg);
								obj.getCheckCenterAndSupplierInfo();
							}else{
								alert("删除失败");
							}
						},
						xhrFields: {
			              	withCredentials: true
			            }
					});
				}	
			},
			addCheckCenter:function(){
				this.$router.push("/main/addCheckCenter");
			},
			getCheckCenterAndSupplierInfo:function(){
				var obj=this;
				$.ajax({
					type:"post",
					url:"http://localhost:8082/crm/checkCenterController/findAll",
					data:{time:new Date().getTime(),searchName:obj.searchName},
					success:function(result){
						if(result.code=="200"){
							obj.checkcenter=result.data;
						}else{
							alert("获取失败");
						}
					},
					xhrFields: {
			            withCredentials: true
			        }
				});
			}
		}
	}
</script>

<style>
</style>