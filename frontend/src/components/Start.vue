<template>
  <div class="">
      <fundamentjumbo
        src="/intro_bg.jpg"
        caption="DESIR Codesprint - GROBID/Bibsonomy/ORCID WebApp"
        subtitle=""
      >
      </fundamentjumbo>
      <v-container grid-list-md>
        <v-layout justify-space-around row wrap>
          <fundamentsectiondiv icon="description" caption="GROBID"></fundamentsectiondiv>
          <v-flex xs12 sm6>
            <fundamentcard
              caption="Extraction bibliographic Information from PDF with GROBID."
            >
              <p class="card-text">
                <v-btn @click="openDialog('importDialog')" color="primary">EXTRACT</v-btn>
              </p>
            </fundamentcard>
          </v-flex>
          <v-flex xs12 sm6>
            <fundamentcard
              caption="Extraction bibliographic Information from Text File with GROBID."
            >
              <p class="card-text"></p>
              <p class="card-text">
                <v-btn @click="openDialog('importDialog')" color="primary">EXTRACT</v-btn>
              </p>
            </fundamentcard>
          </v-flex>
          <fundamentsectiondiv icon="device_hub" caption="Bibsonomy"></fundamentsectiondiv>
          <!-- <v-flex xs12 sm6>
            <fundamentcard
              caption="Anlegen einer neuen Person."
              :link="{ name: 'store', params: { lang: 'en' }}"
            >
              <p class="card-text"></p>
            </fundamentcard>
          </v-flex>
          <v-flex xs12 sm6>
            <fundamentcard
              caption="Anlegen eines neuen Thesauruseintrags."
              :link="{ name: 'create', params: { lang: 'en' }}"
            >
              <p class="card-text"></p>
            </fundamentcard>
          </v-flex> -->
        </v-layout>
      </v-container>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex';
import fundamentjumbo from './Fundament/FundamentJumbo';
import fundamentcard from './Fundament/FundamentCard';
import fundamentsectiondiv from './Fundament/FundamentSectionDiv';

export default {
  components: {
    fundamentjumbo,
    fundamentcard,
    fundamentsectiondiv,
  },
  name: 'start',
  data() {
    return {
    };
  },
  methods: {
    ...mapMutations('dialogs', [
      'openDialog',
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
