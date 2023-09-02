<template>
    <div :class="{ ...getLoadingStyles, 'min-h-full': true }">
        <LoadingSpinner v-if="isLoading" />
        <div v-else-if="pokemon">
            <h1 class="capitalize text-3xl">
                {{ pokemon.name }}
            </h1>
            <img :src="pokemon.sprites.front_default" />
        </div>
    </div>
</template>

<script>
import LoadingSpinner from '../components/AppLoadingSpinner.vue';
import { getSinglePokemon } from '../services/pokemon'
export default {
    data() {
        return {
            pokemon: null,
        }
    },
    props: ['isLoading', 'activePokemon', 'updateLoadingState'],
    computed: {
        getLoadingStyles() {
            return {
                'flex': this.isLoading,
                'justify-center': this.isLoading,
                'items-center': this.isLoading,

            }
        },
    },

    watch: {
        async activePokemon() {
            await this.getSinglePokemon()
            this.updateLoadingState(false)
        }
    },

    components: {
        LoadingSpinner
    },

    methods: {
        async getSinglePokemon() {
            if (this.activePokemon) {
                try {
                    const pokemon = await getSinglePokemon(this.activePokemon.url);
                    this.pokemon = pokemon;
                } catch (error) {

                }
            }
        }
    }
}
</script>