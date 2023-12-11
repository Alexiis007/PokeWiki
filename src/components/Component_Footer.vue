<template>
    <v-layout style="display:block;">
    <v-footer class="d-flex flex-column" style="padding: 0px; color: yellow;">
    <div class="bg d-block w-100 align-center px-4" style="background-color: black;">
      <strong>Poyect - Pokedex</strong>

      <v-spacer></v-spacer>

      <v-btn
        class="mx-4"
        variant="plain"
        size="x-large"
        color="warning"
        icon="mdi-linkedin"
        href="https://mx.linkedin.com/company/datasystems-technologies"
      ></v-btn>
      <v-btn
        class="mx-4"
        variant="plain"
        size="x-large"
        color="warning"
        icon="mdi-facebook"
        href="https://www.facebook.com/datasystemsmx/?locale=es_LA"
      ></v-btn>
      <v-btn
        class="mx-4"
        variant="plain"
        size="x-large"
        color="warning"
        icon="mdi-web"
        href="http://www.datasystems.com.mx/"
      ></v-btn>
      <v-btn
        class="mx-4"
        variant="plain"
        size="x-large"
        color="warning"
        icon="mdi-map"
        href="https://maps.app.goo.gl/qNAccJrYJxYC1Vjy8"
      ></v-btn>
    </div>

    <div class="px-4 py-2 bg text-center w-100" style="background-color: black; color: yellow;">
      {{ new Date().getFullYear() }} — <strong>DataSystem Group</strong>
    </div>
  </v-footer>
    </v-layout>
</template>
<style scoped>
  .v-layout
  {
    border-top: 1px solid yellow;
  }
</style>
<script>
  export default {
    data: () => ({
    }),
  }
</script>
  