import Vue from 'vue';
import Router from 'vue-router';
import App from '../components/App';
import Start from '../components/Start';
import ImportPDF from '../components/ImportPDF';
import Entries from '../components/entries';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: (to) => {
        if (to.params.lang !== 'en') {
          // english only for now
          // const language = window.navigator.userLanguage || window.navigator.language;
          return '/en';
        }
        return to.fullPath;
      },
    },
    {
      path: '/:lang',
      components: {
        default: App,
      },
      // Children to the root path '/'
      children: [
        {
          path: 'start',
          name: 'start',
          components: {
            Content: Start,
          },
        },
        {
          path: 'import',
          name: 'import',
          components: {
            Content: ImportPDF,
          },
        },
        {
          path: 'entries',
          name: 'entries',
          components: {
            Content: Entries,
          },
        },
        {
          path: '',
          redirect: { name: 'start' },
        },
      ],
    },
  ],
  scrollBehavior() {
    // always scroll back to the top
    return { x: 0, y: 0 };
  },
});
