<template>
  <div class="h-screen flex overflow-scroll ">
    <NavBar :nav-tabs="navTabs" :active-tab="activeTab" :change-active-tab="changeActiveTab" />
    <main class="flex-1 overflow-scroll">
      <SinglePokemon :is-loading="isLoading" :active-pokemon="navTabs[activeTab]"
        :update-loading-state="updateLoadingState" />
    </main>
  </div>
</template>
<script>
import NavBar from './components/TheNavBar.vue';
import SinglePokemon from './views/SinglePokemon.vue';
import { getPokemons } from './services/pokemon'

export default {

  data() {
    return {
      navTabs: [],
      activeTab: 0,
      isLoading: false,
    }
  },
  components: {
    NavBar,
    SinglePokemon
  },

  methods: {
    async getPokemonsList() {
      if (!this.hasPokemons) {
        this.isLoading = true
      }
      try {
        const pokemonsList = await getPokemons()
        this.navTabs = pokemonsList
      } catch (error) {
        console.log(error)
      } finally {
        if (this.isLoading) {
          this.isLoading = false
        }
      }
    },

    changeActiveTab(tab) {
      this.isLoading = true
      this.activeTab = tab
    },

    updateLoadingState(val) {
      this.isLoading = val
    }
  },

  computed: {
    hasPokemons() {
      return this.navTabs.length > 0
    },
  },

  created() {
    this.getPokemonsList()
  },
}
</script>
