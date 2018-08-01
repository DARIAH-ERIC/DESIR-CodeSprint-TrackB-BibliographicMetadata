<template lang="html">
    <v-dialog v-model="logoutDialog.status" id="askForStore" max-width="500px">
      <v-card>
        <v-card-title>
          VCHC DATABASE LOGIN
        </v-card-title>
        <v-card-text>
          Do you really want to logout?
        </v-card-text>
        <v-card-actions>
        <v-btn @click="logout" large color="primary">
          LOGOUT
        </v-btn>
        <v-btn @click="discard" large color="secondary">
          CANCEL
        </v-btn>
      </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex';
import HELPERS from '../../helpers';

export default {
  data() {
    return {
    };
  },
  mixins: [HELPERS],
  computed: {
    ...mapState('dialogs', [
      'logoutDialog',
    ]),
    ...mapGetters('api', [
      'f',
    ]),
  },
  methods: {
    ...mapMutations('app', [
      'logoutMut',
    ]),
    ...mapMutations('dialogs', [
      'closeDialog',
    ]),
    discard() {
      this.closeDialog('logoutDialog');
    },
    logout() {
      this.f('getLogout')().then(() => {
        this.logoutMut();
        this.closeDialog('logoutDialog');
      });
    },
  },
};
</script>

<style lang="css">
</style>
