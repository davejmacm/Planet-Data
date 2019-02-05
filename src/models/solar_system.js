const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function(){


  PubSub.subscribe('SelectView:click', (evt) => {
    console.log(evt.detail);
    const selectedPlanet = evt.detail;
    this.publishPlanetInfo(selectedPlanet);
  });

  SolarSystem.prototype.publishPlanetInfo = function(planet){
    const selectedPlanet = this.findPlanet(planet);

  console.log(selectedPlanet);
  PubSub.publish('SolarSystem:PlanetInfo', selectedPlanet)
    };


SolarSystem.prototype.findPlanet = function(planetName) {
  const foundPlanet = this.planets.find((currentPlanet) =>{
      return currentPlanet.name === planetName;
});
return foundPlanet;
    console.log(foundPlanet);
  };

  };





module.exports = SolarSystem;
