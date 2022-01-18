<template>
  <v-main>
    <v-container>
      <v-row>
        <!-- First Column -->
        <v-col cols="12" sm="3">
        </v-col>

        <!-- Main Column -->
        <v-col cols="12" sm="6">
          <v-sheet class="my-3" rounded="lg">
            <!-- Hi -->
            <v-alert color="blue-grey lighten-1" border="left" elevation="5" colored-border icon="mdi-hand-wave" shaped>
              Hello, I'm a developer based in Indonesia!
            </v-alert>

            <!-- Profile -->
            <section class="profile my-10">
              <v-row>
                <v-col cols="12" sm="9">
                <div class="text-h4 mx-auto">Deniz Setyawan</div>
                <p class="text-subtitle-1 ml-2">Developer</p>
                </v-col>
                <v-col cols="12" sm="3" class="text-center">
                <v-avatar color="blue-grey lighten-1 mx-auto" size="80">
                  <img src="https://id.gravatar.com/userimage/149369223/b44d80bdbd606747adcb379a0bc2a8cc.png?size=200" alt="deniz setyawan">
                </v-avatar>
                </v-col>
              </v-row>
            </section>

            <!-- About -->
            <section class="about mt-6">
              <div class="text-h6">About</div>
              <p style="text-align: justify; text-indent: 0.5in;">I am a developer and a part time freelancer based in
                Yogyakarta. beside that i also sell some digital products. I like
                to learn new things especially about technology.</p>
              <div class="text-center">
                <v-btn elevation="4" color="blue-grey lighten-1" small justify="center" to="works" nuxt>Portfolio ></v-btn>
              </div>
            </section>

          </v-sheet>
        </v-col>

        <!-- Third Column -->
        <v-col cols="12" sm="3">
        </v-col>

      </v-row>
    </v-container>
  </v-main>
</template>
<script>
  export default {
    
  }

</script>

<style scoped>
  /* v-sheet - container */
  .v-sheet.theme--light.rounded-lg {
    background-color: var(--v-background-base, white) !important;
  }

  .v-sheet.theme--dark.rounded-lg {
    background-color: var(--v-background-base, #121212) !important;
  }

</style>
