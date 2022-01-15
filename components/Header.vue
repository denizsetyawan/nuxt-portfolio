<template>
  <v-app-bar app color="" flat>

    <v-btn v-for="link in links" :key="link.index" text :to="link.link" nuxt>
      {{ link.name }}
    </v-btn>

    <v-spacer></v-spacer>

    <v-switch class="mt-5" color="secondary" inset :value="darkMode" @change="toggleDarkMode" :label="`${switchLabel}`">
      <label for=""></label>
    </v-switch>
  </v-app-bar>
</template>
<script>
  export default {
    data: () => ({
      darkMode: false,
      links: [{
          link: '/',
          name: 'home'
        },
        {
          link: 'works',
          name: 'works'
        }
      ],
    }),
    methods: {
      toggleDarkMode: function () {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        this.darkMode = !this.darkMode;
      }
    },
    computed: {
      switchLabel: function () {
        return this.darkMode ? '☀️' : '🌙';
      }
    }
  }

</script>
<style scoped>

</style>
