<template>
  <NavbarComponent />
  Bienvenue {{ this.$store.state.utilisateur.nom + " "+this.$store.state.utilisateur.prenom }}
  
  <div>
    <h1>Caractéristique d'un pinguin Avcii en liberté sur la banquise !</h1>

    <!-- Afficher les informations de l'utilisateur -->
    <div v-if="utilisateur">
      <p> {{ utilisateur }}</p>
      
      
    </div>
  </div>
</template>

<script>

import NavbarComponent from '../components/NavbarComponent.vue';

export default {
  components : {
    NavbarComponent
  },
  computed: {
    // Utilisez une propriété calculée pour accéder aux informations de l'utilisateur depuis le store
    utilisateur() {
      return this.$store.state.utilisateur;
    },
  },
};


</script>


