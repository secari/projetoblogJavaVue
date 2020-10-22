<template>

    <div v-if="categorias">
      <div v-for="cats in categorias" :key="cats.id">
        <div class="sessaoDeCategorias">
          <div class="categoriasItens">

            <h1 class="categoriaTitulo"><a :href="'/categoria/' + cats.id">{{ cats.titulo }}</a></h1>

            <p class="categoriasDescricao">{{ cats.descricao }}</p>

          </div>
        </div>
      </div>
    </div>

</template>

<script>

import axios from 'axios';

export default {
  name: "Categorias",
  data() {
    return {
      categorias: []
    }
  },
  mounted() {
    this.getCategorias()
  },
  methods: {
    getCategorias() {
      axios.get('v1/categoria/all').then(response => {
        this.categorias = response.data.data.content;
        console.log(this.categorias);
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