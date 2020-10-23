<template>
  <div class="login">
    <form>
      <label class="lblEmail" ref="email">Email: </label>
      <b-form-input class="email" type="email" placeholder="Insira seu email"></b-form-input>

      <label class="lblPassword" ref="password">Senha: </label>
      <b-form-input class="password" type="text" placeholder="Insira sua senha"></b-form-input>

      <button class="btnAcesso" href="http://localhost:8081/">Acessar</button>
    </form>
  </div>
</template>

<script>
export default {
name: "Login"
}
</script>

<style scoped>

</style>