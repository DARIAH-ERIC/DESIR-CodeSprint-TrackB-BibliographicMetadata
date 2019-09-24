<template lang="html">
    <v-dialog v-model="loginDialog.status" id="askForStore" max-width="500px">
      <v-card>
        <v-card-title>
          VCHC DATABASE LOGIN
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="username" type="text" label="Username"></v-text-field>
          <v-text-field v-model="password" type="password" label="Password"></v-text-field>
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
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
import HELPERS from "../../helpers";

export default {
  mixins: [HELPERS],
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    ...mapState("dialogs", ["loginDialog"]),
    ...mapGetters("api", ["f"])
  },
  methods: {
    ...mapActions("api", ["init"]),
    ...mapMutations("app", ["loginMut"]),
    ...mapMutations("dialogs", ["closeDialog"]),
    discard() {
      this.closeDialog("loginDialog");
    },
    login() {
      this.f("postLogin")({
        user: {
          username: this.username,
          password: this.password
        }
      }).then(() => {
        this.loginMut();
        this.init();
        this.closeDialog("loginDialog");
      });
    }
  }
};
</script>

<style lang="css">
</style>
