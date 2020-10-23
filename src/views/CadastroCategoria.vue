<template>
  <div class="cadCategorias">
    <form>
      <label ref="cadCadTitulo" class="lblcadCatTitulo">Digite o Titulo da sua categoria: </label>
      <b-form-input class="cadCatTitulo"></b-form-input>

      <label ref="cadCadDesc" class="lblcadCatDesc">Digite a descrição da sua categoria: </label>
      <textarea class="cadCatDesc"></textarea>

      <button class="btnSalvar" type="submit">Salvar</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "cadCategorias",
  data() {
    return {
      cadCategorias: null,
    }
  },
  mounted() {
    this.getCadCategorias()
  },
  methods: {
    getCadCategorias() {
      axios.get('v1/categoria/').then(response => {
        this.cadCategorias = response.data.data;
        console.log(this.cadCategorias);
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