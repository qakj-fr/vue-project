<template>
	<div>
		<form class="form-horizontal">
		  <div class="form-group">
		    <label for="inputEmail3" class="col-sm-2 control-label" >通讯名字</label>
		    <div class="col-sm-10">
		      <input type="text" class="form-control" id="inputEmail3" placeholder="通讯名字" v-model="AddressList.name">
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="inputPassword3" class="col-sm-2 control-label">通讯人电话</label>
		    <div class="col-sm-10">
		      <input type="text" class="form-control" id="inputPassword3" placeholder="通讯人电话" v-model="AddressList.phone">
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="inputPassword4" class="col-sm-2 control-label">通讯人邮箱</label>
		    <div class="col-sm-10">
		      <input type="email" class="form-control" id="inputPassword4" placeholder="通讯人邮箱" v-model="AddressList.email">
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="inputPassword2" class="col-sm-2 control-label">所属部门</label>
		    <div class="col-sm-10">
		      <input type="text" class="form-control" id="inputPassword2" placeholder="所属部门" v-model="AddressList.depart">
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="inputPassword5" class="col-sm-2 control-label" >部门编号</label>
		    <div class="col-sm-10">
		      <input type="text" class="form-control" id="inputPassword5" placeholder="部门编号" v-model="AddressList.departno">
		    </div>
		  </div>
		  
		  <div class="form-group">
		    <div class="col-sm-offset-2 col-sm-10">
		      <button type="submit" class="btn btn-default" @click="insertAddressList()">添加</button>
		    </div>
		  </div>
		</form>
	</div>
</template>

<script>
	export default{
		data:function(){
			return {
				AddressList:{
					name:"",
					phone:"",
					email:"",
					depart:"",
					departno:"",
				}
			}
		},
		methods:{
			insertAddressList:function(){
				var obj=this;
				$.ajax({
					type:"post",
					url:"http://localhost:8082/crm/AddresslistController/addAddresslist",
					data:{
						time:new Date().getTime(),
						name:obj.AddressList.name,
						phone:obj.AddressList.phone,
						email:obj.AddressList.email,
						depart:obj.AddressList.depart,
						departno:obj.AddressList.departno,
					},
					success:function(result){
						if(result.code=="200"){
							alert(result.msg);
							
						}else{
							alert("添加失败");
						}
						obj.$router.push("/main/addressList");
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