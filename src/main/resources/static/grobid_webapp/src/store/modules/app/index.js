/* eslint no-console: ["error", { allow: ["log"] }] */
/* eslint no-param-reassign: ["error", { "props": false }] */

const state = {
  drawer: true,
  drawerclipped: true,
  fixed: false,
  config: {},
  miniVariant: false,
  rightDrawer: false,
  loggedin: false,
};

const getters = {

};

const mutations = {
  setConfig(s, config) {
    s.config = config;
  },
  loginMut(s) {
    s.loggedin = true;
  },
  logoutMut(s) {
    s.loggedin = false;
  },
  toggleNavDrawerMini(s) {
    s.miniVariant = !s.miniVariant;
  },
  setNavDrawerMini(s) {
    if (!s.drawerclipped) s.miniVariant = true;
  },
  toggleNavDrawerClipped(s) {
    s.drawerclipped = !s.drawerclipped;
  },
  setNavDrawerMaxi(s) {
    s.miniVariant = false;
  },
  toggleRightDrawer(s) {
    s.rightDrawer = !s.rightDrawer;
  },
  toggleDrawer(s) {
    s.drawer = !s.drawer;
  },
};

const actions = {
  toggleAppMode({ commit }) {
    commit('toggleDrawer');
    commit('toggleRightDrawer');
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
