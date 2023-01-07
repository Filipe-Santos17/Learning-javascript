<template>
  <div>
    <p>Estado: {{state}}</p>
  </div>
</template>

<script>
export default {
  name:"LyfeCycle",
  data(){
    return{
      state:"Incompleto"
    }
  },
  created(){//Quando o template é criado
    setTimeout(() => {
      this.state = "Criado"
    },1500)
  },
  mounted(){//Quando o template é montado - ocorre depois do created
    setTimeout(() => {
      this.state = "Montado"
    },1500)
  },  
}
</script>