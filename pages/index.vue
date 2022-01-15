<template>
  <v-main>
    <v-container>
      <v-row>
        <!-- First Column -->
        <v-col cols="12" sm="2">
        </v-col>

        <!-- Main Column -->
        <v-col cols="12" sm="8">
          <v-sheet class="my-3" rounded="lg">
            <v-row>

              <!-- Eco Greentech Abadi -->
              <v-card class="mx-auto my-3" max-width="344" shaped>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="body-2 mb-3 blue-grey--text lighten-1">
                      laravel boostrap
                    </div>
                    <div class="mb-2">
                      Eco Greentech Abadi
                    </div>
                    <div class="caption">it's a company profile website for PT Eco Greentech Abadi, I created it when
                      I was doing the internship program at PT Eco Greentech Abadi.</div>
                  </v-list-item-content>

                  <v-avatar tile size="80">
                    <v-img
                      src="https://ik.imagekit.io/xdt41sehmiw/dnz_my_id/eco-greentech_zUXvlFfBz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642204362396">
                    </v-img>
                  </v-avatar>
                </v-list-item>

                <v-card-actions>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn outlined icon text v-bind="attrs" v-on="on" class="mr-3">
                        <i class="fas fa-globe fa-lg"></i>
                      </v-btn>
                    </template>
                    <span>Live</span>
                  </v-tooltip>

                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn outlined icon text v-bind="attrs" v-on="on" class="mr-3">
                        <i class="fab fa-github fa-lg"></i>
                      </v-btn>
                    </template>
                    <span>Github</span>
                  </v-tooltip>
                </v-card-actions>
              </v-card>

              <!-- Bantenese -->
              <v-card class="mx-auto my-3" max-width="344" shaped>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="body-2 mb-3 blue-grey--text lighten-1">
                      laravel boostrap rajaongkir
                    </div>
                    <div class="mb-2">
                      Bantenese Furniture
                    </div>
                    <div class="caption">it's an online shop / POS (Point of Sales) website, This project intends to
                      manage products, categories, and create sales reports.</div>
                  </v-list-item-content>

                  <v-avatar tile size="80">
                    <v-img
                      src="https://ik.imagekit.io/xdt41sehmiw/dnz_my_id/bantenese_jRHAX3uhioh.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642207621647">
                    </v-img>
                  </v-avatar>
                </v-list-item>

                <v-card-actions>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn outlined icon text v-bind="attrs" v-on="on" class="mr-3">
                        <i class="fas fa-globe fa-lg"></i>
                      </v-btn>
                    </template>
                    <span>Live</span>
                  </v-tooltip>

                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn href="https://github.com" target="_blank" icon outlined text v-bind="attrs" v-on="on"
                        class="mr-3">
                        <i class="fab fa-github fa-lg"></i>
                      </v-btn>
                    </template>
                    <span>Github</span>
                  </v-tooltip>
                </v-card-actions>
              </v-card>
            </v-row>
          </v-sheet>
        </v-col>

        <!-- Third Column -->
        <v-col cols="12" sm="2">
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
