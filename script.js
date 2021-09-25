var gui;
var obj = {
  radius: 30,
  opacity: 0.6,
  magnet: 0.5,
};
var cursor;
var cursor_r = obj.radius;
var cursor_a = obj.opacity;

function makeControls() {
  gui = new dat.gui.GUI();
  gui.remember(obj);
  gui.add(obj, 'radius').min(10).max(120).step(1).onChange(newValue => {cursor_r = newValue});
  gui.add(obj, 'opacity').min(0).max(1).step(0.01).onChange(newValue => {cursor_a = newValue});
  gui.add(obj, 'magnet').min(0).max(1).step(0.01);
}

function handleCursor() {
  cursor = $(".cursor")[0];
  var buttons = document.getElementsByClassName("magnet");
  for (let b of buttons) {
    b.onmousemove = function(e) {
      var xDiff = Math.floor((e.offsetX - (this.offsetWidth / 2)) * obj.magnet * 0.6); 
      var yDiff = Math.floor((e.offsetY - (this.offsetHeight / 2)) * obj.magnet * 0.6);
      b.style.transform = "translate(" + xDiff + "px, " + yDiff + "px)"; 
      cursor_r = obj.radius * 2;
      cursor_a = 1;
    }
    b.onmouseout = function(e) {
      b.style.transform = ""; 
      cursor_r = obj.radius;
      cursor_a = obj.opacity;
    }
  }
}

document.addEventListener("mousemove", function(e) {
  var cursor_x = e.pageX - cursor_r;
  var cursor_y = e.pageY - cursor_r;
  cursor.style.transform = "translate(" + cursor_x + "px, " + cursor_y + "px)";
  cursor.style.width = (cursor_r * 2) + "px";
  cursor.style.height = (cursor_r * 2)  + "px";
  cursor.style.opacity = cursor_a;
});

function handleTooltips() {
  for (var link of document.getElementsByClassName("g-row-text")) {
    link.onmousemove = function(e) {
      var elCoords = this.getBoundingClientRect();
      var xOffset = e.clientX - elCoords.left - 120;
      var yOffset = e.clientY - elCoords.top - 60;
      this.querySelector(".tooltip").style.transform = "translate(" + xOffset + "px, " + yOffset + "px)";
    }
  }
}

document.addEventListener("DOMContentLoaded", function(e) {
  makeControls();
  handleCursor();
  handleTooltips();
});