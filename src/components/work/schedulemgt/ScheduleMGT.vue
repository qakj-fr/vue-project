<template>
	<div>
		<button class="btn btn-active" @click="toaddschedulemgt"><i class="glyphicon glyphicon-plus"></i>&nbsp;添加管理员</button>
		<table class="table table-hover">
      <thead>
        <tr>
          <!--<th>#</th>-->
          <th>上午9点</th>
          <th>中午12点</th>
          <th>下午2点</th>
          <th>下午5点</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="smgt in schedulemgt">
        	<!--<td>{{sgmt.id}}</td>-->
          <td>{{smgt.nineclock}}</td>
          <td>{{smgt.twelveclock}}</td>
          <td>{{smgt.fourteenclock}}</td>
          <td>{{smgt.seventeenclock}}</td>
        </tr>
      </tbody>
    </table>
	</div>
</template>

<script>
	export default{
		data:function(){
			return {
				schedulemgt:[]
			};
		},
		mounted:function(){
			this.getAllScheduleMGT();
		},
		methods:{
			toaddschedulemgt:function(){
				this.$router.push("/main/addschedulemgt");
			},
			getAllScheduleMGT:function(){
				var obj=this;
				$.ajax({
					type:"post",
					url:"http://localhost:8082/crm/schedulemgtController/findAll",
					data:{time:new Date().getTime()},
					success:function(result){
						obj.schedulemgt=result.data;
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