<template>
    <div class="T6Max">
        <div>
            <h1 class="TituloPagina" style="color: yellow; margin-bottom: 40px ;font-family:'Pokemon Hollow', sans-serif;">
                Top 6 Mas Poderosos</h1>
        </div>
            <div class="Rank1">
                <div class="Rank1Card">
                    <v-card class="mx-auto">
                        <div class="PokemonImage"><img class="imagen" :width="210" aspect-ratio="16/9" cover :src="PokemonsImages[0]"></div>
                        <template class="titulo" v-slot:title>
                            Top 1: {{PokemonsNombres[0]}}
                        </template>

                        <div class="Texto">
                            <h4>Experiencia: {{ PokemonsExperiencia[0] }} pts.<br>
                                Vida: {{ PokemonsHP[0] }} pts.<br>
                                Ataque: {{ PokemonsAtaque[0] }} pts.<br>
                                Defensa: {{ PokemonsDefensa[0] }} pts.<br>
                                Especial: {{ PokemonsEspecial[0] }} pts.</h4>
                        </div>
                    </v-card>
                </div>
            </div>
            <div class="Rank2" style="margin-top: 20px;">
            <v-card class="mx-auto Rank2Card">
                <div class="PokemonImage"><img class="imagen" :width="210" aspect-ratio="16/9" cover :src="PokemonsImages[1]"></div>
                        <template class="titulo" v-slot:title>
                           Top 2: {{PokemonsNombres[1]}}
                        </template>

                        <div class="Texto">
                            <h4>Experiencia: {{ PokemonsExperiencia[1] }} pts.<br>
                                Vida: {{ PokemonsHP[1] }} pts.<br>
                                Ataque: {{ PokemonsAtaque[1] }} pts.<br>
                                Defensa: {{ PokemonsDefensa[1] }} pts.<br>
                                Especial: {{ PokemonsEspecial[1] }} pts.</h4>
                        </div>
            </v-card>
            <v-card class="mx-auto Rank2Card">
                <div class="PokemonImage"><img class="imagen" :width="210" aspect-ratio="16/9" cover :src="PokemonsImages[2]"></div>
                        <template class="titulo" v-slot:title>
                           Top 3: {{PokemonsNombres[2]}}
                        </template >

                        <div class="Texto">
                            <h4>Experiencia: {{ PokemonsExperiencia[2] }} pts.<br>
                                Vida: {{ PokemonsHP[2] }} pts.<br>
                                Ataque: {{ PokemonsAtaque[2] }} pts.<br>
                                Defensa: {{ PokemonsDefensa[2] }} pts.<br>
                                Especial: {{ PokemonsEspecial[2] }} pts.</h4>
                        </div>
            </v-card>
            </div>
            <div class="Rank3" style="margin-top: 20px;">
            <v-card class="mx-auto Rank3Card" >
                <div class="PokemonImage"><img class="imagen" :width="210" aspect-ratio="16/9" cover :src="PokemonsImages[3]"></div>
                        <template class="titulo" v-slot:title>
                           Top 4: {{PokemonsNombres[3]}}
                        </template>

                        <div class="Texto">
                            <h4>Experiencia: {{ PokemonsExperiencia[3] }} pts.<br>
                                Vida: {{ PokemonsHP[3] }} pts.<br>
                                Ataque: {{ PokemonsAtaque[3] }} pts.<br>
                                Defensa: {{ PokemonsDefensa[3] }} pts.<br>
                                Especial: {{ PokemonsEspecial[3] }} pts.</h4>
                        </div>
            </v-card>
            <v-card class="mx-auto Rank3Card" >
                <div class="PokemonImage"><img class="imagen" :width="210" aspect-ratio="16/9" cover :src="PokemonsImages[4]"></div>
                        <template class="titulo" v-slot:title>
                          Top 5:  {{PokemonsNombres[4]}}
                        </template >

                        <div class="Texto">
                            <h4>Experiencia: {{ PokemonsExperiencia[4] }} pts.<br>
                                Vida: {{ PokemonsHP[4] }} pts.<br>
                                Ataque: {{ PokemonsAtaque[4] }} pts.<br>
                                Defensa: {{ PokemonsDefensa[4] }} pts.<br>
                                Especial: {{ PokemonsEspecial[4] }} pts.</h4>
                        </div>
            </v-card>
            <v-card class="mx-auto Rank3Card" >
                <div class="PokemonImage"><img class="imagen" :width="210" aspect-ratio="16/9" cover :src="PokemonsImages[5]"></div>
                        <template class="titulo" v-slot:title>
                          Top 6:  {{PokemonsNombres[5]}}
                        </template>

                        <div class="Texto">
                            <h4>Experiencia: {{ PokemonsExperiencia[5] }} pts.<br>
                                Vida: {{ PokemonsHP[5] }} pts.<br>
                                Ataque: {{ PokemonsAtaque[5] }} pts.<br>
                                Defensa: {{ PokemonsDefensa[5] }} pts.<br>
                                Especial: {{ PokemonsEspecial[5] }} pts.</h4>
                        </div>
            </v-card>
            </div>
    </div>
    <Component_Footer></Component_Footer>
    <Component_Nav></Component_Nav>
