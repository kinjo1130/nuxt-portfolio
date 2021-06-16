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
                    :color="theme ? 'orange' : 'dark'"
                    @click="theme = !theme"
                    :prepend-icon="themeIcon"
                    ><v-icon>{{ themeIcon }}</v-icon></v-btn
                  >
                </div>
              </v-col>
            </v-row>
          </header>
          <!--メイン-->

          <v-row class="d-flex justify-center">
            <v-col cols="12" sm="7">
              <v-sheet min-height="70vh" rounded="lg">
                <v-row class="d-flex justify-center">
                  <v-col cols="10" xl="10" lg="10" md="10" sm="10" class="d-flex flex-column">
                    <nuxt-link to="/"  >トップへ戻る</nuxt-link>
                    <span class="text-h5">Products</span>
                    <v-divider></v-divider>
                    <span class="mt-5">これまでに作ってきたもの一覧です。</span>
                    <p>※至らないところがあると思いますが、楽しんでいただければと思います。</p>
                    <div>
                      <a
                        @click="jumpLink('https://line.me/R/ti/p/%40585uvlbh')"
                        class="text-h6"
                        

                        >位置情報天気予報bot</a
                      >
                      <p class="mb-5">
                        botに位置情報を送るだけでその場所の天気予報を知らせてくれる。
                      </p>
                    </div>
                    <div>
                      <a
                        @click="jumpLink('https://line.me/R/ti/p/%40359rqzfr')"
                        class="text-h6"
                        >貯蓄bot</a
                      >
                      <p class="mb-5">
                        botにやることやメモなどを貯蓄しておくことができる。
                      </p>
                    </div>
                    <div>
                      <a
                        @click="jumpLink('https://line.me/R/ti/p/%40572ijpuh')"
                        class="text-h6"
                        >かねしろ一号</a
                      >
                      <p class="mb-5">
                        問題を出すbotの基本の形で、点数表示もできる。
                      </p>
                    </div>
                    <div>
                      <a
                        @click="jumpLink('https://kinjyo.me')"
                        class="text-h6"
                        >ポートフォリオサイト</a
                      >
                      <p class="mb-5">
                        初めてnuxt×vuetifyでSPA開発してみました。
                      </p>
                    </div>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-col>
          </v-row>
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
  },
  methods:{
      jumpLink(url){
          window.open(url,'_blank');
      },
      
  }
  
})
</script>