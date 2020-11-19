<template>
  <v-row justify="center" style="place-content: center;">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="id"
            v-model="id"
            :rules="[rules.required, rules.idMax]"
            label="아이디"
            placeholder="아이디를 입력해주세요"
            counter="25"
            required
            ></v-text-field>
          <v-text-field
            ref="password"
            v-model="password"
            :append-icon="pwShow ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="pwShow ? 'text' : 'password'"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            @click:append="pwShow = !pwShow"
            ></v-text-field>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn
            color="primary"
            text
            @click="submit"
          >로그인</v-btn>
          <v-spacer></v-spacer>
          <v-btn text>회원가입</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
    data () {
      return {
        pwShow : false,
        rules: {
          required: value => !!value || '필수항목 입니다.',
          idMax: v => v.length <= 25 || '아이디는 25자 이내입니다.',
        },
      }
    },
}
</script>

<style>

</style>