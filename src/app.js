const planetsData = require('./data/planets.js');
const SelectView = require('./views/select_view.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetInfoView = require('./views/planet_info_view');


document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);
  planetsDataModel.bindEvents();

  const selectElement = document.querySelector('nav.planets-menu');
  const planetSelected = new SelectView(selectElement);
  planetSelected.bindEvents();

  const infoDiv = document.querySelector('.planetDetails')
  const planetInfoDisplay = new PlanetInfoView(infoDiv);
  planetInfoDisplay.bindEvents();


});
