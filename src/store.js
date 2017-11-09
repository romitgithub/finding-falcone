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
		addPlanet(state, planet){
			state.selectedPlanets.push(planet);
		},
		removePlanet(state, planet){
			state.selectedPlanets.pop(planet);
		}
	}
})