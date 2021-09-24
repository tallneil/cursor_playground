var gui;
var obj = {
  radius:             20,
  opacity_fill:       0,
  color_fill:         "#ffffff",
  opacity_stroke:     0,
  color_stroke:       "#ffffff",
  magnet_intensity:   0,
};

function makeControls() {
  gui = new dat.gui.GUI();
  gui.remember(obj);
  
  gui.add(obj, 'radius').min(1).max(80).step(1).onChange(newValue => {changeRadius(newValue)});

  gui.add(obj, 'opacity_fill').min(0).max(1).step(0.01).onChange(newValue => {changeOpacity(1, newValue)});
  gui.addColor(obj, 'color_fill').onChange(newValue => {changeColor(1, newValue)});

  gui.add(obj, 'opacity_stroke').min(0).max(1).step(0.01).onChange(newValue => {changeOpacity(0, newValue)});
  gui.addColor(obj, 'color_stroke').onChange(newValue => {changeColor(0, newValue)});

  gui.add(obj, 'magnet_intensity').min(0).max(1).step(0.01).onChange(newValue => {changeIntensity(0, newValue)});
}

function changeRadius(r) {

}

function changeColor(halo, r) {
  // 0: halo 
  // 1: spotlight
}

document.addEventListener("DOMContentLoaded", function(e) {
  makeControls();
});