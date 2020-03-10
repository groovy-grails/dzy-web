import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
  userName:"",
  userId:"",
  token:""
};
const getters = {
  getUserName(){
    return state.userName
  },
  getUserId(){
    return state.userId
  },
  getToken(){
    return state.token
    }
};
const mutations = {
  changeUserName(state,userName){
      state.userName = userName;
  },
  deleteToken(state){
     state.token = "";
  },
  changeUserId(state,userId){
    state.userId = uerId;
  }
}
const store = new Vuex.Store({
    state,
    getters,
    mutations
});
export default store;
