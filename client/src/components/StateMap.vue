<template>
  <div class="state-map">
    <h2>The state of {{ state.name }}</h2>

    <p v-if="state.visited">You have visited this state</p>
    <p v-else>You have not visited this state</p>

    <!--Map Here-->

    <div id="map-container" v-if="dataReady">
      <l-map href="map"
             v-bind:center="mapCenter"
             v-bind:zoom="state.zoom"
             v-on:ready="onMapReady">
        <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution="&copy; OpenStreetMap contributors">

        </l-tile-layer>
      </l-map>
    </div>

  </div>
</template>

<script>

import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'

export default {
  name: 'StateMap',
  components: {
    LMap, LTileLayer
  },
  data(){
    return {
      state:{},
      dataReady: false,
      mapReady: false
    }
  },
  mounted(){
    this.state.name = this.$route.params.state
    this.fetchStateData()
},
  methods:{
    fetchStateData() {
      this.$stateService.getOneState(this.state.name).then( state => {
        this.state = state
        this.dataReady = true
      }).catch( err => {
        //catch 404(not found), 500(server error) errors

        //404
        if( err.response && err.response.status === 404){
          this.state.name = '?' //Placeholder, think of better way to communicate not found to user
        }
        else{
          //500
          alert('Sorry, error fetching data for this state')//error message for user
          console.error(err) // error for developer to see
        }


      })
    },
    onMapReady(){
      this.mapReady = true
    },
    setMapView(){
      if(this.mapReady && this.dataReady){
        //make sure map shows correct state in correct part of world and zoom level
        //map will update whenever leaflet updates
        this.$refs.map.leafletObject.setView(this.mapCenter, this.zoom)
      }
    }
  },
  computed: {
    mapCenter() {
      return [ this.state.lat, this.state.lon]
    }
  }


}

</script>

<style scoped>

#map-container{
  height: 30rem;
  border: grey solid 3px;
  box-shadow: black 1px 1px;
  margin-bottom: 3rem;
}

</style>