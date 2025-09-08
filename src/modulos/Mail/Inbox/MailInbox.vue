<template>
  <v-container fluid>
    <header-title :titulo="'Inbox'" :botaoTexto="'Compose Mail'"/>
  </v-container>
</template>

<script>
import HeaderTitle from '@/modulos/Layout/HeaderTitle.vue';



export default{
  name:"MailInbox",
  components:{
    HeaderTitle,
  }

}


</script>