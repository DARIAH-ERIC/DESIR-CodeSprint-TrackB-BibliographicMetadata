<template>
  <div class>
    <v-container grid-list-md>
      <h3>Extracted Entries</h3>
      <v-data-table :headers="headers" :items="$store.state.entries.entries" class="elevation-1">
        <template slot="items" slot-scope="props">
          <td>{{ props.item.title }}</td>
          <td>{{ props.item.entryType }}</td>
          <td>{{ props.item.year }}</td>
          <td>
            <v-alert :value="isValid(props.item.idx).length==0" type="success">Item ready to submit.</v-alert>
            <v-alert
              :value="isValid(props.item.idx).length>0"
              type="warning"
            >Item missing {{ isValid(props.item.idx) }}.</v-alert>
          </td>
          <td>
            <v-btn text icon @click="openEditDialog(props.item)">
              <v-icon>edit</v-icon>
            </v-btn>
          </td>
          <td>
            <v-btn text icon @click="itemDelete(props.item.idx)" color="red">
              <v-icon>delete</v-icon>
            </v-btn>
          </td>
        </template>
      </v-data-table>
      <v-btn @click="submitAll" v-if="$store.state.entries.entries.length">Submit to BibSonomy</v-btn>
    </v-container>
    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ snackText }}
      <v-btn color="red" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from "vuex";
import axios from "axios";
import HELPERS from "../helpers";

/* eslint no-unused-vars: ["error", {"args": "none"}] */
/* eslint no-console: ["error", { allow: ["log"] }] */

export default {
  mixins: [HELPERS],
  components: {},
  data() {
    return {
      snackbar: false,
      snackText: "",
      timeout: 5000,
      view: {},
      data: [],
      headers: [
        { text: "booktitle", value: "booktitle" },
        { text: "entryType", value: "entryType" },
        { text: "year", value: "year" },
        { text: "status", value: "" },
        { text: "edit", value: "" }
      ]
    };
  },
  methods: {
    ...mapMutations("entries", ["changeEntry", "deleteEntry"]),
    ...mapMutations("dialogs", ["openEditDialog"]),
    submitAll() {
      let currentObj = this;
      let o = [];
      for (var i = 0; i < this.entries.length; i++) {
        o.push(this.entries[i]);
      }
      if (!o.length) {
          this.snackbar = true;
          this.snackText = "No entries to submit!";
          return;
      }
      console.log("store items: " + o);
      axios
        .post("/store", o)
        .then(function(response) {
          currentObj.snackbar = true;
          currentObj.snackText = "Submission successful";
        })
        .catch(function(error) {
          currentObj.snackbar = true;
          currentObj.snackText = error.message;
        });
    },
    itemDelete(idx) {
      console.log("delete item: " + idx);
      this.deleteEntry({ idx: idx });
    }
  },
  computed: {
    ...mapState("entries", ["entries"]),
    ...mapGetters("entries", ["isValid"])
  },
  created() {
    console.log(this.$store.state.entries.entries);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
