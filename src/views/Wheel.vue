<template>
	<div class="wheel">
		<el-carousel indicator-position="outside">
		    <el-carousel-item @click.native="addNews(item)" v-for="item in list" :key="item">
		       <img :src="item.image">
		       <p v-text="item.title"></p>
		    </el-carousel-item>
		 </el-carousel>
	</div>
</template>

<script>
    import {getWheel} from '../api/axios.js'
	export default {
		data(){
			return {
                list: []
			}
		},
		methods:{
            addNews(val){
            	var arr=[]
                var id=val.id
                arr.id=id
                arr.img=val.image
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
            getWheel().then(res=>{
            	this.list = res
            })
		}
	}
</script>

<style lang="less" scoped>
	@import '../style/main.less';
	.wheel{
        width:100%;
        height:100%;
        img{
        	width:100%;
        	height:100%;
        }
	}
</style>