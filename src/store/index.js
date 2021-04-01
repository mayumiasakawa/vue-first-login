import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../axios-auth'
import router from '../router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null
  },
  getters: {
    idToken: state=> state.idToken
  },
  mutations: {
    updateIdToken(state,idToken){
      state.idToken = idToken;
    }
  },
  actions: {
    login({ commit }, authData){
      axios.post('/accounts:signInWithPassword?key=AIzaSyAF_9eyfy1WLxGq3hkuvI2cEPCG4Vz-IBM'
      ,{
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }).then( response => {
        commit('updateIdToken', response.data.idToken);
        router.push('/')
      });
    }
  },
  register({ commit }, authData){
    axios.post('/accounts:signUp?key=AIzaSyAF_9eyfy1WLxGq3hkuvI2cEPCG4Vz-IBM'
    ,{
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    }).then( response => {
      commit('updateIdToken', response.data.idToken);
      router.push('/');
    });
  }
});