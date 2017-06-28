<template>
  <div id="app">
     <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
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
