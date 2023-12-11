<template>
  <div class="form" style="margin-bottom: 160px;">
    <v-container class="FormBox">
      <div class="Form" style="display: inline-block; margin-top: 5%; border: 1px solid black;
              border-radius: 15px; padding: 15px; background-color: white; box-shadow: 5px 5px 5px black; ">
        <v-sheet align="center" width="300" class="mx-auto formularioLogin" id="formularioLogin" style="display: block;">
          <v-form fast-fail @submit.prevent>
            <v-img :width="200" aspect-ratio="16/9" cover src="https://i.ibb.co/1JS3bmX/pngwing-com-7.png"></v-img>
            <div style="margin-top: 20px;">
              <v-text-field label="Usuario" type="user"></v-text-field>
              <v-text-field label="Contraseña" type="password"></v-text-field>
            </div>
            <div style="margin-top: 40px;">
              <v-btn style="background-color: orange; font-size: 15px;" to="/pokedex" type="submit" block
                class="mt-2">Iniciar Sesion</v-btn>
            </div>
            <div style="margin-top: 10px;">
              <v-btn border="0" flat v-on:click="RegisterOn()">
                ¿No tienes cuenta aun?
              </v-btn>
            </div>
          </v-form>
        </v-sheet>
        <v-sheet align="center" width="300" class="mx-auto formularioRegistro" id="formularioRegistro"
        style="display: none;">
          <v-form fast-fail @submit.prevent>
            <v-img :width="200" aspect-ratio="16/9" cover src="https://i.ibb.co/1JS3bmX/pngwing-com-7.png"></v-img>
            <div style="margin-top: 20px;">
              <v-text-field label="Correo" type="email"></v-text-field>
              <v-text-field label="Usuario" type="user"></v-text-field>
              <v-text-field label="Contraseña" type="password"></v-text-field>
            </div>
            <div style="margin-top: 20px;">
              <v-btn style="background-color: orange; font-size: 15px;" to="/pokedex" type="submit" block
                class="mt-2">Completar registro.</v-btn>
            </div>
            <div style="margin-top: 10px;">
              <v-btn border="0" flat v-on:click="LoginOn()">
                ¿Ya tienes una cuenta?
              </v-btn>
            </div>
          </v-form>
        </v-sheet>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    RegisterOn() {
      let registro = document.getElementById("formularioRegistro");
      let login = document.getElementById("formularioLogin");
      registro.style.display = "block";
      login.style.display = "none";
    },
    LoginOn() {
      let registro = document.getElementById("formularioRegistro");
      let login = document.getElementById("formularioLogin");
      login.style.display = "block";
      registro.style.display = "none";
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');

.Form {
  font-family: 'Alata', sans-serif;
}
</style>