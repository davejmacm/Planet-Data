const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

 SelectView.prototype.bindEvents = function (){
    this.element.addEventListener('click', (evt) => {
      const selectedPlanet = evt.target.id;
      PubSub.publish('SelectView:click', selectedPlanet);
      console.log(selectedPlanet);
    });
};
module.exports = SelectView;
