<template>
  <div class="state-info">

    <span class="state-name">{{ state.name }}</span>

    <div>
      <input class="visit-state" type="checkbox" v-model="visited" v-on:change="visitedChanged">
    </div>

    <div>
      <router-link v-bind:to="{name: 'StateMap', params: {state: state.name}}">
        <img class="map-icon" alt="icon-image" src="@/assets/map_icon.png">
      </router-link>
    </div>

  </div>
</template>

<script>

export default {
  name: 'StateDetail',
  emits: ['update-visited'],
  props: { //dont modify props
    state: Object
  },
  data(){//okay to modify data
    return{
      visited: this.state.visited
    }
  },
  methods:{
    visitedChanged(){
      this.$emit('update-visited', this.state.name, this.visited)
    }
  }
}

</script>

<style scoped>
.state-info{
  padding: 1rem;
  height: 9rem;
  width: 10rem;
  border: 1px gainsboro solid;
  border-radius: .3rem;
  background-color: whitesmoke;
  box-shadow: grey 3px 3px;
}
.visit-state{
  margin: 2rem;
  text-align: center;
}
.map-icon{
  width: 4rem;
  height: 4rem;
}

</style>