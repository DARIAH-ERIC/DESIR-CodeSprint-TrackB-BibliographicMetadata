<template>
  <div class>
    <v-container grid-list-md>
      <fundamentcard caption="Load PDF from disk">
        <div>
          <p>Post PDF to API</p>
        </div>
        <vue-dropzone
          ref="myVueDropzone"
          id="file"
          :options="dropzoneOptions"
          v-on:vdropzone-success="results"
          v-on:vdropzone-complete="noresults"
        ></vue-dropzone>
      </fundamentcard>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import fundamentcard from "./Fundament/FundamentCard";

import HELPERS from "../helpers";

/* eslint no-unused-vars: ["error", {"args": "none"}] */
/* eslint no-console: ["error", { allow: ["log"] }] */

export default {
  mixins: [HELPERS],
  components: {
    vueDropzone: vue2Dropzone,
    fundamentcard
  },
  data() {
    return {
      dropzoneOptions: {
        url: "/extract",
        thumbnailWidth: 150,
        maxFilesize: 50,
        headers: {}
      },
      testdata: [
        {
          entryType: "article",
          address: null,
          booktitle:
            "• Archives Portal Europe network of excellence, D6.1 First Analysis report: Applying Web 2.0 solutions in archival applications",
          chapter: null,
          doi: null,
          edition: null,
          institution: null,
          journal: null,
          number: null,
          pages: null,
          publisher: null,
          series: null,
          title: null,
          volume: null,
          day: null,
          month: null,
          year: "January 9th 2018",
          authors: "",
          editors: "",
          tags: null
        },
        {
          entryType: "misc",
          address: null,
          booktitle: null,
          chapter: null,
          doi: null,
          edition: null,
          institution: null,
          journal: null,
          number: null,
          pages: null,
          publisher: null,
          series: null,
          title:
            "• Archives Portal Europe network of excellence D6.6 Second analysis report: Applying Web 2.0 solutions in archival applications",
          volume: null,
          day: null,
          month: null,
          year: "2014. January 9th 2018",
          authors: "",
          editors: "",
          tags: null
        },
        {
          entryType: "article",
          address: null,
          booktitle: null,
          chapter: null,
          doi: "doi:10.1080/23257962.2013.830066",
          edition: null,
          institution: null,
          journal: "Archives and Records",
          number: "2",
          pages: "235--282",
          publisher: null,
          series: null,
          title: "Developing Descriptive Standards: A Renewed Call to Action",
          volume: "34",
          day: null,
          month: null,
          year: "2013",
          authors: "• Bunn",
          editors: "",
          tags: null
        },
        {
          entryType: "misc",
          address: null,
          booktitle: null,
          chapter: null,
          doi: null,
          edition: null,
          institution: null,
          journal: null,
          number: null,
          pages: null,
          publisher: null,
          series: null,
          title: "Proposals for evolution of EAD",
          volume: null,
          day: null,
          month: null,
          year: "January 9th 2018",
          authors: "• Ead and Eac-Cpf Working Groups and Afnor null",
          editors: "",
          tags: null
        },
        {
          entryType: "article",
          address: null,
          booktitle: "Conseil international des Archives",
          chapter: null,
          doi: null,
          edition: null,
          institution: "• Experts group on archival description (ICA",
          journal: null,
          number: null,
          pages: null,
          publisher: null,
          series: null,
          title:
            "Records in Contexts, a Conceptual Model for Archival Description. Consultation Draft v0.1",
          volume: null,
          day: null,
          month: null,
          year: "September 2016. January 9th 2018",
          authors: "",
          editors: "",
          tags: null
        },
        {
          entryType: "article",
          address: null,
          booktitle: null,
          chapter: null,
          doi: "doi:10.1007/s10502-014-9225-1",
          edition: null,
          institution: null,
          journal: "Archival Science",
          number: "3",
          pages: "295--313",
          publisher: null,
          series: null,
          title:
            "An XML Schema for Enhancing the Semantic Interoperability of Archival Description",
          volume: "15",
          day: null,
          month: null,
          year: "September 1, 2015",
          authors: "• Gartner and Richard null",
          editors: "",
          tags: null
        },
        {
          entryType: "article",
          address: null,
          booktitle: null,
          chapter: null,
          doi: null,
          edition: null,
          institution: "• Library of Congress",
          journal: "Development of the Encoded Archival Description DTD",
          number: null,
          pages: null,
          publisher: null,
          series: null,
          title: null,
          volume: null,
          day: null,
          month: null,
          year: "2013. January 9th 2018",
          authors: "",
          editors: "",
          tags: null
        },
        {
          entryType: "misc",
          address: "Amsterdam, The Netherlands",
          booktitle: null,
          chapter: null,
          doi: null,
          edition: null,
          institution: null,
          journal: null,
          number: null,
          pages: null,
          publisher: null,
          series: null,
          title:
            'Internationalization and Localization of XML: Introducing "ITS',
          volume: null,
          day: null,
          month: null,
          year: "2006. May 2006. January 9th 2018",
          authors:
            "• Lieske and null Christian and Sebastian Rahtz and Sasaki Felix",
          editors: "",
          tags: null
        },
        {
          entryType: "misc",
          address: "Dublin, Ireland",
          booktitle: null,
          chapter: null,
          doi: null,
          edition: null,
          institution: null,
          journal: null,
          number: null,
          pages: null,
          publisher: null,
          series: null,
          title: "Building infrastructures for archives in a digital world",
          volume: null,
          day: null,
          month: null,
          year: "Jun 2013. 2014",
          authors: "• Medves and null Maud and Laurent Romary",
          editors: "",
          tags: null
        },
        {
          entryType: "article",
          address: "Evanston, IL",
          booktitle:
            "ODD: One Document Does it All. Workshop at the Text Encoding Initiative Conference and Members Meeting",
          chapter: null,
          doi: null,
          edition: null,
          institution: null,
          journal: null,
          number: null,
          pages: null,
          publisher: null,
          series: null,
          title: "Advanced Topics in ODD",
          volume: null,
          day: null,
          month: null,
          year: "2014. Oct 22-24",
          authors: "• Rahtz and Sebastian null and Lou Burnard",
          editors: "",
          tags: null
        },
        {
          entryType: "misc",
          address: "Bryant, Mike",
          booktitle: null,
          chapter: null,
          doi: null,
          edition: null,
          institution: null,
          journal: null,
          number: null,
          pages: null,
          publisher: null,
          series: null,
          title: null,
          volume: null,
          day: null,
          month: null,
          year: null,
          authors:
            "• Riondet and null Charles and null Romary and Van Laurent and null Nispen and null Annelies and Kepa Rodriguez and null Joseba",
          editors: "",
          tags: null
        },
        {
          entryType: "misc",
          address: null,
          booktitle: null,
          chapter: null,
          doi: null,
          edition: null,
          institution: null,
          journal: null,
          number: null,
          pages: null,
          publisher: null,
          series: null,
          title:
            "Ongoing maintenance and customization of archival standards using ODD (EAC-CPF revision proposal). EAC-CPF revision proposal",
          volume: null,
          day: null,
          month: null,
          year: "2017",
          authors: "• Romary and null Laurent and Charles Riondet",
          editors: "",
          tags: null
        },
        {
          entryType: "misc",
          address: null,
          booktitle: null,
          chapter: null,
          doi: null,
          edition: null,
          institution: null,
          journal: null,
          number: null,
          pages: null,
          publisher: null,
          series: null,
          title: null,
          volume: null,
          day: null,
          month: null,
          year: null,
          authors:
            "• Romary and null Laurent and null Banski and null Piotr and Jack Bowers and null Emiliano and null Ďurčo and null Matej",
          editors: "",
          tags: null
        },
        {
          entryType: "article",
          address: null,
          booktitle: null,
          chapter: null,
          doi: "doi:10.1080/13614570109516972",
          edition: null,
          institution: null,
          journal: "New Review of Information Networking",
          number: "1",
          pages: "117--148",
          publisher: null,
          series: null,
          title: "Rethinking Balancing Flexibility and Interoperability",
          volume: "7",
          day: null,
          month: null,
          year: "2001",
          authors: "• Shaw and Elizabeth null",
          editors: "",
          tags: null
        },
        {
          entryType: "article",
          address: null,
          booktitle: null,
          chapter: null,
          doi: null,
          edition: null,
          institution: null,
          journal: "Literate Programming in XML",
          number: null,
          pages: null,
          publisher: null,
          series: null,
          title: null,
          volume: null,
          day: null,
          month: null,
          year: "2002. January 9th 2018",
          authors: "• Walsh and Norman null",
          editors: "",
          tags: null
        }
      ]
    };
  },
  computed: {
    ...mapGetters("api", ["types"])
  },
  methods: {
    ...mapMutations("entries", ["setEntry"]),
    results(file, res) {
      for (var i = 0; i < res.length; i++) {
        res[i].idx = i;
        res[i].tags = [];
        this.setEntry({ no: i, obj: res[i] });
      }
      console.log(file, res);
      this.$router.push({ name: "entries", params: { lang: "en" } });
    },
    noresults(file) {
      // for (var i = 0; i < this.testdata.length; i++) {
      //   this.testdata[i].idx = i;
      //   this.testdata[i].tags = [];
      //   this.setEntry({no: i , obj: this.testdata[i]});
      // }
      // this.$router.push({ name: 'entries', params: { lang:  'en'  }});
    }
  },
  computed: {},
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
