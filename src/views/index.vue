<template>
	<div class="indexList">
		<div class="whell">
			
		</div>
		<ul class="list-bar">
			<li class="list-info" v-for="item in indexList">
				<el-row>
				    <el-col :span="18"><p>{{item.title}}</p></el-col>
					<el-col v-show="item.thumbnail" :span="6"><img width="70px" height="70px" :src="item.thumbnail"></el-col>
				</el-row>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		computed:{
			indexList(){
				console.log(this.$store.state.indexList)
				return this.$store.state.indexList
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../style/main.less';
    .indexList{
         width:100%;
         height:100%;
         position:relative;
         .list-bar{
            background:#F2F2F2;
    		position:relative;
    		padding:0px 10px;
    		.list-info{
    			background:#fff;
    			box-shadow:0 1px 2px #999;
    			margin:10px 2px 0px 2px;
    			padding:10px 10px;
    			border-radius:5px;
    			p{
    				font-size:20px;
    			}
    		}
         }
    }
</style> 