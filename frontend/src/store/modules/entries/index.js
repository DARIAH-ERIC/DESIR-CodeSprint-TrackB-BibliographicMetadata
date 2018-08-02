/* eslint no-console: ["error", { allow: ["log"] }] */
/* eslint no-param-reassign: ["error", { "props": false }] */
/* eslint-disable no-underscore-dangle */
const state = {
  entries: [],
  valid: [],
  required: ['entryType', 'title', 'year', 'authors', 'editors']
};

const getters = {
  getEntry: (state) => (id) => {
    return state.entries[id];
  },
  isValid: (state) => (id) => {
    let res = [];
    for (var i = 0; i < state.required.length; i++) {
      console.log(state.entries[id][state.required[i]]);
      if(!state.entries[id][state.required[i]]) res.push(state.required[i]);
      if(state.entries[id].tags.length < 1) res.push('tags');
    }
    return res;
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
