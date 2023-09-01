<template>
  <div class="h-screen flex overflow-scroll ">
    <NavBar :nav-tabs="navTabs" :active-tab="activeTab" :change-active-tab="changeActiveTab" />
    <main class="flex-1 overflow-scroll">
      <SinglePokemon />
    </main>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue';
import SinglePokemon from './views/SinglePokemon.vue';
import { getPokemons } from './services/pokemon'

export default {

  data() {
    return {
      navTabs: [],
      activeTab: 0,
    }
  },
  components: {
    NavBar,
    PokemonList
  },

  methods: {
    async getPokemonsList() {
      try {
        const pokemonsList = await getPokemons()
        this.navTabs = pokemonsList
      } catch (error) {
        console.log(error)
      }
    },

    changeActiveTab(tab) {
      this.activeTab = tab
    },
  },

  created() {
    this.getPokemonsList()
  },
}
</script>
