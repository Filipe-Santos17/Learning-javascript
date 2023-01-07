<template>
  <div>
    <!--Não pode ser passado uma string, nessas funções, da erro-->
    <p @click="clique(text1,$ev), clique2(text2,$ev)">Evento de Click</p>
    {{ multiplos_eventos }}
  </div>
</template>

<script>
export default {
  name:'EventosVue',
  data(){
    return{
      multiplos_eventos:"",
      text1: "Primeiro Evento",
      text2: "Segundo Evento",
    }
  },
  methods:{
    clique(text){
      this.multiplos_eventos = text
    },
    clique2(text){
      console.log(text)
    }
  }
}
</script>

<style scoped>
  div{
    margin: 100px;
  }
</style>