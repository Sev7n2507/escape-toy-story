<template>
  <div class="timer">
    <div class="part">
      {{displayMinutes}}
    </div>
    
    <span class="leading-snug">:</span>
    <div class="part">
      {{displaySeconds}}
    </div>
    
  </div>
</template>
<script>
export default {
  name: 'Counter',

  data: ()=> ({

    displayMinutes: 0,
    displaySeconds: 0,
    
  }),

  computed: {
    _seconds: () => 1000,
    _minutes(){
      return this._seconds * 60
    },
 
  },
  mounted (){
    this.showRemaining();
  },

  methods: {
    formatNum(num) {
      return num < 10 ? '0' + num : num;
    },
    showRemaining(){
      const timer = setInterval(()=> {
        const now = new Date();
        console.log(now)
        const end = new Date(2021, 9, 15, 9,37, 0 ,0);
        const distance = end.getTime() - now.getTime();

        if (distance < 0 ){
          clearInterval(timer)
          return
        }

        const minutes = Math.floor(distance /this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);

        this.displayMinutes = this.formatNum(minutes);
        this.displaySeconds = this.formatNum(seconds);
        
      }, 1000);
    }
  }
}
</script>
<style scoped>
  .timer{
    display: flex; 
    text-align: center;
    justify-content: center;
    color: #ffffff;
    font-size:24px;
    font-weight: bold;
  }
   
    
</style>