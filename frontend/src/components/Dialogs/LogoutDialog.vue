<template lang="html">
  <div>
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
      <v-snackbar v-model="snackbar" :timeout="timeout">
      You were logged out
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from "vuex";
import HELPERS from "../../helpers";

export default {
  data() {
    return {
      snackbar: true,
      timeout: 3000,
    };
  },
  mixins: [HELPERS],
  computed: {
    ...mapState("dialogs", ["logoutDialog"]),
  },
  methods: {
    ...mapMutations("app", ["logoutUser"]),
    ...mapMutations("dialogs", ["closeDialog"]),
    discard() {
      this.closeDialog("logoutDialog");
    },
    logout() {
      this.logoutUser();
      this.closeDialog("logoutDialog");
      this.snackbar = true;
    }
  }
};
</script>

<style lang="css">
</style>
