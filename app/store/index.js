import Vue from 'nativescript-vue';
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        user: {}
    },
    getters: {
        user: state => {
            return state.user;
        }
    },
    mutations: {
        save(state, data) {
            state.user = {...data};
        }
    }
})

export default store;