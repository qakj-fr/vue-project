<template>
	<div>
		<form class="form-horizontal">
		  <div class="form-group">
		    <label for="inputEmail3" class="col-sm-2 control-label">供应商姓名</label>
		    <div class="col-sm-10">
		      <input type="text" class="form-control" id="inputEmail3" placeholder="请输入供应商姓名" v-model="CheckCenter.suppliername">
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="inputPassword3" class="col-sm-2 control-label">供应商品</label>
		    <div class="col-sm-10">
		      <input type="text" class="form-control" id="inputPassword3" placeholder="请输入供应商品" v-model="CheckCenter.commodityname">
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="inputPassword3" class="col-sm-2 control-label">生产日期</label>
		    <div class="col-sm-10">
		      <input type="text" class="form-control" id="inputPassword3" placeholder="请输入生产日期" v-model="CheckCenter.manufacturedate">
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="inputPassword3" class="col-sm-2 control-label">保质期</label>
		    <div class="col-sm-10">
		      <input type="text" class="form-control" id="inputPassword3" placeholder="请输入保质期" v-model="CheckCenter.expire">
		    </div>
		  </div>
		  
		  <div class="form-group">
		    <div class="col-sm-offset-2 col-sm-10">
		      <button type="submit" class="btn btn-default" @click="addCheckCenter">添加</button>
		    </div>
		  </div>
		</form>
	</div>
</template>

<script>
	export default{
		data:function(){
			return {
				CheckCenter:{
					suppliername:"",
					commodityname:"",
					manufacturedate:"",
					expire:"",
				}
			}
		},
		methods:{
			addCheckCenter:function(){
				var obj=this;
				$.ajax({
					type:"post",
					url:"http://localhost:8082/crm/checkCenterController/addCheckCenter",
					data:{
						time:new Date().getTime(),
						suppliername:obj.CheckCenter.suppliername,
						commodityname:obj.CheckCenter.commodityname,
						manufacturedate:obj.CheckCenter.manufacturedate,
						expire:obj.CheckCenter.expire
					},
					success:function(result){
						if(result.code=="200"){
							alert(result.msg);
							obj.$router.push("/main/CheckCenter");
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