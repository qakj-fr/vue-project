<template>
	<div>
		<form class="form-horizontal">
		  <div class="form-group">
		    <label for="inputEmail3" class="col-sm-2 control-label" >部门人员</label>
		    <div class="col-sm-10">
		      <input type="text" class="form-control" id="inputEmail3" placeholder="请输入部门人员" v-model="CommunicationMGTs.name">
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="inputPassword3" class="col-sm-2 control-label">地址</label>
		    <div class="col-sm-10">
		      <input type="text" class="form-control" id="inputPassword3" placeholder="请输入地址" v-model="CommunicationMGTs.address">
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="inputPassword4" class="col-sm-2 control-label">所属部门</label>
		    <div class="col-sm-10">
		      <input type="text" class="form-control" id="inputPassword4" placeholder="请输入所属部门" v-model="CommunicationMGTs.depart">
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="inputPassword2" class="col-sm-2 control-label">部门编号</label>
		    <div class="col-sm-10">
		      <input type="text" class="form-control" id="inputPassword2" placeholder="请输入部门编号" v-model="CommunicationMGTs.departno">
		    </div>
		  </div>
		  
		  <div class="form-group">
		    <div class="col-sm-offset-2 col-sm-10">
		      <button type="submit" class="btn btn-default" @click="addCommunicationMGT">添加</button>
		    </div>
		  </div>
		</form>
	</div>
</template>

<script>
	export default{
		data:function(){
			return {
				CommunicationMGTs:{
					name:"",
					address:"",
					depart:"",
					departno:""
				}
			}
		},
		methods:{
			addCommunicationMGT:function(){
				var obj=this;
				$.ajax({
					type:"post",
					url:"http://localhost:8082/crm/communicationmgtController/addCommunicationmgt",
					data:{
						time:new Date().getTime(),
						name:obj.CommunicationMGTs.name,
						address:obj.CommunicationMGTs.address,
						depart:obj.CommunicationMGTs.depart,
						departno:obj.CommunicationMGTs.departno,
					},
					success:function(result){
						if(result.code=="200"){
							alert(result.msg);
							obj.$router.push("/main/CommunicationMGT");
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