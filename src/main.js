import { createApp } from 'vue';
import App from './App.vue';
import BaseDialog from '@/components/BaseDialog';
import BaseSpinner from '@/components/BaseSpinner';

const app = createApp(App);

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  components,
  directives,
});

app.use(vuetify);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);
app.mount('#app');
