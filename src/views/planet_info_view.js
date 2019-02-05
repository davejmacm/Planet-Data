const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function (container){
  this.container = container;
};

PlanetInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('SolarSystem:PlanetInfo', (evt)=>{
    const planet = evt.detail;
    this.render(planet);
  });
};

PlanetInfoView.prototype.render = function(planet){
  const details = document.createElement('p');
  details.textContent = planet;
  this.container.innerHTML = '';
  this.container.appendChild(details);
};


module.exports = PlanetInfoView;
