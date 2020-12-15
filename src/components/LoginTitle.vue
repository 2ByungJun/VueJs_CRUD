<template>
  <v-row justify="center" style="place-content: center;">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
      <v-card ref="form">
        <!-- 입력폼 -->
        <v-card-text>
          <v-text-field
            v-model="id"
            :rules="[rules.required, rules.idMax]"
            :style="color='color'"
            label="아이디"
            placeholder="아이디를 입력해주세요"
            counter="25"
            @keyup.enter="loginResult"
            ></v-text-field>
          <v-text-field
            v-model="pw"
            :append-icon="pwShow ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="pwShow = !pwShow"
            :rules="[rules.required]"
            :type="pwShow ? 'text' : 'password'"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            @keyup.enter="loginResult"
            ></v-text-field>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <!-- 버튼 -->
        <v-card-actions>
          <v-btn 
          depressed
          color="primary" 
          @click="loginCheck" 
          @keydown.enter="loginCheck"
          >로그인
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn 
          depressed
          color="error" 
          @click="register"
          >회원가입
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-alert
        dense
        type="info"
      >아이디와 비밀번호를 확인해주세요.
      </v-alert>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios';

export default {
    data () {
      return {
        id: '',
        pw: '',
        pwShow : false,
        color : 'red',
        rules: {
          required: value => !! value || '필수항목 입니다.',
          idMax: v => v.length <= 25 || '아이디는 25자 이내입니다.',
        },
        alert : false,
      }
    },
    methods:{
      loginResult(){
        console.log( 'id : ' + this.id + ',pw : ' + this.pw )
        // 입력이 없을 때
        // ! this.pw = true
        // !! this.pw = false
        if(!!this.id && !!this.pw){
          if(this.id =="admin" && this.pw == "1234"){
            console.log("로그인 성공")
          }else{
            this.alert = 'true'
          }
        }else{
          this.alert = 'true'
        }
      },
      register(){
        console.log("회원가입 이동")
      },
      loginCheck(){
        console.log("loginCheck")
        axios.get('/api/loginCheck').then(res => {
          console.log(res)
        })
      },
    }
}
</script>

<style>


</style>