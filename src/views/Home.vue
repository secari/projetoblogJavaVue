<template>
  <div v-if="posts">
    <div v-for="post in posts" :key="post.id">
      <h1><a :href="'/post/'+ post.id">{{post.titulo}}</a></h1>
      <ul>
        <li v-for="cat in post.categorias" :key="cat.id">{{cat.titulo}}</li>
      </ul>
      <p>{{post.descricao}}</p>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: "Post",
  data(){
    return {
      posts: []
    }
  },
  mounted(){
    this.getPosts()
  },
  methods: {
    getPosts(){
      axios.get('v1/post/all').then(response=>{
        this.posts = response.data.data.content;
        console.log(this.post);
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