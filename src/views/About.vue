<template>
    <div class="About">
        <div class="ContTitulo" style="background-color: currentColor; border-radius: 50px; margin: auto;">
            <h1 class="TituloPagina" style="color: white; font-family:'Pokemon Hollow', sans-serif;">¿Quienes Somos?</h1>
        </div>
        <div class="Informacion">
            <h2 class="titulo">PokeWiki</h2>
            <p class="texto">
                Tratamos de crear un sitio el cual resuelva todas las dudas que hay acerca de los pokemons
                que ahí en el mundo Pokémon, ya sea sobre sus datos generales o sobre sus evoluciones.
                También tenemos secciones en las cuales recopilamos los primeros 6 más importantes en 
                cuanto a su poder y también los 6 de su contraparte negativa.
            </p>
            <v-img src="https://i.ibb.co/j82XXyD/pngwing-com-5.png" class="img"></v-img>
        </div>
        <div class="Informacion">
            <h2 class="titulo">Actualizaciones</h2>
            <p class="texto">
                Como ya mencionamos tratamos de resolver las dudas que se tengan sobre los pokemones existentes
                hasta hoy, pero sabemos que podemos lograr mas y brindarle mas a los usuarios que ingresen,
                actualizando la informacion dia con dia, agregando otras ramas de los pokemones, agregando
                nuevas funciones de busqueda, etcetera...
                Asi que si, esta pagina estara en constante actualizacion y no te preucupes si algo no esta
                actualizado ya que estamos trabajando en ello.
                Si quieres reportar alguna falla en la pagina manda un correo a
                <a href="mailto:christianalexis0918@gmail.com?subject=--%20Reporte%20de%20fallas%20o%20sugerencias%20--&body=Hola%20quisiera..." style="text-decoration: none;">christianalexis0918@gmail.com</a>
            </p>
            <v-img src="https://i.ibb.co/mDbXDZ1/pngwing-com-6.png" class="img"></v-img>
        </div>
        <Component_Footer></Component_Footer>
        <Component_Nav></Component_Nav>
    </div>
</template>
<style>
    @import url('https://fonts.cdnfonts.com/css/pokemon-solid');
    @import url('https://fonts.cdnfonts.com/css/castforce');
    @import url('https://fonts.cdnfonts.com/css/pokemon-hollow');
    @import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');
        .About
        {
        background-image: url('https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/masters/city.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
        padding-top: 80px;
        font-family: 'Alata', sans-serif;
        }
        .ContTitulo
        {
            width: 40%; 
            font-size: 30px;
            margin-bottom: 40px;
            padding: 10px;
            padding-bottom: 30px;
        }
        .Informacion
        {
            background: linear-gradient(white, rgb(208, 228, 96));
            border-radius: 5px;
            width: 50%;
            margin:50px auto;
            padding: 10px;
            color: black;
            box-shadow: 5px 10px 5px black;
        }
        .titulo
        {
            font-size: 30px;
        }
        .texto
        {
            font-size: 20px;
        }
        .img:hover {
            transform: scale(1.5);
        }
        .img
        {
            transition: transform 0.5;
            width:30%;
            margin: auto;
        }
        @media (max-width: 650px) {
            .ContTitulo
            {
                font-size: 20px;
                width: 80%;
                margin: 10px auto;
            }
            .Informacion
            {
                width: 90%;
                border-radius: 5px;
                margin: 20px auto;
                padding: 10px;
            }
            .titulo
            {
                font-size: 30px;
            }
            .texto
            {
                font-size: 20px;
            }
        }
</style>
<script>
     import Component_Footer from '../components/Component_Footer.vue';
     import Component_Nav from '../components/Component_Nav.vue';
     export default
     {
        components:{
            'Component_Footer': Component_Footer,
            'Component_Nav': Component_Nav,
        },
        methods: {
        },
     }
</script>