<template>
  <div class="">
    <v-container grid-list-md>
      <h3>Entries Found</h3>
      <v-data-table
        :headers="headers"
        :items="$store.state.entries.entries"
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.title }}</td>
          <td>{{ props.item.entryType }}</td>
          <td>{{ props.item.year }}</td>
          <td><v-btn @click="openEditDialog($store.state.entries.entries[props.item.idx])" color="info">Edit</v-btn></td>
          <td>
            <v-alert :value="isValid(props.item.idx).length==0"
              type="success"
            >
              Item ready to submit.
            </v-alert>
            <v-alert :value="isValid(props.item.idx).length>0"
              type="warning"
            >
              Item missing {{ isValid(props.item.idx) }}.
            </v-alert>
          </td>
        </template>
      </v-data-table>
      <v-btn @click="submitAll">submit</v-btn>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex';
import axios from 'axios';
import HELPERS from '../helpers';

/* eslint no-unused-vars: ["error", {"args": "none"}] */
/* eslint no-console: ["error", { allow: ["log"] }] */

export default {
  mixins: [HELPERS],
  components: {
  },
  data() {
    return {
      view: {},
      data: [],
      headers: [
        { text: 'booktitle', value: 'booktitle' },
        { text: 'entryType', value: 'entryType' },
        { text: 'year', value: 'year' },
        { text: 'edit', value: '' },
        { text: 'status', value: '' },
      ],
    };
  },
  methods: {
    ...mapMutations('entries', [
      'setEntry',
    ]),
    ...mapMutations('dialogs', [
      'openEditDialog',
    ]),
    submitAll() {
      let o = [];
      for (var i = 0; i < this.entries.length; i++) {
        o.push(this.entries[i]);
      }
      console.log(o);
      axios.post('/store', o);
    }
  },
  computed: {
    ...mapState('entries', [
      'entries',
    ]),
    ...mapGetters('entries', [
      'isValid',
    ]),
  },
  created() {
    console.log(this.$store.state.entries.entries);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
