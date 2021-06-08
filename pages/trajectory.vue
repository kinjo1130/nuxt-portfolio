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
                  <v-switch
                    color="orange"
                    v-model="theme"
                    :prepend-icon="themeIcon"
                  ></v-switch>
                </div>
              </v-col>
            </v-row>
          </header>
          <!--メイン-->

          <v-main>
            <v-row class="d-flex justify-center">
              <v-col cols="12" sm="7">
                <v-sheet min-height="70vh" rounded="lg">
                  <v-row class="justify-center">
                  <v-col cols="11" md="8">
                    <nuxt-link to="/" class="mb-3">トップへ戻る</nuxt-link>
                    <v-timeline light>
                      <v-timeline-item
                        v-for="(experience, i) in experiences"
                        :key="i"
                        :color="experience.color"
                        small
                        :icon="experience.icon"
                      >
                        <template v-slot:opposite>
                          <span>{{ experience.date }}</span>
                        </template>
                        <v-card outlined :href="experience.url">
                          <v-card-title class="headline">
                            {{ experience.title }}
                          </v-card-title>
                          <v-card-text>
                            {{ experience.text }}
                          </v-card-text>
                        </v-card>
                      </v-timeline-item>
                    </v-timeline>
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
      experiences: [
        {
          color: '#FF9770',
          icon: 'mdi-star',
          title: '滋賀県立玉川高等学校入学',
          text: 'ITとは無縁の普通科高校に入学',
          date: '2018/04',
          icon: 'mdi-twitter',
          url: ''
        },{
          color: '#F06292',
          icon: 'mdi-star',
          title: '滋賀県立玉川高等学校入学',
          text: 'ITとは無縁の普通科高校に入学',
          date: '2018/04',
          icon: 'mdi-star',
          url: ''
        },{
          color: '#F06292',
          icon: 'mdi-star',
          title: '滋賀県立玉川高等学校入学',
          text: 'ITとは無縁の普通科高校に入学',
          date: '2018/04',
          url: ''
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