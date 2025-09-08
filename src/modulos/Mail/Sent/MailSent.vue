<template>
  <v-container fluid>
    <header-title :titulo="'Sent'" :botaoTexto="'Compose Mail'"/>
  </v-container>
</template>

<script>
import HeaderTitle from '@/modulos/Layout/HeaderTitle.vue';



export default{
  name:"MailSent",
  components:{
    HeaderTitle
  }

}


</script>