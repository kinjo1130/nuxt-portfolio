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
                <v-sheet min-height="70vh" rounded="lg"  class="d-flex justify-center flex-column ">
                  <v-row class="d-flex justify-center mt-1">
                    <v-col cols="10" xl="10" lg="10" md="10" sm="10">
                      <nuxt-link to="/" class="mb-3">トップへ戻る</nuxt-link>
                      <v-form
                        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSedrZU2MbBAIMYOUSC1luOrhdaLBLEKtj4ACQhqOXuYSjnT9w/formResponse"
                        method="POST"
                        @submit="submitted = true"
                        lazy-validation
                        target="hidden_iframe"
                        ref="test_form"
                      >
                        <v-text-field
                          required
                          label="Name"
                          :rules="[required]"
                          type="text"
                          name="entry.2005620554"
                          v-model="name"
                        ></v-text-field>
                        <v-text-field
                          required
                          :rules="[required]"
                          type="email"
                          name="entry.1045781291"
                          label="sample@mail.co.jp"
                          v-model="email"
                        ></v-text-field>
                        <v-textarea
                          v-model="messages"
                          name="entry.839337160"
                          label="お問い合わせ内容"
                          required
                          :rules="[required]"
                        ></v-textarea>
                        <div class="d-flex justify-center">
                          <v-btn
                            type="submit"
                            outlined
                            color="blue"
                            @click="submit"
                            >送信</v-btn
                          >
                        </div>
                        <iframe
                          name="hidden_iframe"
                          id="hidden_iframe"
                          style="display: none"
                          @load="submitted && $router.push('thanks')"
                        ></iframe>
                      </v-form>
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
     name:"",
     email:"",
     messages:"",

    success: false,
    required: value => !!value || "必ず入力してください",
      submitted: false

    }
  },
  computed: {
    themeIcon(){
      return this.theme ? 'mdi-weather-sunny' :  'mdi-weather-night'
    }
  },
  watch: {
    theme() {
      this.$vuetify.theme.dark = this.theme;
    }
  },
  methods :{
      submit(e){
        if(!this.$refs.test_form.validate()) {
          e.preventDefault();
        } else {
          this.success = true;
        }
      }
  }


})
</script>
