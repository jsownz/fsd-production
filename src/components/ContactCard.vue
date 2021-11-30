<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h2 class="display-1 font-weight-bold mb-3">
          Projects
        </h2>
        <v-card v-for="project in projects" :key="project.id" elevation="2" class="mb-4">
          <v-card-title>{{project.title}}</v-card-title>
          <v-card-text><a :href="project.link">{{project.link}}</a></v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'ContactCard',

    data: () => ({
      projects: [
        {
          id: 1,
          title: 'Venegas Family Farms',
          link: 'https://www.venegasfarms.com',
        },
        {
          id: 2,
          title: 'West Coast Fleet Services',
          link: 'https://westcoastfleet.com/',
        },
        {
          id: 3,
          title: 'Nancy Landrum',
          link: 'https://nancylandrum.com/',
        },
        {
          id: 4,
          title: 'Alena Antoinette Portfolio',
          link: 'http://portfolio.alenaantoinette.com/',
        }
      ],
      contact_info: {
        name: 'Jason Sohl',
        email: 'jason@frozensoliddesigns.com',
        phone: '951.347.9276',
      }
    }),
  }
</script>