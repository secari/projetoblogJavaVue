<template>
  <div v-if="post">
    <div class="row">
      <div class="container">
        <div class="postCat">
        </div>
          <h1 class="postTitulo">{{post.titulo}}</h1>
          <p>{{post.conteudo}}</p>
        </div>
      </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: "Post",
  data(){
    return {
      post: null
    }
  },
  mounted(){
    this.getPost()
  },
  methods: {
    getPost(){
      var id = this.$router.history.router.currentRoute.params.id

      axios.get('v1/post/item/' + id).then(response=>{
        this.post = response.data.data;
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