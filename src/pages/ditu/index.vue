<template>
  <div>
    <calendar :month="Month-1"></calendar>
    <calendar :month="Month"></calendar>
    <calendar :month="Month+1"></calendar>
    <calendar :month="Month+2"></calendar>
  </div>
</template>
<script>
  import calendar from '@/components/calendar'
  export default {
    name: 'map',
    data () {
      return {
        Month: new Date().getMonth() + 1,
        arr2: []
      }
    },
    components: {
      calendar
    },
    mounted () {
      console.log(11)
    },
    methods: {
      calender () {
        console.log(9)
      }
    }
  }
</script>