<template>
  <div class="">
    <v-container grid-list-md>
      <fundamentcard
          caption="Load PDF from disk"
          >
          <div >
            <p>Post PDF to API</p>
          </div>
          <vue-dropzone ref="myVueDropzone" id="file" :options="dropzoneOptions" v-on:vdropzone-success="results()" v-on:vdropzone-complete="results()"></vue-dropzone>
        </fundamentcard>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import fundamentcard from './Fundament/FundamentCard';

import HELPERS from '../helpers';

/* eslint no-unused-vars: ["error", {"args": "none"}] */
/* eslint no-console: ["error", { allow: ["log"] }] */

export default {
  mixins: [HELPERS],
  components: {
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      dropzoneOptions: {
          url: 'http://localhost:8080/extract',
          thumbnailWidth: 150,
          maxFilesize: 50,
          headers: { }
      },
    };
  },
  computed: {
    ...mapGetters('api', [
      'types',
    ]),
  },
  methods: {
    ...mapActions('api', [
      'get',
      'post',
      'delete',
    ]),
    onFileChange(e) {
      this.$info('Load', 'onFileChange(e)', e);
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.loadTtl(files[0]);
    },
    results(file, res) {
      console.log(file, res);
    }
  },
  computed: {
  },
  created() {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
