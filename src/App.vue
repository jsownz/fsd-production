<template>
  <v-app>
    <v-app-bar
      app
      color="deep-purple darken-2"
      dark
    >
      <div class="d-flex align-center">
        <h1>Frozen Solid Designs</h1>
      </div>

    </v-app-bar>

    <v-main>
      <contact-card/>
    </v-main>
  </v-app>
</template>

<script>
import ContactCard from './components/ContactCard.vue';

export default {
  name: 'App',

  components: {
    ContactCard,
  },

  data: () => ({
    //
  }),
};
</script>
