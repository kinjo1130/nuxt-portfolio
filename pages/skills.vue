<template>
  <v-app class="grey darken-2">
    <v-container fluid>
      <v-content>
        <v-flex>
          <!--ヘッダー-->
         <Header></Header>
          <!--メイン-->

          <v-main>
            <v-row class="d-flex justify-center">
              <v-col cols="12" sm="7">
                <v-sheet min-height="70vh" rounded="lg"  class="d-flex justify-center flex-column ">
                  <v-row class="d-flex justify-center mt-1">
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
                      <span class="mb-5">これまでに触れたものを紹介したいと思います。</span>
                      <span class="text-h6">Language</span>
                      <v-divider></v-divider>
                      <span class="mb-5">
                        javascript / HTML / CSS / Node.js
                      </span>
                       <span class="text-h6">Framework</span>
                      <v-divider></v-divider>
                      <span class="mb-5">
                        vue.js / Nuxt.js / Vuetify / Bootstrap
                      </span>
                      <span class="text-h6">Other</span>
                      <v-divider></v-divider>
                      <span class="mb-5">
                        Google App Script  / github
                      </span>
                      <span>最近興味あるのは、TypeScriptとfirebaseかAWSなどのインフラ技術とnode以外のバックエンド技術です。</span>
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
