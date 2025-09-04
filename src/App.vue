<template>
  <v-app>
    <v-main class="bg-grayFix">
      <nav-bar />
      <drawer />
      <router-view />
    </v-main>
  </v-app>
</template>


<script>
import Drawer from './modulos/Layout/Drawer.vue';
import NavBar from './modulos/Layout/NavBar.vue'

export default {
  components: { NavBar, Drawer },
  name: 'App',

  data: () => ({
    //
  }),
}
</script>

<style scoped>
  .bg-grayFix{
    background-color: rgb(243, 244, 246);
  }
</style>
