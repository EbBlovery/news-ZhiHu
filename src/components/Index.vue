<template>
  <div class="hello">
      <div class="header">
        <div @click="showList()" class="header-menu">
          点击按钮
        </div>
        <div class="header-nav">
          <mu-tabs :value="activeTab" @change="handleTabChange">
            <mu-tab value="main" icon="首页"/>
            <mu-tab value="list" icon="详情"/>
            <mu-tab value="infor" icon="登录"/>
          </mu-tabs>
        </div>
      </div>
      <div class="main-body">
         <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      activeTab:'main'
    }
  },
  methods: {
      handleTabChange(tab) {
          if(tab){
             this.activeTab=tab
          }
          this.$router.push({
             path: '/' + tab
          })
      },
      showList(){
          this.$store.commit('SHOWLIST')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../style/main.less';
  .hello{
     width:100%;
     height:100%;
     padding:0px;
     margin:0px;
     .header{
        position:fixed;
        width:100%;
        top:0;
        left:0;
        z-index:20;
        .header-nav{
           .header-nav1{

           }
        }
     }
     .main-body{
        padding-top:70px;
     }
  }
</style>
