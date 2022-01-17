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
  /* background-color */
  .theme--dark.v-application {
    background-color: var(--v-background-base, #121212) !important;
  }

  .theme--light.v-application {
    background-color: var(--v-background-base, white) !important;
  }

</style>
