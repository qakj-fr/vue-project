<template>
	<div>
		<h2>商品添加</h2>
		<form action="http://www.baidu.com" enctype="multipart/form-data" id="myform">
			名字:<input type="text" name="productName" /><br />
			价格:<input type="text" name="productPrice" /><br />
			图片:<input type="file" name="img" /><br />
			<input type="button" value="添加" @click="addProduct" /><br />
		</form>
	</div>
</template>

<script>
	export default{
		methods:{
			addProduct:function(e){
				var event=e || window.event;
				var obj=this;
				event.preventDefault();
				var formDate=new FormData($("#myform")[0]);
				$.ajax({
					type:"post",
					url:"http://localhost:8082/crm/productController/addProduct",
					data:formDate,
					success:function(result){
						if(result.code == "200"){
		                    alert(result.msg);
		                    obj.$router.push("/main/commodityInfo");
		                }else{
		                    alert(result.msg);
		                }
					},
					xhrFields: {
	                  	withCredentials: true
	                },
	                contentType: false,
	                processData: false,
				});
			}
		}
	}
</script>

<style>
</style>