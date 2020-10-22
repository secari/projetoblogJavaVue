<template>
  <div id="Home">
    <div v-if="posts">
      <div v-for="post in posts" :key="post.id">
        <div class="sessaoDeInicio">
          <h1 class="postTitulo"><a :href="'/post/'+ post.id">{{ post.titulo }}</a></h1>

          <ul>
            <li class="catTitulo" v-for="cat in post.categorias" :key="cat.id"><a
                :href="'/categoria/' + post.id">{{ cat.titulo }}</a></li>
          </ul>

          <p class="postDescricao">{{ post.descricao }}</p>

          <b-button class="botaoLerMais" variant = "info" :href="'/post/'+ post.id">Ler mais</b-button>

        </div>
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
      posts: []
    }
  },
  mounted() {
    this.getPosts()
  },
  methods: {
    getPosts() {
      axios.get('v1/post/all').then(response => {
        this.posts = response.data.data.content;
        console.log(this.post);
      }).catch(e => {
        console.log(e);
        console.log(e.response);
      })
    },
    name: "Categoria",
    data() {
      return {
        categoria: null
      }
    },
    mounted() {
      this.getCategoria()
    },
    methods: {
      getCategoria() {
        var id = this.$router.history.router.currentRoute.params.id

        axios.get('v1/categoria/all' + id).then(response => {
          this.categoria = response.data.data;
          console.log(this.categoria);
        }).catch(e => {
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