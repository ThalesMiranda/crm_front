<template>
  <v-app-bar
    color="white"
    density="comfortable"
    flat
    class="pl-1 pt-1"
  >
<v-img
  class="logo-fixa"
  :src="logoOficial"
  height="200"
  width="60"
  contain
/>

    <v-spacer></v-spacer>

    <!-- <v-responsive max-width="450">
      <v-text-field
        bg-color="grey-darken-3"
        density="compact"
        flat
        hide-details
        prepend-inner-icon="mdi-magnify"
        placeholder="Mega Search"
        rounded="lg"
        variant="solo-filled"
      ></v-text-field>
    </v-responsive> -->

    <v-spacer></v-spacer>

    <!-- <v-btn
      class="mx-2"
      color="blue"
      icon="mdi-plus"
      size="40"
      variant="flat"
    ></v-btn> -->

    <v-btn
      icon="mdi-white-balance-sunny"
      class="mx-1"
    ></v-btn>

    <v-avatar
      color="pink"
      class="ml-2 mr-4 cursor-pointer"
      size="36"
    >
      <span class="white--text text-h6">E</span>
    </v-avatar>

  </v-app-bar>
</template>

<script>
import logoOficial from '@/assets/logosautomata/LogoOficial.png'
export default {
  data() {
    return {
      logoOficial
    }
  }
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.logo-fixa {
  max-width: 130px; /* ajuste conforme necessário */
}
.logo-fixa img {
  width: auto !important;
}
</style>