<template>
	<div class="newsList">
	    <div class="list-show">
	    	<img :src="arrInfor.thumbnail">
	    	<p>{{arrInfor.description}}</p>
	    </div>
		<ul class="infor-list">
			<li @click="handleNews(item)" class="list-bar" v-for="item in arrList">
				<el-row>
				    <el-col :span="item.images?18:24"><p>{{item.title}}</p></el-col>
					<el-col v-show="item.images" :span="6"><img width="70px" height="70px" :src="item.images"></el-col>
				</el-row>
			</li>
		</ul>
	</div>
</template>

<script>
    import {mapGetters} from 'vuex'
	export default {
		data() {
			return {
                 images:'../assets/logo.png'
			}
		},
        methods:{
            handleNews(val){
                var arr=[]
                var id=val.id
                arr.id=id
                if(val.images){
                    arr.img=val.images[0]
                }
                arr.title=val.title
                this.$router.push({
                    path:'/newsThub',
                    query:{
                        id
                    }
                })
                this.$store.commit('NEWSTHUB',arr)
            }
        },
        computed:{
			...mapGetters([
                'arrList',
                'arrInfor'
			])
		}
	}
</script>

<style lang="less" scoped>
	@import '../style/main.less';
    .newsList{
    	position:relative;
    	width:100%;
    	height:100%;
    	.list-show{
    		img{
    			width:100%;
    			height:300px;
    		}
    		p{
    			position:absolute;
    			top:240px;
    			left:20px;
    			color:#fff;
    			font-size:20px;
    		}
    	}
    	.infor-list{
    		background:#F2F2F2;
    		position:relative;
    		padding:0px 10px;
    		.list-bar{
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