<template>
	<div class="handlein">
		<div class="handlein-bar">
			<div @click="back">back</div>
		</div>
		<div class="handlein-infor">
			
		</div>
		<div class="footer"></div>
	</div>
</template>

<script>
	export default {
		data(){
			return {

			}
		},
		methods:{
            back(){
            	this.$router.go(-1)
            }
		}
	}
</script>