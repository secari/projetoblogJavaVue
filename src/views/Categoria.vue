<template>
  <div v-if="categoria">
    <div class="row">
      <div class="container">
          <h1 class="catTitulo"><a :href="'/categoria/'+ categoria.id">{{ categoria.titulo }}</a></h1>
          <h2>{{categoria.descricao}}</h2>

        <ul>
          <li class="postTitulo" v-for="post in categoria.posts" :key="post.id"><a
              :href="'/post/' + categoria.id">{{ post.titulo }}</a></li>
        </ul>

        </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import Post from "@/views/Post";

export default {
  Post,
  name: "Categoria",
  data(){
    return {
      categoria: null
    }
  },
  mounted(){
    this.getCategoria()
  },
  methods: {
    getCategoria(){
      var id = this.$router.history.router.currentRoute.params.id

      axios.get('v1/categoria/item/' + id).then(response=>{
        this.categoria = response.data.data;
        console.log(this.categoria);
      }).catch(e=>{
        console.log(e);
        console.log(e.response);
      })
    }
  }
}
</script>

<style scoped>

</style>