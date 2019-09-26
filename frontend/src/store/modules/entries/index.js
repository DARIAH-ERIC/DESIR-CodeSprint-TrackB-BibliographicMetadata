/* eslint no-console: ["error", { allow: ["log"] }] */
/* eslint no-param-reassign: ["error", { "props": false }] */
/* eslint-disable no-underscore-dangle */
const state = {
  entries: [],
  valid: [],
  required: ['entryType', 'title', 'year', 'authors', 'editors'],
};

const getters = {
  getEntries: state => state.entries,
  getEntry: state => id => state.entries[id],
  isValid: state => (idx) => {
    let pos = null;
    for (let i = 0; i < state.entries.length; i++) {
      if (idx === state.entries[i].idx) {
        pos = i;
      }
    }

    const res = [];
    for (let i = 0; i < state.required.length; i++) {
      console.log(pos, res);
      if (!state.entries[pos][state.required[i]]) res.push(state.required[i]);
    }
    if (state.entries[pos].tags.length < 1) res.push('tags');
    return res;
  },
};

const mutations = {
  setEntry(s, { no, obj }) {
    s.entries.splice(no, 1, obj);
  },
  changeEntry(s, { idx, obj }) {
    for (let i = 0; i < s.entries.length; i++) {
      if (idx === s.entries[i].idx) {
        s.entries[i] = obj;
      }
    }
  },
  deleteEntry(s, { idx }) {
    let pos = null;
    for (let i = 0; i < s.entries.length; i++) {
      if (idx === s.entries[i].idx) {
        pos = i;
      }
    }
    if (pos !== null) {
      s.entries.splice(pos, 1);
    }
  },
};


export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
