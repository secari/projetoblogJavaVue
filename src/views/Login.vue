<template>
  <div id="login">
    <form>
      <label class="lblEmail" ref="email">Email: </label>
      <b-form-input class="email" type="email" placeholder="Insira seu email"></b-form-input>

      <label class="lblPassword" ref="password">Senha: </label>
      <b-form-input class="password" type="text" placeholder="Insira sua senha"></b-form-input>

      <button class="btnAcesso">Acessar</button>
    </form>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      login: null
    }
  },
  mounted() {
    this.getLogin()
  },
  methods: {
    getLogin() {
      axios.get('auth').then(response => {
        this.login = response.data.data;
        console.log(this.login);
      }).catch(e => {
        console.log(e);
        console.log(e.response);
      })
    }
  }
}

</script>

<style scoped>

</style>