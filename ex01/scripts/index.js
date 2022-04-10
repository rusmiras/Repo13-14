// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");
var img6 = document.getElementById("img6");
var img7 = document.getElementById("img7");
var img8 = document.getElementById("img8");
var img9 = document.getElementById("img9");
var img10 = document.getElementById("img10");

var iFrame = document.getElementById("modal-image");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
img1.onclick = function () {
  modal.style.display = "block";
  iFrame.src = "image01.html";
}
img2.onclick = function () {
  modal.style.display = "block";
  iFrame.src = "image02.html";
}
img3.onclick = function () {
  modal.style.display = "block";
  iFrame.src = "image03.html";
}

img4.onclick = function () {
  modal.style.display = "block";
  iFrame.src = "image04.html";
}
img5.onclick = function () {
  modal.style.display = "block";
  iFrame.src = "image05.html";
}
img6.onclick = function () {
  modal.style.display = "block";
  iFrame.src = "image06.html";
}
img7.onclick = function () {
  modal.style.display = "block";
  iFrame.src = "image07.html";
}
img8.onclick = function () {
  modal.style.display = "block";
  iFrame.src = "image08.html";
}
img9.onclick = function () {
  modal.style.display = "block";
  iFrame.src = "image09.html";
}
img10.onclick = function () {
  modal.style.display = "block";
  iFrame.src = "image10.html";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
