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
              <v-col cols="12" xl="7" lg="7" md="7" sm="7" xs="7" max-width="50vh">
                <v-sheet
                  rounded="lg"
                  class="d-flex justify-center flex-column"
                >
                  <!-- アイコン -->
                  <v-col class="d-flex justify-center">
                    <v-avatar size="200" class="d-flex justify-center">
                      <img
                        id="img"
                        :src="require('@/assets/image/image.png')"
                        alt="kinjyo shoutaro"
                        width="500"
                        height="500"
                      />
                    </v-avatar>
                  </v-col>
                  <!-- 名前 -->
                  <v-col>
                    <p class="text-h4 font-weight-black text-center mt-3" >
                      Shotaro Kinjyo
                    </p>
                    <!-- メイン -->
                  </v-col>
                  <v-row class="d-flex justify-center">
                    <v-col cols="10" xl="10" lg="10" md="10" sm="10">
                      <span class="text-h5">About me</span>
                      <v-divider></v-divider>
                      <p>
                        普通科高校を卒業した19才。趣味でフロントエンドを開発している人間です。
                        <nuxt-link to="/about" class="blue--text text--darken-5">もっと詳しくはこちら</nuxt-link>
                      </p>
                      <span class="text-h5">Skills</span>
                      <v-divider></v-divider>
                      <p>
                        フロントエンド関連の技術をよく使います。このサイトで初めてNuxtを使って、作ってみました。
                        <nuxt-link to="/skills" class="blue--text text--darken-5"
                          >その他に触れたことがある技術</nuxt-link
                        >
                      </p>
                      <span class="text-h5">Products</span>
                      <v-divider></v-divider>
                      <p>
                        個人開発が好きで、これまでに作ったLinebotを紹介します。<nuxt-link
                          to="/products" class="blue--text text--darken-5"
                          >作ってきたbotの一覧</nuxt-link
                        >
                      </p>
                      <p class="text-h5 mb-0">Accounts</p>
                      <v-divider class="mb-2"></v-divider>
                      <section class="mb-5">
                        <v-btn
                          outlined
                          @click="LinkClick('https://twitter.com/kinjyo1130')"
                          style="text-transform: none"
                          color="twitter"
                          class="mr-2 my-1"
                        >
                          <p class="mb-0">Twitter</p>
                        </v-btn>
                        <v-btn
                          outlined
                          @click="LinkClick('https://github.com/AFURO-1130')"
                          color="github"
                          style="text-transform: none"
                          class="mr-2 my-1"
                        >
                          <p class="mb-0">Github</p>
                        </v-btn>
                        <v-btn
                          outlined
                          @click="LinkClick('https://qiita.com/abcshotaro616')"
                          color="qiita"
                          style="text-transform: none"
                          class="mr-2 my-1"
                        >
                          <p class="mb-0">Qiita</p>
                        </v-btn>
                        <v-btn
                          outlined
                          @click="
                            LinkClick(
                              'https://www.facebook.com/profile.php?id=100041031907963'
                            )
                          "
                          color="facebook"
                          style="text-transform: none"
                          class="mr-2 my-1"
                        >
                          <p class="mb-0">Facebook</p>
                        </v-btn>
                         <v-btn
                          outlined
                          @click="
                            LinkClick(
                              'https://speakerdeck.com/kinjyo'
                            )
                          "
                          color="speakerDeck"
                          style="text-transform: none"
                          class="mr-2 my-1"
                        >
                          <p class="mb-0">SpeakerDeck</p>
                        </v-btn>
                        <v-btn
                          outlined
                          @click="
                            LinkClick(
                              'https://my-blog.jp'
                            )
                          "
                          color="#FB8C00"
                          style="text-transform: none"
                          class="mr-2 my-1"
                        >
                          <p class="mb-0">Blog</p>
                        </v-btn>
                      </section>
                      <!-- 随時追加する -->
                      <p class="text-h5 mb-0"> Contact </p>
                      <v-divider></v-divider>
                      <p>
                        <nuxt-link to="/contact" class="blue--text text--darken-5">お問い合わせページ</nuxt-link
                        >はこちら、もしくは<a
                          href=""
                          class="blue--text text--darken-5 "
                          @click="
                            LinkClick(


                              'https://www.twitter.com/messages/compose?recipient_id=865937877271625729'

                            )
                          "
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
  },
  methods:{
    LinkClick(url){
      window.open( url,'_blank')
    },


  },

})
</script>
<style>
#img {
  width: "auto";
  height: "100%";

}
</style>
