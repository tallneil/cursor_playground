var gui;
var obj = {
  radius: 20,
  opacity: 0.6,
  magnet: 0.2,
};
var cursor;
var cursor_r = obj.radius;
var cursor_a = obj.opacity;

function makeControls() {
  gui = new dat.gui.GUI();
  gui.remember(obj);
  
  gui.add(obj, 'radius').min(1).max(80).step(1).onChange(newValue => {cursor_r = newValue});
  gui.add(obj, 'opacity').min(0).max(1).step(0.01).onChange(newValue => {cursor_a = newValue});
  gui.add(obj, 'magnet').min(0).max(1).step(0.01).onChange(newValue => {changeIntensity(0, newValue)});
}

function changeIntensity(m) {

}

function handleCursor() {
  var buttons = document.getElementsByClassName("magnet");
  for (let b of buttons) {
    b.onmousemove = function(e) {
      var xDiff = Math.floor( (e.offsetX - (this.offsetWidth / 2)) * obj.magnet); 
      var yDiff = Math.floor( (e.offsetY - (this.offsetHeight / 2)) * obj.magnet);
      b.style.transform = "translate(" + xDiff + "px, " + yDiff + "px)"; 
      cursor_r = obj.radius * 2;
      cursor_a = obj.opacity * 2;
    }
    b.onmouseout = function(e) {
      b.style.transform = ""; 
      cursor_r = obj.radius;
      cursor_a = obj.opacity;
    }
  }
}

// update cursor on mouse move
document.addEventListener("mousemove", function(e) {
  var cursor_x = e.pageX - cursor_r;
  var cursor_y = e.pageY - cursor_r;
  cursor.style.transform = "translate(" + cursor_x + "px, " + cursor_y + "px)";
  cursor.style.width = (cursor_r * 2) + "px";
  cursor.style.height = (cursor_r * 2)  + "px";
  cursor.style.opacity = cursor_a;
});

document.addEventListener("DOMContentLoaded", function(e) {
  makeControls();
  cursor = $(".cursor")[0];
  handleCursor();
});