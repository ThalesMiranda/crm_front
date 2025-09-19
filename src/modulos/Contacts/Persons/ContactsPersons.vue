<template>
  <v-container fluid>
    <header-title :titulo="'Persons'" :botaoTexto="'New Person'" :rota="'contacts-create-person'"/>
  </v-container>
</template>

<script>
import Datatable from '../../Layout/Datatable.vue';
import HeaderTitle from '../../Layout/HeaderTitle.vue';
export default{
  name:"ContactsPersons",
  components:{
    HeaderTitle,
    Datatable
  }

}


</script>