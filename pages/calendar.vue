<template>
    <div>
        <TheLogo :headerText=headerText />
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