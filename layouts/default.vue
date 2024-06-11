<template>
  <v-app
    dark
    class="[ hilab-app ]"
  >
    <v-main
      class="[ hilab-main ]"
      style=" "
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
      :background-color=menuColor
      style="height: calc(var(--spacer)*2.5);"
      class="[ hilab-bottom-nav ]"
    >
      <v-btn
        v-for="item, i in items"
        :key="i"
        :to="item.to"
        :color=menuColor
        router
        excact
        class="[ hilab-bottom-nav-button ]"
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
          icon: 'mdi-bulletin-board',
          title: '掲示板', // TODO: make multilang
          to: '/'
        },
        {
          icon: 'mdi-calendar-month-outline',
          title: 'カレンダー', // TODO: make multilang
          to: '/calendar'
        }
      ],
      menuColor: 'secondary',
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="scss">
  .hilab-app {
    .hilab-main {
      min-height: 100vh;
      padding-top: calc(var(--spacer)*0);
      padding-bottom: calc(var(--spacer)*2.5);
      padding-left: calc(var(--spacer)*0);
      padding-right: calc(var(--spacer)*0);
      .hilab-container {
        padding-top: calc(var(--spacer)*2);
        padding-bottom: calc(var(--spacer)*2);
        padding-left: calc(var(--spacer));
        padding-right: calc(var(--spacer));
      }
    }

    .hilab-bottom-nav {
      height: calc(var(--spacer)*2.5);
      .hilab-bottom-nav-button {
        height: 100%;
        .hilab-bottom-nav-text {

        }
        .hilab-bottom-nav-icon {
          font-size: calc(var(--spacer) * 1);
        }
      }
    }
  }
</style>
