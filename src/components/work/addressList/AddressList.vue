<template>
	<div>
		<button class="btn btn-success" @click="toinsertAddressList()" ><i class="glyphicon glyphicon-plus"></i>&nbsp;添加通讯人</button>
		<input type="text" placeholder="请输入查询通讯人的名字" style="border: 1px gray solid; width: 200px; height: 30px; margin-left: 450px;" v-model="searchName">
   		<button class="btn btn-info" @click="getAddressLists"><i class="glyphicon glyphicon-search"></i>&nbsp;搜索</button>
    	<br />
		<table class="table table-hover">
	      <thead>
	        <tr class="success">
	          <th>通讯编号</th>
	          <th>通讯名字</th>
	          <th>通讯人电话</th>
	          <th>通讯人邮箱</th>
	          <th>所属部门</th>
	          <th>部门编号</th>
	          <th>相关操作</th>
	        </tr>
	      </thead>
	      <tbody>
	        <tr v-for="a in AddressLists" class="active">
	          <th scope="row">{{a.id}}</th>
	          <td>{{a.name}}</td>
	          <td>{{a.phone}}</td>
	          <td>{{a.email}}</td>
	          <td>{{a.depart}}</td>
	          <td>{{a.departno}}</td>
	          <td>
                <a href="javascript:void(0)" @click="deleteAddresslist(a.id)"><i class="glyphicon glyphicon-trash"></i>删除</a>
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
				AddressLists:[],
				searchName:""
			}
		},
		mounted:function(){
			this.getAddressLists();
		},
		methods:{
			toinsertAddressList:function(){
				this.$router.push("/main/insertAddressList")
			},
			getAddressLists:function(){
				var obj=this;
				$.ajax({
					type:"post",
					url:"http://localhost:8082/crm/AddresslistController/getAll",
					data:{time:new Date().getTime(),searchName:obj.searchName},
					success:function(result){
						if(result.code=="200"){
							obj.AddressLists=result.data;
						}else{
							alert("查询失败");
						}
					},
					xhrFields: {
              			withCredentials: true
            		}
				});
			},
			deleteAddresslist:function(id){
	      	  var obj=this;
	      	  if(confirm("确定删除吗？")){
	      	  	$.ajax({
		      			type:"post",
		      			url:"http://localhost:8082/crm/AddresslistController/deleteAddresslist",
		      			data:{
		      				time:new Date().getTime(),
		      				id:id
		      			},
		      			success:function(result){
		      				if(result.code=="200"){
		      					alert(result.msg);
		      					obj.getAddressLists();
		      				}else{
		      					alert("删除失败");
		      				}
		      			},
		      			xhrFields: {
			              withCredentials: true
			            }
		      	});
	      	  }
	        }
	}
}
</script>

<style>
</style>