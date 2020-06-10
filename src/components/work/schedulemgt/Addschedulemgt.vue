<template>
	<div>
		<form class="form-horizontal">
		  <div class="form-group">
		    <label for="inputEmail3" class="col-sm-2 control-label" >上午九点</label>
		    <div class="col-sm-10">
		      <input type="text" class="form-control" id="inputEmail3" v-model="schedulemgt.nineclock">
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="inputPassword3" class="col-sm-2 control-label">中午十二点</label>
		    <div class="col-sm-10">
		      <input type="text" class="form-control" id="inputPassword3"v-model="schedulemgt.twelveclock">
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="inputPassword4" class="col-sm-2 control-label">下午两点</label>
		    <div class="col-sm-10">
		      <input type="text" class="form-control" id="inputPassword4" v-model="schedulemgt.fourteenclock">
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="inputPassword2" class="col-sm-2 control-label">下午五点</label>
		    <div class="col-sm-10">
		      <input type="text" class="form-control" id="inputPassword2"v-model="schedulemgt.seventeenclock">
		    </div>
		  </div>
		  
		  <div class="form-group">
		    <div class="col-sm-offset-2 col-sm-10">
		      <button type="submit" class="btn btn-default" @click="addschedulemgt">添加</button>
		    </div>
		  </div>
		</form>
	</div>
</template>

<script>
	export default{
		data:function(){
			return {
				schedulemgt:{
					nineclock:"",
					twelveclock:"",
					fourteenclock:"",
					seventeenclock:""
				}
			}
		},
		methods:{
			addschedulemgt:function(){
				var obj=this;
				$.ajax({
					type:"post",
					url:"http://localhost:8082/crm/schedulemgtController/addSchedulemgt",
					data:{
						time:new Date().getTime(),
						nineclock:obj.schedulemgt.nineclock,
						twelveclock:obj.schedulemgt.twelveclock,
						fourteenclock:obj.schedulemgt.fourteenclock,
						seventeenclock:obj.schedulemgt.seventeenclock,
					},
					success:function(result){
						if(result.code=="200"){
							alert("添加成功");
							obj.$router.push("/main/Schedulemgt");
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