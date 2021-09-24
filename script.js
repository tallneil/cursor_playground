var gui;
var obj = {
  radius:     20,
  magnet:     4,
};

function makeControls() {
  gui = new dat.gui.GUI();
  gui.remember(obj);
  
  gui.add(obj, 'radius').min(1).max(80).step(1).onChange(newValue => {changeRadius(newValue)});
  gui.add(obj, 'magnet').min(0).max(20).step(1).onChange(newValue => {changeIntensity(0, newValue)});
}

function changeRadius(r) {

}

document.addEventListener("DOMContentLoaded", function(e) {
  makeControls();
});