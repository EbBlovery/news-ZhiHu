<template>
	<div class="newlist"> 
	    <div class="newlist-head" @click="back">back</div>
		<div v-html="newsthub">
		</div>
	</div>
</template>

<script>
    import {mapGetters} from 'vuex'
	export default {
        data(){
        	return {

        	}
        },
        methods:{
            back(){
            	this.$router.go(-1)
            }
        },
        computed:{
            ...mapGetters([
               'newsthub',
               'indexInfo'
            ])
        }
	}
</script>

<style lang="less" scoped>
	.newlist{
		
		width:100%;
		height:100%;
		.newlist-head{
			position:fixed;
			top:0;
			left:0;
			width:100%;
			height:70px;
			background:rgb(0,162,243);
		}
	}
</style>