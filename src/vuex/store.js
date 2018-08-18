
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {
  title: 'movie',
  bgColor: 'rgb(33, 150, 243)',
  photoList: []
};

const mutations = {
  changeTitle(state, status) {
    state.title = status[0];
    state.bgColor = status[1];
    state.nav = status[2];
  },
  photoList(state, status) {
    state.photoList = status;
  }
  // ,
  // changeBgColor(state,status){
  //   state.bgColor = status;
  // }
};

const actions = {
  changeTitle: ({commit}, status) => commit('changeTitle', status),
  photoList: ({commit}, status) => commit('photoList', status)
};

const getters = {
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
