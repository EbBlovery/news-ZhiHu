import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
        isshow:false
	},
	mutations:{
        SHOWLIST(state){
             state.isshow=!state.isshow
        }
	},
	actions:{

	}
})


export default store