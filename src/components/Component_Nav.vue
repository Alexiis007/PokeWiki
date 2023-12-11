<template>
    <v-card>
      <v-layout>
        <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->
  
        <v-app-bar
          color="black"
          prominent
        >
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  
          <v-toolbar-title>Pokedex</v-toolbar-title>
  
          <v-spacer></v-spacer>

          <v-img src="https://i.ibb.co/Fsb3xpJ/pngwing-com-8.png" cover ></v-img>

        </v-app-bar>
  
        <v-navigation-drawer
          v-model="drawer"
          location="bottom"
          color="black"
          temporary
        >
        <v-list>
        <v-list-item prepend-avatar="https://i.ibb.co/phwN64s/pngwing-com-1.png" title="Pokedex" to="/pokedex"></v-list-item>
        <v-list-item prepend-avatar="https://i.ibb.co/BLwh4nJ/pngwing-com-3.png" title="Top 6 Mas Poderosos" to="/T6Max"></v-list-item>
        <v-list-item prepend-avatar="https://i.ibb.co/9cSf911/pngwing-com-4.png" title="Top 6 Mas debiles" to="/T6Min"></v-list-item>
        <v-list-item prepend-avatar="https://i.ibb.co/X2cPPbX/pngwing-com-2.png" title="Acerca De Nosotros" to="/About"></v-list-item>
      </v-list>
        </v-navigation-drawer>
      </v-layout>
    </v-card>
  </template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/castforce');
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');
  .v-toolbar-title
  {
    text-align: justify;
  }
  .v-list-item
  {
    display: flex;
    justify-content: center;
    font-size: 20px;
    border-bottom: 1px solid black;
  }
  .v-list-item:hover
  {
    background-color: rgb(100, 92, 92);
  }
  .v-list-item-title
  {
    margin-top: 15px;
    font-size: 30px;
    font-family: 'Castforce', sans-serif;
    border-bottom: 1px solid yellow;
  }
  .v-app-bar
  {
    font-family: 'Alata', sans-serif;
    border-bottom: 1px solid yellow;
  }
  .v-navigation-drawer
  {
    border-top: 1px solid yellow;
    padding: 0%;
  }
</style>