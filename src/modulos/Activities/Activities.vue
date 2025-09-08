<template>
  <v-container fluid>
    <header-title :titulo="'Activities'" :botaoTexto="'New Activitie'"/>
    <datatable/>
</v-container>
</template>

<script>
import Datatable from '../Layout/Datatable.vue';
import HeaderTitle from '../Layout/HeaderTitle.vue';



export default{
  name:"Activities",
  components:{
    HeaderTitle,
    Datatable
  }

}


</script>