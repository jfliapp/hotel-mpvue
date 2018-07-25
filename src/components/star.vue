<template>
  <div>
    <div style="display: flex;width: 150px;justify-content: space-around">
      <div v-for="(item, id1) in itemStar" :key="id1" @click="clickImg(id1+1)" class="imgStar" :class="item">
      </div>      
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      value: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        // starT: 3,
        score: 0,
        img: '/static/imgs/star.png'
      }
    },
    computed: {
      itemStar () {
        let result = []
        let score = Math.floor(this.score * 2) / 2
        let hasDecimal = score % 1 !== 0 // 看余数是是否等于0
        let integer = Math.floor(score)
        for (let i = 0; i < integer; i++) {
          result.push('on')
        }
        if (hasDecimal) {
          result.push('half')
        }
        while (result.length < 5) {
          result.push('off')
        }
        return result
      }
    },
    mounted () {
      this.score = this.value
    },
    methods: {
      clickImg (num) {
        console.log(this.value)
        console.log(num)
        this.score = num
      }
    }
  }
</script>
<style>
  .imgStar {
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .on{
    background-image: url("../../static/imgs/star.png");
  }
  /* .half{
    background-image: url(../assets/images/half.png);
  } */
  .off{
    background-image: url("../../static/imgs/rule.png");
  }
</style>