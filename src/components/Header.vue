<template>
  <header>
    <div class="header1">
      <div>
        <b-navbar type="dark" variant="dark">
          <b-navbar-nav class="header2">
            <div class="homeTitulo">
              <b-nav-text style="color: #ffA500">Blog Do Vinícius</b-nav-text>
            </div>
            <div class="header3">
              <div id="botaoHome">
                <b-nav-item href="http://localhost:8081/">Home</b-nav-item>
              </div>

              <b-nav-item :href="'/categorias/'"> Categorias </b-nav-item>

              <div>
                <b-button variant="outline-info" class="botaoLogout">
                  <b-icon icon="power" aria-hidden="true"></b-icon>
                  Logout
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

export default {
  name: 'Header',
  Categorias,
}
</script>

<style scoped>
</style>
