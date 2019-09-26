<template>
  <div class>
    <v-container grid-list-md>
      <fundamentcard caption="Load test data">
        <v-btn @click="loadTestdata">testdata</v-btn>
      </fundamentcard>
      <fundamentcard caption="Load file from disk (PDF/TXT)">
        <vue-dropzone
          ref="myVueDropzone"
          id="file"
          :options="dropzoneOptions"
          v-on:vdropzone-success="results"
        ></vue-dropzone>
      </fundamentcard>
      <fundamentcard caption="Paste text">
        <v-textarea
          name="textinput"
          label="Your text"
          prepend-icon="comment"
          color="deep-purple"
          v-model="text"
          auto-grow
        ></v-textarea>
        <v-btn @click="submitText">Submit Text</v-btn>
      </fundamentcard>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import fundamentcard from "./Fundament/FundamentCard";

import HELPERS from "../helpers";

/* eslint no-unused-vars: ["error", {"args": "none"}] */
/* eslint no-console: ["error", { allow: ["log"] }] */

export default {
  mixins: [HELPERS],
  components: {
    vueDropzone: vue2Dropzone,
    fundamentcard
  },
  data() {
    return {
      text: null,
      dropzoneOptions: {
        url: "/extract",
        thumbnailWidth: 150,
        maxFilesize: 50,
        headers: {}
      },
      testdata: [
        {
          entryType: "misc",
          address: null,
          booktitle: null,
          chapter: null,
          doi: null,
          edition: null,
          institution: null,
          journal: null,
          number: null,
          pages: null,
          publisher: null,
          series: null,
          title:
            "The Sample 1",
          volume: null,
          day: null,
          month: null,
          year: "1998",
          authors: "Duke Nukem",
          editors: "",
          tags: null
        },
        {
          entryType: "misc",
          address: null,
          booktitle: null,
          chapter: null,
          doi: null,
          edition: null,
          institution: null,
          journal: null,
          number: null,
          pages: null,
          publisher: null,
          series: null,
          title:
            "Sample 2",
          volume: null,
          day: null,
          month: null,
          year: "2014",
          authors: "Albert Einstein",
          editors: "",
          tags: null
        },
        {
          entryType: "misc",
          address: null,
          booktitle: null,
          chapter: null,
          doi: null,
          edition: null,
          institution: null,
          journal: null,
          number: null,
          pages: null,
          publisher: null,
          series: null,
          title:
            "Sample 3",
          volume: null,
          day: null,
          month: null,
          year: "2005",
          authors: "Frank Sinatra",
          editors: "",
          tags: null
        },
      ]
    };
  },
  computed: {
  },
  methods: {
    ...mapMutations("entries", ["setEntry"]),
    results(file, res) {
      for (var i = 0; i < res.length; i++) {
        res[i].idx = i;
        res[i].tags = [];
        this.setEntry({ no: i, obj: res[i] });
      }
      console.log(file, res);
      this.$router.push({ name: "entries", params: { lang: "en" } });
    },
    loadTestdata() {
      for (var i = 0; i < this.testdata.length; i++) {
        this.testdata[i].idx = i;
        this.testdata[i].tags = [];
        this.setEntry({ no: i, obj: this.testdata[i] });
      }
      this.$router.push({ name: "entries", params: { lang: "en" } });
    },
    submitText(e) {
      e.preventDefault();
      let currentObj = this;

      let formData = new FormData();
      formData.append('text', this.text);
      this.axios
        .post(this.dropzoneOptions.url, formData)
        .then(function(response) {
          currentObj.results(currentObj.text, response.data);
        })
    }
  },
  computed: {},
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
