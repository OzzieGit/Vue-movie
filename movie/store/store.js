import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		pageTitle:"首页",
		showFoot:true
	}
})

export default store;