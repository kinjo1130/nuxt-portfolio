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
              <v-col cols="12" xl="7" lg="7" md="7" sm="7" xs="7">
                <v-sheet min-height="60vh" rounded="lg"  class="d-flex justify-center flex-column ">
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
                      <v-row class="d-flex justify-center">
                        <div  class="d-flex flex-column">
                          <p>お問い合わせありがとうございました</p>
                          <p>24時間以内にご返信さしていただきます！</p>
                        </div>
                      </v-row>
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
      theme: true
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
