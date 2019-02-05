const SolarSystem = require('./models/solar_system.js');
const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element
};

 SelectView.prototype.bindEvents = function (){
//   PubSub.subscribe('SolarSystem:planetDataReady', (evt) => {
//     const allPlanets = evt.detail;
//     this.pop
//   } )

this.element.addEventListener('click', (evt) => {
  const selectPlanet = evt.target.value;
  PubSub.publish('SelectView:click', selectedPlanet);
  console.log(selectPlanet);
});





 }
