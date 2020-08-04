import Vue from 'nativescript-vue';
import Vuex from 'vuex'
import * as ApplicationSettings from "application-settings";

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        user: null
    },
    getters: {
        user: state => {
            return state.user;
        }
    },
    mutations: {
        load(state) {
            if(ApplicationSettings.getString("store")) {
                this.replaceState(
                    Object.assign(state, JSON.parse(ApplicationSettings.getString("store")))
                );
            }
        },
        save(state, data) {
            state.user = {...data};
            ApplicationSettings.setString("store", JSON.stringify(state));
        }
    }
})

export default store;