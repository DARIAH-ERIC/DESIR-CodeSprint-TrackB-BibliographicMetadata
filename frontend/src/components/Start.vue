<template>
  <div class>
    <fundamentjumbo
      src="/intro_bg.jpg"
      caption="DESIR Codesprint - GROBID/Bibsonomy/ORCID WebApp"
      subtitle
    ></fundamentjumbo>
    <v-container grid-list-md>
      <v-layout justify-space-around row wrap>
        <v-flex xs12 sm12>
          <fundamentcard caption="Bibliography Extractor for BibSonomy">
            <p class="card-text">Extraction bibliographic information from files and text and upload to your BibSonomy. Powered by GROBID.</p>
            <p class="card-text">
              <v-btn @click="importPage" color="primary">Start extracting now!</v-btn>
            </p>
          </fundamentcard>
        </v-flex>
        <fundamentsectiondiv icon="device_hub" caption="Bibsonomy"></fundamentsectiondiv>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from "vuex";
import fundamentjumbo from "./Fundament/FundamentJumbo";
import fundamentcard from "./Fundament/FundamentCard";
import fundamentsectiondiv from "./Fundament/FundamentSectionDiv";

export default {
  components: {
    fundamentjumbo,
    fundamentcard,
    fundamentsectiondiv
  },
  name: "start",
  data() {
    return {};
  },
  methods: {
    importPage: function () {
      this.$router.push({ name: "import", params: { lang: "en" } });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
