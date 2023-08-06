<template>
    <div>
      <input v-model="email" placeholder="メールアドレス">
      <input type="password" v-model="password" placeholder="パスワード">
      <button @click="login">ログイン</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import axios from 'axios';
  
  export default {
    setup() {
      const email = ref('');
      const password = ref('');
  
      const login = async () => {
        try {
          const response = await axios.post('http://localhost:3001/login', {
            user: {
              email: email.value,
              password: password.value
            }
          });
          localStorage.setItem('jwt', response.data.jwt);
          console.log('ログイン成功');
        } catch (error) {
          console.error('ログインエラー:', error);
        }
      }
  
      return {
        email,
        password,
        login
      }
    }
  }
  </script>
  