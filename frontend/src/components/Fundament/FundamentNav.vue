<template>
  <div>
    <transition :duration="200" name="slideLeft" mode="out-in">
      <v-navigation-drawer
        v-if="$store.state.app.drawer"
        :mini-variant="$store.state.app.miniVariant"
        enable-resize-watcher
        :class="$store.state.app.config.color"
        dark
        app
      >
        <v-container
          fill-height
          @mouseover.stop="setNavDrawerMaxi()"
          @mouseleave.stop="setNavDrawerMini()"
        >
          <v-layout column justify-space-between>
            <v-list>
              <v-list-tile>
                <!-- <v-btn icon @click.stop="toggleAppMode()">
                  <v-icon>view_day</v-icon>
                </v-btn>
                <v-btn icon @click.stop="toggleNavDrawerClipped()">
                  <v-icon v-html="$store.state.app.drawerclipped?'first_page':'last_page'" v-if="!$store.state.app.miniVariant"></v-icon>
                </v-btn>-->
              </v-list-tile>
            </v-list>
            <v-list>
              <v-list-tile
                value="true"
                v-for="(item, i) in $store.state.app.config.menu"
                :key="i"
                :to="item.startpage"
              >
                <v-btn icon>
                  <v-icon v-html="item.icon"></v-icon>
                </v-btn>
                <v-list-tile-content>
                  <v-list-tile-title class="toolbarcaption">{{item.caption}}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile
                value="true"
                @click.stop="openDialog('loginDialog')"
                v-if="!$store.state.app.loggedin"
              >
                <v-btn icon>
                  <v-icon>input</v-icon>
                </v-btn>
                <v-list-tile-content>
                  <v-list-tile-title class="toolbarcaption">LOGIN</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile
                value="true"
                @click.stop="openDialog('logoutDialog')"
                v-if="$store.state.app.loggedin"
              >
                <v-btn icon>
                  <v-icon>power_settings_new</v-icon>
                </v-btn>
                <v-list-tile-content>
                  <v-list-tile-title class="toolbarcaption">LOGOUT</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <v-list>
              <v-list-tile>
                <router-link :to="{ name: 'start' }">
                  <div class="logo">
                    <img src alt />
                  </div>Database
                </router-link>
              </v-list-tile>
            </v-list>
          </v-layout>
        </v-container>
      </v-navigation-drawer>
    </transition>
    <transition :duration="200" name="slideRight" mode="out-in">
      <v-toolbar v-if="!$store.state.app.drawer" app height="90" class="border-bottom">
        <!-- <v-btn icon @click.stop="toggleAppMode()">
          <v-icon>view_quilt</v-icon>
        </v-btn>-->
        <v-container row>
          <v-layout row class="compensation">
            <v-flex xs3>
              <v-layout column justify-center fill-height>
                <v-toolbar-title>
                  <router-link :to="{ name: 'start' }">
                    <div class="logo">
                      <h5
                        style="font-weight: 200; padding: 0px; margin: 0px;letter-spacing: 3px!important; line-height:25px;"
                      >VC</h5>
                      <h5
                        style="font-weight: 800; padding: 0px; margin: 0px;letter-spacing: 2px!important; line-height:25px;"
                      >HC</h5>
                    </div>Database
                  </router-link>
                </v-toolbar-title>
              </v-layout>
            </v-flex>
            <v-flex>
              <v-tabs icons-and-text color="grey lighten-4">
                <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
                <v-tab
                  v-for="(item, i) in $store.state.app.config.menu"
                  :key="i"
                  :to="item.startpage"
                >
                  {{item.caption}}
                  <v-icon>{{item.icon}}</v-icon>
                </v-tab>
              </v-tabs>
            </v-flex>
            <v-spacer></v-spacer>
          </v-layout>
        </v-container>
        <v-btn icon @click.stop="rightDrawer = !rightDrawer">
          <v-icon>menu</v-icon>
        </v-btn>
      </v-toolbar>
    </transition>
    <v-navigation-drawer
      :right="true"
      v-model="$store.state.app.rightDrawer"
      enable-resize-watcher
      app
    >
      <router-view name="rightdrawertop"></router-view>
      <router-view name="rightdrawerbottom"></router-view>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

/* eslint no-console: ["error", { allow: ["log"] }] */
/* eslint no-return-assign: "off" */

export default {
  data() {
    return {};
  },
  name: "FundamentNav",
  methods: {
    ...mapMutations("JSONschema", ["constructJSONschema"]),
    ...mapMutations("dialogs", ["openDialog"]),
    ...mapActions("app", ["toggleAppMode"]),
    ...mapMutations("app", [
      "setConfig",
      "toggleNavDrawerMini",
      "setNavDrawerMini",
      "setNavDrawerMaxi",
      "toggleNavDrawerClipped",
      "toggleRightDrawer",
      "toggleDrawer",
      "toggleNavbar"
    ])
  },
  created() {}
};
</script>
<style scoped>
.compensation {
  margin-left: -15px;
  margin-right: -15px;
}
.toolbarcaption {
  color: white;
}
.logo {
  color: white;
  white-space: nowrap;
  font-family: "Montserrat", sans-serif;
}
</style>
