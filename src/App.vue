<template>
  <div class="h-screen flex overflow-scroll ">
    <NavBar :nav-tabs="navTabs" :active-tab="activeTab" />
    <main class="flex-1 overflow-scroll">
      <PokemonList />
    </main>
  </div>
</template>
<script>
import NavBar from './components/NavBar/Nav.vue';
import PokemonList from './views/PokemonList.vue';

export default {
  data() {
    return {
      navTabs: [
        {
          name: 'pokemons',
          link: ''
        }
      ],
      activeTab: 0,
    }
  },
  components: {
    NavBar,
    PokemonList
  },
}
</script>
