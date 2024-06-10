<template>
  <div>
    <TheLogo :headerText=headerText />
    <!--
    <iframe src="https://calendar.google.com/calendar/embed?src=twtjudy%40gmail.com&ctz=Asia%2FTokyo" 
    style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
    <br>
    -->
    <FullCalendar />
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
  components: {
    FullCalendar
  }
}
</script>

<style>
/* 必要に応じてスタイルを追加 */
</style>
