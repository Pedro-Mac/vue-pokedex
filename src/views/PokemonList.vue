<template>
    <div>
        <ul>
            <li v-for="pokemon in pokemons" :key="pokemon.name" class="box-border p-3 capitalize">
                <span>{{ pokemon.name }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import { getPokemons } from '../services/pokemon'
export default {
    data() {
        return {
            pokemons: [],
        }
    },

    methods: {
        async getPokemonsList() {
            try {
                const pokemonsList = await getPokemons()
                this.pokemons = pokemonsList
            } catch (error) {
                console.log(error)
            }
        }
    },

    created() {
        this.getPokemonsList()
    },
}
</script>