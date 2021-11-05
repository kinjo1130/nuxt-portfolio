<template>
     <v-container>
       <v-flex>
            <v-row class="d-flex justify-center">
              <v-col cols="12" xl="7" lg="7" md="7" sm="7" xs="7"  class="d-flex align-center">
                <p class="mx-4 mb-0" ><nuxt-link to="/" style="text-decoration: none" class="white--text">Kinjyo Shotaro</nuxt-link></p>
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
       </v-flex>
     </v-container>
</template>

<script>
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

</style>
