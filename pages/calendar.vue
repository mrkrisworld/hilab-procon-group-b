<template>
  <div>
    <TheLogo :headerText=headerText />
    <!--
        <iframe src="https://calendar.google.com/calendar/embed?src=twtjudy%40gmail.com&ctz=Asia%2FTokyo"
        style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
        -->
    <ComponentCalendar
      class="[ hilab-calendar ]" 
    />
  </div>
</template>

<script>
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
  }
}
</script>

<style lang="scss">
  .hilab-calendar {
    div {
      font-size: calc( 15px + calc(var(--spacer) * .12) );
    }
  }
</style>
