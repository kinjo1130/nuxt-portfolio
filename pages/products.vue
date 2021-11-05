<template>
  <v-app class="grey darken-2">
    <v-container fluid>
      <v-content>
        <v-flex>
          <!--ヘッダー-->
          <Header></Header>
          <!--メイン-->

          <v-row class="d-flex justify-center">
            <v-col cols="12" sm="7">
              <v-sheet min-height="70vh" rounded="lg"  class="d-flex justify-center flex-column ">
                <v-row class="d-flex justify-center mt-1">
                  <v-col cols="10" xl="10" lg="10" md="10" sm="10" class="d-flex flex-column">
                    <nuxt-link to="/"  >トップへ戻る</nuxt-link>
                    <span class="text-h5">Products</span>
                    <v-divider></v-divider>
                    <p class="mt-5 mb-0">これまでに作ってきたもの一覧です。</p>
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
                    <div>
                      <a
                        @click="jumpLink('https://my-blog.jp')"
                        class="text-h6"
                        >ブログサイト</a
                      >
                      <p class="mb-5">
                        Nuxt.js × Tailwind.css × Netlify CMSで作ってみました。
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
