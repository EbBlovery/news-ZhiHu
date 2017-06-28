<template>
	<div class="indexList">
		<div class="whell">
			<Wheel></Wheel>
		</div>
		<ul class="list-bar">
			<li @click="addNews(item)" class="list-info" v-for="item in indexList">
				<el-row>
				    <el-col :span="18"><p>{{item.title}}</p></el-col>
					<el-col v-show="item.thumbnail" :span="6"><img width="70px" height="70px" :src="item.thumbnail"></el-col>
				</el-row>
			</li>
		</ul>
	</div>
</template>

<script>
    import Wheel from './Wheel.vue'
    import {getNews} from '../api/axios.js'
	export default {
		data() {
			return {
                 indexList:[]
			}
		},
		computed:{
			// indexList(){
			// 	return this.$store.state.indexList
			// }
		},
		methods:{
            get(){
               getNews().then(res=>{
                   this.indexList = res
               })
            },
            addNews(val){
                var arr=[]
                var id=val.news_id
                arr.id=id
                arr.img=val.thumbnail
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
        created(){
            this.get()
        },
        components:{
        	Wheel
        }
	}
</script>

<style lang="less" scoped>
	@import '../style/main.less';
    .indexList{
    	 background:#F2F2F2;
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