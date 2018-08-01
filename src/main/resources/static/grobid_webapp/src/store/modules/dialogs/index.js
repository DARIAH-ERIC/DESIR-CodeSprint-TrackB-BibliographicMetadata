/* eslint no-console: ["error", { allow: ["log"] }] */
/* eslint no-param-reassign: ["error", { "props": false }] */
/* eslint-disable no-underscore-dangle */
const state = {
  loginDialog: { status: false },
  logoutDialog: { status: false },
  createDialog: { status: false, type: '' },
  importDialog: { status: false },
};

const getters = {

};

const mutations = {
  openDialog(s, name) {
    s[name].status = true;
  },
  closeDialog(s, name) {
    s[name].status = false;
  },
  openCreateDialog(s, type) {
    s.createDialog.type = type;
    s.createDialog.status = true;
  },
  switchDialog(s, name) {
    s[name].status = !s[name];
  },
  setDialog(s, { name, obj }) {
    this._vm.$info('store dialogs setDialog', name, obj);
    s[name] = obj;
  },
};


export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
