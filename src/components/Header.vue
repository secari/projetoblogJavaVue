<template>
  <header>
    <div class="header1">
      <div>
        <b-navbar type="dark" variant="dark">
          <b-navbar-nav class="header2">
            <div class="homeTitulo">
              <b-nav-text style="color: #ffA500" >Blog Do Vinícius</b-nav-text>
            </div>
            <div class="header3">
              <div id="botaoHome">
                <b-nav-item href="http://localhost:8081/">Home</b-nav-item>
              </div>

              <b-nav-item :href="'/categorias/'"> Categorias </b-nav-item>

              <div>
                <b-button variant="outline-info" class="botaoLogout" :href="'/auth/'">
                  <b-icon icon="power" aria-hidden="true"></b-icon>
                  Login
                </b-button>
              </div>
            </div>
          </b-navbar-nav>
        </b-navbar>
      </div>
    </div>
  </header>
</template>

<script>

import Categorias from "@/views/Categorias";
import Login from "@/views/Login";

export default {
  name: 'Header',
  Categorias,
  Login,
}
</script>

<style scoped>
</style>
