<template>
  <div>
    <h2 class='title'> Assign vehicles to your planets </h2>

    <div class='planetslist'>
      <div class='planet' v-for="(planet, index1) in this.$store.getters.selectedPlanets">
        <img v-bind:src="imagePath(index1)" />
        <h3> {{ planet.name }} </h3>
        <p> <b>Distance</b> - {{ planet.distance }} megamiles </p>

        <div class='vehiclesList'>

          <p><b>Assign vehicle</b></p>

          <div v-for="(vehicle, index2) in vehicles" class='vehicle' v-on:click="assignVehicle(index2, index1, vehicle)">
            <div></div>
            <span>{{ vehicle.name }}</span>
            <img src='../assets/tick.png' v-if='vehicle == planet.vehicle'/>
          </div>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      selectedPlanets: this.$store.getters.selectedPlanets,
      vehicles: [],
      assignedVehicles: []  
    }
  },
  methods: {
    imagePath: function (index) {
      index++;
      return require('@/assets/planets/0' + index + '.png')
    },
    fetchVehicles(){
      this.$http.get('vehicles')
      .then(response => {
        this.vehicles = response.data;
      });
    },
    findOccurences(dataset, search){
      var occurrences = dataset.filter(function(val) {
          return val === search;
      }).length;
      return occurrences;
    },
    assignVehicle(vehicleIndex, planetIndex, vehicleObj){

      var planet = this.selectedPlanets[planetIndex];
      console.log(planet);

      if(this.findOccurences(this.assignedVehicles, vehicleObj) < vehicleObj.total_no){
        if(planet.vehicle !== undefined){
          this.assignedVehicles.pop(planet.vehicle);
        }
        planet.vehicle = vehicleObj;
        this.$set(this.selectedPlanets, planetIndex, planet);  
        this.assignedVehicles.push(vehicleObj);
      }
    }
  },
  created: function () {
    this.fetchVehicles();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h2,p{
    color: white;
  }
  
  .planetslist{
    width: 1000px;
    margin: 60px auto;
  }

  .planet{
    position: relative;
    display: inline-block;
    margin:16px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px #211a1a;
  }

  .planet h3, .planet p{
    color: black;
    margin: 0px;
  }

  .planet h3{
    margin: 4px;
  }

  .planet p{
    font-size: 12px;
    margin-top: 8px;
  }

  .planet img{
    width: 64px;
    height: 64px;
  }

  .vehiclesList{
    background: #e5e5e5;
    margin-left: -20px;
    margin-right: -20px;
    margin-bottom: -20px;
    margin-top: 16px;
    padding-top: 10px;
  }

  .vehiclesList p{
    margin-bottom: 10px;
  }

  .vehicle{
    position: relative;
    padding: 8px;
    cursor: pointer;
  }

  .vehicle:hover{
    background: white;
  }

  .vehicle span{
    font-size: 12px;
  }

  .selected{
    border-radius: 8px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    vertical-align: middle;
    background: rgba(40, 115, 91, 0.80);
  }

  .selected p{
    margin-top: 40%;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
  }

  .start-button{
    top: 40px;
    padding: 12px 30px 12px 30px;
    text-decoration: none;
    background: #2196F3;
    color: white;
    border-radius: 30px;
  }

  .vehicle img{
    width: 12px;
    height: 12px;
  }

</style>
