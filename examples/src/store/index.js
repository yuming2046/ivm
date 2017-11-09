import Vue from 'vue'
import Vuex from 'vuex'
import createVuexLogger from 'vuex/dist/logger'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const state = {

}

export default new Vuex.Store({
	state,
	actions,
	getters,
	modules: {},
	mutations,
	strict: process.env.NODE_ENV !== 'production'
	plugins: [createVuexLogger()]
});