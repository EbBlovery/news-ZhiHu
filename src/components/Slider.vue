<template>
	<div class="slider" :class="{shoulist:isshow}">
	  <el-row>
	  	 <el-col :span="16">
	  	 	 <ul class="slider-left"> 
	  	 	   <li class="slider-bar">
	  	 	   	   <div class="slider-head">
				  	    <img width="100px" height="100px" src="../assets/logo.png">
				   </div>
	  	 	   </li>
	           <li @click="handleClickTo('首页')" class="slider-list">
	               <div>
	                 <el-row>
	                 	<el-col :span="4"><img src="../assets/logo.png"></el-col>
	                 	<el-col :span="20"><p>首页</p></el-col>
	                 </el-row>
	               </div>
	           </li>
	       	   <li @click="handleClick(item)" class="slider-list" v-for="item in list">
	       	      <p class="linear"></p>
	       	   	  <div>
	       	   	    <el-row>
	       	   	    	<el-col :span="4">
	       	   	    		<img :src="item.thumbnail">
	       	   	    	</el-col>
	       	   	    	<el-col :span="20">
	       	   	    		<p v-text="item.name"></p>
	       	   	    	</el-col>
	       	   	    </el-row>
	       	   	  </div>
	       	   </li>
	         </ul>
	  	 </el-col>
	  	 <el-col @click.native="hideList()" :span="8"><div class="slider-right"></div></el-col>
	  </el-row>
	</div>
</template>

<script>
    import {getSlider} from '../api/axios.js'
	export default{
		name:"slider",
		data(){
			return {
                list:[]
			}
		},
		created(){
            this.get()
		},
		methods:{
           get(){
               getSlider().then(res=>{
                   this.list=res.others
               }) 
           },
           hideList(){
           	   this.$store.commit('SHOWLIST')
           },
           handleClick(val){
           	   var aId = val.id
           	   var arr1 = []
           	   arr1.id=val.id
           	   arr1.thumbnail=val.thumbnail
           	   arr1.description=val.description
           	   arr1.name=val.name
           	   this.$store.commit('GETID',arr1)
           	   this.$router.push({
           	   	   path: '/list',
           	   	   query:{
                      aId
           	   	   }
           	   })
           },
           handleClickTo(val){
           	   var arr=[]
           	   arr.name=val
               this.$router.push('/index')
               this.$store.commit('INDEXLIST',arr)

           }
		},
		computed:{
			isshow(){
				return this.$store.state.isshow
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../style/main.less';
	.slider{
		width:100%;
		height:100%;
		position:fixed;
		top:0px;
		z-index:100;
		transform:translateX(-500px);
		transition: all .4s;
		opacity:0;
		.slider-left{
			background:#fff;
			.slider-bar{
				background:rgb(0,162,243)
			}
			.slider-list{
                img{
		        	width:40px;
		        	height:40px;
		        	border-radius:50%;
		        }
		        p{
		        	font-size:18px;
		        	height:40px;
		        	line-height:40px;
		        }
		        .linear{
		        	margin-bottom:2px;
                    height:1px;
                    background:#000;
                    -webkit-transform:scaleY(0.5);
                    -webkit-transform-origin:0 0;
                    transform:scaleY(0.5);
                    transform-origin:0 0;
                    overflow:hidden;
                }
                &:hover{
                    background:red;
                }
			}
		}
		.slider-right{
			width:100%;
			height:732px;
			background:rgba(0,0,0,.3);
		}
        
	}
    .shoulist{
    	transform:translateX(0px);
    	opacity:1;
    }
</style>