<template>
    <v-toolbar border density="comfortable">
        <v-col class="d-flex jujstify-space-aroud">
            <v-btn to="/accueil">Accueil</v-btn>
        </v-col>
        <v-col class="d-flex jujstify-space-aroud">
            <v-btn to="/rapports">Rapports</v-btn>
        </v-col>
        <v-col class="d-flex jujstify-space-aroud">
            <v-btn to="/medecin">Medecin</v-btn>
        </v-col>
        <v-col class="d-flex jujstify-space-aroud">
            <v-btn to="/">Déconnexion</v-btn>
        </v-col>
    </v-toolbar>
</template>

<script>

export default {
    name: 'NavbarComponent'
}
</script>

<style></style>
