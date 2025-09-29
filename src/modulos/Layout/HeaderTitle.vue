<template>
  <breadcrumbs/>
  <v-card class="pa-4 mb-5" outlined>
    <v-row align="center" justify="space-between" no-gutters>
      <v-col>
        <span class="text-h6 font-medium">{{ titulo }}</span>
      </v-col>

      <v-col class="d-flex justify-end" cols="auto">
        <v-btn color="primary" @click="$emit('action-button')">
          {{ botaoTexto }}
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import Breadcrumbs from './Breadcrumbs.vue';

export default {
  name: "CardHorizontal",
  components:{
    Breadcrumbs
  },
  props: {
    titulo: {
      type: String,
      required: true
    },
    botaoTexto: {
      type: String,
      required: true
    },
  },
  emits: ['action-button'],
}
</script>

<style scoped>
.v-card {
  width: 100%;
}
</style>