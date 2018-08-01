<template v-if="!loading">
  <form-schema v-if="model && !loading" @input="saveEntry(); $emit('input', model)" :schema="schema" v-model="model" @submit="submit">
    <v-btn variant="primary" @click="submit">Load into Store</v-btn>
    <v-btn @click="resetForm();" variant="secondary">Reset Form</v-btn>
  </form-schema>
</template>

<script>
import FormSchema from '@formschema/native';
import { mapMutations, mapActions } from 'vuex';
import FormComponentWrapper from './FormComponentWrapper';
import HELPERS from '../helpers';

/* eslint no-param-reassign: ["error", { "props": false }] */
/* eslint-disable no-irregular-whitespace */
/* eslint no-console: ['error', { allow: ['log'] }] */
/* eslint-disable np-undev */
/* eslint-disable func-names */
/* eslint-disable object-shorthand */

export default {
  mixins: [HELPERS],
  props: [
    'type',
    'uniqueName',
  ],
  components: {
    FormSchema,
    FormComponentWrapper,
  },
  data: () => ({
    schema: false,
    model: false,
    loading: true,
  }),
  methods: {
    ...mapMutations('JSONschema', [
      'setSchema',
      'setEntry',
    ]),
    ...mapActions('n3', [
      'objectToStore',
    ]),
    saveEntry() {
      this.$info('FormFromSchema', 'saveEntry');
      this.setEntry({ name: this.uniqueName, entry: this.model });
    },
    resetForm() {
      // this.$debug('schema', JSON.stringify(this.schema.properties));
      /*
      this.$info('FormFromSchema', 'resetForm');
      const keys = Object.keys(this.model);
      for (let i = 0; i < keys.length; i += 1) {
        this.$debug(keys[i]);
        this.model[keys[i]] = '';
      }
      */
    },
    submit() {
      this.$info('FormFromSchema', 'submit()', this.model);
      // here everything -> n3 store.
      /* before calling objectToStore,
      we need to filter out objects and split them further into triples
      */
      this.objectToStore({ obj: this.filterModelBeforeUpload(this.model), schema: this.schema });
    },
    setComponents() {
      const TYPES1 = [];

      const fields = Object.keys(this.schema.properties);

      for (let i = 0; i < fields.length; i += 1) {
        if (this.schema.properties[fields[i]].attrs &&
           this.schema.properties[fields[i]].attrs.type) {
          TYPES1.push(this.schema.properties[fields[i]].attrs.type);
        }
      }
      this.$debug('types in created:', TYPES1);

      for (let i = 0; i < TYPES1.length; i += 1) {
        const t = TYPES1[i];
        FormSchema.setComponent(t, FormComponentWrapper, { type: t });
      }
    },
    updateModel(params) {
      const keys = Object.keys(this.model);
      for (let i = 0; i < keys.length; i += 1) {
        if (params[keys[i]] !== undefined) {
          this.model[keys[i]] = params[keys[i]];
        } else {
          this.model[keys[i]] = '';
        }
      }
      this.$log('entries', this.$store.state.JSONschema.entries[this.uniqueName]);
      this.saveEntry();
    },
  },
  watch: {
    $route: function (to, from) {
      this.$log('to, from', to, from);
      this.updateModel(to.query);

      this.setComponents();
    },
  },
  updated() {
    this.updateModel(this.$route.query);
    this.setComponents();
  },
  mounted() {
    this.$info('FormFromSchema', 'created');
    this.getMetadataByType(this.type).then((res) => {
      // this.$debug('schema before copyRangeToType', JSON.stringify(res));
      this.schema = this.copyRangeToType(res, 'only name');
      this.setSchema({ name: this.type, schema: this.schema });
      // this.$debug('schema after copyRangeToType', JSON.stringify(this.schema));

      this.setComponents();

      // this.$debug('properties!!', JSON.stringify(this.schema.properties));
      if (!this.$store.state.JSONschema.entries[this.uniqueName]) {
        this.$store.state.JSONschema.entries[this.uniqueName] = {};
      }

      this.model = this.$store.state.JSONschema.entries[this.uniqueName];
      // Mapping

      this.loading = false;
      this.$emit('input', this.model);
    });
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  label {
    display: block;
    font-weight: bold;
  }
  label small {
    font-weight: normal;
  }
  label {
    margin-bottom: 20px;
    background-color: #EEE;
  }
  </style>
