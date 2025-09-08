<template>
  <v-container fluid>
    <header-title :titulo="'Outbox'" :botaoTexto="'Compose Mail'"/>
  </v-container>
</template>

<script>
import HeaderTitle from '@/modulos/Layout/HeaderTitle.vue';



export default{
  name:"MailOutbox",
  components:{
    HeaderTitle
  }

}


</script>