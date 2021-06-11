<template>
  <v-app class="grey">
    <v-container fluid>
      <v-content>
        <v-flex>
          <!--ヘッダー-->
          <header>
            <v-row>
              <v-col cols="12" class="d-flex justify-end">
                <div class="d-flex align-center mx-4">Kinjy Shotaro</div>
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
                <v-sheet
                  min-height="108vh"
                  rounded="lg"
                  class="d-flex justify-center flex-column"
                >
                  <!-- アイコン -->
                  <v-col class="d-flex justify-center">
                    <v-avatar size="200" class="d-flex justify-center">
                      <v-img
                        src="/image.webp"
                        class="d-flex justify-center"
                      ></v-img>
                    </v-avatar>
                  </v-col>
                  <!-- 名前 -->
                  <v-col>
                    <p class="text-h4 font-weight-black text-center mt-3">
                      Shotaro Kinjyo
                    </p>
                    <!-- メイン -->
                  </v-col>
                  <v-row class="d-flex justify-center">
                    <v-col cols="10" xl="10" lg="10" md="10" sm="10">
                      <span class="text-h5">About me</span>
                      <v-divider></v-divider>
                      <p>
                        普通科高校を卒業した18才。自分は主にフロンドエンドに興味があります。
                        <nuxt-link to="/about">もっと詳しくはこちら</nuxt-link>
                      </p>
                      <span class="text-h5">Skills</span>
                      <v-divider></v-divider>
                      <p>
                        フロントエンド関連の技術をよく使います。
                        <nuxt-link to="/skills">その他に触れたことがある技術</nuxt-link>
                      </p>
                      <span class="text-h5">Products</span>
                      <v-divider></v-divider>
                      <p>
                        個人開発が好きで、これまでに作ったLinebotを紹介します。<nuxt-link
                          to="/products"
                          >作ってきたbotの一覧</nuxt-link
                        >
                      </p>
                      <span class="text-h5"
                        >trajectory</span
                      >
                      <v-divider></v-divider>
                      <p>
                        これまでの経歴や自分の今までの軌跡を紹介していきます。<nuxt-link to="/trajectory">詳しくはこちらへ</nuxt-link>
                      </p>
                      <span class="text-h5">Accounts</span>
                      <v-divider class="mb-2"></v-divider>
                      <section class="mb-5">
                        <v-btn
                          outlined
                          @click="LinkClick('https://twitter.com/kinjyo1130')"
                          style="text-transform: none"
                          class="mr-2"
                        >
                          <v-icon color="twitter">mdi-twitter</v-icon>
                          <span>Twitter</span>
                        </v-btn>
                        <v-btn
                          outlined
                          @click="LinkClick('https://qiita.com/abcshotaro616')"
                          
                          style="text-transform: none"
                          class="mr-2"
                        >
                        <v-icon color="github">mdi-github</v-icon>
                          <span>Github</span>
                        </v-btn>
                        <v-btn
                          outlined
                          @click="LinkClick('https://qiita.com/abcshotaro616')"
                          color="qiita"
                          style="text-transform: none"
                          class="mr-2"
                        >
                          <span>Qiita</span>
                        </v-btn>
                        
                        
                      </section>
                      <!-- 随時追加する -->
                      <span class="text-h5"> Contact </span>
                      <v-divider></v-divider>
                      <p>
                        <nuxt-link to="/contact">お問い合わせページ</nuxt-link
                        >はこちら、もしくは<a href="" @click="LinkClick('https://twitter.com/messages/865937877271625729-865937877271625729?text=')"
                          >TwitterのDMまで</a
                        >
                      </p>
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
  },
  methods:{
    LinkClick(url){
      window.open( url,'_blank')
    },
    

  },
  
})
</script>