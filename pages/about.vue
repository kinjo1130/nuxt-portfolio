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
                  ><v-icon>{{ themeIcon }}</v-icon></v-btn>
                </div>
              </v-col>
            </v-row>
          </header>
          <!--メイン-->

          <v-main>
            <v-row class="d-flex justify-center">
              <v-col cols="12" xl="7" lg="7" md="7" sm="7" xs="7">
                <v-sheet min-height="70vh" rounded="lg">
                  <v-row class="d-flex justify-center">
                    <v-col cols="10" xl="10" lg="10" md="10" sm="10" class="d-flex flex-column">
                      <nuxt-link to="/" class="mb-3">トップへ戻る</nuxt-link>
                      <span class="text-h5">About me</span>
                      <v-divider></v-divider>
                      <p>
                        2002年11月30日生まれです。令和３年に普通科高校を卒業。そして、関西大学に進学。
                        高校３年の10月から開発を始めて、主にフロントエンドとlinebotを開発しています。
                      </p>
                      <span class="text-h5">趣味</span>
                      <v-divider></v-divider>
                      <p>
                        テニスやスノボーなど体動かすことが好きです。
                        最近はドライブすることが息抜きです。
                        アニメや漫画はよく読んでいて、漫画ボケなんかもよくします笑
                      </p>
                      <span class="text-h5 d-flex flex-column">資格</span>
                      <v-divider></v-divider>
                      <span>珠算技能検定1級</span>
                      <span>普通自動車免許</span>
                      <span class="text-h5 mt-5">賞</span>
                      <v-divider></v-divider>
                      <span>平成29年度県民体育大会　団体ベスト4(硬式テニス)</span>
                      <span>ハッカソン優勝</span>
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
import Vue from 'vue';
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