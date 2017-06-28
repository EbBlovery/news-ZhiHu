import Vuex from 'vuex'
import Vue from 'vue'
import {getContent,getNews,getTitle} from '../api/axios.js'



Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
        isshow:false,
        arrList:[],
        indexList:[],
        arrInfor:[],
        indexInfo:[],
        newsthub:[]
	},
	getters:{
		arrList: state=>state.arrList,
		indexList: state=> state.indexList,
		arrInfor: state=> state.arrInfor,
        newsthub: state=> state.newsthub
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
        },
        NEWSTHUB(state,arr){
            getTitle(arr.id).then(res=>{
                const css = res.css
                var csslist = css.map(item=>{
                    return `<link rel="stylesheet" href="${item}">`
                })
                var body = res.body
                state.newsthub = body + csslist
            })
            state.indexInfo=arr
        }
	},
	actions:{

	}
})


export default store