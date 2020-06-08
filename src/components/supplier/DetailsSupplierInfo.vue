<template>
	<div>
		供应商编号：{{supplierInfo.id}}<br />
    	供应商名字：{{supplierInfo.suppliername}}<br />
    	供应商地址：{{supplierInfo.supplieraddress}}<br />
    	供应商电话：{{supplierInfo.supplierphone}}<br />
    	供应商品：{{supplierInfo.commodityname}}<br />
    	<a href="javascript:void(0)" @click="goback()">返回...</a>
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
			this.getSupplierInfo();
		},
		methods:{
			goback:function(){
		        this.$router.go(-1)
		    },
		    getSupplierInfo:function(){
				var obj=this;
				$.ajax({
					type:"post",
					url:"http://localhost:8082/crm/supplierInfoController/getSupplierInfoById",
					data:{time:new Date().getTime(),id:obj.id},
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