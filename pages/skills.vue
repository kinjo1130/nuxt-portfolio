<template>
  <v-app class="grey">
    <v-container fluid>
      <v-content>
        <v-flex>
          <!--ヘッダー-->
          <header>
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
                  ><v-icon>{{ themeIcon }}</v-icon></v-btn>
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
                    <v-col cols="12" sm="10" xs="6" class="d-flex flex-column">
                      <nuxt-link to="/" class="mb-3">トップへ戻る</nuxt-link>
                      <span class="text-h5">Skills</span>
                      <v-divider></v-divider>
                      <p>これまでに触れたものを紹介したいと思います。</p>
                      <span class="text-h6">言語</span>
                      <v-divider></v-divider>
                      <span class="mb-5">
                        <v-icon> mdi-google </v-icon>
                        <span> GAS </span>
                        <v-icon> mdi-language-javascript </v-icon>
                        <span> javascript </span>
                        <v-icon> mdi-vuejs</v-icon>
                        <span> vue.js </span>
                        <v-icon> mdi-nuxt</v-icon>
                        <span> nuxt.js </span>
                        <v-icon> mdi-vuetify</v-icon>
                        <span> vuetify</span>
                        <v-icon> mdi-bootstrap</v-icon>
                        <span> bootstrap</span>
                        <v-icon> mdi-vuetify</v-icon>
                        <span>vuetify</span>
                      </span>
                       <span class="text-h6">フレームワーク</span>
                      <v-divider class="mb-2"></v-divider>
                      <p class="mt-5">このサイトはnuxt×vuetifyで作成しました。</p>
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
      skills:[
          {
              icon:"mdi-language-javascript",
              language:"hoge",

      },
      {
              icon:"mdi-google",
              language:"hoe",

      }]
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