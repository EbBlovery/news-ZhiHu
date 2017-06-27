import Vuex from 'vuex'
import Vue from 'vue'
import {getContent,getNews} from '../api/axios.js'



Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
        isshow:false,
        arrList:[],
        indexList:[],
        arrInfor:[]
	},
	getters:{
		arrList: state=>state.arrList,
		indexList: state=> state.indexList,
		arrInfor: state=> state.arrInfor
	},
	mutations:{
        SHOWLIST(state){
             state.isshow=!state.isshow
        },
        GETID(state,arr){
        	getContent(arr.id).then(res=>{
        		state.arrList=res
        	})
            state.isshow=false
            state.arrInfor=arr  //get img information
        },
        INDEXLIST(state,arr){
            getNews().then(res=>{
                 state.indexList=res
            })
            if(arr){
            	state.arrInfor=arr
            }
            state.isshow=false
        }
	},
	actions:{

	}
})


export default store