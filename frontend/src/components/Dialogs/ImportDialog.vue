<template lang="html">
    <v-dialog
        v-model="importDialog.status"
        id="askForStore"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
      <v-card>
        <v-toolbar card dark color="primary">
          <v-btn icon dark @click.native="discard">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Upload PDF for Extraction</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click.native="submit">Save</v-btn>
          </v-toolbar-items>
          <v-menu bottom right offset-y>
          </v-menu>
        </v-toolbar>
        <v-card-text>
          <importpdf></importpdf>
        </v-card-text>
        <v-card-actions>
      </v-card-actions>
    </v-card>
    </v-dialog>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
import importpdf from "../ImportPDF";

import HELPERS from "../../helpers";
import fundamentcard from "../Fundament/FundamentCard";

export default {
  mixins: [HELPERS],
  data() {
    return {
      dropzoneOptions: {
        url: "/extract",
        thumbnailWidth: 150,
        maxFilesize: 10.5,
        headers: { "My-Awesome-Header": "header value" }
      },
      model: {}
    };
  },
  components: {
    fundamentcard,
    importpdf
  },
  computed: {
    ...mapState("dialogs", ["importDialog"]),
  },
  methods: {
    ...mapMutations("dialogs", ["closeDialog"]),
    discard() {
      this.closeDialog("importDialog");
    },
    submit() {
      this.closeDialog("importDialog");
    },
    onFileChange(e) {
      this.$info("Load", "onFileChange(e)", e);
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.loadTtl(files[0]);
    }
  }
};
</script>

<style lang="css">
</style>
