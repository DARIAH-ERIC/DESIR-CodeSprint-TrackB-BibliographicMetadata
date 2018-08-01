<template>
  <div class="main-footer mt-5">
    <v-container grid-list-md>
      <v-layout row wrap justify-space-between>
        <v-flex xs12 class="footer-sep mt-3">
          <v-icon >message</v-icon> CONTACT
        </v-flex>
        <v-flex xs12 sm2 md2 class="mr-4">
          <a href="https://www.oeaw.ac.at/acdh/acdh-home/" target="_blank" rel="noopener" aria-label="ACDH">
            <img src="/DESIR_logo_01.png" alt="DESIR" title="DESIR Logo">
          </a>
        </v-flex>
        <v-flex xs12 sm3>
            <p>

              DARIAH Code Sprint
              <br>
            </p>
            <p>
              31 Jul-2 Aug 2018 Berlin (Germany)
            </p>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs12 sm3>

        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

  export default {
    data() {
      return {
      };
    },
    name: 'FundamentFooter',
  };
</script>
<style media="screen">
/* ARCHE COPY STYLES, TO BE IMPLEMENTED */
.main-footer {
  background-color: #FFFFFF;
}

.footer-sep {
  border-bottom: 1px solid #333333;
  padding-bottom: 15px;
  padding-top: 5px;
  margin-bottom: 35px;
  font-weight: 600;
  font-size: 14px;
}

.helpdesk-button {
  display: block;
  background-color: #FFFFFF;
  border: 1px solid #80cbc4!important;
  border-radius: 20px;
  padding: 5px 20px;
  font-size: 11px;
  font-weight: 600;
  color: #80cbc4;
  transition: background-color ease .2s, color ease .2s;
}

.helpdesk-button:hover, .helpdesk-button:focus {
  background-color: #80cbc4!important;
  color: #FFFFFF;
  transition: background-color ease .2s, color ease .2s;
}
footer .bodytext {
  font-size: 15px; }

.csc-textpic-text {
  padding-left: 20px; }

footer h3 {
  font-size: 17px; }

.footer-login-button {
  float: right;
  margin-left: 8px; }

.footer-login-button i {
  color: $acdh_blue;
  font-size: 22px;
  margin-top: 6px;
  transition: color ease .2s; }

.footer-login-button i:hover, .footer-login-button i:focus {
  color: #3B89AD; }

.footer-imprint-bar {
  text-align: center;
  background-color: #F1F1F1;
  padding: 8px;
  font-size: 14px; }
</style>
