<template>
  <LoginView />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import LoginView from './LoginView.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    LoginView
},
});
</script>
