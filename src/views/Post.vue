<template>
  <div v-if="post">
    <div class="row">
      <div class="container">
        <h1 class="postTitulo">{{ post.titulo }}</h1>

        <ul>
          <li class="catTituloPost" v-for="cat in post.categorias" :key="cat.id"><a
              :href="'/categoria/' + cat.id">{{ cat.titulo }}</a></li>
        </ul>

        <p class="postConteudo">{{ post.conteudo }}</p>



      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: "Post",
  data() {
    return {
      post: null
    }
  },
  mounted() {
    this.getPost()
  },
  methods: {
    getPost() {
      var id = this.$router.history.router.currentRoute.params.id

      axios.get('v1/post/item/' + id).then(response => {
        this.post = response.data.data;
        console.log(this.post);
      }).catch(e => {
        console.log(e);
        console.log(e.response);
      })
    },
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
      }
    }
  }
}

</script>

<style scoped>

</style>