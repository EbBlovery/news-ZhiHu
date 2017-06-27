<template>
  <div class="hello">
      <div class="header">
        <div class="header-menu">
          <span @click="showList()" class="span"></span>
          <p>{{arrInfor.name}}</p>
        </div>
        <div>
          <mu-tabs class="header-nav" :value="activeTab" @change="handleTabChange">
            <mu-tab value="main" icon="首页"/>
            <mu-tab value="list" icon="详情"/>
            <mu-tab value="infor" icon="登录"/>
          </mu-tabs>
        </div>
      </div>
      <div class="main-body">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
         
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
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
  },
  computed:{
      ...mapGetters([
          'arrInfor'
      ])
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
        background:rgb(0,162,243);
        z-index:20;

        .header-nav{
            background:rgb(0,162,243);
            font-style:none;
        }
        .header-menu{
          position:relative;
          width:100%;
          height:50px;
          .span {
                position: relative;
                top:2rem;
                left:1rem;
                display:block;
                height: 16px;
                width: 20px;
                border-color: #fff;
                border-style: solid;
                border-width: 2px 0;
                cursor: pointer;
          }
          .span::before{
              margin:5px 0px;
              position: absolute;
              content: "";
              width: 20px;
              height: 2px;
              background-color: #fff;
          }
          p{
            position:absolute;
            top: 1rem;
            left:4rem;
            font-size:24px;
            color:#fff;
          }
        }
     }
     .main-body{
        padding-top:120px;
     }
  }
</style>
