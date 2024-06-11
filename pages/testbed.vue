<template>
    <div>
      <TheLogo :headerText=headerText />
      <!--ENTER TEST COMPONENT HERE-->
      <ComponentNewDate
        style="border: 5px; border-color: gray;"
      />
    </div>
  </template>
  
  <script>
  import ComponentNewDate from '../components/ComponentNewDate.vue';
import TheLogo from '../components/TheLogo.vue';
  
  export default {
    data () {
      return {
        headerText: 'Testbed'
      }
    },
    head () {
      return {
        title: 'dev'
      }
    }
  }
  </script>
  
  <style lang="scss">

  </style>
  