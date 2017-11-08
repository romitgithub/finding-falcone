import Vue from 'vue'  
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state:{
		selectedPlanets: []
	},
	getters: {
    	selectedPlanets: state => state.selectedPlanets
	},
	mutations: {
		addPlanet(planet){
			this.state.selectedPlanets.push(planet);
		},
		removePlanet(planet){
			this.state.selectedPlanets.pop(planet);
		}
	}
})