<template>
	<div>
		供应商名字:<input type="text" v-model="supplierInfo.suppliername" /><br /><br />
		供应商地址:<input type="text" v-model="supplierInfo.supplieraddress" /><br /><br />
		供应商电话:<input type="text" v-model="supplierInfo.supplierphone" /><br /><br />
		供应商品:<input type="text" v-model="supplierInfo.commodityname" /><br /><br />
		<button class="btn btn-info" @click="addSupplierInfo">添加</button>
	</div>
</template>

<script>
	export default{
		data:function(){
			return {
				supplierInfo:{
					suppliername:"",
					supplieraddress:"",
					supplierphone:"",
					commodityname:""
				}
			};
		},
		methods:{
			addSupplierInfo:function(){
				var obj=this;
				$.ajax({
					type:"post",
					url:"http://localhost:8082/crm/supplierInfoController/addSupplierInfo",
					data:{
						time:new Date().getTime(),
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
							alert("添加失败");
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