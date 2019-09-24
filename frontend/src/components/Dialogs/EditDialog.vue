<template lang="html">
    <v-dialog
        v-model="editDialog.status"
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
          <v-toolbar-title>Edit imported Entry No {{ editDialog.model.idx }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click.native="submit">Save</v-btn>
          </v-toolbar-items>
          <v-menu bottom right offset-y>
          </v-menu>
        </v-toolbar>
        <v-card-text v-if="editDialog.model.idx">
          <v-form ref="form" lazy-validation >
            <v-text-field v-model="editDialog.model.entryType" label="Entry Type" required :rules="[v => !!v || 'Item is required']"></v-text-field>
            <v-text-field v-model="editDialog.model.address" label="Adress"></v-text-field>
            <v-text-field v-model="editDialog.model.booktitle" label="Booktitle"></v-text-field>
            <v-text-field v-model="editDialog.model.chapter" label="Chapter"></v-text-field>
            <v-text-field v-model="editDialog.model.doi" label="DOI"></v-text-field>
            <v-text-field v-model="editDialog.model.edition" label="Edition"></v-text-field>
            <v-text-field v-model="editDialog.model.institution" label="Institution"></v-text-field>
            <v-text-field v-model="editDialog.model.journal" label="Journal"></v-text-field>
            <v-text-field v-model="editDialog.model.number" label="Number"></v-text-field>
            <v-text-field v-model="editDialog.model.pages" label="Pages"></v-text-field>
            <v-text-field v-model="editDialog.model.publisher" label="Publisher"></v-text-field>
            <v-text-field v-model="editDialog.model.series" label="Series"></v-text-field>
            <v-text-field v-model="editDialog.model.title" label="Title" required :rules="[v => !!v || 'Item is required']" ></v-text-field>
            <v-text-field v-model="editDialog.model.volume" label="Volume"></v-text-field>
            <v-text-field v-model="editDialog.model.day" label="Day"></v-text-field>
            <v-text-field v-model="editDialog.model.month" label="month"></v-text-field>
            <v-text-field v-model="editDialog.model.year" label="Year" required :rules="[v => !!v || 'Item is required']"></v-text-field>
            <v-text-field v-model="editDialog.model.authors" label="Authors" required :rules="[v => !!v || 'Item is required']"></v-text-field>
            <v-text-field v-model="editDialog.model.editors" label="Editors" required :rules="[v => !!v || 'Item is required']"></v-text-field>
            <v-combobox   v-model="editDialog.model.tags" :items="editDialog.model.tags" chips label="Tags" multiple :rules="[v => !!v || 'Item is required']"></v-combobox>
            <v-btn @click="submit">submit</v-btn>
          </v-form>
        </v-card-text>
        <v-card-actions>
      </v-card-actions>
    </v-card>
    </v-dialog>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";

import HELPERS from "../../helpers";
import fundamentcard from "../Fundament/FundamentCard";

export default {
  mixins: [HELPERS],
  data() {
    return {
      model: null
    };
  },
  components: {
    fundamentcard
  },
  computed: {
    ...mapGetters("entries", ["getEntry"]),
    ...mapState("dialogs", ["editDialog"])
  },
  methods: {
    ...mapMutations("dialogs", ["closeDialog"]),
    ...mapMutations("entries", ["setEntry"]),
    discard() {
      this.closeDialog("editDialog");
    },
    submit() {
      this.setEntry({ no: this.editDialog.idx, obj: this.editDialog.model });
      this.closeDialog("editDialog");
    },
    ...mapActions("api", ["get", "post", "delete"]),
  },
  watch: {
    // whenever question changes, this function will run
    editDialog: function () {
      this.model = this.getEntry(this.editDialog.id);
    },
  },
  created() {
    // do something after creating vue instance
    this.model = this.getEntry(this.editDialog.id);
  },
};
</script>

<style lang="css">
</style>
