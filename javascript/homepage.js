function ChangeColor() {
  var color = document.getElementById('myColor').value;
  document.getElementById('ColorCode').style.color = color; 
  document.getElementById('search-button').style.background = color;
  document.getElementById("ColorCode").innerHTML = color;
}
