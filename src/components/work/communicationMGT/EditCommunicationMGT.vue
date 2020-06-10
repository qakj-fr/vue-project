<template>
	<div>
		<h2>修改通讯人信息{{id}}</h2>
		名&emsp;&emsp;字:<input type="text" v-model="CommunicationMGT.name" /><br />
		地&emsp;&emsp;址:<input type="text" v-model="CommunicationMGT.address" /><br />
		销售部门:<input type="text" v-model="CommunicationMGT.depart" /><br />
		部门编号:<input type="text" v-model="CommunicationMGT.departno" /><br />
		<br />
		<button class="btn btn-info" @click="editCommunicationMGT">修改</button>
	</div>
</template>

<script>
	export default{
		data:function(){
			return {
				CommunicationMGT:{},
				id:this.$route.query.id
			}
		},
		mounted:function(){
			this.getCommunicationMGTById();
		},
		methods:{
			editCommunicationMGT:function(){
				var obj=this;
				$.ajax({
					type:"post",
					url:"http://localhost:8082/crm/communicationmgtController/updateCommunicationmgt",
					data:{
						time:new Date().getTime(),
						id:obj.CommunicationMGT.id,
						name:obj.CommunicationMGT.name,
						address:obj.CommunicationMGT.address,
						depart:obj.CommunicationMGT.depart,
						departno:obj.CommunicationMGT.departno,
					},
					success:function(result){
						if(result.code=="200"){
							alert(result.msg);
							obj.$router.push("/main/CommunicationMGT");
						}else{
							alert("修改失败");
						}
					},
					xhrFields: {
		              	withCredentials: true
		            }
				});
			},
			getCommunicationMGTById:function(){
				var obj=this;
				$.ajax({
					type:"post",
					url:"http://localhost:8082/crm/communicationmgtController/getCommunicationmgtById",
					data:{time:new Date().getTime(),id:obj.id},
					success:function(result){
						if(result.code=="200"){
							obj.CommunicationMGT=result.data;
						}else{
							alert("回显失败");
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