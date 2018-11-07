<template>
  <div>
    test.html
    <div @click="getDamo">xxxx</div>
  </div>
</template>
<script>
  import qcloud from 'wafer2-client-sdk'
  import config from '@/utils/config.js'
  import {
    get
  } from '@/utils/util.js'

  export default {
    name: 'test',
    mounted() {
      // this.getDamo()
    },
    methods: {

      async getDamo() {
        console.log("点击按钮甚小码")
        const data = await get('/weapp/demo')
        console.log(data, "data --- demo limian de shuju ")
      }
    }
  }

</script>
<style>

</style>
