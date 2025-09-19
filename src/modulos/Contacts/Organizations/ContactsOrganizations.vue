<template>
  <v-container fluid>
    <header-title :titulo="'Organizations'" :botaoTexto="'New Organization'"/>
  </v-container>
</template>

<script>
import HeaderTitle from '@/modulos/Layout/HeaderTitle.vue';
export default{
  name:"ContactsOrganization",
  components:{
    HeaderTitle,
  }

}


</script>