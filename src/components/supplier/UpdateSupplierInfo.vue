<template>
	<div>
		<h2>修改供应商信息：{{id}}</h2>
		供应商名字:<input type="text" v-model="supplierInfo.suppliername" /><br />
		供应商地址:<input type="text" v-model="supplierInfo.supplieraddress" /><br />
		供应商电话:<input type="text" v-model="supplierInfo.supplierphone" /><br />
		供应商电话:<input type="text" v-model="supplierInfo.commodityname" /><br />
		<button class="btn btn-info" @click="updateSupplierInfo">修改</button>
	</div>
</template>

<script>
	export default{
		data:function(){
			return {
				id:this.$route.query.id,
				supplierInfo:{}
			};
		},
		mounted:function(){
			this.getSupplierInfoById();
		},
		methods:{
			getSupplierInfoById:function(){
				var obj=this;
				$.ajax({
					type:"post",
					url:"http://localhost:8082/crm/supplierInfoController/getSupplierInfoById",
					data:{time:new Date().getTime(),id:obj.id},
					success:function(result){
						if(result.code=="200"){
							obj.supplierInfo=result.data;
						}else{
							alert("回显失败");
						}
					},
					xhrFields: {
		              	withCredentials: true
		            }
				});
			},
			updateSupplierInfo:function(){
				var obj=this;
				$.ajax({
					type:"post",
					url:"http://localhost:8082/crm/supplierInfoController/updateSupplierInfo",
					data:{
						time:new Date().getTime(),
						id:obj.id,
						suppliername:obj.supplierInfo.suppliername,
						supplieraddress:obj.supplierInfo.supplieraddress,
						supplierphone:obj.supplierInfo.supplierphone,
						commodityname:obj.supplierInfo.commodityname
					},
					success:function(result){
						if(result.code=="200"){
							alert(result.msg);
							obj.$router.push("/main/supplierInfo");
						}else{
							alert("修改失败");
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