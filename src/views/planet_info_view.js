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
  console.log(planet);
  const newPlanetInfo = document.createElement('div');
  newPlanetInfo.classList.add('planet');
  const details = document.createElement('h3');
  details.textContent = `Name: ${planet.name}`;
  const orbit = document.createElement('p');
  orbit.textContent = `Orbit: ${planet.orbit}`;
  const day = document.createElement('p');
  day.textContent = `Day: ${planet.day}`;
  const surface = document.createElement('p');
  surface.textContent = `Surface Area: ${planet.surfaceArea}`;
  const volume = document.createElement('p');
  volume.textContent = `Planet Volume: ${planet.volume}`;
  const gravity = document.createElement('p');
  gravity.textContent = `Gravity: ${planet.gravity}`;
  const moons = document.createElement('p');
  moons.textContent = `Moons: ${planet.moons}`;
  const image = document.createElement('img');
  image.classList.add('medium-image');
  image.src = planet.image;


  this.container.innerHTML = '';

  newPlanetInfo.appendChild(details);
  newPlanetInfo.appendChild(orbit);
  newPlanetInfo.appendChild(day);
  newPlanetInfo.appendChild(surface);
  newPlanetInfo.appendChild(volume);
  newPlanetInfo.appendChild(gravity);
  newPlanetInfo.appendChild(moons);
  newPlanetInfo.appendChild(image);


  this.container.appendChild(newPlanetInfo);
};


module.exports = PlanetInfoView;
