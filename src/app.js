const planetsData = require('./data/planets.js');
const SelectView = require('./views/select_view.js');
const SolarSystem = require('./models/solar_system.js');


document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);

  const selectElement = document.querySelector('nav.planets-menu');
  const planetSelected = new SelectView(selectElement);
  planetSelected.bindEvents();
  console.log(this);



});
