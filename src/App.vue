<template>
  <div id="app">
     <div>
       <router-view></router-view>
     </div>
     <div>
       <slider></slider>
     </div>
  </div>
</template>

<script>
  import Slider from './components/Slider.vue'
  export default {
     name: 'app',
     data(){
        return {

        }
     },
     components:{
         'slider':Slider
     }
  }
</script>

<style>

</style>
