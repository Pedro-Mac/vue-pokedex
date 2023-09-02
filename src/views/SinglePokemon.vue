<template>
    <div :class="getLoadingStyles">
        <LoadingSpinner v-if="isLoading" />
        <div v-else-if="pokemon">
            <p>
                {{ pokemon.name }}
            </p>
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
                'min-h-full': true
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