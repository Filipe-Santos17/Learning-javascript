//Aula 2
const myApp = {
  data() {
    return {
      nome: 'Variavel'
    }
  },
}

//Aula 3
const dataBind = {
  data(){
    return{
      nome:'sem nome',
      name_var:'',
      id:'Data-binding'
    }
  },
  methods: {
    clickVue($e){ //$e = evento
      //$e.preventDefault();
      this.nome = this.name_var
    }
  },
}

Vue.createApp(dataBind).mount('#app')