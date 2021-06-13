<template>
  <v-app class="grey">
    <v-container fluid>
      <v-content>
        <v-flex>
          <!--ヘッダー-->
          <header class="mb-5">
            <v-row>
              <v-col cols="12" class="d-flex justify-end">
                <div class="d-flex align-center mx-4">Kinjyo Shotaro</div>
                <v-spacer> </v-spacer>
                <div class="d-flex align-center">
                  <v-btn
                    outlined
                    :color="theme ? 'orange' : 'yellow'"
                    @click="theme = !theme"
                    :prepend-icon="themeIcon"
                    ><v-icon>{{ themeIcon }}</v-icon></v-btn
                  >
                </div>
              </v-col>
            </v-row>
          </header>
          <!--メイン-->

          <v-main>
            <v-row class="d-flex justify-center">
              <v-col cols="12" sm="7">
                <v-sheet min-height="70vh" rounded="lg">
                  <v-row class="d-flex justify-center">
                    <v-col
                      cols="10"
                      xl="10"
                      lg="10"
                      md="10"
                      sm="10"
                      class="d-flex flex-column"
                    >
                      <nuxt-link to="/" class="mb-3">トップへ戻る</nuxt-link>
                      <span class="text-h5">Skills</span>
                      <v-divider></v-divider>
                      <p>これまでに触れたものを紹介したいと思います。</p>
                      <span class="text-h6">言語</span>
                      <v-divider></v-divider>
                      <span class="mb-5">
                        Google App Script  / vue.js / nuxt.js / AWS / Firebase / 
                      </span>
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-col>
            </v-row>
          </v-main>
        </v-flex>
      </v-content>
    </v-container>
  </v-app>
</template>





<script lang="js">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      theme: true,
    
    }
  },
  computed: {
    themeIcon(){
      return this.theme ? 'mdi-weather-sunny' :  'mdi-weather-night'
    }
  },
  watch: {
    theme() {
      this.$vuetify.theme.dark = this.theme
    }
  }
})
</script>