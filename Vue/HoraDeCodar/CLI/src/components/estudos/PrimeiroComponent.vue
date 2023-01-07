<template>
  <div>
    <h1>Primeiro Componente Criado com Vue Js</h1>
    <ul>
      <li v-for="(item, index) in lista" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PrimeiroComp',
  data(){
    return{
      lista: ['JavaScript','PHP','Python','Java','C']
    }
  }
}
</script>