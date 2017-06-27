<template>
	<div class="slider" :class="{shoulist:isshow}">
	  
	  <el-row>
	     <div class="slider-head">
	  	     <img src="../assets/logo.png">
	     </div>
	  	 <el-col :span="16">
	  	 	 <ul class="slider-left"> 
	           <li>
	               <div>
	                 <el-row>
	                 	<el-col :span="4"><img src="../assets/logo.png"></el-col>
	                 	<el-col :span="20"><p>首页</p></el-col>
	                 </el-row>
	               </div>
	           </li>
	       	   <li v-for="item in list">
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
               	   console.log(res)
                   this.list=res.others
               }) 
           },
           hideList(){
           	   this.$store.commit('SHOWLIST')
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
		position:absolute;
		top:0px;
		z-index:100;
		transform:translateX(-500px);
		transition: all .4s;
		opacity:0;
		.slider-left{
			background:#fff;
				img{
	        	width:40px;
	        	height:40px;
	        	border-radius:50%;
	        }
	        li p{
	        	font-size:13px;
	        	height:40px;
	        	line-height:40px;
	        }
		}
		.slider-right{
			width:100%;
			height:600px;
			background:rgba(0,0,0,.3);
		}
        
	}
    .shoulist{
    	transform:translateX(0px);
    	opacity:1;
    }
</style>