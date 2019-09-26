<template lang="html">
  <div>
    <v-dialog v-model="loginDialog.status" id="askForStore" max-width="500px">
      <v-card>
        <v-card-title>
          BibSonomy Login
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="username" type="text" label="Username"></v-text-field>
          <v-text-field v-model="userkey" type="text" label="API Key"></v-text-field>
        </v-card-text>
        <v-card-actions>
        <v-btn @click="login" large color="primary">
          LOGIN
        </v-btn>
        <v-btn @click="discard" large color="secondary">
          CANCEL
        </v-btn>
      </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar" :timeout="timeout">
      You were logged in
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
import HELPERS from "../../helpers";

export default {
  mixins: [HELPERS],
  data() {
    return {
      snackbar: false,
      timeout: 3000,
      username: "",
      userkey: ""
    };
  },
  computed: {
    ...mapState("dialogs", ["loginDialog"])
  },
  methods: {
    ...mapMutations("app", ["loginUser"]),
    ...mapMutations("dialogs", ["closeDialog"]),
    discard() {
      this.closeDialog("loginDialog");
    },
    login() {
      this.loginUser({ user: this.username, key: this.userkey });
      this.closeDialog("loginDialog");
      this.snackbar = true;
    }
  }
};
</script>

<style lang="css">
</style>
