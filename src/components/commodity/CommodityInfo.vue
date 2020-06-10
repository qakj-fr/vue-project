<template>
	<div>
		
      <button class="btn btn-default" @click="toAddProduct">
      	添加商品
      </button>
      <br />
	      展示商品的页面
	  <div v-for="p in products">
	  	商品名字:{{p.name}}<br />
	  	商品价格:{{p.price}}<br />
	  	商品图片:<img v-bind:src="p.img" /><br />
	  </div>
	        
	</div>
</template>

<script>
	export default{
		data:function(){
			return {
				products:[]
			};
		},
		mounted:function(){
			this.getAllProducts();
		},
		methods:{
			toAddProduct:function(){
				this.$router.push("/main/addProduct");
			},
			getAllProducts:function(){
				var obj=this;
				$.ajax({
					type:"post",
					url:"http://localhost:8082/crm/productController/getAllProducts",
					data:{time:new Date().getTime()},
					success:function(result){
						if(result.code=="200"){
							obj.products=result.data;
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