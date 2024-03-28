<!-- MedecinView.vue -->
<template>
  <div>
    <NavbarComponent />
    <RechercheMedecinComponent />

    <v-container>
      <ListeRapportsComponent v-show="isListeRapportsVisible" :key="maj" />
      <FicheMedecinComponent v-show="isFicheMedVisible" :key="maj" />
    </v-container>
  </div>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue';
import RechercheMedecinComponent from '@/components/RechercheMedecinComponent.vue';
import ListeRapportsComponent from '@/components/ListeRapportsComponent.vue';
import FicheMedecinComponent from '@/components/FicheMedecinComponent.vue';

export default {
  name: 'MedecinView',
  components: {
    NavbarComponent,
    RechercheMedecinComponent,
    ListeRapportsComponent,
    FicheMedecinComponent,
  },

  data() {
    return {
      maj: 0,
      isListeRapportsVisible: false,
      isFicheMedVisible: false,
    };
  },
};
</script>