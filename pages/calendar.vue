<template>
    <div>
        <TheLogo :headerText=headerText />
        <!--
        <iframe src="https://calendar.google.com/calendar/embed?src=twtjudy%40gmail.com&ctz=Asia%2FTokyo" 
        style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
        -->
        <FullCalendar />
    </div>
</template>

<script>
import FullCalendar from '@/components/Calendar.vue'

export default {
  data () {
    return {
      headerText: 'Calendar'
    }
  },
  head () {
    return {
      title: 'Calendar'
    }
  },
  components: {
    FullCalendar
  }
}
</script>

<style>

</style>