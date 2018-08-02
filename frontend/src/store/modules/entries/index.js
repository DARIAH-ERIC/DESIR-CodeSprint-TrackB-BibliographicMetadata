/* eslint no-console: ["error", { allow: ["log"] }] */
/* eslint no-param-reassign: ["error", { "props": false }] */
/* eslint-disable no-underscore-dangle */
const state = {
  entries: [],
};

const getters = {
  getEntry: (state) => (id) => {
    return state.entries[id];
  },
};

const mutations = {
  setEntry(s, { no , obj }) {
    s.entries[no] = obj;
  },
};


export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
