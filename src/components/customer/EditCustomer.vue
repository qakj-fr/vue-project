<template>
	<div>
		<h2>修改客户信息:{{id}}</h2>
		名字:<input type="text" v-model="customer.name" /><br />
		年龄:<input type="text" v-model="customer.age" /><br />
		性别:<input type="radio" name="sex" value="0" v-model="customer.sex" />man
			<input type="radio" name="sex" value="1" v-model="customer.sex" />woman<br />
		邮箱:<input type="email" v-model="customer.email" /><br />
		电话:<input type="text" v-model="customer.phone" /><br />
		生日:<input type="text" v-model="customer.birth" /><br />
		级别:
		<select v-model="customer.level">
			<option value="0">重要客户</option>
			<option value="1">普通客户</option>
			<option value="2">潜在客户</option>
		</select>
		<br />
		<button class="btn btn-info" @click="updateCustomer">修改</button>
	</div>
</template>

<script>
	export default{
		data:function(){
			return {
				id:this.$route.query.id,
				customer:{}
			};
		},
		mounted:function(){
			this.getCustomerById();
		},
		methods:{
			getCustomerById:function(){
				var obj=this;
				$.ajax({
					type:"post",
					url:"http://localhost:8082/crm/customerController/getCustomerById",
					data:{
						time:new Date().getTime(),
						id:obj.id
					},
					success:function(result){
						if(result.code=="200"){
							obj.customer=result.data;
						}else{
							alert("回显失败");
						}
					},
					xhrFields: {
		              	withCredentials: true
		            }
				});
			},
			updateCustomer:function(){
				var obj=this;
				$.ajax({
					type:"post",
					url:"http://localhost:8082/crm/customerController/updateCustomer",
					data:{
						time:new Date().getTime(),
						id:obj.customer.id,
						name:obj.customer.name,
						age:obj.customer.age,
						sex:obj.customer.sex,
						email:obj.customer.email,
						phone:obj.customer.phone,
						birth:obj.customer.birth
					},
					success:function(result){
						if(result.code=="200"){
							alert(result.msg);
							obj.$router.push("/main/customer");
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