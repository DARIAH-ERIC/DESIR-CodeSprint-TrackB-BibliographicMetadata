<template>
  <div class>
    <v-container grid-list-md>
      <h3>Entries Found</h3>
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
            <v-btn
              text
              icon
              @click="openEditDialog(props.item)"
            >
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
      <v-btn @click="submitAll">Submit to BibSonomy</v-btn>
    </v-container>
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
      let o = [];
      for (var i = 0; i < this.entries.length; i++) {
        o.push(this.entries[i]);
      }
      console.log("store items: " + o);
      axios.post("/store", o);
    },
    itemDelete(idx) {
      console.log("delete item: " + idx);
      this.deleteEntry({idx: idx});
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
