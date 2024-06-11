<template>
  <div>
    <TheLogo :headerText=headerText />
    <div>
      <h2>The beginning is near!</h2>
      <p>The new bulletin feature shall be added to <strong>index.vue</strong></p>
      <p>And do not forget: DO NOT USE H1 headers - start with H2!, use the Logo component for title!</p>
    </div>
  </div>
</template>

<script>
import FullCalendar from '@/components/Calendar.vue'
import TheLogo from '../components/TheLogo.vue';

export default {
  data () {
    return {
      headerText: 'Bulletin'
    }
  },
  head () {
    return {
      title: 'Bulletin Board'
    }
  },
  components: {
    FullCalendar
  }
}
</script>

<style lang="scss">
/* 必要に応じてスタイルを追加 */
</style>
