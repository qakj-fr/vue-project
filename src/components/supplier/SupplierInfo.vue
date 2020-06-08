<template>
	<div>
		<button class="btn btn-default" @click="toAddSupplierInfo">
			<i class="glyphicon glyphicon-plus"></i>&nbsp;添加供应商
		</button>
	    <input type="text" placeholder="请输入查询客户的名字" style="border: 1px gray solid; width: 200px; height: 30px; margin-left: 450px;" v-model="searchName">
	    <button class="btn btn-default" @click="selectSupplierInfo">
	   		<i class="glyphicon glyphicon-search"></i>&nbsp;搜索
	    </button>
		<table class="table table-hover">
          <thead>
            <tr>
              <th>供应商姓名</th>
              <th>供应商地址</th>
              <th>供应商电话</th>
              <th>供应商品</th>
              <th>相关操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="sInfo in supplierInfo">
              <td>{{sInfo.suppliername}}</td>
              <td>{{sInfo.supplieraddress}}</td>
              <td>{{sInfo.supplierphone}}</td>
              <td>{{sInfo.commodityname}}</td>
              <td>
                <a href="javascript:void(0)" @click="toUpdateSupplierInfo(sInfo.id)" ><i class="glyphicon glyphicon-wrench"></i></a>
                <a href="javascript:void(0)" @click="deleteSupplierInfo(sInfo.id)" ><i class="glyphicon glyphicon-trash"></i></a>
                <a href="javascript:void(0)" @click="toDetailsSupplierInfo(sInfo.id)" ><i class="glyphicon glyphicon-align-justify"></i></a>
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
				searchName:"",
				supplierInfo:[]
			};
		},
		mounted:function(){
			this.getSupplierInfo();
		},
		methods:{
			toUpdateSupplierInfo:function(id){
				this.$router.push({name:"UpdateSupplierInfo",query:{id:id}});
			},
			toDetailsSupplierInfo:function(id){
				this.$router.push({name:"DetailsSupplierInfo",query:{id:id}});
			},
			toAddSupplierInfo:function(){
				this.$router.push("/main/addSupplierInfo");
			},
			selectSupplierInfo:function(){
				var obj=this;
				$.ajax({
					type:"post",
					url:"http://localhost:8082/crm/supplierInfoController/selectSupplierInfo",
					data:{time:new Date().getTime(),searchName:obj.searchName},
					success:function(result){
						if(result.code=="200"){
							obj.supplierInfo=result.data;
						}else{
							alert("有问题，请联系管理员");
						}
					},
					xhrFields: {
			            withCredentials: true
			        }
				});
			},
			deleteSupplierInfo:function(id){
				var obj=this;
				if(confirm("确定删除吗？")){
					$.ajax({
						type:"post",
						url:"http://localhost:8082/crm/supplierInfoController/deleteSupplierInfo",
						data:{time:new Date().getTime(),id:id},
						success:function(result){
							if(result.code=="200"){
								alert(result.msg);
								obj.getSupplierInfo();
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
			getSupplierInfo:function(){
				var obj=this;
				$.ajax({
					type:"post",
					url:"http://localhost:8082/crm/supplierInfoController/getSupplierInfo",
					data:{time:new Date().getTime()},
					success:function(result){
						if(result.code=="200"){
							obj.supplierInfo=result.data;
						}else{
							alert("获取数据失败");
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