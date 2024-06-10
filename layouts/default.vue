<template>
  <v-app dark>
    <v-main
      style="padding: 0px 0px 56px; min-height: 100vh"
    >
      <v-container class="[ hilab-container ]">
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }} hilab procon group b</span>
    </v-footer>
    <v-bottom-navigation
      fixed
      app
      dark
      shift
      v-model="value"
      :elevation='5'
      background-color="secondary"
    >
      <v-btn
        v-for="item, i in items"
        :key="i"
        :to="item.to"
        router
        excact
      >
        <v-icon class="[ hilab-bottom-nav-icon ]">{{ item.icon }}</v-icon>
        <span class="[ hilab-bottom-nav-text ]">{{ item.title }}</span>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-message-bulleted',
          title: 'Bulletin',
          to: '/'
        },
        {
          icon: 'mdi-calendar-month-outline',
          title: 'Calendar',
          to: '/calendar'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="scss">
  .hilab-container {
    padding-top: calc(var(--spacer)*2);
    padding-bottom: calc(var(--spacer)*4);
    padding-left: calc(var(--spacer));
    padding-right: calc(var(--spacer));
  }

  .hilab-bottom-nav-text {

  }
  .hilab-bottom-nav-icon {
    font-size: calc(var(--spacer) * 1);
  }
</style>
