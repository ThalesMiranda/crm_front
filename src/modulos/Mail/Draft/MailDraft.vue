<template>
  <v-container fluid>
    <header-title :titulo="'Draft'" :botaoTexto="'Compose Mail'"/>
  </v-container>
</template>

<script>
import HeaderTitle from '@/modulos/Layout/HeaderTitle.vue';



export default{
  name:"MailDraft",
  components:{
    HeaderTitle
  }

}


</script>