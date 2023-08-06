<template>
    <div>
      <input v-model="email" placeholder="メールアドレス">
      <input type="password" v-model="password" placeholder="パスワード">
      <input type="password" v-model="passwordConfirmation" placeholder="パスワード確認">
      <button @click="signup">サインアップ</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import axios from 'axios';
  
  export default {
    setup() {
      const email = ref('');
      const password = ref('');
      const passwordConfirmation = ref('');
  
      const signup = async () => {
        try {
          if (password.value !== passwordConfirmation.value) {
            console.error('パスワードとパスワード確認が一致しません');
            return;
          }
  
          await axios.post('http://localhost:3001/signup', {
            user: {
              email: email.value,
              password: password.value,
              password_confirmation: passwordConfirmation.value
            }
          });
          console.log('サインアップ成功');
        } catch (error) {
          console.error('サインアップエラー:', error);
        }
      }
  
      return {
        email,
        password,
        passwordConfirmation,
        signup
      }
    }
  }
  </script>
  