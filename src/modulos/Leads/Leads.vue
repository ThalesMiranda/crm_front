<template>
  <v-container fluid>
    <header-title :titulo="'Leads'" :botaoTexto="'Novo Lead'"/>
    <datatable/>
  </v-container>
</template>

<script>
import Datatable from '../Layout/Datatable.vue';
import HeaderTitle from '../Layout/HeaderTitle.vue';

export default{
  name:"Leads",
  components:{
    HeaderTitle,
    Datatable
  }

}
</script>
