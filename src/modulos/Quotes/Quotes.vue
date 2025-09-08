<template>
  <v-container fluid>
    <header-title :titulo="'Quotes'" :botaoTexto="'New Quote'"/>
    <datatable/>
  </v-container>
</template>

<script>
import Datatable from '../Layout/Datatable.vue';
import HeaderTitle from '../Layout/HeaderTitle.vue';
export default{
  name:"Quotes",
  components:{
    HeaderTitle,
    Datatable
  }

}


</script>
