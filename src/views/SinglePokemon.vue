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
export default {
    data() {
        return {
            pokemons: [],
        }
    },


}
</script>