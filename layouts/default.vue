<template>
  <v-app id="dnz">
    <Header/>
    <nuxt/>
    <Footer/>
  </v-app>
</template>

<script>
  export default {
    
  }

</script>

<style scoped>
  @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/fontawesome.min.css';
  @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/brands.min.css';
  @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/solid.min.css';

  /* background-color */
  .theme--dark.v-application {
    background-color: var(--v-background-base, #121212) !important;
  }

  .theme--light.v-application {
    background-color: var(--v-background-base, white) !important;
  }

</style>
