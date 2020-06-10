<template>
	<div>
		<button class="btn btn-success" @click="toAddCommunicationMGT"><i class="glyphicon glyphicon-plus"></i>&nbsp;添加通讯人</button>
		<input type="text" placeholder="请输入查询通讯人的名字" style="border: 1px gray solid; width: 200px; height: 30px; margin-left: 450px;" v-model="searchName">
   		<button class="btn btn-info" @click="getCommunicationMGTs"><i class="glyphicon glyphicon-search"></i>&nbsp;搜索</button>
    	<br />
		<table class="table table-hover">
	      <thead>
	        <tr class="success">
	          <th>编号</th>
	          <th><i class="glyphicon glyphicon-user"></i>部门人员</th>
	          <th><i class="glyphicon glyphicon-map-marker"></i>地址</th>
	          <th>所属部门</th>
	          <th>部门编号</th>
	          <th>相关操作</th>
	        </tr>
	      </thead>
	      <tbody>
	        <tr class="danger" v-for="c in CommunicationMGTs">
	          <th scope="row">{{c.id}}</th>
	          <td>{{c.name}}</td>
	          <td>{{c.address}}</td>
	          <td>{{c.depart}}</td>
	          <td>{{c.departno}}</td>
	          <td>
	          	<a href="javascript:void(0)"@click="updateCommunicationMGT(c.id)"><i class="glyphicon glyphicon-wrench"></i>修改</a>
                <a href="javascript:void(0)"@click="delCommunicationMGT(c.id)"><i class="glyphicon glyphicon-trash"></i>删除</a>
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
				CommunicationMGTs:[],
				searchName:""
			}
		},
		mounted:function(){
			this.getCommunicationMGTs();
		},
		methods:{
			toAddCommunicationMGT:function(){
				this.$router.push("/main/AddCommunicationMGT");
			},
			updateCommunicationMGT:function(id){
				this.$router.push({name:"EditCommunicationMGT",query:{id:id}});
			},
			delCommunicationMGT:function(id){
				var obj=this;
		      	  if(confirm("确定删除吗？")){
		      	  	$.ajax({
			      			type:"post",
			      			url:"http://localhost:8082/crm/communicationmgtController/delete",
			      			data:{
			      				time:new Date().getTime(),
			      				id:id
			      			},
			      			success:function(result){
			      				if(result.code=="200"){
			      					alert(result.msg);
			      					obj.getCommunicationMGTs();
			      				}else{
			      					alert("删除失败");
			      				}
			      			},
			      			xhrFields: {
			              withCredentials: true
			            }
			      	});
			    }
			},
			getCommunicationMGTs:function(){
				var obj=this;
				$.ajax({
					type:"post",
					url:"http://localhost:8082/crm/communicationmgtController/findAll",
					data:{time:new Date().getTime(),searchName:obj.searchName},
					success:function(result){
						if(result.code=="200"){
							obj.CommunicationMGTs=result.data;
						}else{
							alert("查询失败");
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