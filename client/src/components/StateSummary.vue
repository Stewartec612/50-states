<template>
  <!--Display how many states the user has visited -->
  <div>
    <p>you have visited {{ totalVisited }} {{units}} </p>
    <p id="all-visited-message" v-if="areAllVisited"> you have trekked across the entire nation including the district of Columbia!</p>
    <!--DEV TOOL TIP: to automatically select all check boxes, enter:

     document.queryselectorAll("input").forEach( el => {
      el.checked=false(or true to deselect all)
      el.click();})-->
  </div>
</template>

<script>

export default {
  name: 'StateSummary',
  props:{
    states:Array
  },
  computed: {
    //computed is used
    totalVisited(){
      let visitedCount = 0
      this.states.forEach( state =>{
        if (state.visited){
          visitedCount++
        }
      })
      return visitedCount
    },
    units(){
      if(this.totalVisited === 1){
        return 'state'
      }
      else{
        return 'states'
      }
    },
    areAllVisited(){
      return this.totalVisited === this.states.length
    }
  }
}

</script>

<style>
#all-visited-message{
  color: #66de7e ;
  font-weight: bold;
  text-shadow: #2a5733 2px 1px;

}

</style>