<template>
  <v-footer padless>
      <v-col class="text-center" cols="12">
        <v-btn v-for="social in socials" :key="social.index" class="mx-4" icon :href="social.link" target="_blank">
          <v-icon size="24px">
            {{ social.mdi }}
          </v-icon>
        </v-btn>
      </v-col>
      <v-col class="text-center" cols="12">
        © {{ new Date().getFullYear() }} <span>dnz</span>
      </v-col>
    </v-footer>
</template>
<script>
  export default {
    data: () => ({
      socials: [{
          link: 'https://github.com/denizsetyawan',
          mdi: 'mdi-github'
        },
        {
          link: 'https://www.linkedin.com/in/denis-setiawan-391323a8/',
          mdi: 'mdi-linkedin'
        },
        {
          link: 'https://instagram.com/dnzsetyawan/',
          mdi: 'mdi-instagram'
        }
      ],
    }),
  }

</script>
<style scoped>
  /* footer */
  .v-footer.theme--dark {
    background-color: var(--v-background-base, #121212) !important;
  }

  .v-footer.theme--light {
    background-color: var(--v-background-base, white) !important;
  }

</style>
