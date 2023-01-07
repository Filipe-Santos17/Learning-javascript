<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <PrimeiroComp/>
    <LyfeCycle></LyfeCycle>
    <EventosVue></EventosVue>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import PrimeiroComp from './components/estudos/PrimeiroComponent.vue';
import LyfeCycle from './components/estudos/LyfeCycle.vue';
import EventosVue from './components/estudos/EventosVue.vue';

export default {
  name: 'App',
  components: {
    //HelloWorld
    PrimeiroComp,
    LyfeCycle,
    EventosVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#2c3e50;
  margin-top: 60px;
}
</style>
