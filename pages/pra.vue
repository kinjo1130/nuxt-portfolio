<template>
  <v-app class="grey" >
    <v-container fluid>
      <v-content>
        <v-flex>
          <!--ヘッダー-->
          <header>
            <v-row>
              <v-col cols="12" class="d-flex justify-end">
                <nuxt-link to="/" class="d-flex align-center mx-4"
                  >Kinjyo Shotaro</nuxt-link
                >
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
                  <v-row class="d-flex justify-center">
                    <v-col cols="10" xl="10" lg="10" md="10" sm="10">
                      <v-form
                        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSedrZU2MbBAIMYOUSC1luOrhdaLBLEKtj4ACQhqOXuYSjnT9w/formResponse"
                        method="POST"
                       
                        target="hidden_iframe"
                        onsubmit="submitted=true;"
                        ref="test_form"
                      >
                        <label>名前</label>
                        <v-text-field
                        required="required"
                          :rules="[required]"
                          type="text"
                          name="entry.2005620554"
                          placeholder="金城　翔太郎"
                          v-model="name"
                        ></v-text-field>
                        <label>メールアドレス</label>
                        <v-text-field
                          :rules="[required]"
                          type="email"
                          name="entry.1045781291"
                          placeholder="sample@mail.co.jp"
                          v-model="email"
                        ></v-text-field>
                        <label>お問い合わせ内容</label>
                        <v-textarea
                         v-model="messages"
                          name="entry.839337160"
                          placeholder="問合せ内容を記入してください。"
                          required
                          :rules="[required]"
                         
                        />
                        <div class="d-flex justify-center">
                          <v-btn
                            type="submit"
                            outlined
                            color="blue"
                            @submit.prevent="submit()"
                          ></v-btn>
                          
                        </div>
                        <iframe
                          name="hidden_iframe"
                          id="hidden_iframe"
                          style="display: none"
                          onload="if(submitted){window.location='/';}"
                        ><span v-if="success"></span></iframe>
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
import Vue from 'vue';

export default Vue.extend({
    
  data() {
    return {
      theme: true,
      submitted: false,
     name:"",
     email:"",
     messages:"",
     text:"",
     success: false,
    required: value => !!value || "必ず入力してください",
      

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
      submit(){
          
          if (this.name === "" || this.mail === "" || this.message === "") {
        this.text = "⚠️全ての項目を記入してください！";
      } 

      if (this.$refs.test_form.validate()) {
        // すべてのバリデーションが通過したときのみ
        // if文の中に入る
        this.success = true;
      } else {
          required: value => !!value || "必ず入力してください",
        this.success = false;
      }
      
          
      }
  }
  
 
})
</script>