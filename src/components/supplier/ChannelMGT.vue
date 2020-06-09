<template>
	<div>
		<table class="table table-hover">
          <thead>
            <tr>
              <th>商品名</th>
              <th>经理</th>
              <th>供应商姓名</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cMGT in channelmgt">
              <td>{{cMGT.suppliername}}</td>
              <td>{{cMGT.manager}}</td>
              <td>{{cMGT.commodityname}}</td>
            </tr>
          </tbody>
        </table>
	</div>
</template>

<script>
	export default{
		data:function(){
			return {
				channelmgt:[]
			};
		},
		mounted:function(){
			this.getAllChannelMGT();
		},
		methods:{
			getAllChannelMGT:function(){
				var obj=this;
				$.ajax({
					type:"post",
					url:"http://localhost:8082/crm/channelMGTController/getAllChannelMGT",
					data:{time:new Date().getTime()},
					success:function(result){
						if(result.code=="200"){
							obj.channelmgt=result.data;
						}
					},
					xhrFields: {
			            withCredentials: true
			        }
				})
			}
		}
	}
</script>

<style>
</style>