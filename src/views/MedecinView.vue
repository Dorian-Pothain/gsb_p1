<template>
  <NavbarComponent>
  </NavbarComponent>

  <div>
    <h1> Recherche d'information un Médecin :</h1>
  </div>
  <RecherchemedecinComponent />
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import RecherchemedecinComponent from '@/components/RecherchemedecinComponent.vue';
export default {
    components: { NavbarComponent, RecherchemedecinComponent },
    
}
</script>
