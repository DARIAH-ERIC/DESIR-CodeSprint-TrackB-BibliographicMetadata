<template>
  <transition appear :duration="250" name="fadeLeft">
    <v-card class="border-top mb-3">
      <v-card-media :src="src" v-if="src" height="200px">
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0" v-text="caption"></h3>
          <slot></slot>
        </div>
      </v-card-title>
      <v-card-actions v-if="link">
        <v-btn
          flat
          class="primary"
          :to="link"
          >
        More</v-btn>
      </v-card-actions>
    </v-card>
  </transition>
</template>

<script>

  export default {
    data() {
      return {
      };
    },
    props: [
      'src',
      'caption',
      'link',
    ],
    name: 'FundamentJumbo',
  };
</script>
<style scoped>


</style>
