<template>
    <div class="EstructuraPokedex">
        <div v-for="(data, index) in Pokemons" :key="index" class="cards" style="display: inline-table;">
            <div class="card" v-on:click="evolution(data.nameEvolucion1, data.nameEvolucion2, data.nameEvolucion3, index)">
                <v-card width="250">
                    <div class="box-img"><img :width="210" aspect-ratio="16/9" cover :src="data.img"></div>
                    <v-card-text>
                        <div class="Card-Title">
                            <h1>
                                {{ data.name }}
                            </h1>
                        </div>
                        <div style="padding: 10px;" class="InformacionPokemons">
                            <h4>Evolucion: {{ counter[index] }} <br>
                                Experiencia: {{ data.experiencia }} pts.<br>
                                Vida: {{ data.hp }} pts.<br>
                                Ataque: {{ data.ataque }} pts.<br>
                                Defensa: {{ data.defensa }} pts.<br>
                                Especial: {{ data.especial }} pts.</h4>
                        </div>
                    </v-card-text>
                </v-card>
            </div>
        </div>
    </div>
</template>

<style>
@import url('https://fonts.cdnfonts.com/css/pokemon-solid');
@import url('https://fonts.cdnfonts.com/css/castforce');

.pokedex {
    background-image: url('https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/masters/forest.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
}

.card {
    display: inline-block;
    margin: 30px;
    border: 1px solid black;
    box-shadow: 8px 5px 5px black;
    cursor: pointer;
    transition: transform 0.5s;
}

.card:hover {
    transform: scale(1.05);
}

.box-img {
    background-image: url('https://img.freepik.com/vector-gratis/fondo-vacio-naturaleza-escena-o-fondo_1308-32634.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.v-img {
    margin: auto;
}

.v-card-text {
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVOJ3Q5h4Lvf7WYk7ESeWoHXUwU1zqZ7W65g&usqp=CAU');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.Card-Title {
    display: inline-block;
    width: 100%;
    font-family: 'Pokemon Solid', sans-serif;
}

.InformacionPokemons {
    font-size: 20px;
    border-top: 2px solid black;
    font-family: 'Castforce', sans-serif;
}

.EstructuraPokedex {
    width: 100%;
}
</style>

<script>

import axios from 'axios'
import { ref, reactive } from 'vue'

export default {
    setup() {
        const Pokemons = reactive([]);
        const counter = reactive([]);
        return {
            counter,
            Pokemons
        }
    },
    mounted() {
        this.pokemones();
    },
    methods: {
        //Metodo que cambia los datos dependiendo del nombre de la evolucion.
        //ahora si se le da uso a las variables de nombre de la evolucion 2 y 3 que guarde en
        //las posiciones ordenadas por pokemon.
        //ahora solo paso el nombre del pokemon al cual quiero sacarle los datos.
        //este metodo solo cambia los datos de las etiquetas de ese espacio ya que ocupa el index
        //para usar la pocision de la etiqueta en uso.
        evolution(name1, name2, name3, index) {
            this.counter[index]++;
            let name;
            if (this.counter[index] == 1 || this.counter[index] == 4) {
                name = name1;
                if (this.counter[index] == 4) {
                    this.counter[index] = 1;
                }
            }
            else if (this.counter[index] == 2) {
                name = name2;
            }
            else if (this.counter[index] == 3) {
                name = name3;
            }
            if (name != "non-pokemon") {
                axios
                    .get("https://pokeapi.co/api/v2/pokemon/" + name)
                    .then(res => {
                        this.Pokemons[index].id = res.data.id,
                            this.Pokemons[index].name = res.data.name,
                            this.Pokemons[index].img = res.data.sprites.front_default,
                            this.Pokemons[index].experiencia = res.data.base_experience,
                            this.Pokemons[index].hp = res.data.stats[0].base_stat,
                            this.Pokemons[index].ataque = res.data.stats[1].base_stat,
                            this.Pokemons[index].defensa = res.data.stats[2].base_stat,
                            this.Pokemons[index].especial = res.data.stats[3].base_stat
                    })
                    .catch(err => {
                        console.log(err);
                    });
            } else {
                this.Pokemons[index].id = "00",
                    this.Pokemons[index].name = "Sin Evolucion.",
                    this.Pokemons[index].img = "https://i.ibb.co/Nshr8Q1/interrogacion.png",
                    this.Pokemons[index].experiencia = "00",
                    this.Pokemons[index].hp = "00",
                    this.Pokemons[index].ataque = "00",
                    this.Pokemons[index].defensa = "00",
                    this.Pokemons[index].especial = "00"
            }

        },
        //nombre de pokemones sin repetir (1 evolucion/2 evolucion/3 evolucion)
        //estos mismos nombre se pasan a el metodo pokemon que es el cual carga todos los pokemones
        //por medio del nombre de la evolucion 1, los otros nombres solo los guarda en la posicion del
        //nombre de la evolucion 1, estos seran usados despues en el metodo evolucion
        //el cual inicia el proceso de cambio de datos dependiendo del nombre guardado
        pokemones() {
            //535 pokemones en total
            for (let i = 0; i <= 35; i++) {
                //evitando paginas de la ruta evolution-chain que no estan funcionando
                if ((i == 209 || i == 221) || (i == 224 || i == 225) || (i == 226 || i == 230) || (i == 237 || i == 250))
                    continue
                axios
                    .get("https://pokeapi.co/api/v2/evolution-chain/" + (i + 1))
                    .then(res => {
                        let name = res.data.chain.species.name;
                        let nameEvo2, nameEvo3;
                        try {
                            nameEvo2 = res.data.chain.evolves_to[0].species.name;
                        } catch (error) {
                            nameEvo2 = "non-pokemon";
                        }
                        try {
                            nameEvo3 = res.data.chain.evolves_to[0].evolves_to[0].species.name;
                        } catch (error) {
                            nameEvo3 = "non-pokemon";
                        }
                        this.dataPokemones(name, nameEvo2, nameEvo3);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        },
        //datos de pokemones en general, este metodo es el que se usa para cargar los valores iniciales
        //en base al nombre de la primera evolucion.
        //tambien contiene el nombre de la 2da y 3ra evolucion gracias a el metodo pokemones.
        //estos ultimos datos no son usados solo se guardan los datos del nombre del pokemon en ese espacio
        //del arreglo.
        dataPokemones(name, nameEvo2, nameEvo3) {
            //evitando pokemones que no se registraron en la data de pokeapi
            if
                (
                (name == "deoxys" || name == "shaymin") ||
                (name == "minior" || name == "eiscue") ||
                (name == "indeedee" || name == "morpeko") ||
                (name == "enamorus" || name == "giratina") ||
                (name == "basculin" || name == "tornadus") ||
                (name == "thundurus" || name == "landorus") ||
                (name == "keldeo" || name == "meloetta") ||
                (name == "pumpkaboo" || name == "zygarde") ||
                (name == "oricorio" || name == "wishiwashi") ||
                name == "mimikyu"
            ) {
                console.log("Pokemon: " + name + " no registrado en la base de datos.");
            }
            else {
                axios
                    .get("https://pokeapi.co/api/v2/pokemon/" + name)
                    .then(res => {
                        let info = {
                            nameEvolucion1: name,
                            nameEvolucion2: nameEvo2,
                            nameEvolucion3: nameEvo3,
                            id: res.data.id,
                            name: res.data.name,
                            img: res.data.sprites.front_default,
                            experiencia: res.data.base_experience,
                            hp: res.data.stats[0].base_stat,
                            ataque: res.data.stats[1].base_stat,
                            defensa: res.data.stats[2].base_stat,
                            especial: res.data.stats[3].base_stat,
                        }
                        this.Pokemons.push(info);
                        this.counter.push(1)
                    })
                    .catch(err => {
                        //console.log("Pokemon: "+name+" no registrado en la base de datos.");
                    });
            }
        },
    },
}
</script>