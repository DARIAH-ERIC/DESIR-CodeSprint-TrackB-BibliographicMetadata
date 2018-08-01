import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import VueAxios from 'vue-axios';
import createLogger from 'vuex/dist/logger';
import app from './modules/app/index';
import dialogs from './modules/dialogs/index';
import api from './modules/api/index';
import entries from './modules/entries/index';
import plugins from './plugins';


Vue.use(Vuex);
Vue.use(VueAxios, Axios);


if (process.env.NODE_ENV !== 'production') {
  plugins.push(createLogger());
}

export default new Vuex.Store({
  modules: {
    app,
    dialogs,
    api,
    entries,
  },
  plugins,
  strict: false,
});


export const STORAGE_KEY = 'MetaDataEditor';
export const SESSION_ID = `SESSION_${Date.now().valueOf().toString(36)}`;
