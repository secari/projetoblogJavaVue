<template>
  <div v-if="categoria">
    <div class="row">
      <div class="container">
          <h1 class="catTitulo"><a :href="'/categoria/'+ categoria.id">{{ categoria.titulo }}</a></h1>
          <h2>{{categoria.descricao}}</h2>

          <div v-for="post in posts" :key="post.id">
            <div class="postsTitulo">
              <h3><a :href="'/post/' + post.id">{{post.titulo}}</a></h3>
              {{post.descricao}}
            </div>
          </div>

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
      categoria: null,
      posts: []
    }
  },
  mounted(){
    this.getCategoria(),
        this.getPostsByCategoria()
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
    },
    getPostsByCategoria(){
      var id = this.$router.history.router.currentRoute.params.id

      axios.get('v1/post/categoria/' + id).then(response=>{
        this.posts = response.data.data.content;
        console.log(this.posts);
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