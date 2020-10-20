<template>
  <div v-if="categoria">
    <h1>{{categoria.titulo}}</h1>
  </div>
</template>

<script>

import axios from 'axios';

export default {
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