</template>
<style>
@import url('https://fonts.cdnfonts.com/css/pokemon-solid');
@import url('https://fonts.cdnfonts.com/css/castforce');
@import url('https://fonts.cdnfonts.com/css/pokemon-hollow');
    .T6Max
    {
    background-image: url('https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/masters/cave.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    padding-top: 80px;
    }
    .v-card
    {
        background-color: transparent;
        box-shadow: none;
    }
    .Rank1
    {
        width: 100%;
        margin: auto;
        padding: 10px;
    }
    .Rank1Card
    {
        width: 35%;
        margin: auto;
    }
    .Rank2
    {
        display: inline-flex;
        width: 100%;
        margin: auto;
        padding: 10px;
    }
    .Rank2Card
    {
        width: 35%;
    }
    .Rank3
    {
        display: inline-flex;
        width: 100%;
        margin: auto;
        padding: 10px;
    }
    .Rank3Card
    {
        width: 30%;
    }
    .v-card-item
    {
        border-radius: 20px;
        margin-left: 50px;
        margin-right: 90px;
        background-color: whitesmoke;
    }
    .v-card-title
    {
        font-family: 'Pokemon Solid', sans-serif;
        font-size: 20px;
    }
    .Texto
    {
        background-color: currentColor;
        font-size: 20px;
        border-radius: 2%;
        font-family: 'Castforce', sans-serif;
    }
    h4
    {
        color: whitesmoke;
    }
    .TituloPagina
    {
        font-size: 60px;
    }
    @media (max-width: 650px) {
        .Rank1Card
        {
            width: 80%;
        }
        .Rank2
        {
            display: inline-table;
            margin: auto;
        }
        .Rank2Card
        {
            margin: 10px;
            width: 80%;
        }
        .Rank3
        {
            display: inline-table;
            margin: auto;
        }
        .Rank3Card
        {
            margin: 10px;
            width: 80%;
        }
        .v-card-item
        {
            margin-left: 5px;
            margin-right: 5px;
        }
        .TituloPagina
        {
            font-size: 40px;
        }
    }
</style>
<script>
import Component_Footer from '../components/Component_Footer.vue';
import Component_Nav from '../components/Component_Nav.vue';
import axios from 'axios';
export default {
    components: {
        'Component_Footer': Component_Footer,
        'Component_Nav': Component_Nav,
    },
    methods: {
        pokemones() {
            for (let i = 0; i < 6; i++) {
                axios
                    .get("https://pokeapi.co/api/v2/pokemon/" + this.PokemonsNombres[i])
                    .then(res => {
                        this.PokemonsImages[i] = res.data.sprites.front_default,
                        this.PokemonsExperiencia[i] = res.data.base_experience,
                        this.PokemonsHP[i] = res.data.stats[0].base_stat,
                        this.PokemonsAtaque[i] = res.data.stats[1].base_stat,
                        this.PokemonsDefensa[i] = res.data.stats[2].base_stat,
                        this.PokemonsEspecial[i] = res.data.stats[3].base_stat
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        },
    },
    mounted() {
        this.pokemones();
    },
    data:function(){
      return{
        PokemonsNombres:['arceus','mewtwo','rayquaza','mew','dialga','kyurem'],
        PokemonsImages:[],
        PokemonsHP:[],
        PokemonsAtaque:[],
        PokemonsDefensa:[],
        PokemonsEspecial:[],
        PokemonsExperiencia:[],
      };
    },
}
</script>