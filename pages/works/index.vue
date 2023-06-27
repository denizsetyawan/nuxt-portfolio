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

              <!-- Works -->
              <v-card class="mx-auto my-3" max-width="344" shaped v-for="work in works" :key="work.index">
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="body-2 mb-3 blue-grey--text lighten-1">
                      {{ work.tech }}
                    </div>
                    <div class="mb-2">
                      {{ work.name }}
                    </div>
                    <div class="caption">{{ work.desc }}</div>
                  </v-list-item-content>

                  <v-avatar tile size="80">
                    <v-img :src="work.thumb">
                    </v-img>
                  </v-avatar>
                </v-list-item>

                <v-card-actions>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn outlined icon text v-bind="attrs" v-on="on" class="mr-3" :href="work.web" target="_blank">
                        <v-icon>mdi-web</v-icon>
                      </v-btn>
                    </template>
                    <span>Live</span>
                  </v-tooltip>
                  <!-- Github / Optional -->
                </v-card-actions>
              </v-card>

            </v-row>

            <!-- Works 2 -->
            <section class="bio mt-7 text-center" v-for="bio in bio" :key="bio.index">
              <div class="text-h6">{{ bio.name }}</div>
                <div v-for="data in bio.datas" :key="data.index">
                  <div class="d-inline">{{ data.years }}</div>
                  <!-- <br> -->
                  <p>{{ data.name }}</p>
                </div>
            </section>

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
    data() {
      return {
        works: [{
            name: 'Eco Greentech Abadi',
            tech: 'laravel bootstrap datatables',
            desc: "it's a company profile website for PT Eco Greentech Abadi, I created it when I was doing the internship program at PT Eco Greentech Abadi.",
            thumb: 'https://ik.imagekit.io/xdt41sehmiw/dnz_my_id/eco-greentech_zUXvlFfBz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642204362396',
            web: 'https://ecogreentech.dnz.my.id'
          },
          {
            name: 'Bantenese Furniture',
            tech: 'laravel bootstrap rajaongkir',
            desc: "it's an online shop / POS (Point of Sales) website, This project intends to manage products, categories, and create sales reports.",
            thumb: 'https://ik.imagekit.io/xdt41sehmiw/dnz_my_id/bantenese_jRHAX3uhioh.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642207621647',
            web: 'https://bantenese.dnz.my.id'
          },
          {
            name: 'Kamerapedia',
            tech: 'laravel bootstrap',
            desc: "it's a website for camera rental in the yogyakarta area.",
            thumb: 'https://ik.imagekit.io/xdt41sehmiw/dnz_my_id/kamerapedia_boNf.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642392702182',
            web: 'https://kamerapedia.dnz.my.id'
          }
        ],
        bio: [{
          name: 'Works',
          datas: [{
            name: 'Worked as a freelancer.',
            years: 2020,
          },{
            name: "Internship at PT. Eco Greentech Abadi as a Web Developer.",
            years: 2021,
          },{
            name: "Completed my study at Amikom University, 3-year Diploma in Informatics.",
            years: 2021,
          },{
            name: "Working at Jogja Tourism Training Center.",
            years: "2022 to 2023",
          },{
            name: "Working at PT. CERISE (JogjaBagus).",
            years: "2023 to present",
          }]
        }],
      }
    },
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

  /* underline di tahun */
  .d-inline{
    text-decoration: underline;
    text-decoration-color: #78909C;
    text-decoration-thickness: 20%;
  }

</style>

<!-- Github / Optional -->
<!--<template v-if="work.github">
   <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn :href="work.github" target="_blank" icon outlined text v-bind="attrs" v-on="on" class="mr-3">
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </template>
    <span>Github</span>
  </v-tooltip> 
</template> -->
