<template>
	<div>
		<table class="table table-hover">
          <thead>
            <tr>
              <th>供应商电话</th>
              <th>供应商名字</th>
              <th>管理</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="c in CallMGt">
              <!--<td>{{cCenter.id}}</td>-->
              <td>{{c.supplierphone}}</td>
              <td>{{c.suppliername}}</td>
              <td>{{c.manager}}</td>
            </tr>
          </tbody>
        </table>
	</div>
</template>

<script>
	export default{
		data:function(){
			return {
				CallMGt:[]
			}
		},
		mounted:function(){
			this.getCallMGT();
		},
		methods:{
			getCallMGT:function(){
				var obj=this;
				$.ajax({
					type:"post",
					url:"http://localhost:8082/crm/CallmgtController/getCallmgt",
					data:{time:new Date().getTime()},
					success:function(result){
						if(result.code=="200"){
							obj.CallMGt=result.data;
						}else{
							alert("获取失败");
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