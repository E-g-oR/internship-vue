// import Vue from 'vue'
// import Vuex from 'vuex'
import { createStore } from 'vuex'
import posts from './modules/posts'

// Vue.use(Vuex)
const store = createStore({
	modules: {
		posts,
	},
})
export default store